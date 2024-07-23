import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo.png";
import onlylogo from "../../assets/onlylogo.png";
import logo3 from "../../assets/logo3.png";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";
import getUserFromCookie from "../../utils/getUserFromCookie";
import { AuthContext } from "../../context/AuthContext";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { Logout } = useContext(AuthContext);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const authState = getUserFromCookie("hostelNepalCookie");
    setUser(authState);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <div className="relative ">
      <div className="flex justify-between items-center w-full mt-3 md:hidden">
        <Link to="/" className="md:hidden lg:hidden ">
          <img src={onlylogo} alt="logo1" className="h-10 w-auto ml-4 " />
        </Link>
        <div className="text-black font-bold text-lg font-serif ">
          <span className="text-[#004587] text-lg inline-block">Hostel</span>{" "}
          <span className="text-[#7ACCFF] text-lg inline-block">Nepal</span>
        </div>
        <div className="lg:hidden md:hidden mr-2">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen menu overlay for mobile screens */}
      <div
        className={`lg:hidden overlay transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div className="flex flex-col items-center justify-center h-screen ">
          <div className="flex flex-col items-center space-y-4">
            <Link to="/FAQ" className={`text-xl font-bold text-gray-800 `}>
              FAQ
            </Link>
            <Link to="/" className={`text-xl font-bold text-gray-800`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* Menu items in row for larger screens */}
      <div className="hidden md:flex md:flex-row items-center justify-between h-20 px-4  bg-[#2094D1]">
        <div className="flex items-center">
          <div className="-ml-40">
            <Link to="/" className={`md:ml-5`}>
              <img
                src={logo3}
                alt="logo1"
                className="lg:h-16 w-auto md:ml-44  md:h-12 -mt-5"
              />
            </Link>
          </div>
        </div>

        <div className="relative rounded-lg border bg-[#ffffff] px-2 py-1 flex items-center ">
          <Link to="/Hostel">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none lg:w-96 md:w-56 placeholder-black pr-20"
            />
            <IoSearch className="absolute top-0 right-0 mr-2 mt-1 text-black h-6 w-6" />
          </Link>
        </div>
        <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-between text-base font-normal  lg:mr-20 py-1 ">
          <Link to="/FAQ" className={`lg:mx-6  md:mx-2 my-1 lg:my-0  `}>
            FAQ
          </Link>
          <Link to="/Contact" className={`lg:mx-6  md:mx-2 my-1 lg:my-0  `}>
            Contact
          </Link>

          {/* Dropdown for Profile */}
          <div className="relative lg:mx-6 md:mx-2 my-1 lg:my-0 z-40">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center"
            >
              <CgProfile className="inline-block mr-1 size-6" />
            </button>
            {isOpen && (
              <div className="absolute -right-20 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                {!user ? (
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-200"
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/user_profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-200"
                    >
                      Manage Profile
                    </Link>
                    <button
                      onClick={() => Logout()}
                      className="ml-4 hover:to-blue-50"
                      type="button"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
