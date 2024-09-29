import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SonnerDemo } from "./Sonner"

export function DialogDemo({trigger, header, body, footer}) {
  return (  
    <Dialog >
      <DialogTrigger asChild> 
        {trigger}
      </DialogTrigger>
      <DialogContent className="bg-[#FAFAFA] lg:rounded-[30px] lg:min-h-[500px] lg:py-10 lg:max-w-2xl flex flex-col items-center sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">{header}</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="flex flex-col max-w-full w-[520px] m-auto gap-4 py-4">
            {body}
        </div>
        <DialogFooter className="flex flex-col focus:outline-none items-center">
            <SonnerDemo trigger={footer} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
