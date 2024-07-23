import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import slider1 from "../../assets/Slider/slider1.png";
import hoste1 from "../../assets/hostel1.png";
import hoste2 from "../../assets/hostel2.png";

interface Slide {
  image: string;
}

const slides: Slide[] = [
  {
    image: slider1,
  },
  {
    image: hoste1,
  },
  {
    image: hoste2,
  },
  {
    image: slider1,
  },
];

const SliderComponent = () => {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSlider(window.innerWidth > 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    showSlider && (
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full">
            <img
              src={slide.image}
              alt={`Hostel ${index + 1}`}
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold lg:text-left lg:max-w-2xl lg:mx-auto sm:text-xs md:text-sm text-xs mx-auto m-auto">
              {/* <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg">{slide.text}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    )
  );
};

export default SliderComponent;
