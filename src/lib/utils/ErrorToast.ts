import { toast } from "sonner";

export function ErrorToast(message: string) {
  return toast.error(message, {
    style: {
      textTransform:"capitalize",
      color: "red",
    },
  });
}
