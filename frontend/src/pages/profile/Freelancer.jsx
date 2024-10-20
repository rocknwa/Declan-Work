import { getUser } from '@/api/userService'
import Bio from '@/components/profile/profileDetails1/Bio/Bio'
import Education from '@/components/profile/profileDetails1/Education/Education'
import Resume from '@/components/profile/profileDetails1/Resume'
import Skills from '@/components/profile/profileDetails1/Skills/Skills'
import Certifications from '@/components/profile/profileDetails2/Certifications/Certifications'
import Portfolio from '@/components/profile/profileDetails2/Portfolio'
import Projects from '@/components/profile/profileDetails2/projects/Projects'
import ProfileInfo from '@/components/profile/ProfileInfo'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Freelancer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
    useEffect(()=> {
        setIsLoading(true)
        const fetchUserData = async () => {
            try {
              await getUser(dispatch); // Pass dispatch to 
              setIsLoading(false);
            } catch (error) {
              setError(error.message)
              console.error("Error fetching user data:", error);
            }
          };
      
          fetchUserData();
    }, [dispatch])
  if(isLoading) {
    return (
    <div className='min-w-full min-h-full flex items-center justify-center'>
      { error ?
        <div className='mx-auto mt-[200px] text-xl font-semibold text-red-500'>{error}</div> :
        <div className='mx-auto mt-[200px] text-xl font-semibold'>Getting your data ...</div>
      }
    </div>
    )
  }

  return (
      <>
          <section className='flex lg:p-4 mt-4 flex-col gap-4'>
            <ProfileInfo />
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex gap-3 flex-col lg:flex-row'>
                <div className='lg:w-[35%] w-full flex flex-col gap-3'>
                    <Bio />
                    <Skills />
                    <Resume />
                    <Education />
                </div>
                <div className='lg:w-[65%] w-full flex flex-col gap-3'>
                    <Portfolio />
                    <Projects />
                    <Certifications />
                </div>    
                </div>
            </div>
            </section>
        </>
  )
}

export default Freelancer