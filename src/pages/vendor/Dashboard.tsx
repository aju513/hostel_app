import React from "react";

import Layout from "../../layouts/Layout";
import Sidebar from "../../layouts/Sidebar";
import ProgressBar from "../../components/charts/ProgressBar";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div className="flex mt-10">
          <Sidebar />
          <div className="w-full">
            <div className="box-shadow h-12 flex justify-between items-center mx-10 px-3 rounded">
              <div className=""></div>
              <div className=""> Thursday,March 11,2024</div>
              <div className="">
                <button className="bg-[#004aad] rounded-lg p-1 py-2 text-white  border-none">
                  Create Booking
                </button>
              </div>
            </div>
            <div className="m-10 my-5 bg-[#fff] box-shadow rounded-md">
              <div className="p-4">
                <h2 className="text-3xl">Hostels</h2>
                <div className="grid grid-cols-4 gap-9 mt-5">
                  <div className="border border-gray-300 rounded-md p-2 px-4 flex flex-col gap-2">
                    <h2 className="text-gray-500 font-medium text-xl">
                      Girls Hostel
                    </h2>
                    <p className="text-xl">
                      <span className="text-3xl font-bold">2</span>/25
                    </p>
                    <h2 className="text-gray-500 font-medium text-xl">
                      Occupied Rooms: 20
                    </h2>
                    <h2 className="text-gray-500 font-medium text-xl">
                      Available Rooms: 3
                    </h2>
                  </div>
                  <div className="border border-gray-300 rounded-md p-2 px-4 flex flex-col gap-2">
                    <h2 className="text-gray-500 font-medium text-xl">
                      Girls Hostel
                    </h2>
                    <p className="text-xl">
                      <span className="text-3xl font-bold">2</span>/25
                    </p>
                    <h2 className="text-gray-500 font-medium text-xl">
                      Occupied Rooms: 20
                    </h2>
                    <h2 className="text-gray-500 font-medium text-xl">
                      Available Rooms: 3
                    </h2>
                  </div>
                  <div className="border border-gray-300 rounded-md p-2 flex flex-col gap-2">
                    <h2 className="text-gray-500 font-medium text-xl">
                      Girls Hostel
                    </h2>
                    <p className="text-xl">
                      <span className="text-3xl font-bold">2</span>/25
                    </p>
                    <h2 className="text-gray-500 font-medium text-xl">
                      Occupied Rooms: 20
                    </h2>
                    <h2 className="text-gray-500 font-medium text-xl">
                      Available Rooms: 3
                    </h2>
                  </div>
                  <div className="border border-gray-300 rounded-md p-2 flex flex-col gap-2">
                    <h2 className="text-gray-500 font-medium text-xl">
                      Girls Hostel
                    </h2>
                    <p className="text-xl">
                      <span className="text-3xl font-bold">2</span>/25
                    </p>
                    <h2 className="text-gray-500 font-medium text-xl">
                      Occupied Rooms: 20
                    </h2>
                    <h2 className="text-gray-500 font-medium text-xl">
                      Available Rooms: 3
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 m-10 gap-10 ">
              <div className="col-span-2 bg-[#fff] box-shadow h-60 rounded-md"></div>
              <div className="col-span-1 h-60 bg-[#fff] box-shadow rounded-md  ">
                <h1 className="text-start px-6 py-3/4 text-xl font-semibold">
                  Floor Status
                </h1>
                <div className="flex justify-center items-center">
                  <ProgressBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
