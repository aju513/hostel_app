import React from "react";

interface InputFieldProps {
  errors: Record<string, any>;
  register: any;
  title: string;
  type: string;
  placeholder?: string;
}

const TextArea: React.FC<InputFieldProps> = ({
  errors,
  register,
  title,
  type,
  placeholder,
}) => {
  return (
    <>
      <textarea
        placeholder={
          !placeholder
            ? title.charAt(0).toUpperCase() + title.slice(1) + "*"
            : placeholder
        }
        className={`${
          errors?.[title] ? "border-red-200" : ""
        } border rounded-lg w-full py-6 px-3 pb-12 my-2 text-gray-700 mb-3 leading-tight bg-[#f9f9f9] border-gray-600`}
      
        {...register(title, { required: true })}
        type={type}
      />
      {errors?.[title] ? (
        <p className="text-red-500 text-xs italic">Please choose a {title}</p>
      ) : (
        ""
      )}
    </>
  );
};

export default TextArea;
