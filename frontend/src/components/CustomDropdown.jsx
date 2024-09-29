import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { forwardRef } from "react"
import { useController } from 'react-hook-form';

const CustomDropdown = forwardRef(function CustomDropdown({ label, options, onChange, className, name, control, ...props }, ref) {

  const { field } = useController({
    name,
    control,
    defaultValue: '',
  });

  return (
      <Select onValueChange={field.onChange} value={field.value} ref={ref} {...props}>
        <SelectTrigger className={cn("w-full bg-gray-100 border-none", className)}>
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
  )
})

export default CustomDropdown