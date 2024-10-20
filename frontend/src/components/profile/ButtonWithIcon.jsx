import { Button } from '../ui/button'

const ButtonWithIcon = ({noicon, children}) => {
  return (
    <Button className='rounded-full flex gap-2 hover:bg-[#17813E] bg-[#21B557]'>
        {!noicon && <img src="/icons/add-square.svg" alt="" />}
        {children}
    </Button>
    )
}

export default ButtonWithIcon