import Layout from "../layouts/Layout";
import img1 from "../assets/seater/Rectangle 20.png";
import img2 from "../assets/seater/Rectangle 34.png";
import img3 from "../assets/seater/Rectangle 35.png";
import img4 from "../assets/seater/Rectangle 36.png";
import { BiWifi } from "react-icons/bi";
import { MdBalcony, MdBathroom } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";

const Seater = () => {
  return (
    <Layout>
      <div className="">
        <h2 className="text-2xl my-4 font-bold">One Seater</h2>
        <div className="grid grid-cols-2 gap-y-3">
          <img src={img1} alt="" />
          <img src={img4} alt="" />
          {/* 2 */}
          <div className="w-4/5">
            <h3 className="text-xl font-bold">One Seater Details</h3>
            <p className="text-justify">
              “In this cozy one-seater haven, tranquility reigns supreme. With
              just enough space for one, it's a personal retreat tailored to
              your needs. Every corner whispers serenity, inviting you to unwind
              after a long day. A place where thoughts roam freely and dreams
              take flight. Welcome to your private oasis within the bustling
              hostel walls."
            </p>
          </div>
          <img src={img2} alt="" />
          {/* 3 */}
          <div className="">
            <h2 className="py-5 text-xl font-bold">One Seater Facilities</h2>
            <div className="grid grid-cols-2 w-[60%] gap-4">
              <div className="">
                <div className="flex items-center justify-start gap-1">
                  <BiWifi />
                  Personal WIFI
                </div>
                <div className="flex items-center justify-start gap-1">
                  <MdBalcony />
                  Personal Balcony
                </div>
                <div className="flex items-center justify-start gap-1">
                  <MdBathroom />
                  Personal Bathroom
                </div>
                <div className="flex items-center justify-start gap-1">
                  <GiWashingMachine />
                  Laundary
                </div>
              </div>
              <div className="">
                <div className="flex items-center justify-start gap-1">
                  <BiWifi />
                  Personal WIFI
                </div>
                <div className="flex items-center justify-start gap-1">
                  <MdBalcony />
                  Personal Balcony
                </div>
                <div className="flex items-center justify-start gap-1">
                  <MdBathroom />
                  Personal Bathroom
                </div>
                <div className="flex items-center justify-start gap-1">
                  <GiWashingMachine />
                  Laundary
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end mr-10 gap-4">
              <p className="text-[#004aad] text-xl">Rs 1000.0</p>
              <button className="bg-[#004aad] text-white p-2 ">Book Now</button>
            </div>
          </div>
          <img src={img3} alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default Seater;
