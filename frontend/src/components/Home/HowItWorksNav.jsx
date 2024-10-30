import { Button } from '../ui/button'

function HowItWorksNav({selectedItemTitle, setSelectedItemTitle}) {
    
    const handleClickedItem = (item) => {
      setSelectedItemTitle(item)
    }

  return (
    <nav className='w-full flex justify-around items-center rounded-full bg-white py-2 px-1 shrink'>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 md:px-4 ${selectedItemTitle === 'signup' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('signup')}>
          <p className={`py-2 min-h-[1900px]:px-2 text-[#093218] text-xs md:text-[1.1em] rounded-full`}>Sign Up and Create Profile</p>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 md:px-4 ${selectedItemTitle === 'job' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('job')}>
          <p className={`py-2 min-h-[1900px]:px-2 text-[#093218] text-xs md:text-[1.1em] rounded-full`}>Job Matching</p>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 md:px-4 ${selectedItemTitle === 'secure' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('secure')}>
          <p className={`py-2 min-h-[1900px]:px-2 text-[#093218] text-xs md:text-[1.1em] rounded-full`}>Secure Transactions</p>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 py-1 md:px-4 ${selectedItemTitle === 'project' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('project')}>
          <p className={`py-2 min-h-[1900px]:px-2 text-[#093218] text-xs md:text-[1.1em] rounded-full`}>Manage Projects</p>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 md:px-4 ${selectedItemTitle === 'feedback' ? 'bg-[#BAE8CB]' : ''}`}  onClick={()=>handleClickedItem('feedback')}>
          <p className={`py-2 min-h-[1900px]:px-2 text-[#093218] text-xs md:text-[1.1em] rounded-full`}>Feedbacks and Rating</p>
        </Button>
    </nav>
  )
}

export default HowItWorksNav