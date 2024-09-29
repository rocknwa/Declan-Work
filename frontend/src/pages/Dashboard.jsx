import Overview from '@/components/dashboard/Overview'
import { DashboardBarchart } from '@/components/dashboard/DashboardBarchart'
import DashboardTable from '@/components/dashboard/DashboardTable'

const Dashboard = () => {
  return (
        <>
            <section className='bg-white py-6 flex flex-col gap-6'>
                <Overview />
                <DashboardBarchart />
                <DashboardTable />
            </section>
        </>
    )
}

export default Dashboard