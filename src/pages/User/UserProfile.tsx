import Layout from "../../layouts/Layout";
import { RiAccountCircleLine } from "react-icons/ri";
import { PiBookmarkSimpleDuotone } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserDetails, BookmarkCard } from "../../components";

const UserProfile = () => {
  const nav = [
    {
      name: "Manage Account",
      Icon: RiAccountCircleLine,
      path: "",
    },
    {
      name: "Bookmarks",
      Icon: PiBookmarkSimpleDuotone,
      path: "",
    },
  ];

  const [activeNavItem, setActiveNavItem] = useState(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <div className="md:hidden lg:hidden">
        <div className="">
          <div className="flex mt-8 mb-4 ">
            <img
              className="w-16 h-16 p-1 shadow-lg shadow-[#828282] rounded-full ring-2 ring-gray-200"
              src="https://cdn-icons-png.flaticon.com/128/11498/11498793.png"
              alt="Bordered avatar"
            />
            <div className="flex flex-col ml-2">
              <h1
                className="md:text-[18px] text-md font-normal md:font-semibold text-[#424242]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Virat Kohli
              </h1>
              <p
                className="text-gray-500 font-semibold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Cricketer
              </p>
            </div>

            <div className=" -mt-2 m-auto  ">
              <button
                className="bg-[#004587] w-36 h-[2.25rem] text-[0.875rem] uppercase font-semibold text-gray-200 rounded-xl"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Update Profile
              </button>
              <p
                className="text-[#DB2F2F] mt-2 text-sm font-semibold "
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                *Incomplete Profile
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  md:flex-nowrap md:space-x-3 justify-center flex-wrap">
        {/* Avatar section start here */}

        <div className=" hidden lg:block md:block">
          <aside
            className={`flex  ${
              isScrolled ? "sticky top-0 z-50" : ""
            }  md:w-[20rem] bg-[#F6F6F6] h-[650px]  px-5 md:mt-10 py-8`}
          >
            <div className=" flex flex-1 md:justify-between bg-[#F6F6F6] ]">
              <nav className="-mx-3 md:space-y-6 space-y-1">
                <div className="flex flex-wrap items-center md:ml-0  mt-10 ml-12 space-x-4 md:mb-0 mb-4 pl-[3rem]">
                  <img
                    className="w-16 h-16 p-1 shadow-lg shadow-[#828282] rounded-full ring-2 ring-gray-200"
                    src="https://cdn-icons-png.flaticon.com/128/11498/11498793.png"
                    alt="Bordered avatar"
                  />
                  <div className="flex flex-col">
                    <h1
                      className="md:text-[18px] text-md font-normal md:font-semibold text-[#424242]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Virat Kohli
                    </h1>
                    <p
                      className="text-gray-500 font-semibold"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Cricketer
                    </p>
                  </div>
                </div>
                <div className="md:p-8 md:ml-0 ml-12 p-2 mt-2">
                  <ul>
                    {nav.map((item, index) => (
                      <Link
                        to={item.path}
                        className="m-2"
                        key={index}
                        onClick={() => setActiveNavItem(index)}
                      >
                        <li
                          className={`flex items-centerspace-x-3  rounded-lg p-2 ${
                            activeNavItem === index
                              ? "bg-[#D9D9D9] rounded-lg"
                              : ""
                          }`}
                        >
                          <item.Icon className="w-6 h-6 text-gray-900" />
                          <span
                            className={`text-gray-900 text-xl font-normal ${
                              activeNavItem === index ? "font-normal" : ""
                            }`}
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {item.name}
                          </span>
                        </li>
                      </Link>
                    ))}
                    {/* logout buttons here */}
                    <li className="flex items-center space-x-3 p-2 bg-white rounded-lg">
                      <FiLogOut className="w-6 h-6 text-gray-900" />
                      <button
                        className="text-gray-900 text-xl font-normal"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Logout
                      </button>
                    </li>
                    {/* ends here */}
                  </ul>
                </div>
              </nav>
            </div>
          </aside>
        </div>
        {/* Avatar section ends here */}

        {/* Active section start here */}
        {activeNavItem === 0 && <UserDetails />}
        {activeNavItem === 1 && <BookmarkCard />}
        {/* Active section ends here */}
      </div>
    </Layout>
  );
};

export default UserProfile;
