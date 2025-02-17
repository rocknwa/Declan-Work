import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Check, X, Loader } from "lucide-react";
import { checkOnline } from "@/lib/utils";


// showToast function
const showToast = ({ type, message }) => {
  if (!checkOnline()) {
    toast.error("No internet connection. Please check your connection.", {
      icon: <X className="text-accent-error" />,
      className: "border-l-4",
      style: { borderColor: "#ff4d4f" }, // Error color
    });
    return;
  } else {
      switch (type) {
        case "success":
          toast.success(message || "Changes saved successfully!", {
            icon: <Check className="text-accent-success" />,
            className: "border-l-4",
            style: { borderColor: "#21B557" }, // Success color
          });
          break;
        case "error":
          toast.error(message || "An error occurred while saving changes.", {
            icon: <X className="text-accent-error" />,
            className: "border-l-4",
            style: { borderColor: "#ff4d4f" }, // Error color
          });
          break;
        case "loading":
          toast.loading(message || "Saving changes...", {
            icon: <Loader className="text-accent-info animate-spin" />,
            className: "border-l-4",
            style: { borderColor: "#00A3FF" }, // Loading color
          });
          break;
        default:
          break;
      }
  }
};

// Component that triggers the toast notification
function SonnerDemo({ trigger }) {
  return (
    <Button
      variant="outline"
      className="border-0 p-0 m-0 bg-transparent"
    >
      {trigger}
    </Button>
  );
}

export { showToast, SonnerDemo };
