"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DashboardTable() {
  return (
    <div>
      <div className='max-w-full mx-auto px-4 flex flex-col gap-4 sm:px-6 lg:px-8'>
        <Card>
          <CardHeader className="px-7">
            <CardTitle className="flex items-center gap-3">
              Active Projects
              <div className="bg-[#FAFAFA] border text-[#989898] flex flex-col items-center justify-center px-2 py-0.5 text-sm rounded-md">
                <span>4</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add border radius to the div wrapping the table */}
            <div className="overflow-hidden rounded-xl border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client Name</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      <div className="flex items-center gap-1">
                        Project <img src="/icons/arrow-up-down.svg" alt="" />
                      </div>
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      <div className="flex items-center gap-1">
                        Price <img src="/icons/arrow-up-down.svg" alt="" />
                      </div>
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      <div className="flex items-center gap-1">
                        Delivered in <img src="/icons/arrow-up-down.svg" alt="" />
                      </div>
                    </TableHead>
                    <TableHead className="text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg">
                    <TableCell>
                      <div className="font-medium flex items-center gap-3">
                        <img src="/icons/profile-avatar.png" alt="" />
                        James Omisore
                      </div>
                    </TableCell>
                    <TableCell className="hidden font-medium sm:table-cell">
                      Mobile App Design
                    </TableCell>
                    <TableCell className="hidden font-medium sm:table-cell">
                      $100.00
                    </TableCell>
                    <TableCell className="hidden font-medium md:table-cell">
                      3 days
                    </TableCell>
                    <TableCell className="text-right text-[#6A6A6A]">
                      View Details
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg">
                    <TableCell>
                      <div className="font-medium flex items-center gap-3">
                        <img src="/icons/profile-avatar.png" alt="" />
                        James Omisore
                      </div>
                    </TableCell>
                    <TableCell className="hidden font-medium sm:table-cell">
                      Mobile App Design
                    </TableCell>
                    <TableCell className="hidden font-medium sm:table-cell">
                      $100.00
                    </TableCell>
                    <TableCell className="hidden font-medium md:table-cell">
                      3 days
                    </TableCell>
                    <TableCell className="text-right text-[#6A6A6A]">
                      View Details
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg">
                    <TableCell>
                      <div className="font-medium flex items-center gap-3">
                        <img src="/icons/profile-avatar.png" alt="" />
                        James Omisore
                      </div>
                    </TableCell>
                    <TableCell className="hidden font-medium sm:table-cell">
                      Mobile App Design
                    </TableCell>
                    <TableCell className="hidden font-medium sm:table-cell">
                      $100.00
                    </TableCell>
                    <TableCell className="hidden font-medium md:table-cell">
                      3 days
                    </TableCell>
                    <TableCell className="text-right text-[#6A6A6A]">
                      View Details
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg">
                    <TableCell>
                      <div className="font-medium flex items-center gap-3">
                        <img src="/icons/profile-avatar.png" alt="" />
                        James Omisore
                      </div>
                    </TableCell>
                    <TableCell className="hidden font-medium sm:table-cell">
                      Mobile App Design
                    </TableCell>
                    <TableCell className="hidden font-medium sm:table-cell">
                      $100.00
                    </TableCell>
                    <TableCell className="hidden font-medium md:table-cell">
                      3 days
                    </TableCell>
                    <TableCell className="text-right text-[#6A6A6A]">
                      View Details
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
