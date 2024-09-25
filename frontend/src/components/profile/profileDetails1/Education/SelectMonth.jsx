import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectMonth = ({ month, setMonth, startDate, isEndDate = false }) => {
  // All months in order
  const months = [
    { label: "January", value: "january" },
    { label: "February", value: "february" },
    { label: "March", value: "march" },
    { label: "April", value: "april" },
    { label: "May", value: "may" },
    { label: "June", value: "june" },
    { label: "July", value: "july" },
    { label: "August", value: "august" },
    { label: "September", value: "september" },
    { label: "October", value: "october" },
    { label: "November", value: "november" },
    { label: "December", value: "december" },
  ];

  // Filter months if it's an endDate selection and there's a startDate
  const filteredMonths = isEndDate && startDate
    ? months.filter((m) => {
        const startMonthIndex = months.findIndex(month => month.value === startDate.month);
        const currentMonthIndex = months.findIndex(month => month.value === m.value);
        return currentMonthIndex > startMonthIndex || startDate.year < month.year;
      })
    : months;

  return (
    <Select
      value={month} 
      onValueChange={(value) => setMonth(prev => ({
        ...prev,
        month: value
      }))} 
    >
      <SelectTrigger className="max-w-[200px] w-full bg-[#fafafa] rounded-[10px]">
        <SelectValue className="" placeholder="Month" />
      </SelectTrigger>
      <SelectContent className="max-h-[150px] bg-[#fafafa] rounded-[10px]">
        {filteredMonths.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectMonth;
