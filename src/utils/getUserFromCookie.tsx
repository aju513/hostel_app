import { toast } from "react-toastify";

export default function getUserFromCookie(cookieName: any) {
  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith(`${cookieName}=`));

  if (!cookie) {
    toast.error("Please login");
    return null;
  }

  const cookieValue = cookie.split("=")[1];
  const cookieObject = JSON.parse(decodeURIComponent(cookieValue));
  return cookieObject.user;
}
