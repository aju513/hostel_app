import React, { useState } from "react";
import { HostelSearchCard } from "../Card/Card";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

interface Hostel {
  address: string;
  title: string;
  price: number[];
  room: number[];
  category: string[];
}

const BookmarkCard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(8); // Number of cards per page
  const [hostels] = useState<Hostel[]>([
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    {
      address: "Kathmandu",
      title: "Jai Shree Ram Hostel",
      price: [5000, 10000],
      room: [1, 2],
      category: ["Men", "Women"],
    },
    // Add more hostels here...
  ]);

  // Function to handle page click
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
    <div className="w-[60rem]">
      <div className="p-1">
        <div className="md:px-2 md:py-2">
          <h1 className="md:text-lg md:text-start text-center text-md font-bold">
            Bookmark
          </h1>
        </div>
        <div>
          {hostels
            .slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage)
            .map((hostel, index) => (
              <HostelSearchCard
                key={index}
                address={hostel.address}
                title={hostel.title}
                price={hostel.price}
                room={hostel.room}
                category={hostel.category}
              />
            ))}
        </div>
        <div className="flex justify-between md:mt-8 mt-4">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className=" text-gray-700 cursor-pointer py-2 px-4 mx-1 rounded-l"
          >
            <FaCircleArrowLeft className="md:text-3xl  text-2xl" />
          </button>
          {/* Pagination */}
          <ul className="flex">
            {[...Array(Math.ceil(hostels.length / cardsPerPage)).keys()].map(
              (number) => (
                <li key={number}>
                  <button
                    className={`${
                      currentPage === number + 1
                        ? "bg-gray-900"
                        : "bg-gray-300 shadow-xl  text-gray-900"
                    } text-gray-200  py-2 px-4 mx-1 rounded`}
                    onClick={() => handlePageClick(number + 1)}
                  >
                    {number + 1}
                  </button>
                </li>
              )
            )}
          </ul>
          {/* Next Button */}
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(hostels.length / cardsPerPage)}
            className=" text-gray-700 cursor-pointer  py-2 px-4 mx-1 rounded-r"
          >
            <FaCircleArrowRight className="md:text-3xl text-2xl" />
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default BookmarkCard;
