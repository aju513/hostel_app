import Nav from "../components/Navbar/Nav";
import Footer from "../layouts/Footer";
import { Button } from "../components";
import { useContext } from "react";
import "./login.css";
import OtpInput from "react-otp-input";
import { AuthContext } from "../context/AuthContext";

function SendOtp() {
  const { email, dispatch, SubmitOTP, hashed_otp } = useContext(AuthContext);
  return (
    <>
      <Nav />
      <section className="w-full md:h-[30rem] h-[25rem] flex justify-center items-center">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 md:mt-80 mt-44 m-12 ">
          <div className="xl:mx-auto md:w-96 w-72 bg-gray-200 shadow-inner">
            <h2 className="text-center font-semibold md:text-3xl md:text-md text-sm md:mt-8 mt-4">
              Log in to hostels finder
            </h2>
            <p className="mt-4 text-center md:text-sm text-[0.6rem]">
              OTP already sent to
              <span className="font-semibold"> {email}</span>
            </p>
            <div className="space-y-5 p-4">
              <OtpInput
                containerStyle={{ width: "90%", margin: "auto" }}
                value={hashed_otp}
                onChange={(otp) => dispatch({ type: "SET_OTP", payload: otp })}
                numInputs={6}
                renderSeparator={<span className="px-2"></span>}
                renderInput={(props) => (
                  <input {...props} className="otpInputStyle" />
                )}
              />
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-700/80"
                  onClick={() => SubmitOTP()}
                >
                  Submit
                </button>
                <div className="mt-3 space-y-3">
                  <h4 className="text-center">or</h4>
                </div>
                <Button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-gray-500 px-3.5 py-2.5 font-semibold leading-7 text-black  mt-4"
                  btnName="Resend OTP"
                  // onClick={resendOtp}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="md:mt-32">
        <Footer />
      </div>
    </>
  );
}

export default SendOtp;
