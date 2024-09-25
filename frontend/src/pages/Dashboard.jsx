import DashboardNav from '@/components/dashboard/DashboardNav'
import Overview from '@/components/dashboard/Overview'
import { DashboardBarchart } from '@/components/dashboard/DashboardBarchart'
import DashboardTable from '@/components/dashboard/DashboardTable'

const Dashboard = () => {
  return (
        <section className='bg-white flex flex-col gap-6'>
            <DashboardNav />
            <Overview />
            <DashboardBarchart />
            <DashboardTable />
        </section>
    )
}

export default Dashboard