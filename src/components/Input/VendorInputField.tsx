import React from "react";
import { twMerge } from "tailwind-merge";
interface InputFieldProps {
  errors: Record<string, any>;
  register: any;
  title: string;
  type: string;
  placeholder?: string;
  className?: string;
  pattern?: RegExp;
  name: string;
  inputStyles?: string;
  containerStyles?: string;
}
const VendorInputField: React.FC<InputFieldProps> = ({
  errors,
  register,
  title,
  name,
  type,
  placeholder,
  inputStyles = "",
  containerStyles = "",
  pattern,
}) => {
  return (
    <>
      <div className={twMerge(containerStyles, "w-[80%] m-auto")}>
        <label htmlFor="">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </label>
        <input
          placeholder={
            !placeholder
              ? title.charAt(0).toUpperCase() + title.slice(1)
              : placeholder
          }
          className={twMerge(
            `
      ${errors?.[name] ? "border-red-200" : ""}
      border rounded-lg w-full py-3 px-3 my-2 text-gray-700 mb-3 leading-tight bg-[#F9F9F9] border-gray-300
    `,
            inputStyles
          )}
          {...register(name, { required: true, pattern: pattern })}
          type={type}
          name={name}
        />
        {errors?.[name]?.type == "pattern" ? (
          <p className="text-red-500 text-xs italic">
            {errors?.[name]?.message}
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default VendorInputField;
