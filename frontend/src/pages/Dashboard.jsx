import DashboardNav from '@/components/DashboardNav'
import Overview from '@/components/Overview'
import { DashboardBarchart } from '@/components/DashboardBarchart'
import React from 'react'

const Dashboard = () => {
  return (
        <section className='bg-white flex flex-col gap-6'>
            <DashboardNav />
            <Overview />
            <DashboardBarchart />
        </section>
    )
}

export default Dashboard