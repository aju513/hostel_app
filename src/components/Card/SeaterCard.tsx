import React, { useState, useEffect, useRef } from "react";
import seater from "../../assets/1seater.png";
import seater1 from "../../assets/seater/Rectangle 20.png";
import seater2 from "../../assets/seater/Rectangle 35.png";
import seater3 from "../../assets/seater/Rectangle 36.png";
import cancel_icon from "../../assets/cancel_icon.png";
import seater4 from "../../assets/seater/Rectangle 34.png";
import { BiWifi } from "react-icons/bi";
import { MdBalcony, MdBathroom } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../components/Card/SeaterCard.css";
import { Link } from "react-router-dom";

interface SeaterCardProps {
  title: string;
  price: number;
}

const SeaterCard: React.FC<SeaterCardProps> = ({ title, price }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [largeImage, setLargeImage] = useState(seater1);
  const [expanded, setExpanded] = useState(false);

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

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      <div className="shadow-2xl border-gray-400 rounded-lg  flex flex-col md:w-40 md:h-56 lg:w-64 lg:h-64  ">
        {modalIsOpen && <div className="modal-background" />}
        <img
          src={seater}
          alt=""
          className="lg:h-72   md:h-36 w-full rounded-t-lg object-cover"
        />
        <div className="shadow-2x flex justify-between items-center p-4">
          <div>
            <h3 className="text-xs md:text-lg font-bold">{title}</h3>
            <p className="text-gray-600 text-xs md:text-sm">Rs. {price}</p>
          </div>
          <button
            onClick={toggleModal}
            className="bg-[#004AAD] text-white py-1 px-2 md:py-1 md:px-3  rounded-md text-xs md:text-sm"
          >
            Book Now
          </button>
        </div>
        {modalIsOpen && (
          //small screen
          <div ref={modalRef} className="">
            <div
              ref={modalRef}
              className="md:hidden lg:hidden fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2  w-[90%]  mt-2 shadow-lg shadow-gray-400 flex flex-col items-center bg-white overflow-y-auto max-h-screen"
            >
              <div className="container mx-auto  ">
                <img
                  src={cancel_icon}
                  className="close-icon mr-[100px]"
                  onClick={toggleModal}
                ></img>
                {/* Full-size image */}
                <div className="relative">
                  <img
                    src={largeImage}
                    alt="Large seater"
                    className="w-full mb-4 h-40"
                  />
                </div>
                {/* Four smaller images */}
                <div className="flex justify-between cursor-pointer">
                  <img
                    src={seater1}
                    alt="seater 1"
                    className="w-1/6 rounded-lg h-10 max-w-xxs ml-10"
                    onClick={() => handleImageClick(seater1)}
                  />
                  <img
                    src={seater2}
                    alt="seater 2"
                    className="w-1/6 rounded-lg mx-1 h-10 max-w-xxs"
                    onClick={() => handleImageClick(seater2)}
                  />
                  <img
                    src={seater3}
                    alt="seater 4"
                    className="w-1/6 rounded-lg mx-1 h-10 max-w-xxs"
                    onClick={() => handleImageClick(seater3)}
                  />
                  <img
                    src={seater4}
                    alt="seater 3"
                    className="w-1/6 rounded-lg h-10 max-w-xxs mr-10"
                    onClick={() => handleImageClick(seater4)}
                  />
                </div>
                <div className="bg-[#F6F6F6]  mt-3 h-[10%] ">
                  <div className=" ml-2 mr-2">
                    <h3 className="text-xl font-bold">One Seater Details</h3>
                    <div className="text-justify pb-4">
                      {
                        "In this cozy one-seater haven, tranquility reigns supreme. With just enough space for one, it's a personal retreat tailored to your needs. "
                      }
                      {expanded ? (
                        <span>
                          {
                            " Every corner whispers serenity, inviting you to unwind. after a long day. A place where thoughts roam freely and dreams take flight. Welcome to your private oasis within the bustling hostel walls."
                          }
                        </span>
                      ) : (
                        <Link
                          to="#"
                          onClick={toggleExpanded}
                          className="text-[#004aad] ml-6 "
                        >
                          {" View all"}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-[#F6F6F6]  mt-3 ">
                  <div className=" ml-2 mr-2">
                    <h2 className="py-1 text-xl font-bold">
                      One Seater Facilities
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="col-span-1 text-[1rem]">
                        <div className="flex items-center justify-start gap-1 ">
                          <BiWifi />
                          Personal WIFI
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="flex items-center justify-start gap-1">
                          <MdBalcony />
                          Personal Balcony
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="flex items-center justify-start gap-1">
                          <MdBathroom />
                          Personal Bathroom
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="flex items-center justify-start gap-1">
                          <GiWashingMachine />
                          Laundry
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-4 mt-4 h-24 bg-[#F6F6F6]">
                  <div className="mr-3">
                    <p className="text-[004aad#] text-xl ">Rs 1000.0</p>
                    <button className="bg-[#004aad] text-white p-2  ">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* larger screen */}

            <div className="hidden lg:block md:block fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-[50%]  lg:h-[750px]  md:h-[630px] shadow-lg shadow-gray-400  flex-col items-center  bg-white  overflow-y-auto max-h-screen">
              <div className="w-full  justify-center gap-1">
                <Slider {...settings}>
                  <div>
                    <div className="flex">
                      <img
                        src={seater1}
                        alt="Image 1"
                        className="w-[50%] lg:h-[300px] md:h-[200px] object-cover"
                      />
                      <img
                        src={seater2}
                        alt="Image 2"
                        className="w-[50%] lg:h-[300px] md:h-[200px]  object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex">
                      <img
                        src={seater3}
                        alt="Image 3"
                        className="w-[50%] lg:h-[300px] md:h-[200px]  object-cover"
                      />
                      <img
                        src={seater4}
                        alt="Image 4"
                        className="w-[50%] lg:h-[300px] md:h-[200px]  object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex">
                      <img
                        src={seater1}
                        alt="Image 3"
                        className="w-[50%] lg:h-[300px] md:h-[200px]  object-cover"
                      />
                      <img
                        src={seater2}
                        alt="Image 4"
                        className="w-[50%] lg:h-[300px] md:h-[200px]  object-cover"
                      />
                    </div>
                  </div>
                </Slider>
              </div>

              <div className="bg-[#F6F6F6] mt-3">
                <div className="w-[95%] lg:w-[90%]  m-auto  mt-8">
                  <h3 className="text-xl font-bold">One Seater Details</h3>
                  <p className="text-justify  pb-4">
                    “In this cozy one-seater haven, tranquility reigns supreme.
                    With just enough space for one, it's a personal retreat
                    tailored to your needs. Every corner whispers serenity,
                    inviting you to unwind after a long day. A place where
                    thoughts roam freely and dreams take flight. Welcome to your
                    private oasis within the bustling hostel walls."
                  </p>
                </div>
              </div>
              <div className="bg-[#F6F6F6] w-full mt-4 lg:h-[30%] ">
                <div className="w-[95%] lg:w-[90%]  m-auto ">
                  <img
                    src={cancel_icon}
                    className="close-icon-outside fixed top-3 right-5 cursor-pointer"
                    onClick={toggleModal}
                  ></img>
                  <div className="">
                    <h2 className="py-5 text-xl font-bold">
                      One Seater Facilities
                    </h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-4">
                      <div className="col-span-1">
                        <div className="flex items-center justify-start gap-1 ">
                          <BiWifi />
                          Personal WIFI
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="flex items-center justify-start gap-1">
                          <MdBalcony />
                          Personal Balcony
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="flex items-center justify-start gap-1">
                          <MdBathroom />
                          Personal Bathroom
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="flex items-center justify-start gap-1">
                          <GiWashingMachine />
                          Laundry
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end mr-10 gap-4 mt-4 lg:h-24 md:h-20">
                      <p className="text-[#004aad] text-xl">Rs 1000.0</p>
                      <button className="bg-[#004aad] text-white lg:p-2 md:p-1  ">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeaterCard;
