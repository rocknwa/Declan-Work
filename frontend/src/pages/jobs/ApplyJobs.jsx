import React,{useState, useEffect} from 'react'
import BreadCrumb from '../../components/jobListings/BreadCrumb'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { ApplyJobData } from '../../data/ApplyJobData'
import ResumeUpload from '../../components/applyJobs/ResumeUpload'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import PhoneNoDropdown from '@/components/applyJobs/PhoneNoDropdown'

function ApplyJobs() {
  const { companyName } = useParams();
  const [job, setJob] = useState(ApplyJobData);
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const formSubmit = (data) => {
        // console.log(data);
        const formData = new FormData();
        formData.append('firstName', data.firstName);
        formData.append('secondName', data.secondName);
        formData.append('email', data.email);
        formData.append('countryCode', data.countryCode);
        formData.append('phoneNumber', data.phoneNumber);
        formData.append('resume', data.resume[0]);
        formData.append('portfolio', data.portfolio);
        formData.append('linkedIn', data.linkedIn);
        formData.append('gender', data.gender);
        formData.append('challenge', data.challenge);
        formData.append('question', data.question);
        navigate(`/jobs/${job.companyName}/${job.jobId}/congrats`);
    }

    const validateFile = (file) => {
        if (!file) {
            return "File is required";
        }
        const allowedTypes = [
            'image/svg+xml', 'image/png', 'image/jpeg',
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          ];
        if (!allowedTypes.includes(file.type)) {
            return "File type not supported. Please upload SVG, PNG, JPG, PDF, DOC, or DOCX.";
        }
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSize) {
            return "File size exceeds 5MB limit.";
        }
        return true;
    };

//   useEffect(() => {
//     const fetchJob = async () => {
//       const response = await fetch(`http://localhost:3000/jobs/${companyName}`);
//       const data = await response.json();
//       setJob(data);
//     };
//   }, [companyName]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen overflow-x-hidden'>
        <div className='w-full ml-6 mb-2 mt-4 align-self-start'>
            <BreadCrumb path={`/jobs/${job.companyName}/${job.jobId}/Application Form`}  />
        </div>
        <div className='flex w-full items-center justify-center bg-black text-white h-16'>
            <div className='w-3/5 flex items-center justify-between '>
                <div>
                    <h1 className='text-2xl font-bold whitespace-nowrap'>{ApplyJobData.jobTitle}</h1>
                    <div className='pt-1 text-xs md:text-sm'>Posted {ApplyJobData.postedAt}</div>
                </div>
                <div className="flex flex-col md:flex-row justify-start text-xs md:text-sm custom:text-sm whitespace-nowrap">
                    <span> {job.jobType} &nbsp;</span>
                    <span>•&nbsp;{job.hours}&nbsp;</span>
                    <span> •&nbsp;{job.location}</span>
                </div>
            </div>
        </div>
        <div className='w-3/5 flex flex-col justify-center items-start'>
            <h1 className='text-xl font-bold mt-2'>Personal Information</h1>
            <form className='w-full' onSubmit={handleSubmit(formSubmit)}>
                <div className='flex justify-between gap-5'>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="firstName" className='mt-2'>First Name</Label>
                        <Input
                            id='firstName'
                            className='border-gray-400'
                            placeholder='Enter your first name'
                            type='text'
                            {...register('firstName', {required: 'First Name is required'})}
                            error={errors.firstName}
                        />
                        {errors.firstName && <div className='text-red-500 text-xs'>{errors.firstName.message}</div>}
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="secondName" className='mt-2'>Second Name</Label>
                        <Input
                            id='secondName'
                            placeholder='Enter your second name'
                            type='text'
                            {...register('secondName', {required: 'Second Name is required'})}
                            className='border-gray-400'
                            error={errors.secondName}
                        />
                        {errors.secondName && <div className='text-red-500 text-xs'>{errors.secondName.message}</div>}
                    </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email" className='mt-2'>Email Address</Label>
                    <Input
                        id='email'
                        placeholder='Enter your email'
                        type='email'
                        {...register('email', {required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }})}
                        className='border-gray-400'
                        error={errors.email}
                    />
                    {errors.email && <div className='text-red-500 text-xs'>{errors.email.message}</div>}
                </div>
                <div className='flex w-full justify-between'>
                <div className="grid w-full md:mr-12 items-center gap-1.5">
                    <Label htmlFor="gender" className='mt-2'>Gender</Label>
                    <Controller
                        name="gender"
                        control={control}
                        rules={{ required: "Please select a gender" }}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value} >
                            <SelectTrigger id="gender" className='border-gray-400'>
                                <SelectValue placeholder="Select a gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.gender && (
                        <p className="text-sm text-red-500">{errors.gender.message}</p>
                    )}
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="phoneNo" className='mt-2'>Phone Number</Label>
                    <div className='flex gap-1.5 w-full'>
                    <Controller
                        name="countryCode"
                        control={control}
                        rules={{ required: "Please select a country code" }}
                        render={({ field, fieldState: { error } }) => (
                        <PhoneNoDropdown
                            className="w-1/5"
                            onChange={field.onChange}
                            value={field.value}
                            error={error?.message}
                        />
                        )}
                    />
                    <div className='w-full'>
                        <Input
                            id='phoneNo'
                            placeholder='Enter your phone number'
                            type='tel'
                            {...register('phoneNumber', {required: 'Phone Number is required'})}
                            className='border-gray-400'
                            error={errors.phoneNo}
                        />
                        {errors.phoneNo && <div className='text-red-500 text-xs'>{errors.phoneNo.message}</div>}
                    </div>
                    </div>
                    
                </div>
                </div>
                <div className="grid w-full  items-center gap-1.5">
                    <Label htmlFor="portfolio" className='mt-2'>Portfolio/Website</Label>
                    <Input
                        id='portfolio'
                        placeholder='(Link to a portfolio or past work is usually critical for tech roles)'
                        type='url'
                        {...register('portfolio', {required: 'Portfolio is required'})}   
                        className='border-gray-400'
                        error={errors.portfolio}
                    />
                    {errors.portfolio && <div className='text-red-500 text-xs'>{errors.portfolio.message}</div>}
                </div>
                <div className="grid w-full  items-center gap-1.5">
                    <Label htmlFor="linkedIn" className='mt-2'>LinkedIn Profile</Label>
                    <Input
                        id='linkedIn'
                        placeholder='HTTP//'
                        type='url'
                        {...register('linkedIn', {required: 'LinkedIn Profile is required'})}   
                        className='border-gray-400'
                        error={errors.linkedIn}
                    />
                    {errors.linkedIn && <div className='text-red-500 text-xs'>{errors.linkedIn.message}</div>}
                </div>
                <div className="grid w-full items-start gap-1.5">
                    <Controller
                        name='resume'
                        control={control}
                        rules={{ validate: validateFile }}
                        error={errors.file?.message}
                        render={({field}) => (
                            <ResumeUpload
                                onChange={field.onChange}
                                value={field.value}
                                error={errors.file?.message}
                            />
                        )}
                    />
                </div>
                <div>
                    <h1 className='text-xl font-bold mt-2'>Interactive Question</h1>
                    <p className='text-sm text-gray-500'>To assess the candidate&apos;s proficiency, the application form could also include one or two interactive tasks replated to development , such as</p>
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="challenge" className='mt-2'>Coding Challenge</Label>
                    <Input
                        id='challenge'
                        placeholder='Write a simple function in Javascript that animates an element on the page'
                        type='text'
                        {...register('challenge', {required: 'Challenge is required'})}
                        className='border-gray-400'
                        error={errors.challenge}
                    />
                    {errors.challenge && <div className='text-red-500 text-xs'>{errors.challenge.message} </div>}
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="question" className='mt-2'>Technical Question</Label>
                    <Input
                        id='question'
                        placeholder='Write a simple function in Javascript that animates an element on the page'
                        type='text'
                        {...register('question', {required: 'Question is required'})}
                        className='border-gray-400'
                        error={errors.question}
                    />
                    {errors.question && <div className='text-red-500 text-xs'>{errors.question.message} </div>}
                </div>
                <Button type='submit' className='w-1/3 rounded-full my-2 bg-[#21b552]'>Apply</Button>
            </form>
        </div>
    </div>
  )
}

export default ApplyJobs