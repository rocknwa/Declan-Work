import React, { useEffect,useState } from 'react'
import BreadCrumb from '../components/jobListings/BreadCrumb'
import { useLocation } from 'react-router-dom'
import { cn } from "@/lib/utils";
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function Payments() {
  const [availableCon, setAvailableCon] = useState(100)
  const [newCon, setNewCon] = useState(100)
  const [expiry, setExpiry] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const {register, handleSubmit, control, formState: {errors} } = useForm();

  useEffect(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1)
    setExpiry(date.toDateString())
  }, [])

  const formSubmit = async (data) => {
    const formData = new FormData();
    formData.append('amount', data.amount);
    formData.append('expiry', data.expiry);
    setTimeout(() => {

    }, 2000)
  }

  const onAmountChange = (value) => {
    const amount = parseInt(value)
    setNewCon(amount + availableCon)
  }


  return (
    <div className='w-full min-h-[calc(100vh-4rem)] max-w-screen-2xl px-7 mx-auto flex flex-col justify-start items-around gap-4 md:text-lg lg:text-xl'>
        <BreadCrumb path={`/home${location.pathname}`} className='w-full mt-2 ml-2 place-self-start'/>
        <div className='w-full flex flex-col justify-between items-center gap-10 xl:flex-row'>
          <div className='w-full h-10/12 flex flex-col justify-between items-center '>
            <form className='w-full flex flex-col justify-between items-center gap-2' onSubmit={handleSubmit(formSubmit)}>
              <h1 className='text-3xl font-bold place-self-start mb-1'>Get FreelaTokens</h1>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="availableConnects" className='mt-2 lg:text-lg'>Your available connects</Label>
                <Input type="text" id='availableConnects' disabled className={cn("w-full text-[#202020] bg-transparent rounded-lg focus:outline-none mt-1")} placeholder={`${availableCon} FTs`} {...register('availableConnects')} />
                {errors.availableConnects && (<div className='text-red text-xs'>{errors.availableConnects.message}</div>)}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="amount" className='mt-2 lg:text-lg'>Select the amount to buy</Label>
                <Select
                onValueChange={onAmountChange}
                control={control}
                error={errors.amount}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="100 FTs for 0.02 Sol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="100">100 FTs</SelectItem>
                      <SelectItem value="200">200 FTs</SelectItem>
                      <SelectItem value="300">300 FTs</SelectItem>
                      <SelectItem value="400">400 FTs</SelectItem>
                      <SelectItem value="500">500 FTs</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.amount && (<div className='text-red text-xs'>{errors.amount.message}</div>)}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="newConnects" className='mt-2 lg:text-lg'>Your new connects balance will be</Label>
                <Input type="text" id='newConnects' disabled className={cn("w-full text-[#202020] bg-transparent rounded-lg focus:outline-none mt-1")} placeholder={`${newCon} FTs`} {...register('newConnects')} />
                {errors.newConnects && (<div className='text-red text-xs'>{errors.newConnects.message}</div>)}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="expiry" className='mt-2 lg:text-lg'>These connects will expire on</Label>
                <Input type="text" id='expiry' disabled className={cn("w-full text-[#202020] bg-transparent rounded-lg focus:outline-none mt-1")} placeholder={`${expiry}`} {...register('expiry')} />
                {errors.expiry && (<div className='text-red text-xs'>{errors.expiry.message}</div>)}
              </div>
              <div className='self-start'>
                <span>This bundle of FreelaTokens will expire 1 year from today. Unused Connects rollover to the next month.</span>
                <NavLink className="text-[#21B557] px-1" to="/"> Learn more</NavLink>
              </div>
              <div>
                <span>You&apos;re authorizing Declanwork to charge your Wallet. If you have sufficient funds, we will withdraw from your Wallet balance. If not, the full amount will be charged to your primary billing method.</span>
                <NavLink className="text-[#21B557] hover:bg-transparent hover:text-[#21B557] px-1 py-0" to="/"> Learn more</NavLink>
              </div>
            </form>
          </div>
          <div className='w-5/6 h-1/2 max-w-2xl p-7 flex flex-col justify-between items-center rounded-3xl bg-[#21B557] text-white'>
            <h2 className='text-xl lg:text-2xl font-bold place-self-start'>Upgrade to Premium</h2>
            <p className='mt-2'>Get 100 monthly freelatokens and an AI app enhanced with insights. Chosen by the best, 40% of subscribers are Top Rated or Top Rated Plus. Upgrade to Freelancer Plus.</p>
            <Button className='w-full h-10 mt-3 bg-white text-[#21B557] hover:bg-slate-200'>Apply</Button>
          </div>
        </div>
        <div className='w-full flex items-end justify-end gap-2 mb-2'>
          <Button className='h-10 mt-2 bg-slate-200 text-black hover:bg-slate-300' onClick={()=>navigate('/dashboard')}>Cancel Purchase</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className='h-10 mt-2 bg-[#21B557] text-white' type='submit'>Buy FreelaTokens</Button>
            </DialogTrigger>
            <DialogContent className='w-96'>
              <DialogHeader>
                <DialogTitle className='text-base sm:text-lg'>Connecting to Coinbase Wallet</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center space-y-2 sm:space-y-4 ">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img src="/public/icons/token-branded_coinbase.svg" alt="Coinbase icon" />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold">Coinbase Wallet</h2>
                <p className="text-sm text-center">Approve Connection</p>
                <p className="text-sm text-center">
                  Please approve connection in your wallet and authorize access to continue.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
    </div>
  )
}

export default Payments