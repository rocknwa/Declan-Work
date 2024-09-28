import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SkillsComboboxDemo({ skills, setSkills, addSkill }) {
  const [skillInput, setSkillInput] = useState(""); 
  const [isTyping, setIsTyping] = useState(false);

  
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSkillInput(inputValue);
    setIsTyping(true); // User is typing
  };

  // Stop typing after a delay of 1 second
  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (isTyping) {
        setIsTyping(false); // Reset typing status after 1 second of no typing
      }
    }, 3000);

    return () => clearTimeout(typingTimeout); // Cleanup timeout
  }, [isTyping]);

  const listOfSkills = [
    "3d",
    "Graphic Design",
    "Illustration",
    "Data Analysis",
    "Photo Manipulation",
    "Video Editing",
    "Web Design",
    "Frontend Development",
  ];

  const filteredSkills = listOfSkills.filter((skill) =>
    skill.toLowerCase().includes(skillInput.toLowerCase())
  );

  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full">
      {/* Degree Selection */}
      <div className="w-full">
        <Command className="bg-[#FAFAFA] relative overflow-visible rounded-[8px]">
          <div className="relative">
            <Input
              className="bg-[#FAFAFA] focus-visible:outline-none focus-visible:ring-[#fafafa] focus-visible:ring-offset-[#dfdddd] focus-visible:ring-2  focus-visible:ring-offset-2 pl-10 border-[#BABABA] border w-lg max-w-lg rounded-[8px] relative"
              maxLength={50}
              value={skillInput}
              onChange={handleInputChange}
              placeholder="Search skills"
            />
            <Search
              width={20}
              height={20}
              color="#6A6A6A"
              className="absolute top-[25%] left-[2%]"
            />
          </div>
          <CommandList>
            {filteredSkills.length === 0 && isTyping && (
              <CommandEmpty className="max-h-[100px] p-5 h-[100px] box-shadow-soft mt-2 text-sm bg-[#fafafa] border rounded-[8px] absolute top-[100%] w-full max-w-lg">No skill found.</CommandEmpty>
            )}
            {filteredSkills.length > 0 && isTyping && (
              <CommandGroup className="max-h-[100px] box-shadow-soft mt-2 bg-[#fafafa] border rounded-[8px] absolute top-[100%] w-full max-w-lg">
                {filteredSkills.map((skill) => (
                  <CommandItem
                    key={skill}
                    value={skill}
                    onSelect={() => {
                      addSkill(skill);
                      setSkillInput(""); 
                      setIsTyping(false)
                    }}
                    className="text-black"
                  >
                    {skill}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        skills.includes(skill) ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
