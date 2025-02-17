import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardTableRow from "./DashboardTableRow";

export default function DashboardTable() {
    const data = {
      transactions: [
        // {
        //   id: 1,
        //   clientName: "James Omisore",
        //   project: "Mobile App Design",
        //   price: 100,
        //   deliveredIn: 3,
        // },
        // {
        //   id: 2,
        //   clientName: "James Omisore",
        //   project: "Mobile App Design",
        //   price: 1000,
        //   deliveredIn: 10,
        // },
        // {
        //   id: 3,
        //   clientName: "James Omisore",
        //   project: "Mobile App Design",
        //   price: 500,
        //   deliveredIn: 2,
        // },
        // {
        //   id: 4,
        //   clientName: "James Omisore",
        //   project: "Mobile App Design",
        //   price: 850,
        //   deliveredIn: 3,
        // },
      ],
    };
  
    return (
      <div>
        <div className="max-w-full mx-auto px-4 flex flex-col gap-4 sm:px-6 lg:px-8">
          <Card className="rounded-[20px] ">
            <CardHeader className="px-7">
              <CardTitle className="flex flex-col lg:flex-row lg:text-2xl items-start lg:items-center gap-3">
                <div className="flex flex-row gap-2 justify-center item-center">
                  Active Projects
                  <div className="bg-[#FAFAFA] lg:mt-1 border text-[#989898] flex items-center w-fit  h-fit justify-center px-2 py-0.5 text-sm rounded-md">
                    <span>{data.transactions?.length}</span>
                  </div>
                </div>
                <span className="lg:ml-2 mt-1 cursor-pointer text-[#21B557] text-sm lg:text-base">
                  View All
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add border radius to the div wrapping the table */}
              <div className="overflow-x-auto rounded-md border">
                <Table className="text-center min-w-[600px] w-full flex flex-col">
                  <TableHeader className="flex w-full min-w-[600px] items-center justify-between">
                    <TableRow className="flex w-full px-3 lg:px-20 justify-between items-center">
                      <TableHead className="flex items-center whitespace-nowrap">Client Name</TableHead>
                      <TableHead className="flex items-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1">
                          Project <img src="/icons/arrow-up-down.svg" alt="" />
                        </div>
                      </TableHead>
                      <TableHead className="lg:mr-[-50px] flex items-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1">
                          Price <img src="/icons/arrow-up-down.svg" alt="" />
                        </div>
                      </TableHead>
                      <TableHead className="flex items-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1">
                          Delivered in <img src="/icons/arrow-up-down.svg" alt="" />
                        </div>
                      </TableHead>
                      <TableHead className="flex items-center whitespace-nowrap"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="w-full flex flex-col  min-w-[600px]">
                    {data.transactions.length > 0 ? data.transactions.map(
                      ({ clientName, project, price, deliveredIn, id }) => (
                        <DashboardTableRow
                          className="w-full min-w-[600px]"
                          clientName={clientName}
                          project={project}
                          price={price}
                          deliveredIn={deliveredIn}
                          key={id}
                        />
                      )
                    ) :
                      <div className="h-56 flex items-center justify-center min-w-full">
                        <div className=""><img src="/icons/empty-transanctions.svg" alt="" /></div>
                      </div>
                    }
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
}
