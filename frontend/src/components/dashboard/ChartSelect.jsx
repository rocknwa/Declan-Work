import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const ChartSelect = () => {
  return (
    <Select>
    <SelectTrigger defaultValue="yearly" className="w-[180px]">
      <SelectValue placeholder="Yearly Report" ></SelectValue>
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="yearly">Yearly Report</SelectItem>
      <SelectItem value="monthly">Monthly Report</SelectItem>
      <SelectItem value="daily">Daily Report</SelectItem>
    </SelectContent>
  </Select>
  )
}

export default ChartSelect  
 
