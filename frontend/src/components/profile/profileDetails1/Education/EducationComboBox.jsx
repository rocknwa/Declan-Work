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

// Mock data for degrees, areas of study, and institutions
const degrees = [
  { value: "bsc", label: "(B.Sc.) Bachelor of Science " },
  { value: "beng", label: "(B.Eng.) Bachelor of Engineering " },
  { value: "msc", label: "(M.Sc.) Master of Science " },
  { value: "phd", label: "(Ph.D.) Doctor of Philosophy " },
  { value: "mba", label: "(MBA) Master of Business Administration " },
];

const areasOfStudyByDegree = {
  bsc: [
    { value: "computer_science", label: "Computer Science" },
    { value: "engineering", label: "Engineering" },
  ],
  msc: [
    { value: "data_science", label: "Data Science" },
    { value: "biomedical", label: "Biomedical Engineering" },
  ],
  phd: [
    { value: "physics", label: "Physics" },
    { value: "mathematics", label: "Mathematics" },
  ],
  mba: [
    { value: "finance", label: "Finance" },
    { value: "marketing", label: "Marketing" },
  ],
};

const institutionsByAreaOfStudy = {
  computer_science: [
    { value: "mit", label: "Massachusetts Institute of Technology" },
    { value: "stanford", label: "Stanford University" },
  ],
  engineering: [
    { value: "caltech", label: "California Institute of Technology" },
    { value: "georgia_tech", label: "Georgia Tech" },
  ],
  data_science: [
    { value: "harvard", label: "Harvard University" },
    { value: "oxford", label: "University of Oxford" },
  ],
  biomedical: [
    { value: "duke", label: "Duke University" },
    { value: "johns_hopkins", label: "Johns Hopkins University" },
  ],
  physics: [
    { value: "princeton", label: "Princeton University" },
    { value: "cambridge", label: "University of Cambridge" },
  ],
  mathematics: [
    { value: "eth", label: "ETH Zurich" },
    { value: "uchicago", label: "University of Chicago" },
  ],
  finance: [
    { value: "wharton", label: "Wharton School" },
    { value: "london_business", label: "London Business School" },
  ],
  marketing: [
    { value: "insead", label: "INSEAD" },
    { value: "columbia_business", label: "Columbia Business School" },
  ],
};

export function EducationComboboxDemo({
  degree,
  areaOfStudy,
  institution,
  setDegree,
  setAreaOfStudy,
  setInstitution,
}) {
  const [openDegree, setOpenDegree] = React.useState(false);
  const [openAreaOfStudy, setOpenAreaOfStudy] = React.useState(false);
  const [openInstitution, setOpenInstitution] = React.useState(false);

  const areasOfStudy = degree ? areasOfStudyByDegree[degree] || [] : [];
  const institutions = areaOfStudy
    ? institutionsByAreaOfStudy[areaOfStudy] || []
    : [];

  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full">
      {/* Degree Selection */}
      <Popover open={openDegree} onOpenChange={setOpenDegree}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openDegree}
            className="w-full max-w-[350px] rounded-[10px] bg-[#fafafa] justify-between"
          >
            {degree
              ? degrees.find((d) => d.value === degree)?.label
              : "Select Degree"}
            <ChevronDown
              className={cn(
                "ml-2 h-4 w-4 shrink-0 transition-transform",
                openDegree ? "rotate-180" : "rotate-0"
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="lg:w-[350px] p-0">
          <Command>
            <CommandInput placeholder="Search degree..." className="h-9" />
            <CommandList>
              <CommandEmpty>No degree found.</CommandEmpty>
              <CommandGroup>
                {degrees.map((d) => (
                  <CommandItem
                    key={d.value}
                    value={d.value}
                    onSelect={(currentValue) => {
                      setDegree(currentValue === degree ? "" : currentValue);
                    }}
                  >
                    {d.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        degree === d.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Area of Study Selection */}
      {/* <Popover open={openAreaOfStudy} onOpenChange={setOpenAreaOfStudy}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openAreaOfStudy}
            className="w-full max-w-[400px] rounded-[10px] bg-[#fafafa] justify-between"
            disabled={!degree}
          >
            {areaOfStudy
              ? areasOfStudy.find((a) => a.value === areaOfStudy)?.label
              : "Select Area of Study"}
            <ChevronDown
              className={cn(
                "ml-2 h-4 w-4 shrink-0 transition-transform",
                openAreaOfStudy ? "rotate-180" : "rotate-0"
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="lg:w-[400px] p-0">
          <Command>
            <CommandInput placeholder="Search area of study..." className="h-9" />
            <CommandList>
              <CommandEmpty>No area of study found.</CommandEmpty>
              <CommandGroup>
                {areasOfStudy.map((a) => (
                  <CommandItem
                    key={a.value}
                    value={a.value}
                    onSelect={(currentValue) => {
                      setAreaOfStudy(currentValue === areaOfStudy ? "" : currentValue);
                      setInstitution(""); // Reset institution on area of study change
                      setOpenAreaOfStudy(false);
                    }}
                  >
                    {a.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        areaOfStudy === a.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover> */}

      {/* Institution Selection */}
      {/* <Popover open={openInstitution} onOpenChange={setOpenInstitution}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openInstitution}
            className="w-full max-w-[400px] rounded-[10px] bg-[#fafafa] justify-between"
            disabled={!areaOfStudy}
          >
            {institution
              ? institutions.find((i) => i.value === institution)?.label
              : "Select Institution"}
            <ChevronDown
              className={cn(
                "ml-2 h-4 w-4 shrink-0 transition-transform",
                openInstitution ? "rotate-180" : "rotate-0"
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="lg:w-[400px] p-0">
          <Command>
            <CommandInput placeholder="Search institution..." className="h-9" />
            <CommandList>
              <CommandEmpty>No institution found.</CommandEmpty>
              <CommandGroup>
                {institutions.map((i) => (
                  <CommandItem
                    key={i.value}
                    value={i.value}
                    onSelect={(currentValue) => {
                      setInstitution(currentValue === institution ? "" : currentValue);
                      setOpenInstitution(false);
                    }}
                  >
                    {i.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        institution === i.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover> */}
    </div>
  );
}
