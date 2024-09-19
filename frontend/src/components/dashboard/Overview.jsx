import React from 'react'
import DashboardCard from './DashboardCard'

const Overview = () => {
    const user= {
        name: "Owai"
    }
  return (
    <div>
        <div className='max-w-full mx-auto px-4 flex flex-col gap-4 sm:px-6 lg:px-8'>
            <div>
                <h1 className='text-2xl font-bold'>Welcome back, {user?.name}</h1>
                <p className='text-[#6A6A6A]'>From dashboard, overview your Declan Work account.</p>
            </div>
            <div className='flex justify-between gap-4 w-full'>
                <DashboardCard title="Completed Service" />
                <DashboardCard title="In Queue Services" />
                <DashboardCard title="Cancelled Services" />
                <DashboardCard title="Total Reviews" />
            </div>
        </div>
    </div>
  )
}

export default Overview