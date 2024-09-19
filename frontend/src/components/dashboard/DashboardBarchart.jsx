import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartSelect from "./ChartSelect";

export const description = "A bar chart";

const chartData = [
  { month: "Jan", total: 3000 },
  { month: "Feb", total: 3900 },
  { month: "Mar", total: 4500 },
  { month: "Apr", total: 4100 },
  { month: "May", total: 2450 },
  { month: "Jun", total: 3000 },
  { month: "Jul", total: 3100 },
  { month: "Aug", total: 4750 },
  { month: "Sep", total: 3500 },
  { month: "Oct", total: 2010 },
  { month: "Nov", total: 4200 },
  { month: "Dec", total: 3801 },
];

const chartConfig = {
  desktop: {
    label: "Total",
    color: "hsl(var(--chart-1))",
  },
};

export function DashboardBarchart() {
  return (
    <div className="">
      <div className='max-w-full mx-auto px-4 flex flex-col gap-4 sm:px-6 lg:px-8'>
        <Card className="shadow-none rounded-[20px]">
          <CardHeader>
            <div className="w-full flex justify-between items-start">
              <div className="flex flex-col gap-7 ">
                <CardTitle>Earnings Report</CardTitle>
                <CardDescription className="flex gap-3 flex-col">
                  <p className="text-[#989898]">Income in 2024</p>
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold tracking-tighter text-black text-[32px]">$13,000.04k</p>
                    <div className="flex gap-1.5 text-[#21B557] items-center text-sm">
                      <div className="flex items-center justify-between bg-[#E9F8EE] p-1 rounded-full"><img src="/icons/box-sm.svg" alt="" /></div>
                      <span>5.6%</span>
                    </div>
                  </div>
                </CardDescription>
              </div>
              <div>
                <ChartSelect />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <ChartContainer className="max-h-[400px] ml-[-20px] w-full" config={chartConfig}>
              <BarChart
                data={chartData}
                height={300} // Reduce height of the chart
                barCategoryGap={25} // Add space between bars
                barGap={8} // Add gap between individual bars
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickCount={6} // Adjust number of ticks for better scaling
                  domain={[0, 5000]} // Set max value for the y-axis
                  interval="preserveEnd"
                  ticks={[0, 1000, 2000, 3000, 4000, 5000]} // Set ticks at 1000 scale
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="total" fill="#21B557" radius={6} />
              </BarChart>
            </ChartContainer>
          </CardContent>
          {/* <CardFooter className="flex-col items-start gap-2 text-sm">
          </CardFooter> */}
        </Card>
      </div>
    </div>
  );
}
