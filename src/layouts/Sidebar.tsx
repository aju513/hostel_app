import { BookmarkIcon, HomeIcon } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const selected = useState<boolean>(true);
  return (
    <div className="bg-[#ffffff] w-[200px] h-[600px] box-shadow m-1 rounded-md">
      <div className="w-[80%] m-auto">
        <div className="hover:bg-[#d9ecf4] my-4 p-2 rounded-md">
          <a href="" className="">
            <div
              className={`flex items-center  ${
                selected ? "text-[#4487e0]" : "text-[#eee]"
              }`}
            >
              <HomeIcon className="text-xl" />
              <p className="  text-lg mt-0.5">Dashboard</p>
            </div>
          </a>
        </div>
        <div className="hover:bg-[#d9ecf4] my-4 p-2 rounded-md">
          <a href="" className="">
            <div
              className={`flex items-center  text-gray-500
            `}
            >
              <BookmarkIcon className="text-lg" />
              <p className="  text-lg mt-0.5">Hostel</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
