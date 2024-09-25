import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function SonnerDemo({trigger}) {
  return (
    <Button
      variant="outline"
      className="border-0 p-0 m-0 bg-transparent"
      onClick={() =>
        toast("Changes Saved Succesfully", {
          icon: <Check className="text-accent-success" />,
          className: "border-l-[#21B557] border-l-4",
          description: "",
          action: {
            
          },
        })
      }
    >
      {trigger}
    </Button>
  )
}
