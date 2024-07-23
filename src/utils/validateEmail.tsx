import { toast } from "react-toastify";

export default function validateEmail(email:string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Invalid email");
    throw new Error("Invalid email");
  }
}
