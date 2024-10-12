import {
    TableCell,
    TableRow,
  } from "@/components/ui/table";

const DashboardTableRow = ({clientName, project, price, deliveredIn }) => {
  return (
        <TableRow className="bg w-full flex items-center justify-between lg:px-6">
                    <TableCell>
                      <div className="font-medium ml-6 flex items-center gap-3">
                        <img src="/icons/profile-avatar.png" alt="" />
                        {clientName}
                      </div>
                    </TableCell>
                    <TableCell className="hidden lg:ml-[-35px] font-medium sm:table-cell">
                      {project}
                    </TableCell>
                    <TableCell className="hidden lg:ml-[-0px] font-medium sm:table-cell">
                      ${price}.00
                    </TableCell>
                    <TableCell className="hidden font-medium md:table-cell">
                      {deliveredIn} days
                    </TableCell>
                    <TableCell className="text-right pr-6 text-[#6A6A6A]">
                      View Details
                    </TableCell>
        </TableRow>
  )
}

export default DashboardTableRow