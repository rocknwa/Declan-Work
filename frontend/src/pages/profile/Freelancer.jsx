import DashboardNav from '@/components/dashboard/DashboardNav'
import Bio from '@/components/profile/profileDetails1/Bio/Bio'
import Education from '@/components/profile/profileDetails1/Education/Education'
import Resume from '@/components/profile/profileDetails1/Resume'
import Skills from '@/components/profile/profileDetails1/Skills/Skills'
import Certifications from '@/components/profile/profileDetails2/Certifications/Certifications'
import Portfolio from '@/components/profile/profileDetails2/Portfolio'
import Projects from '@/components/profile/profileDetails2/projects/Projects'
import ProfileInfo from '@/components/profile/ProfileInfo'

const Freelancer = () => {
  return (
    <section className='flex flex-col gap-4'>
            <DashboardNav />
            <ProfileInfo />
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex gap-3'>
                <div className='w-[35%] flex flex-col gap-3 max-w-[]'>
                    <Bio />
                    <Skills />
                    <Resume />
                    <Education />
                </div>
                <div className='w-[65%] flex flex-col gap-3'>
                    <Portfolio />
                    <Projects />
                    <Certifications />
                </div>    
                </div>
            </div>
    </section>
  )
}

export default Freelancer