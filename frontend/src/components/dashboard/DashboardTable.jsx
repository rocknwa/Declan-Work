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
    const fakeData = {
      transactions: [
        {
          id: 1,
          clientName: "James Omisore",
          project: "Mobile App Design",
          price: 100,
          deliveredIn: 3,
        },
        {
          id: 2,
          clientName: "James Omisore",
          project: "Mobile App Design",
          price: 1000,
          deliveredIn: 10,
        },
        {
          id: 3,
          clientName: "James Omisore",
          project: "Mobile App Design",
          price: 500,
          deliveredIn: 2,
        },
        {
          id: 4,
          clientName: "James Omisore",
          project: "Mobile App Design",
          price: 850,
          deliveredIn: 3,
        },
      ],
    };
  
    return (
      <div>
        <div className="max-w-full mx-auto px-4 flex flex-col gap-4 sm:px-6 lg:px-8">
          <Card className="rounded-[20px] ">
            <CardHeader className="px-7">
              <CardTitle className="flex flex-col sm:flex-row text-xl lg:text-2xl items-start sm:items-center gap-3">
                Active Projects
                <div className="bg-[#FAFAFA] border text-[#989898] flex items-center justify-center px-2 py-0.5 text-sm rounded-md">
                  <span>{fakeData.transactions?.length}</span>
                </div>
                <span className="ml-1 cursor-pointer text-[#21B557] text-base">
                  View All
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add border radius to the div wrapping the table */}
              <div className="overflow-x-auto rounded-md border">
                <Table className="text-center min-w-[600px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="whitespace-nowrap">Client Name</TableHead>
                      <TableHead className="hidden sm:table-cell whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1">
                          Project <img src="/icons/arrow-up-down.svg" alt="" />
                        </div>
                      </TableHead>
                      <TableHead className="hidden sm:table-cell whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1">
                          Price <img src="/icons/arrow-up-down.svg" alt="" />
                        </div>
                      </TableHead>
                      <TableHead className="hidden md:table-cell whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1">
                          Delivered in <img src="/icons/arrow-up-down.svg" alt="" />
                        </div>
                      </TableHead>
                      <TableHead className="text-right"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fakeData.transactions.map(
                      ({ clientName, project, price, deliveredIn, id }) => (
                        <DashboardTableRow
                          clientName={clientName}
                          project={project}
                          price={price}
                          deliveredIn={deliveredIn}
                          key={id}
                        />
                      )
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
}
