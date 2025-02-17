
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
import { Country, State } from "country-state-city";
import { useEffect } from "react";
import { useState } from "react";


export function LocationComboboxDemo({ country, city, setCountry, setCity }) {
  const countryData = Country.getAllCountries();
  const [openCountry, setOpenCountry] = useState(false);
  const [openRegion, setOpenRegion] = useState(false);
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      {/* Country Selection */}
      <Popover open={openCountry} onOpenChange={setOpenCountry}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openCountry}
            className="w-full max-w-[400px] rounded-[10px] bg-[#fafafa] justify-between"
          >
            {country ? country.name : "Select country..."}
            <ChevronDown
              className={cn(
                "ml-2 h-4 w-4 shrink-0 transition-transform",
                openCountry ? "rotate-180" : "rotate-0"
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="lg:w-[400px] p-0">
          <Command>
            <CommandInput placeholder="Search country..." className="h-9" />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryData.map((c) => (
                  <CommandItem
                    key={c.isoCode}
                    value={c.name}
                    onSelect={(currentValue) => {
                      const selectedCountry = countryData.find((c) => c.name === currentValue);
                      setCountry(selectedCountry);
                      setCity(""); // Reset city on country change
                      setOpenCountry(false);
                    }}
                  >
                    {c.name}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        country?.name === c.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* city Selection */}
      { (
        <Popover open={openRegion} onOpenChange={setOpenRegion}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openRegion}
              className="w-full max-w-[400px] rounded-[10px] bg-[#fafafa] justify-between"
              disabled={!country}
            >
              {city ? city.name : "Select City"}
              <ChevronDown
                className={cn(
                  "ml-2 h-4 w-4 shrink-0 transition-transform",
                  openRegion ? "rotate-180" : "rotate-0"
                )}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="lg:w-[400px] p-0">
            <Command>
              <CommandInput placeholder="Search city..." className="h-9" />
              <CommandList>
                <CommandEmpty>No city found.</CommandEmpty>
                <CommandGroup>
                  {stateData.map((r) => (
                    <CommandItem
                      key={r.isoCode}
                      value={r.name}
                      onSelect={(currentValue) => {
                        const selectedRegion = stateData.find((r) => r.name === currentValue);
                        setCity(selectedRegion);
                        setOpenRegion(false);
                      }}
                    >
                      {r.name}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          city?.name === r.name ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}
