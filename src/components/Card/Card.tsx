import React, { useState } from "react";
import hostel from "../../assets/hostel.jpeg";
import bookMarkIcon from "../../assets/bookMark.jpg";
import { BiSolidBookmark, BiSolidStar } from "react-icons/bi";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  starCount?: number;
  address?: string;
  price?: number[];
  room?: number[] | undefined;
  category?: string[];
  profession?: string;
}

const HostelSearchCard: React.FC<CardProps> = ({ title, address }) => {
  const showBookMark = false;
  return (
    <div className="block lg:flex bg-[#d9d9d9] rounded-lg font-light mt-7 relative">
      <img
        src={bookMarkIcon}
        alt=""
        className={`absolute right-0 text-blue-700 text-2xl ${
          showBookMark ? "block " : "hidden"
        }  transition-opacity ease-in-out delay-150 duration-300 `}
      />

      <img src={hostel} alt="" className="h-72 w-96 rounded-lg" />
      <div className="m-2 text-xl space-y-2 ml-4 w-[700px]">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex text-xl">
          <BiSolidStar className="text-yellow-500" />
          <BiSolidStar className="text-yellow-500" />
          <BiSolidStar className="text-yellow-500" />
          <BiSolidStar className="text-yellow-500" />
          <BiSolidStar className="text-yellow-500" />
        </div>
        <p className="">{address}</p>
        <p className="text-xl">
          Room Available:{" "}
          {/* <span className="font-medium">{`${room[0]} Seater, ${room[1]} Seater`}</span> */}
        </p>
        <p className="text-xl">
          Categories : <span className="font-medium">Men/Women</span>
        </p>
        <div className="flex md:flex-col lg:flex-row justify-between">
          <p className="text-xl">Profession : Student Only</p>
          <p className="text-xl font-normal">
            Best Price:
            <span className="text-[#004aad]">Rs 5000 upto Rs 10000</span>
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#004aad] text-white px-4 py-2 mx-4 rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

const SliderCard: React.FC<CardProps> = ({ title, starCount, address }) => {
  const [showBookMark, setShowBookMark] = useState(false);
  return (
    <div className="my-4">
      <div
        className="shadow-2xl flex flex-col border border-gray-400 rounded-lg w-[97%] m-auto bg-white relative "
        onPointerEnter={() => setShowBookMark(true)}
        onPointerLeave={() => setShowBookMark(false)}
      >
        <BiSolidBookmark
          className={`absolute right-0 text-blue-700 text-2xl ${
            showBookMark ? "block " : "hidden"
          }  transition-opacity ease-in-out delay-150 duration-300 `}
        />

        <img
          src={hostel}
          alt=""
          className="h-40 md:h-52 rounded-lg rounded-b-none"
        />

        <div className="flex flex-col p-2">
          <h3 className="text-sm lg:text-lg font-bold">{title}</h3>
          <div className="flex justify-between">
            <p className="text-sm lg:text-sm">{address}</p>
            <div className="flex justify-center items-center mr-2">
              <BiSolidStar className="text-yellow-500" />
              {starCount}
            </div>
          </div>

          <p className="text-sm lg-text-lg">Categories :Men/Women</p>
          <p className="text-sm lg-text-lg ">
            Best Price:{" "}
            <span className="text-lg lg:text-xl  text-[#4077c1] ml-2 font-semibold">
              Rs.5000
            </span>
          </p>
          <Link
            to="/view"
            className="bg-[#004aad] text-white p-1 rounded-md hover:translate-y-1 transition duration-300 ease-in-out w-[90%] m-auto mt-2"
          >
            <p className="text-center">Book Now</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { HostelSearchCard, SliderCard };
