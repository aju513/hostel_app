import { Dispatch, SetStateAction, createContext } from "react";

interface EmailContextType {
  email?: string;
  setEmail?: Dispatch<SetStateAction<string>>;
  setIsActive?: Dispatch<SetStateAction<string>>;
  isActive?: string;
}
export const EmailContext = createContext<EmailContextType | undefined>(
  undefined
);
