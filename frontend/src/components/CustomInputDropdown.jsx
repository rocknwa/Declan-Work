import { useState, useEffect, useRef, forwardRef } from 'react'
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useController } from 'react-hook-form';

const CustomInputDropdown = forwardRef(function CustomInputDropdown({ 
    name,
    control,
    defaultText = "Search", 
    Icon, 
    onSelect,
    initialOptions = [],
    className="",
    ...props
    }, ref)  {

    const [options, setOptions] = useState(initialOptions)
    const [filteredOptions, setFilteredOptions] = useState([])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const inputRef = useRef(null)

    const { field } = useController({
        name,
        control,
        defaultValue: '',
    });

    const handleInputChange = (e) => {
        field.onChange(e.target.value)
        setIsDropdownOpen(true)
    }

    useEffect(() => {
        const filtered = options.filter(option => 
            option.toLowerCase().includes(field.value.toLowerCase())
        )
        setFilteredOptions(filtered)
    }, [field.value, options])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
        if (!isDropdownOpen) {
            inputRef.current.focus()
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleDropdown()
        }
    }

    const handleSelect = (option) => {
        field.onChange(option)
        setIsDropdownOpen(false)
        if (onSelect) {
            onSelect(option)
        }
    }

    return (
        <div className={`relative w-full my-1 mx-0.5 md:mx-1 md:my-1 border-2 border-gray-300 rounded-md ${className}`} ref={dropdownRef}>
            {Icon && <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" aria-hidden="true" />}
            <Input
                {...field}
                ref={inputRef}
                type="text"
                placeholder={defaultText}
                className={`px-10 h-12 text-base ${className}`}
                onChange={handleInputChange}
                onFocus={() => setIsDropdownOpen(true)}
            />
            <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none"
                onClick={toggleDropdown}
                onKeyDown={handleKeyDown}
            >
                {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isDropdownOpen && (
                <ul 
                    id="option-listbox"
                    role="listbox"
                    className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
                >
                    {filteredOptions.map((option, index) => (
                        <li 
                            key={index} 
                            role="option"
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(option)}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleSelect(option)
                                }
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
})

export default CustomInputDropdown