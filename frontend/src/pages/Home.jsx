import React from 'react'

const Home = () => {
  return (
    <section>
        <img src="/declan-logo.svg" alt="DeclanWork Logo" />
        <h1>It use to start with a dream, now you can start here</h1>
        <p>Gain early access to our platform, where you can connect with top employers, discover tailored job openings, and leverage tools to supercharge your job search. Your next career move starts here.</p>
        <form action="">
            <input type="email" name="waitlistemail" id="waitlistemail" placeholder='Enter your email here' />
            <div className=''>
                <input type="submit" value="Join Waitlist" />
                <img src="/navigation-03.svg" alt="" />
            </div>
        </form>
        <div className='bg-primary'>
            <img src="" alt="" />
            <p>2,000 people joined</p>
        </div>
    </section>
  )
}

export default Home