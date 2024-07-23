import { useState, ChangeEvent, FormEvent, useEffect, useContext } from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../layouts/Footer";
import Google from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../components";
import "./login.css";
function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorMessageVendors, setErrorMessageVendors] = useState<string>("");

  const [formData, setFormData] = useState<{ email: string }>({
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ email: e.target.value });
  };

  const handleSubmitUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.email.trim() === "") {
      setErrorMessage("*Please enter your valid email");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }

    // call api here by using try catch with || axios may be
  };

  return (
    <>
      <Nav />
      {/* Login form starts here */}

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
              <Link to="" onClick={() => handleTabClick("Users")}>
                <div className="py-2 px-8 md:py-2 md:px-12">Users</div>
              </Link>
              <Link to="" onClick={() => handleTabClick("Vendors")}>
                <div className="py-2 px-8 md:py-2 md:px-12">Vendors</div>
              </Link>
            </div>
            <div className="flex justify-evenly md:space-x-9 space-x-5 mt-1">
              <div
                className={`md:w-32 w-28 h-[0.1rem] rounded-full   ${
                  isActive === "Users" ? "bg-gray-900" : "bg-none"
                }`}
              ></div>
              <div
                className={`md:w-32 w-28 h-[0.1rem] rounded-full  ${
                  isActive === "Vendors" ? "bg-gray-900" : "bg-none"
                }`}
              ></div>
            </div>

            {isActive === "Users" && (
              <form className="mt-8" onSubmit={handleSubmitUser}>
                <div className="space-y-5 p-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>

                    <div className="mt-2">
                      <Input
                        className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Enter Your Email"
                        id="email"
                        onChange={handleChange}
                      />

                      {errorMessage && (
                        <p className="text-red-500 text-center mt-4">
                          {errorMessage}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-700/80"
                      btnName="Send OTP"
                    />
                  </div>
                </div>
              </form>
            )}
            {isActive === "Vendors" && (
              <form className="mt-8" onSubmit={handleSubmitUser}>
                <div className="space-y-5 p-4">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2">
                      <Input
                        className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Enter Your Email"
                        onChange={handleChange}
                        id="vendorsEmail"
                      />
                    </div>
                  </div>
                  {errorMessageVendors && (
                    <h1 className="text-red-400 text-center">
                      {errorMessageVendors}
                    </h1>
                  )}

                  <div>
                    <Button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-700/80"
                      btnName="Send OTP"
                    />
                  </div>
                </div>
              </form>
            )}

            <div className="mt-3 space-y-3">
              <h4 className="text-center">or</h4>
              <Link to="" className="flex justify-center">
                <img
                  src={Google}
                  alt="google"
                  className="h-8 text-center mb-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ends here */}
      <div className="md:mt-32">
        <Footer />
      </div>
    </>
  );
}

export default Login;
