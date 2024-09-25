import ButtonWithIcon from '../../ButtonWithIcon'
import CertificationsCard from './CertificationsCard'

const Certifications = () => {
  return (
    <>
        <div className=' border flex flex-col gap-8 p-4 rounded-[10px] '>
            <div className='flex items-center gap-3'>
                <h3 className='font-semibold text-lg'>Certifications</h3>
            </div>
            <div className='text-sm 2xl:text-base'>
                <CertificationsCard />
            </div>
            <div><ButtonWithIcon>Add Certifications</ButtonWithIcon> </div>
        </div>
        </>
    )
}

export default Certifications