import React from "react";
import { twMerge } from "tailwind-merge";
interface InputFieldProps {
  errors: Record<string, any>;
  register: any;
  title: string;
  type: string;
  placeholder?: string;
  className?: string;
  pattern?: any;
}
const InputField: React.FC<InputFieldProps> = ({
  errors,
  register,
  title,
  type,
  placeholder,
  className = "",
  pattern,
}) => {
  return (
    <>
      <input
        placeholder={
          !placeholder
            ? title.charAt(0).toUpperCase() + title.slice(1) + "*"
            : placeholder
        }
        className={twMerge(
          `
          ${errors?.[title] ? "border-red-200" : ""}
          border rounded-lg w-full py-3 px-3 my-2 text-gray-700 mb-3 leading-tight bg-[#F9F9F9] border-gray-600
        `,
          className
        )}
        {...register(title, { required: true, pattern: pattern })}
        type={type}
      />
      {errors?.[title]?.type == "pattern" ? (
        <p className="text-red-500 text-xs italic">
          {errors?.[title]?.message}
        </p>
      ) : (
        ""
      )}
    </>
  );
};
export default InputField;
