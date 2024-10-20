import LandingPg1 from './LandingPg1'
import LandingPg2 from './LandingPg2'
import LandingPg3 from './LandingPg3'
import LandingPg4 from './LandingPg4'
import LandingPg5 from './LandingPg5'
import LandingPg6FAQ from './LandingPg6FAQ'
import Footer from './Footer'

function HomePg() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <LandingPg1 />
        <LandingPg2 />
        <LandingPg3 />
        <LandingPg4 />
        <LandingPg5 />
        <LandingPg6FAQ />
        <Footer />
    </div>
  )
}

export default HomePg