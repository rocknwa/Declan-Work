import DashboardNav from '@/components/DashboardNav'
import Overview from '@/components/Overview'
import React from 'react'

const Dashboard = () => {
  return (
        <section className='bg-white'>
            <DashboardNav />
            <Overview />
        </section>
    )
}

export default Dashboard