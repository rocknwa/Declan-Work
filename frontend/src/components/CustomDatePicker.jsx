import { useState, forwardRef } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useController } from 'react-hook-form';

function CustomDatePicker({label, className="", control, name}) {

  const { field } = useController({
    name,
    control,
    defaultValue: null,
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "bg-gray-100 border-none justify-between text-left font-normal",
            !field.value && "text-muted-foreground",
            className
          )}
        >{/*PPP is the format for the date which is month day year*/}
          {field.value ? format(field.value, "PPP") : <span className="text-black">{field.value ? format(field.value, "PPP") : label}</span>}
          <CalendarIcon className="ml-2 h-4 w-4 opacity-90" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={(date) => field.onChange(date)}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default CustomDatePicker