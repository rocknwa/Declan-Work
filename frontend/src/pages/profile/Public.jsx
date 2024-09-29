import Bio from "@/components/profile/profileDetails1/Bio/Bio"
import Education from "@/components/profile/profileDetails1/Education/Education"
import Resume from "@/components/profile/profileDetails1/Resume"
import Skills from "@/components/profile/profileDetails1/Skills/Skills"
import Certifications from "@/components/profile/profileDetails2/Certifications/Certifications"
import Portfolio from "@/components/profile/profileDetails2/Portfolio"
import Projects from "@/components/profile/profileDetails2/projects/Projects"
import ProfileInfo from "@/components/profile/ProfileInfo"

const PublicProfile = () => {
  return (
        <>
          <section className='flex flex-col p-4 gap-4'>
            <ProfileInfo viewOnly = {true} />
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex gap-3 flex-col lg:flex-row'>
                <div className='lg:w-[35%] w-full flex flex-col gap-3'>
                    <Bio viewOnly = {true} />
                    <Skills viewOnly = {true} />
                    <Resume viewOnly = {true} />
                    <Education viewOnly = {true} />
                </div>
                <div className='lg:w-[65%] w-full flex flex-col gap-3'>
                    <Portfolio viewOnly = {true} />
                    <Projects viewOnly = {true} />
                    <Certifications viewOnly = {true}/>
                </div>    
                </div>
            </div>
          </section>
        </>
  )
}

export default PublicProfile