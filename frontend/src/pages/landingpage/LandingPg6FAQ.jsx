import React from 'react'
import CustomAccordion from '../../components/CustomAccordion'

const accordionItems = [
  {
    question: "What is DeclanWork?",
    content: "DeclanWork is a platform that helps you manage your projects and tasks efficiently. It provides tools for collaboration, time tracking, and productivity enhancement."
  },
  {
    question: "Who is your customer for this project?",
    content: "Our target customers are freelancers, small business owners, and project managers who need a platform to manage their projects and tasks efficiently."
  },
  {
    question: "How do we plan to reach our customers?",
    content: "We plan to reach our customers through social media marketing, content marketing, and search engine optimization. We will also leverage partnerships with other platforms to reach a wider audience."
  },
  {
    question: "Who are our primary competitors?",
    content: "Our primary competitors are Asana, Trello, and Monday.com. These platforms offer similar project management tools and have a large user base."
  },
  {
    question: "How does Declanwork ensure security?",
    content: "Our primary competitors are Asana, Trello, and Monday.com. These platforms offer similar project management tools and have a large user base."
  },
  {
    question: "What are the benefits of using Declanwork?",
    content: "Declanwork provides need a platform for Hirers to connect with global talents in the Web3 space and freelance talents to land their next gig."
  },
];
function LandingPg6FAQ() {
  return (
    <div id='faq' className='w-full h-full  p-2 md:px-4 md:py-6 lg:px-10 py-12 lg:py-14 flex flex-col justify-center items-around gap-3'>
      <div className='w-full flex flex-col mb-6 justify-center items-center font-bold text-center'>
        <h1 className='text-3xl text-[#0E4C25] p-1'>FAQs</h1>
        <div className='p-1 md:w-1/4'>We’ve compiled the most often-asked questions that we hear and compiled those answers here.</div>
      </div>
      <div className='flex flex-col justify-center items-center w-full px-2 sm:px-5'>
        <CustomAccordion items={accordionItems} />
      </div>
    </div>
  )
}

export default LandingPg6FAQ