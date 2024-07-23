import React from "react";

import Slider from "react-slick";
import { SliderCard } from "../Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./hostellist.css";
interface hostel {
  title: string;
  starCount: number;
  address: string;
  distance: string;
  price: number;
}
interface Hostelistprops {
  title: string;
  hostels: hostel[];
}
const HostelList: React.FC<Hostelistprops> = ({ hostels, title }) => {
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowLeft className="arrows" style={{ color: "white" }} />
      </div>
    );
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight className="arrows" style={{ color: "white" }} />
      </div>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-white lg:bg-[#f6f6f6] my-4">
      <h3 className="font-semibold p-2 text-2xl w-full bg-[#d1d1d1] ">
        {title}
      </h3>
      <div className="w-full m-auto">
        <Slider {...settings} className="m-0">
          {hostels.map((ele, index) => (
            <SliderCard
              title={ele.title}
              starCount={ele.starCount}
              address={ele.address}
              key={index}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HostelList;
