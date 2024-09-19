import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { ChevronDown, User, Building2 } from 'lucide-react';
import DeclanWorkLogo from '../../public/assets/DeclanWorkLogo.png';
import CountrySelector from '../components/CountrySelector';
import FreelancerIcon from '../../public/assets/user.png'
import HirerIcon from '../../public/assets/manager.png'

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <header className="flex flex-wrap justify-between items-center p-4 border-b bg-white">
        <div className="flex items-center mx-4 sm:mx-16 mt-2 mb-2 sm:mb-0">
          <img src={DeclanWorkLogo} alt="Declan Work" className="h-13 w-44 mr-2" />
        </div>
        <CountrySelector />
      </header>
      <main className="flex-grow flex justify-center items-center px-4 relative">
      <Card className="w-[750px] mr-[500px] border border-gray-200 rounded-2xl -mt-24 h-[480px]">
          <CardHeader className="p-6">
          <p className="text-xl mt-3 text-[#989898] font-[400] mx-4 mb-2">Welcome to Declanwork!</p>

            <p className="text-3xl text-[#202020] font-[450] mx-4">What type of account would you like to create?</p>
            <p className="text-[18px] text-[#6A6A6A] mx-4 font-[300]">Choose the option that best suits your needs:</p>
          </CardHeader>
          <CardContent className="p-6">
            <RadioGroup defaultValue="freelancer" className="space-y-4 mx-4">
            <div className="flex items-center justify-between border rounded-[10px] p-4 w-[620px] h-[90px]">
                  <div className="flex items-center">
                    <img
                      src={FreelancerIcon}
                      alt="Freelancer"
                      className="w-10 h-10 mr-2 border border-gray-300 rounded-[10px] p-2"
                    />
                    <div>
                      <p className="font-[450] text-[#4D4D4D] text-xl mx-2 -mt-2">Freelancer Account</p>
                      <p className="text-sm font-[300] text-[#6A6A6A] mx-2 mt-2">
                        Find and apply for projects that match your skills and expertise.
                      </p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    value="freelancer"
                    className="form-radio text-blue-600 h-4 w-4 cursor-pointer ml-auto mb-auto" 
                  />
                </div>
                <div className="flex items-center justify-between border rounded-[10px] p-4 w-[620px] h-[90px]">
                
                <div className="flex items-center">
                <img 
                    src={HirerIcon} 
                    alt="Hirer" 
                    className="w-10 h-10 mr-2 border border-gray-300 rounded-[10px] p-2" 
                  />
                  <div>
                  <p className="font-[450] text-[#4D4D4D] text-xl mx-2 -mt-2">Hirer Account</p>
                  <p className="text-sm font-[300] text-[#6A6A6A] mx-2 mt-2">Post projects and connect with top talent to bring your ideas to life.</p>
                  </div>
                </div>
                <input
                    type="radio"
                    value="freelancer"
                    className="form-radio text-blue-600 h-4 w-4 cursor-pointer ml-auto mb-auto" 
                  />
              </div>
            </RadioGroup>
            <Button className="w-[620px] mx-4 mt-6 gap-[10px] bg-[#00EF8B] hover:bg-[#00EF8B] text-[#202020] rounded-full py-2 text-[14px] font-[500]">
                Continue
              </Button>

          </CardContent>
        </Card>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white mr-auto">
                  <ol className="relative ml-6 mt-14">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-7 h-7  rounded-full -left-4 ring-2 ring-[#00EF8B]">
                <div className="w-3 h-3 bg-[#00EF8B] rounded-full" />
              </span>
              <h3 className="font- leading-tight mx-2 text-[#17813E] text-[16px] ">Choose a type of account</h3>
              <p className="text-sm mx-2">Choose what type of account you want to signup as</p>
            </li>
            {['Choose Registration Method', 'Enter Registration Details', 'Profile Setup', 'Welcome Declanwork'].map((step, index) => (
              <li key={index} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-7 h-7  rounded-full -left-4 ring-2 ring-[#EAECF0]">
                  <div className="w-3 h-3 bg-[#EAECF0] rounded-full" />
                </span>
                <h3 className="font-medium leading-tight mx-2">{step}</h3>
                <p className="text-sm mx-2">
                  {index === 1 ? 'You are needed to enter the required information' : 'Choose how you would like to register on Declanwork.'}
                </p>
              </li>
            ))}
          </ol>


        </div>

      </main>
    </div>
  );
};

export default SignupPage;
