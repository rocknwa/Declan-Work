import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ChartSelect = ({ reportRange, setReportRange }) => {
  return (
    <Select
      value={reportRange} 
      onValueChange={(value) => setReportRange(value)} 
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Yearly Report" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="yearly">Yearly Report</SelectItem>
        <SelectItem value="monthly">Monthly Report</SelectItem>
        <SelectItem value="weekly">Weekly Report</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ChartSelect;
