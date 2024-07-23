import React from "react";

interface selectInfor {
  title: string;
  value: string;
}
interface SelectProps {
  variant: string;
  title?: string;
  options: selectInfor[];
}
const Select: React.FC<SelectProps> = ({ options, variant, title }) => {
  if (variant === "white") {
    return (
      <select
        name=""
        id=""
        className="bg-[#d9d9d9] p-1 md:p-3 rounded-md border w-full font-thin md:font-medium text-sm md:text-md"
      >
        {options.map((ele) => (
          <option className="bg-[#d9d9d9] p-2 " value={ele.value}>
            {ele.title}
          </option>
        ))}
      </select>
    );
  } else if (variant === "gray") {
    return (
      <>
        <div className="felx flex-col  ">
          <div className="">{title}</div>
          <select
            name=""
            id=""
            className="bg-[#d9d9d9] p-4 text-md font-thin w-full rounded-lg"
          >
            {options.map((ele) => (
              <option value={ele.value} className="">
                {ele.title}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  }
};

export default Select;
