import Axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ReactNode, createContext, useReducer } from "react";
import * as actionTypes from "../constant/AuthConstant";
import { url } from "../Statistic";
import validateEmail from "../utils/validateEmail";
import getUserFromCookie from "../utils/getUserFromCookie";

type AuthState = {
  hashed_otp: string;
  email: string;
  loading: boolean;
  role: string;
  vendor: boolean;
  dispatch: React.Dispatch<AuthAction>;
  RequestOTP: (email: string) => void;
  HandleRole?: (role: string) => void;
  ToggleBusiness: () => void;
  Logout: () => void;
  SubmitOTP: () => void;
};
type AuthAction =
  | { type: typeof actionTypes.SET_EMAIL; payload: string }
  | { type: typeof actionTypes.SET_LOADING; payload: boolean }
  | { type: typeof actionTypes.SET_OTP; payload: string }
  | { type: typeof actionTypes.RESET_OTP }
  | { type: typeof actionTypes.SET_ROLE; payload: string }
  | { type: typeof actionTypes.SET_VENDOR; payload: boolean }
  | { type: typeof actionTypes.REQUEST_FAIL };

interface AuthProviderProps {
  children: ReactNode;
}
const initialState: AuthState = {
  hashed_otp: "",
  email: "",
  loading: false,
  role: actionTypes.User,
  vendor: true,
  dispatch: () => {},
  RequestOTP: () => {},
  HandleRole: () => {},
  ToggleBusiness: () => {},
  Logout: () => {},
  SubmitOTP: () => {},
};
const AuthContext = createContext<AuthState>(initialState);

function reducer(state: AuthState, action: AuthAction) {
  switch (action.type) {
    case actionTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case actionTypes.SET_OTP:
      return { ...state, hashed_otp: action.payload };
    case actionTypes.RESET_OTP:
      return { ...state, hashed_otp: "" };
    case actionTypes.SET_ROLE:
      return { ...state, role: action.payload };
    case actionTypes.SET_VENDOR:
      return { ...state, vendor: action.payload };
    case actionTypes.REQUEST_FAIL:
      return state;
    default:
      return state;
  }
}

function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [{ email, hashed_otp, loading, vendor, role }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const RequestOTP = async (email: string) => {
    try {
      validateEmail(email);
      dispatch({ type: actionTypes.RESET_OTP });
      dispatch({ type: actionTypes.SET_LOADING, payload: true });
      let response;
      if (vendor === true) {
        response = await Axios.post(`${url}/vendor/req-otp`, { email });
      } else {
        response = await Axios.post(`${url}/user/req-otp`, { email });
      }
      if (response.status === 200) {
        navigate("/send_otp");
        toast.success("OTP sent");
      }
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const HandleRole = (role: string) => {
    dispatch({ type: actionTypes.SET_ROLE, payload: role });
  };
  const ToggleBusiness = () => {
    dispatch({ type: actionTypes.SET_VENDOR, payload: !vendor });
  };

  const SubmitOTP = async () => {
    try {
      dispatch({ type: actionTypes.SET_LOADING, payload: true });
      validateEmail(email);
      if (hashed_otp.length !== 6) {
        dispatch({ type: actionTypes.RESET_OTP });

        toast.error("Invalid OTP");
        return Error("Invalid OTP");
      }

      let response;
      if (vendor === true) {
        response = await Axios.post(
          `${url}/vendor/login`,
          { email, hashed_otp },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
      } else {
        response = await Axios.post(
          `${url}/user/login`,
          { email, hashed_otp },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
      }
      if (response.status === 200) {
        toast.success("Successfully Logged In");
        const { role } = getUserFromCookie("hostelNepalCookie") || {
          role: "",
        };
        if (role === "admin") {
          navigate("/admin");
        } else if (vendor === true) {
          navigate("/user_profile");
        } else {
          navigate("/user_profile");
        }
      }
    } catch (error) {
      dispatch({ type: actionTypes.REQUEST_FAIL });
      toast.error("something went wrong");
    } finally {
      dispatch({ type: actionTypes.SET_LOADING, payload: false });
    }
  };
  const Logout = async () => {
    try {
      let response;
      if (vendor === true) {
        response = await Axios.post(`${url}/vendor/logout`, null, {
          withCredentials: true,
        });
      } else {
        response = await Axios.post(`${url}/user/logout`, null, {
          withCredentials: true,
        });
      }
      if (response.status == 200) {
        navigate("/");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        hashed_otp,
        email,
        role,
        loading,
        dispatch,
        SubmitOTP,
        RequestOTP,
        vendor,
        ToggleBusiness,
        Logout,
        HandleRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
