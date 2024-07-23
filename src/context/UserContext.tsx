import { createContext } from "react";

interface UserData {
  address?: string | null;
  emergency_contact?: string | null;
  emergency_no?: string | null;
  gender?: string | null;
  mobile_no?: string | null;
  name?: string | null;
  occupation?: string | null;
  relation?: string | null;
  resident_address?: string | null;
  role?: string;
}

interface UserContextType {
  user: UserData;
  isLoggedIn: boolean;
  setUser?: any;
  isUser?: boolean;
  setIsLoggedIn?: any;
}

const initialState = {
  isLoading: false,
  formData: {
    name: "",
    phone: "",
    profile: null,
  },
};

export const UserContext = createContext<UserContextType | undefined>({
  user: {},
  isLoggedIn: false,
});
