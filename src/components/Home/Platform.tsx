import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Platform = () => {
    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            sliderRef.current?.slickNext();
        }, 5000);

        return () => clearInterval(sliderInterval);
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <div className='w-full mt-10 sm:mt-20 pb-12 relative'>
            <Slider ref={sliderRef} {...sliderSettings}>
                <div>
                    <div className="max-w-md mx-auto mt-4 flex flex-col items-center">
                        <div className="text-2xl mb-4">The Hourly Place</div>
                        <div className="approach_grid-stroke bg-[#2094D1] w-[3.375rem] h-[.25rem] mx-auto mb-4" />

                        <p className="text-[0.8rem] sm:text-[1rem] text-center">
                            Discover diverse spaces on Hourly Place –
                            your platform for booking co-working spaces,
                            video shooting rooms, private libraries,
                            cafes, hotels, and more on an hourly basis.
                            Elevate your work environment or leisure experience with seamless, flexible bookings.
                        </p>
                        <button className="bg-[#004AAD] text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-s-sm shadow-md transition duration-300 ease-in-out mt-3">Visit Now</button>

                    </div>
                </div>
                <div>
                    <div className="max-w-md mx-auto mt-4 flex flex-col items-center">
                        <div className="text-2xl mb-4">The hostel Nepal</div>
                        <div className="approach_grid-stroke bg-[#2094D1] w-[3.375rem] h-[.25rem] mx-auto mb-4" />

                        <p className="text-[0.8rem] sm:text-[1rem] text-center">
                            Discover diverse spaces on Hourly Place –
                            your platform for booking co-working spaces,
                            video shooting rooms, private libraries,
                            cafes, hotels, and more on an hourly basis.
                            Elevate your work environment or leisure experience with seamless, flexible bookings.
                        </p>
                        <button className="bg-[#004AAD] text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-s-sm shadow-md transition duration-300 ease-in-out mt-3">Visit Now</button>

                    </div>
                </div>
                <div>
                    <div className="max-w-md mx-auto mt-4 flex flex-col items-center">
                        <div className="text-2xl mb-4">Ghantaghar.com</div>
                        <div className="approach_grid-stroke bg-[#2094D1] w-[3.375rem] h-[.25rem] mx-auto mb-4" />

                        <p className="text-[0.8rem] sm:text-[1rem] text-center">
                            At Ghantaghar.com, users can seamlessly book diverse services such as cafes, hotels, homestays, and daycations on an hourly basis. Experience convenience and flexibility in your bookings, tailored to your specific time requirements.

                        </p>
                        <button className="bg-[#004AAD] text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-s-sm shadow-md transition duration-300 ease-in-out mt-3">Visit Now</button>

                    </div>
                </div>
                <div>
                    <div className="max-w-md mx-auto mt-4 flex flex-col items-center">
                        <div className="text-2xl mb-4">The Hourly Place</div>
                        <div className="approach_grid-stroke bg-[#2094D1] w-[3.375rem] h-[.25rem] mx-auto mb-4" />

                        <p className="text-[0.8rem] sm:text-[1rem] text-center">
                            KSW Blogs
                            "Discover tech, education, and business insights on KSW Blogs
                            by KSW Techzone – your go-to platform for concise and valuable articles."
                        </p>
                        <button className="bg-[#004AAD] text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-s-sm shadow-md transition duration-300 ease-in-out mt-3">Visit Now</button>

                    </div>
                </div>


            </Slider>
            <div className="absolute top-1/2 lg:ml-40  -translate-y-1/2 left-0 flex items-center">
                <button onClick={goToPrev} className="mx-2 focus:outline-none">
                    <FaChevronLeft size={24} />
                </button>
            </div>
            <div className="absolute top-1/2  lg:mr-40  -translate-y-1/2 right-0 flex items-center">
                <button onClick={goToNext} className="mx-2 focus:outline-none">
                    <FaChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}

export default Platform;
