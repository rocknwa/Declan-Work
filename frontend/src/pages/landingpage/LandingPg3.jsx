import React from 'react'
import { CardStack } from "../../components/ui/CardStack";
import { cn } from "@/utils/cn";

const cards = [
  { title: "Decentralized Platform", description: "DeclanWork operates on a decentralized platform, which offers enhanced security, transparency, and trust. By leveraging blockchain technology, we ensure that all transactions and intteractions are secure and verifiable. This decentralized approach eliminates the need for intermediaries, reducing costs and increasing efficiency.", bgColor: "#21B557", textColor: "text-black" },
  {
    title: "Secure Payments", description: "Our platform uses blockchain-based payment systems to ensure secure and transparent financial transactions. Freelancers can be confident that they will receive payment for their work, and clients can trust that their payments are handled securely.",
    bgColor: "#D1A715", textColor: "text-gray-600"
  },
  { title: "Task and Project Management Tools", description: "Our platform includes robust task and project management tools that help both freelancers and clients stay organized and on track. Users can manage deadlines, track progress, and communicate effectively within the platform.", bgColor: "#CF6969", textColor: "text-black" },
  { title: "AI-Powered Job Matching", description: "DeclanWork uses advanced AI algorithms to match freelancers with job opportunities that perfectly align with their skills and experience. This ensures that freelancers find suitable jobs more quickly and clients get access to the best talent for their projects.", bgColor: "#8752CD", textColor: "text-white" },
  { title: "Community Engagement", description: "DeclanWork fosters a vibrant community of freelancers and clients. Our platform encourages users to engage with one another, share knowledge, and collaborate on projects. This community-driven approach creates a supportive environment for all users.", bgColor: "#0E4C25", textColor: "text-gray-400" },
  { title: "Educational Resources", description: "DeclanWork offers a variety of educational resources to help freelancers improve their skills and stay updated with industry trends. These resources include courses for skills development and career growth", bgColor: "#000000", textColor: "text-white" }
]

export const Highlight = ({
  children,
  className
}) => {
  return (
    (<span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}>
      {children}
    </span>)
  );
};

function LandingPg3() {
  return (
    <div className='w-full h-full px-8 md:px-4 '>
      <div className='flex flex-col justify-center items-center p-6'>
        <div className='w-full text-2xl md:text-3xl xl:text-5xl text-[#0E4C25] font-extrabold text-left lg:text-center'></div>
        <div className='w-full text-gray-500 lg:w-2/3 xl:w-1/2 mt-4  text-left lg:text-center'>DeclanWork offers numerous advantages that set it apart from traditional freelancing platforms and make it an attractive option for freelancers and clients alike</div>
      </div>
      <div className="py-28 md:py-0 min-h-full flex items-center justify-center w-full mt-[5rem] lg:mt-[3rem] xl:mt-[7rem] xl:mb-[2rem]">
        <CardStack items={cards} />
      </div>
    </div>
  )
}

export default LandingPg3
