// import { createContext, useReducer, useEffect } from "react";
// import PropTypes from "prop-types";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { url } from "../Statistic";
// import getUserFromCookie from "../utils/getUserFromCookie";

// interface UserProfileState {
//   isLoading: boolean;
//   formData: {
//     name: string;
//     gender: string;
//     role: string;
//     address: string;
//     mobile_no: string;
//     occupation: string;
//     emergency_no: string;
//     emergency_contact: string;
//     relation: string;
//     resident_address: string;
//     user_image: File | string; // Changed to accept File or string
//   };
// }

// type Action =
//   | { type: "FETCH_START" }
//   | { type: "FETCH_SUCCESS"; payload: UserProfileState["formData"] }
//   | { type: "FETCH_FAIL" }
//   | {
//       type: "UPDATE_FORM_DATA";
//       payload: Partial<UserProfileState["formData"]>;
//     };

// const initialState: UserProfileState = {
//   isLoading: false,
//   formData: {
//     name: "",
//     gender: "",
//     role: "",
//     address: "",
//     mobile_no: "",
//     occupation: "",
//     emergency_no: "",
//     emergency_contact: "",
//     relation: "",
//     resident_address: "",
//     user_image: "",
//   },
// };

// function userProfileReducer(
//   state: UserProfileState,
//   action: Action
// ): UserProfileState {
//   switch (action.type) {
//     case "FETCH_START":
//       return { ...state, isLoading: true };
//     case "FETCH_SUCCESS":
//       return {
//         ...state,
//         isLoading: false,
//         formData: { ...state.formData, ...action.payload },
//       };
//     case "FETCH_FAIL":
//       return { ...state, isLoading: false };
//     case "UPDATE_FORM_DATA":
//       return { ...state, formData: { ...state.formData, ...action.payload } };
//     default:
//       return state;
//   }
// }

// export const UserProfileContext = createContext<{
//   isLoading: boolean;
//   state: UserProfileState;
//   submitUserProfile: () => void;
//   updateFormData: (formData: Partial<UserProfileState["formData"]>) => void;
//   fetchProfile: () => void;
// }>({
//   isLoading: false,
//   state: initialState,
//   submitUserProfile: () => {},
//   updateFormData: () => {},
//   fetchProfile: () => {},
// });

// export const UserProfileProvider: React.FC = ({ children:any }) => {
//   const [state, dispatch] = useReducer(userProfileReducer, initialState);

//   const { isLoading, formData } = state;

//   useEffect(() => {
//     fetchProfile();
//   }, []); // Fetch profile on initial render

//   function fetchProfile() {
//     dispatch({ type: "FETCH_START" });
//     try {
//       const user = getUserFromCookie("Cookie");
//       if (!user || user.role !== "user") return; // Return if user role is not defined
//       axios
//         .get(`${url}/user/get-profile`, {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         })
//         .then(({ data }) => {
//           dispatch({ type: "FETCH_SUCCESS", payload: data });
//         })
//         .catch((error) => {
//           console.error("Error fetching profile:", error);
//           dispatch({ type: "FETCH_FAIL" });
//           if (
//             error.response &&
//             error.response.data &&
//             error.response.data.message
//           ) {
//             toast.error(error.response.data.message);
//           } else {
//             toast.error("Error fetching profile");
//           }
//         });
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       dispatch({ type: "FETCH_FAIL" });
//       toast.error("Error fetching profile");
//     }
//   }

//   const submitUserProfile = () => {
//     dispatch({ type: "FETCH_START" });

//     const formDataToSend = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataToSend.append(key, value as string);
//       // code clean up
//     });

//     axios
//       .post(`${url}/user/set-profile`, formDataToSend, {
//         "Content-Type": "multipart/form-data",
//         withCredentials: true,
//       })
//       .then((response) => {
//         dispatch({ type: "FETCH_SUCCESS", payload: response.data });
//         console.log("Profile set successfully", response.data);
//         toast.success("Profile set successfully!");
//       })
//       .catch((error) => {
//         dispatch({ type: "FETCH_FAIL" });
//         console.error("Error setting profile:", error);
//         toast.error("Failed to set profile. Please try again.");
//       });
//   };

//   const updateFormData = (
//     updatedFormData: Partial<UserProfileState["formData"]>
//   ) => {
//     dispatch({ type: "UPDATE_FORM_DATA", payload: updatedFormData });
//   };

//   return (
//     <UserProfileContext.Provider
//       value={{
//         isLoading,
//         state,
//         submitUserProfile,
//         updateFormData,
//         fetchProfile,
//       }}
//     >
//       {children}
//     </UserProfileContext.Provider>
//   );
// };

// UserProfileProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
