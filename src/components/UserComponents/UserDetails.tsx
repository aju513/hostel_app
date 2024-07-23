import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { UserProfileContext } from "../../context/UserProfileContext";

interface FormData {
  email: string;
  phone: string;
  gender: string;
  address: string;
  citizen_ship_img: string;
  occupation: string;
  college: string;
  course: string;
  college_address: string;
  contact_person: string;
  relation: string;
  emergency_contact_person_number: string;
}

const UserDetails: React.FC = () => {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // check if all inputs is empty
    const isEmpty = Object.values(data).every((value) => value.trim() === "");
    if (isEmpty) {
      setError("* Please fill in with valid information");
      setTimeout(() => {
        setError("");
      }, 2000);
    }

    // call API here
  };
  const userDetials = () => {
    const {
      isLoading,
      state: { formData },
      submitUserProfile,
      fetchProfile,
      updateFormData,
    } = useContext(UserProfileContext);

    useEffect(() => {
      fetchProfile();
    }, []);
  };

  return (
    <div className="w-[60rem]">
      <div className="md:mt-5 md:py-12">
        <div className=" hidden lg:block md:block">
          <div className="flex justify-end mr-12 md:mt-0 mt-4">
            <button
              className="bg-[#004587] uppercase font-semibold px-8 py-2 text-gray-200  rounded-xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Update Profile
            </button>
          </div>
          <p
            className="text-[#DB2F2F] mt-2 md:text-md text-sm font-semibold text-end mr-20"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            *Incomplete Profile
          </p>
        </div>
        {/* Separator line */}
        <div className="flex mt-6 justify-center">
          <div className="w-full h-[0.05rem] rounded-full bg-gray-900 inline-flex"></div>
        </div>
        {/* Form start */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:px-16 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 mt-4  h-auto">
            {/* Email section */}
            <div className="h-20 flex flex-col rounded-lg p-4 shadow-lg border border-gray-300 shadow-[#828282]">
              <label
                htmlFor="email"
                className="text-gray-900  font-semibold text-sm md:text-md"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                className="text-gray-500 font-semithin"
                placeholder="email@email.com"
                {...register("email", { required: true })} // Add required validation
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}{" "}
              {/* Display error message */}
            </div>
            {/* Phone section */}
            <div className="h-20 flex flex-col rounded-lg  bg-[#ffffff]  p-4 shadow-lg border border-gray-300 shadow-[#828282]">
              <label
                htmlFor="phone"
                className="text-gray-900  font-semibold text-sm md:text-md"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="text-gray-500 font-semithin"
                placeholder="9876543210"
                {...register("phone", { required: true })} // Add required validation
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              {errors.phone && (
                <span className="text-red-500">Phone is required</span>
              )}{" "}
              {/* Display error message */}
            </div>
            {/* Gender section */}
            <div className="h-20 flex flex-col rounded-lg  bg-[#ffffff]  p-4 shadow-lg border border-gray-300 shadow-[#828282]">
              <label
                htmlFor="gender"
                className="text-gray-900  font-semibold text-sm md:text-md"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Gender
              </label>
              <input
                id="gender"
                type="text"
                className="text-gray-500 font-semithin"
                placeholder="Male"
                {...register("gender", { required: true })} // Add required validation
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              {errors.gender && (
                <span className="text-red-500">Gender is required</span>
              )}{" "}
              {/* Display error message */}
            </div>
            {/* Address section */}
            <div className="h-20 flex flex-col rounded-lg bg-[#ffffff] p-4 shadow-lg border border-gray-300 shadow-[#828282]">
              <label
                htmlFor="address"
                className="text-gray-900  font-semibold text-sm md:text-md"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                className="text-gray-500 font-semithin"
                placeholder="Janakpur"
                {...register("address", { required: true })} // Add required validation
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              {errors.address && (
                <span className="text-red-500">Address is required</span>
              )}{" "}
              {/* Display error message */}
            </div>
            {/* Citizenship Image section */}

            <div className="h-20 flex flex-col rounded-lg  bg-[#ffffff]  p-4 shadow-lg border border-gray-300 shadow-[#828282]">
              <label
                htmlFor="citizen_ship_img"
                className="text-gray-900  font-semibold text-sm md:text-md"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Citizenship Image
              </label>
              <div className="flex items-center">
                <input
                  id="citizen_ship_img"
                  type="file"
                  className="text-gray-500 font-semithin file:hidden"
                  placeholder="Image.png"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
                <MdOutlineFileUpload className="text-3xl" />
              </div>
            </div>
            {/* Occupation section */}
            <div className="h-20 flex flex-col rounded-lg  bg-[#ffffff]  p-4 shadow-lg border border-gray-300 shadow-[#828282]">
              <label
                htmlFor="occupation"
                className="text-gray-900  font-semibold text-sm md:text-md"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Occupation
              </label>
              <input
                id="occupation"
                type="text"
                className="text-gray-500 font-semithin"
                placeholder="Student"
                {...register("occupation", { required: true })} // Add required validation
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              {errors.occupation && (
                <span className="text-red-500">Occupation is required</span>
              )}{" "}
              {/* Display error message */}
            </div>

            <div className="h-20 flex flex-col rounded-lg bg-[#ffffff]  p-4 shadow-lg border border-gray-300 shadow-[#828282]">
              <label
                htmlFor="college"
                className="text-gray-900   font-semibold text-sm md:text-md"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                College
              </label>
              <input
                id="college"
                type="text"
                className="text-gray-500 font-semithin"
                placeholder="Jai Shree Ram College"
                {...register("college")}
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              {errors.occupation && (
                <span className="text-red-500">college is required</span>
              )}{" "}
              {/* Display error message */}
            </div>

            {/* Course section */}
            <div className="h-20 flex flex-col rounded-lg  bg-[#ffffff]  p-4 shadow-lg border border-gray-300 shadow-[#828282]">
              <label
                htmlFor="course"
                className="text-gray-900   font-semibold text-sm md:text-md"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Course
              </label>
              <input
                id="course"
                type="text"
                className="text-gray-500 font-semithin"
                placeholder="B.com"
                {...register("course")}
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              {errors.occupation && (
                <span className="text-red-500">Course is required</span>
              )}{" "}
              {/* Display error message */}
            </div>

            {/* College Address section */}
            <div className="h-20 flex flex-col rounded-lg  bg-[#ffffff]  p-4 shadow-lg border border-gray-300 shadow-[#828282]">
              <label
                htmlFor="course"
                className="text-gray-900 font-semibold text-sm md:text-md md:font-semibold "
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                College Address
              </label>
              <input
                id="college_address"
                type="text"
                className="text-gray-500 font-semithin"
                placeholder="Janakpur"
                {...register("college_address")}
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              {errors.occupation && (
                <span className="text-red-500">
                  College Address is required
                </span>
              )}{" "}
              {/* Display error message */}
            </div>

            {/* contact_person */}
            <div className="h-24 flex flex-col rounded-lg bg-[#ffffff]  p-4 shadow-lg border border-gray-300 shadow-[#828282]">
              <label
                htmlFor="contact_person"
                className="text-gray-900 font-semibold text-sm md:text-md md:font-semibold "
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Emergency Contact Person
              </label>
              <input
                id="contact_person"
                type="text"
                className="text-gray-500 font-semithin"
                placeholder="Virat Kohli"
                {...register("contact_person")}
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              {errors.occupation && (
                <span className="text-red-500">
                  Emergency contact person is required
                </span>
              )}{" "}
              {/* Display error message */}
            </div>

            {/* Relation */}
            <div className="h-24 flex flex-col rounded-lg  bg-[#ffffff] p-4 shadow-lg border border-gray-300 shadow-[#828282]">
              <label
                htmlFor="relation"
                className="text-gray-900 font-semibold text-sm md:text-md md:font-semibold "
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Relation
              </label>
              <input
                id="relation"
                type="text"
                className="text-gray-500 font-semithin"
                placeholder="Brother"
                {...register("relation")}
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              {errors.occupation && (
                <span className="text-red-500">Relation is required</span>
              )}{" "}
              {/* Display error message */}
            </div>

            {/* Emergency Contact Person Number section */}
            <div className="h-24 flex flex-col rounded-lg  bg-[#ffffff]  p-4 shadow-lg border border-gray-300 shadow-[#828282]">
              <label
                htmlFor="emergency_contact_person_number"
                className="text-gray-900 text-sm md:text-md md:font-semibold font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Emergency Contact Person No.
              </label>
              <input
                id="emergency_contact_person_number"
                type="text"
                className="text-gray-500 font-semithin"
                placeholder="9876543210"
                {...register("emergency_contact_person_number")}
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              {errors.occupation && (
                <span className="text-red-500">
                  Emergency Contact Person Number is required
                </span>
              )}{" "}
              {/* Display error message */}
            </div>
          </div>
          {error && (
            <h1 className="text-red-400 text-md font-semibold text-center mt-4">
              {error}
            </h1>
          )}
          {/* Save and Close buttons */}
          <div className="flex mt-12 mb-8 justify-center space-x-4 flex-wrap">
            <Link
              to="#"
              className="bg-gray-200 md:px-5 md:py-3 px-4 py-2 rounded-xl text-gray-900 md:text-sm border border-gray-300 shadow-xl font-semibold uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Close
            </Link>
            <button
              type="submit"
              className="bg-[#004587] md:px-5 md:py-3 px-4 py-2 rounded-xl text-gray-200 md:text-sm font-semibold uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
