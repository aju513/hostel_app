import { useContext, useEffect } from "react";

import VendorInputField from "../../../components/Input/VendorInputField";
import { useForm } from "react-hook-form";

import VendorTextArea from "../../../components/Input/VendorTextArea";
import Layout from "../../../layouts/Layout";
import FileInput from "../../../components/Input/VendorFileInput";
import { HostelContext } from "../../../context/HostelContext";
import * as actiontypes from "../../../constant/HostelConstant";
interface FormData {
  name: string;
  address: string;
  phone: string;
  email: string;
  type: string;
  rooms: string;
  booked_rooms: string;
  bedded_rooms: number;
  description: string;
  breakfast_time: string;
  lunch_time: string;
  dinner_time: string;
  closing_time: string;
  veg: boolean;
}
const AddHostel = () => {
  const { SubmitHostelData, dispatch } = useContext(HostelContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: any) => {
    dispatch({ type: actiontypes.SET_HOSTEL_DATA, payload: data });
    SubmitHostelData();
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <Layout>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 w-[80%] m-auto">
            <VendorInputField
              register={register}
              title={"name"}
              name={"name"}
              type={"text"}
              errors={errors}
              placeholder={"Enter hostel name"}
              containerStyles=""
            />

            <VendorInputField
              register={register}
              title={"address"}
              name={"address"}
              type={"text"}
              errors={errors}
              placeholder={"Enter your hostel address"}
              containerStyles=""
            />

            <VendorInputField
              register={register}
              title={"phone"}
              name={"mobile_no"}
              type={"text"}
              errors={errors}
              placeholder={"Enter phone number"}
              containerStyles=""
            />

            <VendorInputField
              register={register}
              title={"email"}
              name={"email"}
              type={"email"}
              errors={errors}
              placeholder={"Enter email ID"}
              containerStyles=""
            />
            <div className="flex flex-col gap-2 w-[80%] m-auto">
              <label>Type</label>
              <div className="radio flex gap-5 border border-gray-300 pt-2 px-2 h-12 rounded-md ">
                <label>
                  <input type="radio" {...register("type")} value="GIRL" />
                  Girls
                </label>
                <label>
                  <input type="radio" {...register("type")} value="BOYS" /> Boys
                </label>
                <label>
                  <input type="radio" {...register("type")} value="BOTH" /> Both
                </label>
              </div>
            </div>

            <VendorInputField
              register={register}
              title={"Total Rooms"}
              name={"no_of_times"}
              type={"number"}
              errors={errors}
              placeholder={"Enter the total no of rooms"}
              containerStyles=""
            />

            <VendorInputField
              register={register}
              title={"Booked Rooms"}
              name={"booked_rooms"}
              type={"text"}
              errors={errors}
              placeholder={"Enterthe total no of Booked Rooms"}
              containerStyles=""
            />
            <div className="w-[80%] m-auto flex gap-2">
              Veg
              <input type="checkbox" {...register("veg")} />
            </div>

            <FileInput
              accept="image/png, image/jpg, image/jpeg, image/gif"
              name={`hostel_image`}
              register={register}
              label={"Hostel Image"}
            />
            <FileInput
              accept="image/png, image/jpg, image/jpeg, image/gif"
              name={`menu_image`}
              register={register}
              label={"Hostel Menu"}
            />
            <VendorTextArea
              register={register}
              title={"Description"}
              name={"description"}
              type={"text"}
              errors={errors}
              placeholder={"Enter hotel description"}
              containerStyles="col-span-2"
            />

            <div className="col-span-2 border border-gray-300 p-3 rounded-md w-[90%] m-auto">
              <div className="flex justify-between">
                <h2 className="text-xl mx-2">Food Timings</h2>
                <h2 className="text-xl mx-2">Closing Timings</h2>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-6">
                  <div className="border border-gray-300 p-2 m-2 rounded-md">
                    <p>Breaksfast Timing</p>
                    <input type="time" {...register("breakfast_time")} />
                  </div>
                  <div className="border border-gray-300 p-2 m-2 rounded-md">
                    <p>Lunch Timing</p>
                    <input type="time" {...register("breakfast_time")} />
                  </div>
                  <div className="border border-gray-300 p-2 m-2 rounded-md">
                    <p>Dinner Timing</p>
                    <input type="time" {...register("lunch_time")} />
                  </div>
                </div>
                <div className="border border-gray-300 p-2 m-2 rounded-md">
                  <p>Closing Timing</p>
                  <input type="time" {...register("closing_time")} />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="flex bg-blue-500 text-white rounded-md p-2 px-3 my-2 text-bold items-center"
          >
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddHostel;
