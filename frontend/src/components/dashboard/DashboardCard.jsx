import { DollarSign } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function DashboardCard(props) {
  return (
    <Card className="rounded-2xl shadow-none flex justify-between w-full">
      <div className="">
          <CardHeader className="flex flex-row p-2 xl:p-6 items-center justify-between space-y-0 pb-1 xl:pb-2">
            <CardTitle className="text-[12px] pl-4 xl:pl-0 xl:text-sm text-[#989898] font-medium">{props.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-1.5 xl:gap-2.5">
            <div className=" font-bold text-2xl xl:text-3xl">24.5K</div>
            <p className="text-xs text-accent-success font-medium">View Details</p>

          </CardContent>
      </div>
        <div className="flex items-start justify-between p-4 xl:p-6">
            <div className="rounded-full flex items-center justify-center bg-[#E9F8EE] p-2"><img src="/icons/box.svg" className="h-4 w-4" /></div>
        </div>
    </Card>
  )
}
