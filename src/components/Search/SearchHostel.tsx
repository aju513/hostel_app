import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import filter from "../../assets/search/filter.png";
import Select from "../../components/Select/Select";
import FilterOption from "./FilterOption"; 

const SearchHostel = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  console.log(FilterOption); 

  return (
    <>
      <div className="px-4 py-2 mt-5 text-gray-800 w-72 md:hidden">
        <h2 className="text-xl font-bold mb-2">Find Your Nearby Hostels</h2>
      </div>
      <div className="w-[80%] m-auto md:hidden flex justify-center items-center">
        <div className="bg-[#d9d9d9] p-2 m-0 rounded-l-lg">
          <IoSearch className="text-2xl" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#d9d9d9] text-center w-full p-2 rounded-r-lg"
        />
        <img src={filter} alt="" onClick={toggleFilters} />
      </div>
      {showFilters && (
        <div className="w-full md:w-[93%] grid grid-cols-3 md:grid-cols-6 mt-4 gap-5 lg:hidden">
          <Select variant="white" options={FilterOption.district} />
          <Select variant="white" options={FilterOption.price} />
          <Select variant="white" options={FilterOption.gender} />
          <Select variant="white" options={FilterOption.location} />
          <Select variant="white" options={FilterOption.profession} />
          <Select variant="white" options={FilterOption.service} />
        </div>
      )}
    </>
  );
};

export default SearchHostel;
