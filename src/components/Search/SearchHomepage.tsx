import { IoSearch } from "react-icons/io5";
import filter from "../../assets/search/filter.png";
import { Link } from "react-router-dom";
const SearchHomepage = () => {
  return (
    <>
      <div className=" px-4 py-2 mt-5 text-gray-800 w-72 md:hidden">
        <h2 className="text-xl font-bold mb-2">Find Your Nearby Hostels</h2>
      </div>
      <div className=" w-[80%] m-auto md:hidden flex justify-center items-center">
        <div className="bg-[#d9d9d9] p-2 m-0 rounded-l-lg">
          <IoSearch className="text-2xl" />
        </div>
        <Link to="/Hostel">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#d9d9d9] text-center w-full p-2 rounded-r-lg"
          />
        </Link>
        <img src={filter} alt="" />
      </div>
    </>
  );
};

export default SearchHomepage;
