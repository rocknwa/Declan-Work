import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function DashboardCard(props) {
  return (
    <Card className="rounded-2xl p-4 lg:p-6 shadow-none flex justify-between w-full">
      <div className="">
          <CardHeader className="flex flex-row p-0  items-center justify-between space-y-0">
            <CardTitle className="text-[12px] xl:text-base text-[#989898] font-medium">{props.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex p-0 flex-col lg:mt-2 lg:gap-1.5 xl:gap-2.5">
            <div className=" font-bold text-2xl lg:text-2xl xl:text-3xl">24.5K</div>
            <p className="text-xs lg:text-sm text-accent-success font-medium">View Details</p>

          </CardContent>
      </div>
        <div className="flex items-start justify-between">
            <div className="rounded-full flex items-center justify-center bg-[#E9F8EE] p-2"><img src="/icons/box.svg" className="h-4 w-4" /></div>
        </div>
    </Card>
  )
}
