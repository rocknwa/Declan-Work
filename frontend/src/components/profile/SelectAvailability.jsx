import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const SelectAvailability = ({ available, onSelectChange, isOpen, setIsOpen }) => {
  return (
    <Select
      value={available ? "available" : "unavailable"}
      onValueChange={(value) => {
        onSelectChange(value === "available"); 
        setIsOpen(false);
      }}
      open={isOpen} 
      onOpenChange={setIsOpen}
    >
      <SelectTrigger className="border-0 opacity-0 absolute" />
      
      <SelectContent className="">
        
        <SelectItem 
          className={`${
            available ? "text-[#126430]" : ""
          }  focus:cursor-pointer focus:bg-transparent`}
          value="available"
        >
          Available
        </SelectItem>

        <SelectItem 
          className={`${
            !available ? "text-[#126430]" : ""
          } focus:cursor-pointer focus:bg-transparent`}
          value="unavailable"
        >
          Unavailable
        </SelectItem>

      </SelectContent>
    </Select>
  );
};

export default SelectAvailability;
