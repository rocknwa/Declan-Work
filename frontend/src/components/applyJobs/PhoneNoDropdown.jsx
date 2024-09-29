import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {countryCodes} from "../../data/CountryCodes";

export default function CountryCodeSelect({ onChange, value, error, className }) {
  return (
    <div className={className}>
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="w-full border-gray-400">
          <SelectValue placeholder="Code" />
        </SelectTrigger>
        <SelectContent>
          {countryCodes.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              {country.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <p className="text-sm text-wrap text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}