import React from 'react'

const Home = () => {
  return (
      <section className='text-center flex items-center flex-col'>
        <div className="w-screen bg-[url('/bg-hero.svg')] bg-cover bg-center h-[calc(20vh)] hidden md:block"></div>
        <div className="w-screen bg-[url('/bg-hero-mobile.svg')] bg-cover bg-center h-[calc(20vh)] block md:hidden"></div>
        <div className='mt-10 flex flex-col items-center'>
            <img src="/declan-logo.svg" className='w-[150px]  lg:w-[162px] lg:h-[52px]' width={162} height={52} alt="DeclanWork Logo" />
            <div className='flex flex-col items-center w-50ch md:60ch lg:w-[88ch] gap-4 px-5'>
                <h1 className='text-[#000] text-[40px] tracking-tighter leading-[1.1] lg:tracking-[-2px] lg:text-[64px] lg:leading-[70px] font-semibold'>It used to start with a dream, now you can start here.</h1>
                <p className='text-neutral-600 lg:mb-2 text-[16px] w-20ch lg:text-lg lg:w-[60ch]'>Gain early access to our platform, where you can connect with top employers, discover tailored job openings, and leverage tools to supercharge your job search. Your next career move starts here.</p>
                <form action="" onSubmit={(e) => e.preventDefault()} className='flex w-full lg:w-[70%] md:max-w-[500px] bg-white text-sm lg:text-sm border-[#D0D5DD] border px-1 lg:px-2 py-1 lg:py-2 rounded-full'>
                    <input type="email" className='px-2 lg:py-1 w-full text-[#98A2B3] rounded-full focus:outline-none' name="waitlistemail" id="waitlistemail" placeholder='Enter your email here' />
                    <div className='relative bg-primary-400 transition-all hover:outline hover:bg-black hover:text-white cursor-pointer pl-3 lg:pl-4 pr-8 py-2 lg:pr-10 lg:py-2  flex justify-center rounded-full'>
                        <input type="submit" autoComplete='off'  className='font-medium focus:outline-none cursor-pointer' value="Join Waitlist" />
                        <img src="/navigation-03.svg" className='absolute w-[13px] h-[auto] lg:w-[21px] lg:h-[20px] right-[10%] lg:right-[10%] top-[35%] lg:top-[23%]' alt="" />
                    </div>
                </form>
                <div className='flex items-center justify-center gap-2 lg:gap-4 text-xs lg:text-base  text-neutral-300 uppercase'>
                    <img src="/people.svg" className='w-[50px] lg:w-[76px] lg:h-[24px]' alt="" />
                    <p>2,000 people joined</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home