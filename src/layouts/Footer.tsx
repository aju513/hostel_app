import { BsFacebook, BsTwitterX, BsInstagram, BsYoutube } from "react-icons/bs";

import {  CgArrowRight } from "react-icons/cg";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="h-[1000px] md:h-[850px] lg:h-[550px] relative mt-16 overflow-hidden z-10  ">
        <div className="background">
          {" "}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-[30%] md:mt-32 lg:h-[273px]">
            <div className="m-3 pt-2 block col-span-full lg:col-span-1">
              <div className="flex justify-start ">
                <img src={logo} alt="" className="h-24" />
              </div>

              <div className="">
                <p className="text-black text-justify p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  sequi debitis facere minus? Officia, repellendus aliquam quia
                  natus exercitationem quis aperiam dolores fugiat quos
                  veritatis similique, asperiores voluptates atque sapiente.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-10 mt-5 lg:mt-0">
              <h3 className="font-bold text-xl mb-4">About Us</h3>
              <p className="mb-2 font-light">Hostelworld Group PLC</p>
              <p className="mb-2 font-light">Press</p>
              <p className="mb-2 font-light">Careers</p>
              <h3 className="mt-2 font-bold text-xl">Work With Us</h3>
              <p className="mt-2 font-light">Hostel Sign Up</p>
            </div>
            <div className="flex flex-col ml-10 mt-5 lg:mt-0">
              <h3 className="font-bold text-xl mb-4">Accomodations</h3>
              <p className="mb-2 font-light">Hostels</p>
              <p className="mb-2 font-light">Bed and Breakfast</p>
              <h3 className="mt-2 font-bold text-xl">Customer Support</h3>
              <p className="mt-2 font-light">Talk to us</p>
              <p className="mt-2 font-light">Help</p>
            </div>
            <div className="flex flex-col ml-10 mt-10 col-span-full lg:col-span-1">
              <h2 className="font-bold text-2xl">Subscribe To Get Offers!</h2>
              <div className="flex flex-row items-center py-2">
                <input
                  placeholder="Enter Your Address"
                  type="text"
                  className="py-3 px-4 rounded-l-xl rounded-r-none border border-gray-400 h-[48px] w-[60%]"
                />
                <button className="bg-black text-white py-3 px-6 rounded-r-xl border border-gray-400 h-[48px] flex justify-center items-center">
                  <CgArrowRight className="text-3xl" />
                </button>
              </div>

              <h2 className="text-xl font-bold">We Accept</h2>
            </div>
          </div>
          <div className="mt-10 w-full flex flex-col justify-center items-center">
            <h1 className="text-black text-md md:text-lg">Follow us on</h1>
            <span className="flex space-x-4 text-xl mt-4">
              <BsFacebook className="text-black" />
              <BsTwitterX className="text-black" />
              <BsInstagram className="text-black" />
              <BsYoutube className="text-black" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
