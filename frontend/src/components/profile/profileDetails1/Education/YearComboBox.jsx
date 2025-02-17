import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

export function YearComboboxDemo({ year, setYear, startDate, isEndDate = false }) {
  const [openYear, setOpenYear] = React.useState(false);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1990 + 1 }, (_, index) => {
    const yearValue = currentYear - index;
    return { value: yearValue.toString(), label: yearValue.toString() };
  });

  const filteredYears = isEndDate && startDate
    ? years.filter((y) => y.value >= startDate.year)
    : years;

  return (
    <div className="flex flex-col items-start font-normal justify-start ">
      <Popover open={openYear} onOpenChange={setOpenYear}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openYear}
            className="w-full max-w-[76px] font-normal rounded-[10px] bg-[#fafafa] justify-between"
          >
            {year
              ? filteredYears.find((d) => d.value === year)?.label
              : "Year"}
            <ChevronDown
              className={cn(
                "ml-[1.5%] h-4 w-4 shrink-0 color-[#e5e7eb] transition-transform",
                openYear ? "rotate-180" : "rotate-0"
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="lg:w-[100px] h-[180px] bg-[#fafafa]  p-0">
          <Command className="bg-transparent">
            <CommandInput placeholder="Search" className="h-9 bg-transparent" />
            <CommandList>
              <CommandEmpty>Pick within range</CommandEmpty>
              <CommandGroup className="bg-transparent">
                {filteredYears.map((d) => (
                  <CommandItem
                    key={d.value}
                    value={d.value}
                    onSelect={(currentValue) => {
                      setYear((prev) => ({
                        ...prev,
                        year: currentValue === year ? "" : currentValue,
                      }));
                    }}
                  >
                    {d.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        year === d.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
