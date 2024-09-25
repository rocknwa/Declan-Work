// "use client";

// import * as React from "react";
// import { CheckIcon } from "@radix-ui/react-icons";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { ChevronDown } from "lucide-react";

// const countries = [
//   { value: "usa", label: "United States" },
//   { value: "canada", label: "Canada" },
//   { value: "nigeria", label: "Nigeria" },
//   { value: "india", label: "India" },
// ];

// const cityByCountry = {
//   usa: [
//     { value: "california", label: "California" },
//     { value: "texas", label: "Texas" },
//   ],
//   canada: [
//     { value: "ontario", label: "Ontario" },
//     { value: "quebec", label: "Quebec" },
//   ],
//   nigeria: [
//     { value: "lagos", label: "Lagos" },
//     { value: "abuja", label: "Abuja" },
//   ],
//   india: [
//     { value: "maharashtra", label: "Maharashtra" },
//     { value: "kerala", label: "Kerala" },
//   ],
// };

// export function EducationComboboxDemo({country, region, setCountry, setRegion}) {
//   const [openCountry, setOpenCountry] = React.useState(false);
//   const [openRegion, setOpenRegion] = React.useState(false);

//   const regions = country ? cityByCountry[country] || [] : [];

//   return (
//     <div className="flex flex-col items-center justify-center gap-4 w-full">
//       {/* Country Selection */}
//       <Popover open={openCountry} onOpenChange={setOpenCountry}>
//         <PopoverTrigger asChild>
//           <Button
//             variant="outline"
//             role="combobox"
//             aria-expanded={openCountry}
//             className="w-full max-w-[400px] rounded-[10px] bg-[#fafafa] justify-between"
//           >
//             {country
//               ? countries.find((c) => c.value === country)?.label
//               : "Select country..."}
//             <ChevronDown
//               className={cn(
//                 "ml-2 h-4 w-4 shrink-0 transition-transform",
//                 openCountry ? "rotate-180" : "rotate-0" 
//               )}
//             />
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="lg:w-[400px] p-0">
//           <Command>
//             <CommandInput placeholder="Search country..." className="h-9" />
//             <CommandList>
//               <CommandEmpty>No country found.</CommandEmpty>
//               <CommandGroup>
//                 {countries.map((c) => (
//                   <CommandItem
//                     key={c.value}
//                     value={c.value}
//                     onSelect={(currentValue) => {
//                       setCountry(currentValue === country ? "" : currentValue);
//                       setRegion(""); // Reset region on country change
//                       setOpenCountry(false);
//                     }}
//                   >
//                     {c.label}
//                     <CheckIcon
//                       className={cn(
//                         "ml-auto h-4 w-4",
//                         country === c.value ? "opacity-100" : "opacity-0"
//                       )}
//                     />
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             </CommandList>
//           </Command>
//         </PopoverContent>
//       </Popover>

//       {/* Region Selection */}
//       {(
//         <Popover open={openRegion} onOpenChange={setOpenRegion}>
//           <PopoverTrigger asChild>
//             <Button
//               variant="outline"
//               role="combobox"
//               aria-expanded={openRegion}
//               className="w-full max-w-[400px] rounded-[10px] bg-[#fafafa] justify-between"
//               disabled={!country}
//             >
//               {region
//                 ? regions.find((r) => r.value === region)?.label
//                 : "Select City"}
//               <ChevronDown
//                 className={cn(
//                   "ml-2 h-4 w-4 shrink-0 transition-transform",
//                   openRegion ? "rotate-180" : "rotate-0" 
//                 )}
//               />
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent className="lg:w-[400px] p-0">
//             <Command>
//               <CommandInput placeholder="Search city..." className="h-9" />
//               <CommandList>
//                 <CommandEmpty>No region found.</CommandEmpty>
//                 <CommandGroup>
//                   {regions.map((r) => (
//                     <CommandItem
//                       key={r.value}
//                       value={r.value}
//                       onSelect={(currentValue) => {
//                         setRegion(currentValue === region ? "" : currentValue);
//                         setOpenRegion(false);
//                       }}
//                     >
//                       {r.label}
//                       <CheckIcon
//                         className={cn(
//                           "ml-auto h-4 w-4",
//                           region === r.value ? "opacity-100" : "opacity-0"
//                         )}
//                       />
//                     </CommandItem>
//                   ))}
//                 </CommandGroup>
//               </CommandList>
//             </Command>
//           </PopoverContent>
//         </Popover>
//       )}
//     </div>
//   );
// }
