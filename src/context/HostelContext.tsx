import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { url } from "../Statistic";
import getUserFromCookie from "../utils/getUserFromCookie";
import * as actionTypes from "../constant/HostelConstant";
import Axios from "axios";

// Define FormState interface
interface FormState {
  name: string;
  address: string;
  type: string;
  description: string;
  non_veg: boolean;
  mobile_no: string;
  total_rooms: string;
  booked_rooms: string;
  empty_rooms: string;
  breakfast_time: string;
  lunch_time: string;
  dinner_time: string;
  closing_time: string;
  no_of_times: string;
  bedded_rooms: string;
  resident_category: string;
  vendor: string;
  hostel_image?: string;
  menu_image?: string;
  doc_image?: string;
  services?: string[];
}

// Define HostelState interface
interface HostelState {
  isLoading: boolean;
  formData: FormState;
  SubmitHostelData: () => void;
  dispatch: React.Dispatch<HostelAction>;
}

// Define HostelAction type
type HostelAction =
  | { type: typeof actionTypes.ADD_HOSTEL_START; payload: boolean }
  | { type: typeof actionTypes.SET_HOSTEL_DATA; payload: any }
  | { type: typeof actionTypes.ADD_HOSTEL_FAIL };

// Define initial state
const initialState: HostelState = {
  isLoading: false,
  formData: {
    name: "",
    address: "",
    description: "",
    type: "",
    mobile_no: "",
    total_rooms: "",
    booked_rooms: "",
    empty_rooms: "",
    breakfast_time: "",
    lunch_time: "",
    dinner_time: "",
    closing_time: "",
    non_veg: false,
    no_of_times: "",
    bedded_rooms: "",
    resident_category: "",
    vendor: "",
    hostel_image: "",
    menu_image: "",
    doc_image: "",
  },
  SubmitHostelData: () => {},
  dispatch: () => {},
};

// Define reducer function
function reducer(state: HostelState, action: HostelAction): HostelState {
  switch (action.type) {
    case actionTypes.SET_HOSTEL_DATA:
      return { ...state, formData: action.payload };

    case actionTypes.ADD_HOSTEL_START:
      return { ...state, isLoading: action.payload };

    case actionTypes.ADD_HOSTEL_FAIL:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

const HostelContext = createContext<HostelState>(initialState);

// Define HostelProviderProps interface
interface HostelProviderProps {
  children: React.ReactNode;
}

// Define HostelProvider component
function HostelProvider({ children }: HostelProviderProps) {
  const [{ formData, isLoading }, dispatch] = useReducer(reducer, initialState);

  const SubmitHostelData = async () => {
    try {
      dispatch({ type: actionTypes.ADD_HOSTEL_START, payload: true });
      console.log("alkdfjsd");
      const response = await Axios.post(
        `${url}/hostel/create`,
        { formData },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      //   console.log(response);
    } catch (error) {
      dispatch({ type: actionTypes.ADD_HOSTEL_FAIL });
      console.log(error);
    }
  };

  return (
    <HostelContext.Provider
      value={{ formData, isLoading, SubmitHostelData, dispatch }}
    >
      {children}
    </HostelContext.Provider>
  );
}

// Export HostelProvider and HostelContext
export { HostelProvider, HostelContext };
