import { useSelector } from 'react-redux'
import DashboardCard from './DashboardCard'

const Overview = () => {
    const user = useSelector((state) => state.user);
    const data = {
        completedServices: 0.00,
        queueServices: 0.00,
        totalServices: 0.00,
        totalReviews: 0.00,
    }
  return (
    <div>
        <div className='max-w-full mx-auto px-4 flex flex-col gap-4 sm:px-6 lg:px-8'>
            <div>
            <h1 className='text-xl lg:text-2xl capitalize font-bold'>Welcome back, <span className="capitalize">{user?.firstName}</span></h1>
                <p className='text-[#6A6A6A] leading-5'>From dashboard, overview your Declan Work account.</p>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-1 justify-between gap-2 lg:gap-4 w-full'>
                <DashboardCard value={data.completedServices} title="Completed Service" />
                <DashboardCard value={data.queueServices} title="In Queue Services" />
                <DashboardCard value={data.totalServices} title="Cancelled Services" />
                <DashboardCard value={data.totalReviews} title="Total Reviews" />
            </div>
        </div>
    </div>
  )
}

export default Overview