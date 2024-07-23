import { useContext } from "react";
import "./login.css";
import Layout from "../layouts/Layout";
import { AuthContext } from "../context/AuthContext";
const NewLogin = () => {
  const { email, dispatch, RequestOTP, vendor, ToggleBusiness } =
    useContext(AuthContext);
  return (
    <Layout>
      <section className="w-full md:h-[29rem] h-[25rem] flex justify-center items-center">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 md:mt-80 mt-44 m-12  ">
          <div className="xl:mx-auto md:w-96 w-72 bg-[#fdfbfb] shadow-inner">
            <h2
              className="text-center font-semibold md:text-[1.6rem]  text-sm md:mt-8 text-[#000000] mt-4"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Log in to hostels finder
            </h2>
            <div className="flex justify-evenly mt-4 md:text-md text-sm font-normal">
              <button
                className="py-2 px-8 md:py-2 md:px-12"
                onClick={() => ToggleBusiness()}
              >
                Users
              </button>
              <button
                className="py-2 px-8 md:py-2 md:px-12"
                onClick={() => ToggleBusiness()}
              >
                Vendors
              </button>
            </div>
            <div className="flex justify-evenly md:space-x-9 space-x-5 mt-1">
              <div
                className={`md:w-32 w-28 h-[0.1rem] rounded-full   ${
                  vendor ? "bg-gray-900" : "bg-none"
                }`}
              ></div>
              <div
                className={`md:w-32 w-28 h-[0.1rem] rounded-full   ${
                  vendor ? "bg-none" : "bg-gray-900"
                }`}
              ></div>
            </div>
            <form className="mt-8">
              <div className="space-y-5 p-4">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>

                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Enter Your Email"
                      id="email"
                      onChange={(e) =>
                        dispatch({ type: "SET_EMAIL", payload: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => RequestOTP(email)}
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-700/80"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewLogin;
