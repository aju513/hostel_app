import React, { useState } from "react";
import VendorInputField from "../../../components/Input/VendorInputField";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import Layout from "../../../layouts/Layout";
import { CrossIcon, DeleteIcon, HelpCircle, PlusIcon } from "lucide-react";
import { MdDelete } from "react-icons/md";
import FileInput from "../../../components/Input/VendorFileInput";

const AddRoom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    unregister,
    setValue,
    watch,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "room",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 m-0">
        <ul className="pt-4">
          {fields.map((item, index) => (
            <li
              key={item.id}
              className="relative bg-white w-[80%] p-5 m-auto rounded-md my-4"
            >
              <button
                type="button"
                onClick={() => remove(index)}
                className="w-full"
              >
                <MdDelete className="text-red-600 text-2xl absolute right-28" />
              </button>

              <div className="grid grid-cols-2">
                <VendorInputField
                  register={register}
                  title={"Room Id"}
                  name={`room[${index}].room_id`}
                  type={"text"}
                  errors={errors}
                  placeholder={"Enter Id"}
                  containerStyles=""
                />
                <VendorInputField
                  register={register}
                  title={"No of beds"}
                  name={`room[${index}].no_of_beds`}
                  type={"text"}
                  errors={errors}
                  placeholder={""}
                  containerStyles=""
                />
                <div className="flex flex-col gap-2 w-[80%] m-auto">
                  <label>Type</label>
                  <div className="radio flex gap-5 border border-gray-300 pt-2 px-2 h-12 rounded-md ">
                    <label>
                      <input
                        type="radio"
                        {...register(`room[${index}].type`)}
                        value="Basic"
                      />{" "}
                      Girls
                    </label>
                    <label>
                      <input
                        type="radio"
                        {...register(`room[${index}].type`)}
                        value="Standard"
                      />{" "}
                      Boys
                    </label>
                    <label>
                      <input
                        type="radio"
                        {...register(`room[${index}].type`)}
                        value="Premium"
                      />{" "}
                      Both
                    </label>
                  </div>
                </div>

                <VendorInputField
                  register={register}
                  title={"Price"}
                  name={`room[${index}].price`}
                  type={"text"}
                  errors={errors}
                  placeholder={""}
                  containerStyles=""
                />

                <FileInput
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  multiple
                  name={`room[${index}].image`}
                  register={register}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="w-[80%] m-auto flex justify-between">
          <button
            type="button"
            onClick={() => append({ price: "1000" })}
            className="flex bg-green-700 rounded-md p-2 my-2 text-bold items-center text-white"
          >
            <PlusIcon /> Add More
          </button>
          <button
            type="submit"
            className="flex bg-blue-500 text-white rounded-md p-2 px-3 my-2 text-bold items-center"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddRoom;
