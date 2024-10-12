import React from 'react'
import LandingPg1 from './LandingPg1'
import LandingPg2 from './LandingPg2'
import LandingPg3 from './LandingPg3'

function HomePg() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <LandingPg1 />
        <LandingPg2 />
        <LandingPg3 />
    </div>
  )
}

export default HomePg