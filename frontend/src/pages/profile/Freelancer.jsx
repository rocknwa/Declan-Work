import DashboardNav from '@/components/dashboard/DashboardNav'
import ProfileDetails1 from '@/components/profile/ProfileDetails1'
import ProfileDetails2 from '@/components/profile/ProfileDetails2'
import ProfileInfo from '@/components/profile/ProfileInfo'
import React from 'react'

const Freelancer = () => {
  return (
    <section className='flex flex-col gap-4'>
            <DashboardNav />
            <ProfileInfo />
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex gap-3'>
                    <ProfileDetails1 />
                    <ProfileDetails2 />
                </div>
            </div>
    </section>
  )
}

export default Freelancer