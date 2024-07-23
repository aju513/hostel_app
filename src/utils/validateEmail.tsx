import { toast } from "react-toastify";

export default function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Invalid email");
    throw new Error("Invalid email");
  }
}
