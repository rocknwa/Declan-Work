import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function CustomAccordion({ items = [] }) {
    return (
      <Accordion type="single" collapsible className="w-full max-w-6xl">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-none mb-2">
            <AccordionTrigger className="flex justify-between py-4 px-6 bg-green-50 text-[#0E4C25] rounded-lg hover:bg-green-100 hover:no-underline">
              <span className="text-left font-bold">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="pt-2 px-6 pb-4 bg-green-50 text-[#0E4C25] font-bold rounded-b-lg">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }