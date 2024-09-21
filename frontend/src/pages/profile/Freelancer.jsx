import DashboardNav from '@/components/dashboard/DashboardNav'
import ProfileInfo from '@/components/profile/ProfileInfo'
import React from 'react'

const Freelancer = () => {
  return (
    <section className='flex flex-col gap-4'>
        <DashboardNav />
        <ProfileInfo />
    </section>
  )
}

export default Freelancer