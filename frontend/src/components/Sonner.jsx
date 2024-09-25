import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Check, X, Loader } from "lucide-react";

export function SonnerDemo({ trigger }) {
  const checkConnection = () => {
    return navigator.onLine;
  };

  const showToast = (type) => {
    if (!checkConnection()) {
      toast.error("No internet connection. Please check your connection.", {
        icon: <X className="text-accent-error" />,
        className: "border-l-4",
        style: { borderColor: "#ff4d4f" }, // Error color
      });
      return;
    }

    switch (type) {
      case "success":
        toast.success("Changes saved successfully!", {
          icon: <Check className="text-accent-success" />,
          className: "border-l-4",
          style: { borderColor: "#21B557" }, // Success color
        });
        break;
      case "error":
        toast.error("An error occurred while saving changes.", {
          icon: <X className="text-accent-error" />,
          className: "border-l-4",
          style: { borderColor: "#ff4d4f" }, // Error color
        });
        break;
      case "loading":
        toast.loading("Saving changes...", {
          icon: <Loader className="text-accent-info animate-spin" />,
          className: "border-l-4",
          style: { borderColor: "#00A3FF" }, // Loading color
        });
        break;
      default:
        break;
    }
  };

  return (
    <Button
      variant="outline"
      className="border-0 p-0 m-0 bg-transparent"
      onClick={() => showToast("success")} // Change type to "success", "error", or "loading"
    >
      {trigger}
    </Button>
  );
}
