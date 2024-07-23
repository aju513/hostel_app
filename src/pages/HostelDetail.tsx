import { useEffect, useRef, useState } from "react";
import {
  BiCctv,
  BiChevronRight,
  BiFoodMenu,
  BiHomeAlt,
  BiSolidStar,
  BiWifi,
  BiXCircle,
} from "react-icons/bi";
import { CiParking1 } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { GiElectric, GiWashingMachine } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import {
  MdLayers,
  MdLocationPin,
  MdOutlineBathroom,
  MdOutlineHotTub,
  MdOutlineLocalLaundryService,
  MdOutlineReviews,
  MdPeople,
  MdPersonOutline,
  MdStar,
} from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { Link } from "react-router-dom";
import hostel1 from "../assets/hostel1.png";
import hostel2 from "../assets/hostel2.png";
import hostel3 from "../assets/hostel3.png";
import hostel4 from "../assets/hostel4.png";
import hostel from "../assets/hostell.png";
import menu from "../assets/menu.png";
import Layout from "../layouts/Layout";
import HostelList from "../components/List/HostelList";
import SeaterCard from "../components/Card/SeaterCard";

const hostels = [
  {
    title: "Sunset Hostel",
    starCount: 4,
    address: "Thamel",
    distance: "2.7km",
    price: 4500,
  },

  {
    title: "Riverfront Hostel",
    starCount: 4,
    address: "Chitwan",
    distance: "10.5km",
    price: 4800,
  },

  {
    title: "Cozy Cottage",
    starCount: 3,
    address: "Nagarkot",
    distance: "25.6km",
    price: 3800,
  },
];
const HostelDetail = () => {
  const [activeTab, setActiveTab] = useState("Description");
  const [largeImage, setLargeImage] = useState(hostel4);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [menuModalIsOpen, setMenuModalIsOpen] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);
  const [modalExpandedReviews, setModalExpandedReviews] = useState<number[]>(
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalIsOpen(false);
      }
    };

    if (modalIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [modalIsOpen]);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  // Function to handle click on smaller image
  const handleImageClick = (image: string) => {
    setLargeImage(image);
  };

  const toggleMenuModal = () => {
    setMenuModalIsOpen(!menuModalIsOpen);
  };

  const toggleReviewExpansion = (id: number) => {
    if (expandedReviews.includes(id)) {
      setExpandedReviews(expandedReviews.filter((reviewId) => reviewId !== id));
    } else {
      setExpandedReviews([...expandedReviews, id]);
    }
  };

  // Function to toggle review expansion inside the modal
  const toggleModalReviewExpansion = (reviewId: number) => {
    if (modalExpandedReviews.includes(reviewId)) {
      setModalExpandedReviews(
        modalExpandedReviews.filter((id) => id !== reviewId)
      );
    } else {
      setModalExpandedReviews([...modalExpandedReviews, reviewId]);
    }
  };
  const reviews = [
    {
      id: 1,
      name: "Juni",
      date: "March 25, 2024",
      review:
        "Great hostel, loved the facilities and the atmosphere.The hostel is very clean, all staff are very helpful. I highly recommend Hostel Bivouac to all travelers, walking distance to restaurants.",
    },
    {
      id: 2,
      name: "Juni ",
      date: "March 24, 2024",
      review:
        "Had a pleasant stay, would recommend to others.Great hostel, loved the facilities and the atmosphere.The hostel is very clean, all staff are very helpful. I highly recommend Hostel Bivouac to all travelers, walking distance to restaurants.",
    },
    {
      id: 3,
      name: "Juni ",
      date: "March 24, 2024",
      review:
        "Had a pleasant stay, would recommend to others.Great hostel, loved the facilities and the atmosphere.The hostel is very clean, all staff are very helpful. I highly recommend Hostel Bivouac to all travelers, walking distance to restaurants.",
    },
    {
      id: 4,
      name: "Juni ",
      date: "March 24, 2024",
      review: "Had a pleasant stay, would recommend to others.",
    },
  ];

  return (
    <>
      <Layout className={""}>
        {/* Mobile screen */}
        <div className="lg:hidden md:hidden">
          <div className="container mx-auto py-8">
            {/* Full-size image */}
            <div className="relative">
              <img
                src={largeImage}
                alt="Large hostel"
                className="w-full mb-4 h-96"
              />
              {/* Star icon */}
              <div className="absolute top-3 right-4 rounded-lg  flex bg-white">
                <BiSolidStar className="text-yellow-500" />
                <h2 className="-mt-1 ">(50)</h2>
              </div>
            </div>
            {/* Four smaller images */}
            <div className="flex justify-between cursor-pointer">
              <img
                src={hostel1}
                alt="Hostel 1"
                className="w-1/6 rounded-lg h-auto max-w-xxs ml-10"
                onClick={() => handleImageClick(hostel1)}
              />
              <img
                src={hostel2}
                alt="Hostel 2"
                className="w-1/6 rounded-lg mx-1 h-auto max-w-xxs"
                onClick={() => handleImageClick(hostel2)}
              />
              <img
                src={hostel4}
                alt="Hostel 4"
                className="w-1/6 rounded-lg mx-1 h-auto max-w-xxs"
                onClick={() => handleImageClick(hostel4)}
              />
              <img
                src={hostel3}
                alt="Hostel 3"
                className="w-1/6 rounded-lg h-auto max-w-xxs mr-10"
                onClick={() => handleImageClick(hostel3)}
              />
            </div>

            <div className=" justify-between mt-5">
              <h2 className="text-xl font-bold">Bodhi Tree Hostel Pvt.Ltd</h2>
              <p className="text-[0.8rem] sm:text-[1rem]">Boys hostel</p>
              <div className="flex items-center ">
                <MdLocationPin className="font-semibold size-4" />
                <h2 className="text-[0.8rem] sm:text-[1rem]">
                  Imadol Lalitpur
                </h2>
              </div>
            </div>

            <div className="relative col-span-3 w-full md:w-auto">
              <h2 className="font-bold text-[1.2rem] sm:text-[2rem] md:text-xl text-black mt-4">
                Hostel Features
              </h2>
              <div className="overflow-x-auto">
                <ul className="flex flex-nowrap">
                  <li className="text-black flex items-center bg-gray-200 p-2 mr-4">
                    <GiElectric className="inline mr-2 text-3xl" /> 24hrs
                    Electricity
                  </li>
                  <li className="text-black flex items-center bg-gray-200 p-2 mr-4">
                    <CiParking1 className="inline mr-2 text-3xl" /> Parking
                  </li>
                  <li className="text-black flex items-center bg-gray-200 p-2 mr-4">
                    <MdOutlineHotTub className="inline mr-2 text-3xl" /> Hot
                    Water
                  </li>
                  <li className="text-black flex items-center bg-gray-200 p-2 mr-4">
                    <SiAdguard className="inline mr-2 text-3xl" /> Security
                    Guard
                  </li>
                  <li className="text-black flex items-center bg-gray-200 p-2 mr-4">
                    <FaWifi className="inline mr-2 text-3xl" /> Reliable Wifi
                  </li>
                  <li className="text-black flex items-center bg-gray-200 p-2 mr-4">
                    <LuVegan className="inline mr-2 text-3xl" /> Non-veg
                    available
                  </li>
                  <li className="text-black flex items-center bg-gray-200 p-2 mr-4">
                    <BiCctv className="inline mr-2 text-3xl" /> CCTV
                  </li>
                  <li className="text-black flex items-center bg-gray-200 p-2 mr-4">
                    <MdOutlineLocalLaundryService className="inline mr-2 text-3xl" />{" "}
                    Laundry
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-6">
              <div className="flex justify-center mt-2 font-semibold space-x-4">
                <Link
                  to="/view"
                  className={`mx-2 my-1 hover:underline text-2xl ${
                    activeTab === "Description"
                      ? "text-[#144A65] border-b-2"
                      : "text-black"
                  }`} // Change color when active
                  onClick={() => setActiveTab("Description")}
                >
                  Description
                </Link>
                <Link
                  to=""
                  className={`mx-2 my-1 hover:underline text-2xl ${
                    activeTab === "Review"
                      ? "text-[#144A65] border-b-2"
                      : "text-black"
                  }`} // Change color when active
                  onClick={() => setActiveTab("Review")}
                >
                  Review
                </Link>
              </div>
              <hr className="my-2 w-full -mt-2 border-t-2 border-gray-500" />

              {/* Description*/}
              {activeTab === "Description" && (
                <div className="mt-6">
                  <p className="mt-2 md:mt-4 text-black text-justify">
                    Located in the vibrant Iamdol area, Five Star Boys Hostel
                    offers modern accommodation with essential amenities for
                    students. With a commitment to service excellence, it
                    provides a conducive environment for academic success. Its
                    popularity stems from fostering a community spirit through
                    engaging activities and facilities tailored to students'
                    needs.
                  </p>
                  <div className="relative grid grid-cols-2 gap-4 mt-6 text-[#616161]">
                    <div className="relative flex items-center">
                      <BiHomeAlt className="mr-2" />
                      <p className="text-[0.8rem] sm:text-[1rem]">
                        Rooms: "Available"
                      </p>
                    </div>
                    <div className="relative flex items-center">
                      <MdOutlineBathroom className="mr-2" />
                      <p className="text-[0.8rem] sm:text-[1rem]">
                        Bathrooms: "N/A"
                      </p>
                    </div>
                    <div className="relative flex items-center">
                      <MdLayers className="mr-2" />
                      <p className="text-[0.8rem] sm:text-[1rem]">
                        Floors: "N/A"
                      </p>
                    </div>
                    <div className="relative flex items-center">
                      <MdStar className="mr-2" />
                      <p className="text-[0.8rem] sm:text-[1rem]">
                        Rating: "N/A"
                      </p>
                    </div>
                    <div className="relative flex items-center">
                      <MdPeople className="mr-2" />
                      <p className="text-[0.8rem] sm:text-[1rem]">
                        Total Students: "N/A"
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Review" && (
                <div className="mt-4">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-gray-100 p-4 rounded-md mb-4"
                    >
                      <div className="flex items-center mb-2">
                        <MdPersonOutline className="size-6 mr-2" />
                        <h2 className="text-xl font-semibold">{review.name}</h2>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(4)].map((_, index) => (
                          <BiSolidStar
                            key={index}
                            className="text-yellow-500"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">
                        Review on : {review.date}
                      </p>
                      <p>
                        {expandedReviews.includes(review.id)
                          ? review.review
                          : `${review.review.substring(0, 70)}...`}
                      </p>
                      <p
                        className="text-[#0A6E94] font-semibold cursor-pointer mt-2"
                        onClick={() => toggleReviewExpansion(review.id)}
                      >
                        {expandedReviews.includes(review.id)
                          ? "Read Less"
                          : "Read More"}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex m-auto space-x-5 ">
              {/* Menu Section */}
              <div className="mt-8">
                <div className="flex items-center mb-4 bg-[#F6F6F6]">
                  <BiFoodMenu className="font-semibold size-6 mr-2" />
                  <h2 className="text-xl font-semibold">Menu</h2>
                </div>
                <img
                  src={menu}
                  alt="Hostel Menu"
                  className="w-44 h-32 cursor-pointer -mt-2"
                  onClick={toggleMenuModal}
                />

                {/* Modal for displaying the menu in larger size */}
                {menuModalIsOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-y-auto">
                    <div className="bg-white p-4 rounded-md w-[95%] h-[50%]">
                      <div className="flex items-center mb-4">
                        <BiFoodMenu className="font-semibold size-8 mr-2" />
                        <h2 className="text-xl font-semibold">Menu</h2>
                        <div className="ml-auto">
                          <button
                            onClick={toggleMenuModal}
                            className="text-black "
                          >
                            <BiXCircle className="w-7 h-7 text-red-700" />
                          </button>
                        </div>
                      </div>
                      <img src={menu} alt="Hostel Menu" className="w-full h-[80%]" />
                    </div>
                  </div>
                )}
              </div>
              {/* location section */}
              <div className="mt-8 w-[50%] ">
                <div className="flex items-center bg-[#F6F6F6]">
                  <MdLocationPin className="font-semibold size-6 mr-2" />
                  <h2 className="text-xl font-semibold">Location</h2>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8741294666534!2d85.34508437632786!3d27.65936577621009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb173bf68b2d87%3A0x22a42fe8a2872c8a!2sKSW%20TECHZONE!5e0!3m2!1sen!2snp!4v1710143276574!5m2!1sen!2snp"
                  loading="lazy"
                  className="w-44 h-32  mt-2 "
                ></iframe>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-14 m-auto justify-center lg:w-[70%]  ">
              <SeaterCard title="One Seater" price={5000} />
              <SeaterCard title="Two Seater" price={8000} />
              <SeaterCard title="Three Seater" price={11000} />
              <SeaterCard title="Three Seater" price={16000} />
            </div>
          </div>
        </div>

        {/* Desktop/Laptop Layout */}
        <div className="hidden lg:block md:block mt-4">
          <div className="container mx-auto py-">
            <div className="flex">
              <div className="w-1/4 pr-4 flex flex-col">
                <img
                  src={hostel4}
                  alt="hostel 1"
                  className="mb-4 w-full h-40 object-cover"
                />
                <img
                  src={hostel4}
                  alt="hostel 2"
                  className="mb-4 w-full h-40 object-cover"
                />
                <img
                  src={hostel3}
                  alt="hostel 3"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="w-3/4 flex">
                <img
                  src={hostel}
                  alt="hostel 4"
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6 flex">
              <div className="lg:w-[65%] md:w-[75%] pr-4 ">
                <div className="">
                  <h2 className="text-xl font-bold">
                    Bodhi Tree Hostel Pvt.Ltd
                  </h2>
                  <p className="text-[0.8rem] sm:text-[1rem]">
                    Imadol Lalitpur
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <BiSolidStar key={index} className="text-yellow-500" />
                    ))}
                    <p className="text-[0.8rem] sm:text-[1rem]"> (50)</p>
                  </div>
                  <p className="text-[0.8rem] sm:text-[1rem]">Boys Hostel</p>
                  <div className="mt-6">
                    <h1 className="text-xl font-bold  text-black">
                      Hostel Details
                    </h1>
                    <p className="mt-2 md:mt-4 md:text-justify text-black">
                      Located in the vibrant Iamdol area, Five Star Boys Hostel
                      offers modern accommodation with essential amenities for
                      students. With a commitment to service excellence, it
                      provides a conducive environment for academic success. Its
                      popularity stems from fostering a community spirit through
                      engaging activities and facilities tailored to students'
                      needs.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4 sm:grid-cols-2 text-[#616161] ">
                    <div className="relative flex items-center">
                      <BiHomeAlt className="mr-2" />
                      <p className="text-[0.8rem] sm:text-[1rem] ">
                        Rooms: "Available"
                      </p>
                    </div>
                    <div className="relative flex items-center">
                      <MdOutlineBathroom className="mr-2" />
                      <p className="text-[0.8rem] sm:text-[1rem]">
                        Bathrooms: "N/A"
                      </p>
                    </div>
                    <div className="relative flex items-center">
                      <MdLayers className="mr-2" />
                      <p className="text-[0.8rem] sm:text-[1rem]">
                        Floors: "N/A"
                      </p>
                    </div>

                    <div className="relative flex items-center">
                      <MdPeople className="mr-2" />
                      <p className="text-[0.8rem] sm:text-[1rem] ">
                        Total Students: "N/A"
                      </p>
                    </div>

                    {/* Hostel Feature */}
                    <div className="relative col-span-3 w-full md:w-auto">
                      <h2 className="font-bold text-[1.2rem] sm:text-[2rem] md:text-xl text-black mt-4">
                        Hostel Features
                      </h2>
                      <ul className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 mt-4 text-[0.8rem] sm:text-[1rem] text-[#616161]">
                        <li className="">
                          <CiParking1 className="inline mr-2 text-2xl" />{" "}
                          Parking
                        </li>
                        <li className="">
                          <MdOutlineHotTub className="inline mr-2 text-2xl" />{" "}
                          Hot Water
                        </li>
                        <li className="">
                          <SiAdguard className="inline mr-2 " /> Security Guard
                        </li>
                        <li className="">
                          <BiWifi className="inline mr-2 text-2xl" /> Reliable
                          Wifi
                        </li>
                        <li className="">
                          <LuVegan className="inline mr-2 text-2xl" /> Non-veg
                          available
                        </li>
                        <li className="">
                          <BiCctv className="inline mr-2 text-2xl" /> CCTV
                        </li>
                        <li className="">
                          <GiWashingMachine className="inline mr-2 text-2xl" />{" "}
                          Laundry
                        </li>
                        <li className=" flex items-center">
                          <GiElectric className="inline mr-2 text-2xl " /> 24hrs
                          Electricity
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mt-14 m-auto justify-center lg:w-[70%]  ">
                    <SeaterCard title="One Seater" price={5000} />
                    <SeaterCard title="Two Seater" price={8000} />
                    <SeaterCard title="Three Seater" price={11000} />
                    <SeaterCard title="Four Seater" price={16000} />
                  </div>
                </div>
              </div>

              {/* review section */}
              <div className="pl-12 lg:w-[35%] md:w-[60%]">
                <div className="flex items-center mb-4">
                  <MdOutlineReviews className="font-semibold size-8 mr-2" />
                  <h2 className="text-xl font-semibold">Rating & Reviews</h2>
                </div>
                {/* Display only 2 reviews initially */}
                {reviews.slice(0, 2).map((review) => (
                  <div
                    key={review.id}
                    className="bg-gray-100 p-4 rounded-md mb-4"
                  >
                    <div className="flex items-center mb-2">
                      <MdPersonOutline className="size-6 mr-2" />
                      <h2 className="text-xl font-semibold">{review.name}</h2>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(4)].map((_, index) => (
                        <BiSolidStar key={index} className="text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">
                      Review on : {review.date}
                    </p>
                    <p>
                      {expandedReviews.includes(review.id)
                        ? review.review
                        : `${review.review.substring(0, 70)}...`}
                    </p>
                    <p
                      className="text-[#0A6E94] font-semibold cursor-pointer mt-2"
                      onClick={() => toggleReviewExpansion(review.id)}
                    >
                      {expandedReviews.includes(review.id)
                        ? "Read Less"
                        : "Read More"}
                    </p>
                  </div>
                ))}
                {/* "View All Reviews" button */}
                <div
                  onClick={toggleModal}
                  className="flex mt-4 bg-[#E7E7E7] p-2 items-center justify-between ext-[#0A6E94] font-semibold cursor-pointer"
                >
                  <p className="">View All Reviews</p>
                  <BiChevronRight className="ml-1 w-7 h-7 text-[#0A6E94]" />
                </div>
                {/* Modal for all reviews */}
                {modalIsOpen && (
                  <div className="fixed inset-0  flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-y-auto">
                    <div className="bg-white p-4 rounded-md w-[50%] h-[75%] mt-20">
                      <div className="flex items-center mb-4">
                        <MdOutlineReviews className="font-semibold size-8 mr-2" />
                        <h2 className="text-xl font-semibold">All Reviews</h2>
                        <div className="ml-auto">
                          <button onClick={toggleModal} className="text-black ">
                            <BiXCircle className="w-6 h-6 text-red-700" />
                          </button>
                        </div>
                      </div>
                      {/* Wrap the reviews in a div with fixed height and make it scrollable */}
                      <div className="h-[60vh] overflow-y-auto">
                        {reviews.map((review) => (
                          <div
                            key={review.id}
                            className="bg-gray-100 p-4 rounded-md mb-4"
                          >
                            <div className="flex items-center mb-2">
                              <MdPersonOutline className="size-8 mr-2" />
                              <h2 className="text-xl font-semibold">
                                {review.name}
                              </h2>
                            </div>
                            <div className="flex items-center mb-2">
                              {[...Array(5)].map((_, index) => (
                                <BiSolidStar
                                  key={index}
                                  className="text-yellow-500"
                                />
                              ))}
                            </div>
                            <p className="text-sm text-gray-500">
                              Review on : {review.date}
                            </p>
                            <p>
                              {modalExpandedReviews.includes(review.id)
                                ? review.review
                                : `${review.review.substring(0, 70)}...`}
                            </p>
                            <p
                              className="text-[#0A6E94] font-semibold cursor-pointer mt-2"
                              onClick={() =>
                                toggleModalReviewExpansion(review.id)
                              }
                            >
                              {modalExpandedReviews.includes(review.id)
                                ? "Read Less"
                                : "Read More"}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Menu Section */}
                <div className="mt-8">
                  <div className="flex items-center mb-4">
                    <BiFoodMenu className="font-semibold size-8 mr-2" />
                    <h2 className="text-xl font-semibold">Menu</h2>
                  </div>

                  <img
                    src={menu}
                    alt="Hostel Menu"
                    className="w-full cursor-pointer"
                    onClick={toggleMenuModal}
                  />

                  {/* Modal for displaying the menu in larger size */}
                  {menuModalIsOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-y-auto">
                      <div className="bg-white p-4 rounded-md w-[63%] h-[80%]">
                        <div className="flex items-center mb-4">
                          <BiFoodMenu className="font-semibold size-8 mr-2" />
                          <h2 className="text-xl font-semibold">Menu</h2>
                          <div className="ml-auto">
                            <button
                              onClick={toggleMenuModal}
                              className="text-black "
                            >
                              <BiXCircle className="w-7 h-7 text-red-700" />
                            </button>
                          </div>
                        </div>
                        <img src={menu} alt="Hostel Menu" className="w-full" />
                      </div>
                    </div>
                  )}
                </div>

                {/* location section */}
                <div className="map m-auto sm:pt-3 lg:h-[500px] w-[103%] mt-8 md:h-[500px] ">
                  <div className="flex items-center mb-4">
                    <MdLocationPin className="font-semibold size-8 mr-2" />
                    <h2 className="text-xl font-semibold">Location</h2>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8741294666534!2d85.34508437632786!3d27.65936577621009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb173bf68b2d87%3A0x22a42fe8a2872c8a!2sKSW%20TECHZONE!5e0!3m2!1sen!2snp!4v1710143276574!5m2!1sen!2snp"
                    loading="lazy"
                    className="h-[80%] w-[100%] sm:pr-4"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* recommend hostel */}
        <div className="bg-gray-200 ">
          <HostelList hostels={hostels} title={"Recommended Hostel"} />
        </div>
      </Layout>
    </>
  );
};

export default HostelDetail;
