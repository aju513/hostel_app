import Select from "../components/Select/Select";

import Layout from "../layouts/Layout";
import Slider from "../components/Slider/Slider";

import HostelList from "../components/List/HostelList";
import icon_ion from "../assets/homepage/Vector.png";
import Platform from "../components/Home/Platform";
import SearchHomepage from "../components/Search/SearchHomepage";

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
  {
    title: "Cozy Cottage",
    starCount: 3,
    address: "Nagarkot",
    distance: "25.6km",
    price: 3800,
  },
  {
    title: "Cozy Cottage",
    starCount: 3,
    address: "Nagarkot",
    distance: "25.6km",
    price: 3800,
  },
];
const location = [
  {
    title: "Select your Location",
    value: "1",
  },
  {
    title: "Kathmandu",
    value: "1",
  },
  {
    title: "Lalitpur",
    value: "2",
  },
  {
    title: "Bhaktapur",
    value: "3",
  },
];
const district = [
  {
    title: "Select your District",
    value: "1",
  },
  {
    title: "Kathmandu",
    value: "1",
  },
  {
    title: "Lalitpur",
    value: "2",
  },
  {
    title: "Bhaktapur",
    value: "3",
  },
];
const price = [
  {
    title: "Select your Price",
    value: "1",
  },
  {
    title: "1000",
    value: "1",
  },
  {
    title: "2000",
    value: "2",
  },
  {
    title: "3000",
    value: "3",
  },
];
const gender = [
  {
    title: "Select your Gender",
    value: "1",
  },
  {
    title: "male",
    value: "1",
  },
  {
    title: "female",
    value: "1",
  },
];
const profession = [
  {
    title: "Filter by Profession",
    value: "1",
  },
  {
    title: "Doctor",
    value: "1",
  },
  {
    title: "Teacher",
    value: "1",
  },
];
const service = [
  {
    title: "Filter by Services",
    value: "1",
  },
  {
    title: "Doctor",
    value: "1",
  },
  {
    title: "Teacher",
    value: "1",
  },
];
const Homepage = () => {
  return (
    <Layout className={""}>
      <SearchHomepage />
      <div className="mt-3 mb-10">
        <Slider />
      </div>
      <div className=" hidden md:flex items-center justify-between ">
        <div className="w-full md:w-[93%] grid grid-cols-3 md:grid-cols-6 gap-5">
          <Select variant="white" options={district} />
          <Select variant="white" options={price} />
          <Select variant="white" options={gender} />
          <Select variant="white" options={location} />
          <Select variant="white" options={profession} />
          <Select variant="white" options={service} />
        </div>
        <div className="hidden md:flex bg-[#d9d9d9] p-3 rounded-full h-[50px] justify-center items-center">
          <img src={icon_ion} alt="" />
        </div>
      </div>

      <HostelList hostels={hostels} title={"Top Rated Hostels"} />
      <HostelList hostels={hostels} title={"Hostel for Boys"} />
      <HostelList hostels={hostels} title={"Hostel for Girls"} />

      <Platform />
    </Layout>
  );
};

export default Homepage;
