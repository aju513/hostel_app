import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import faqsvg from "../../assets/faq.svg";

import { Link } from "react-router-dom";
interface FAQ {
  question: string;
  answer: string;
}

function FAQMain(): JSX.Element {
  const faqs: FAQ[] = [
    {
      question: "How do I make a reservation at your hostel??",
      answer:
        "To make a reservation at our hostel, simply visit our website and select your desired dates of stay, room type, and number of guests. Follow the prompts to complete the booking process. Alternatively, you can contact our reservation team directly for assistance.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "ur cancellation policy varies depending on the type of reservation and the time of cancellation. Please refer to the booking confirmation email or our website for detailed information on our cancellation policy. Generally, cancellations made within 5 days of the check-in date may incur a cancellation fee.",
    },
    {
      question: "Do you offer airport pickup service?",
      answer:
        "Yes, we offer airport pickup service for our guests at an additional cost. To arrange airport pickup, please provide us with your flight details and arrival time during the booking process or contact our reception desk in advance.",
    },
    {
      question: "Do you offer group bookings or discounts?",
      answer:
        "Yes, we offer special rates and discounts for group bookings. Please contact our group reservations team directly to inquire about rates, availability, and any group booking discounts that may apply.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept payment via major credit cards, including Visa, Mastercard, and American Express. Additionally, we also accept payments through popular online payment platforms such as PayPal. Cash payments may be accepted upon arrival, subject to availability.",
    },
    {
      question: "What amenities are included in the room?",
      answer:
        "Our rooms are equipped with essential amenities such as comfortable beds, linens, towels, and toiletries. Additionally, we offer complimentary Wi-Fi access, hot showers, and 24-hour security. Please refer to the room description on our website for a detailed list of amenities.",
    },
    {
      question: "Can I modify my reservation after it has been confirmed?",
      answer:
        "Guests must be at least 18 years old to stay at our hostel. However, exceptions may be made for accompanied minors with prior approval from management. Please contact us directly to discuss any special arrangements.",
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean[]>(
    Array(faqs.length).fill(false)
  );

  const toggleAccordion = (index: number): void => {
    const newIsOpen: boolean[] = Array(faqs.length).fill(false); // Close all items first
    newIsOpen[index] = !isOpen[index]; // Toggle the clicked item
    setIsOpen(newIsOpen);
  };

  return (
    <main className="mx-auto max-w-7xl px-2 py-10 md:px-">
      {/* mobile screen */}
      <div className="md:hidden lg:hidden">
        <div className="text-center ">
          <div className="mx-auto max-w-2xl lg:text-center ">
            <h2 className="text-[2.25rem] font-bold leading-tight text-black sm:text-xl lg:text-2xl">
              FAQ's
            </h2>
            <h2 className="lg:text-[1.875rem] font-semibold mt-4 leading-tight text-black sm:text-xl ">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 max-w-xl text-[1.25rem] leading-relaxe lg:mx-auto">
              Have question’s? We’re here to help
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="image size-44 items-start text-start  -mt-10">
            <img src={faqsvg} alt="" />
          </div>

          <div className="ml-20 fixed mt-7 z-50 right-2">
            <svg
              className="w-20 h-20 "
              viewBox="0 0 106 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80.7135 75.4675C80.7135 75.4675 81.0924 75.2122 81.681 74.7661C90.4853 67.9506 96 58.0821 96 47.109C96 26.6302 76.7548 10 53.0134 10C29.2721 10 10 26.6302 10 47.109C10 67.5851 29.2452 84.2153 52.9866 84.2153C56.0261 84.2153 59.0603 83.9492 62.0408 83.3902L62.9787 83.2371C69.0121 87.1393 77.8029 90.3616 85.4999 90.3616C87.8945 90.3616 89.0152 88.4024 87.4887 86.4137C85.1667 83.5569 81.9605 78.9962 80.7135 75.4702V75.4675ZM75.4782 59.2565C72.9198 63.0808 64.9674 69.6007 53.0726 69.6007H52.9032C40.9788 69.6007 33.0399 63.0512 30.4922 59.2565C29.9835 58.6737 29.6442 57.9626 29.5113 57.2006C29.4778 56.7369 29.6282 56.2787 29.93 55.9251C30.2317 55.5716 30.6606 55.351 31.1238 55.3112C31.1479 55.2978 31.1641 55.2978 31.1909 55.2978C31.6129 55.3195 32.02 55.4602 32.3654 55.7036C38.1898 60.4511 45.4698 63.051 52.9839 63.0674C60.5264 63.1511 67.8501 60.5344 73.6319 55.6902C73.9372 55.4109 74.3362 55.2565 74.7499 55.2575C75.704 55.2575 76.4592 56.0127 76.4887 56.9533C76.3729 57.794 76.0394 58.5898 75.5212 59.2619L75.4782 59.2565Z"
                fill="#004AAD"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* large screen */}
      <div>
        <div className="hidden lg:block md:block mt-9">
          <div className="flex">
            <div className="image lg:-mt-20 ">
              <img src={faqsvg} alt="" />
            </div>
            <div className="text-center lg:ml-48">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-[2.25rem] font-bold leading-tight text-black sm:text-xl lg:text-2xl">
                  FAQ's
                </h2>
                <h2 className="lg:text-[1.875rem] font-semibold mt-4 leading-tight text-black sm:text-xl ">
                  Frequently Asked Questions
                </h2>
                <p className="mt-2 max-w-xl text-[1.25rem] leading-relaxe lg:mx-auto">
                  Have question’s? We’re here to help
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex -mt-15">
          <div className="mx-auto mt-8 w-full space-y-4 md:mt-8 ">
            {faqs.map((faq: FAQ, index: number) => (
              <div
                key={index}
                className="cursor-pointer  shadow-2xl shadow-gray-400 border  border-gray-400   rounded-xl transition-all duration-200"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="flex lg:text-[1.25rem] sm:text-[0.875rem]  text-start font-semibold text-black">
                    {faq.question}
                  </span>
                  <div className="bg-[#004AAD] h-[3rem] rounded-full flex items-center">
                    {isOpen[index] ? (
                      <FaAngleDown className="h-5 w-12 font-thin text-gray-200" />
                    ) : (
                      <FaAngleRight className="h-5 w-12 text-gray-200" />
                    )}
                  </div>
                </button>
                {isOpen[index] && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 transition-all duration-300">
                    <p className="text-[#6F6C90] lg:text-[1.25rem] sm:text-[0.875rem] text-start">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden sm:block fixed lg:top-[12rem] md:top-[4rem] right-3 z-50">
            <svg
              className="lg:w-28 lg:h-28 md:w-16 md:h-16 sm:w-32 sm:h-32"
              viewBox="0 0 106 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80.7135 75.4675C80.7135 75.4675 81.0924 75.2122 81.681 74.7661C90.4853 67.9506 96 58.0821 96 47.109C96 26.6302 76.7548 10 53.0134 10C29.2721 10 10 26.6302 10 47.109C10 67.5851 29.2452 84.2153 52.9866 84.2153C56.0261 84.2153 59.0603 83.9492 62.0408 83.3902L62.9787 83.2371C69.0121 87.1393 77.8029 90.3616 85.4999 90.3616C87.8945 90.3616 89.0152 88.4024 87.4887 86.4137C85.1667 83.5569 81.9605 78.9962 80.7135 75.4702V75.4675ZM75.4782 59.2565C72.9198 63.0808 64.9674 69.6007 53.0726 69.6007H52.9032C40.9788 69.6007 33.0399 63.0512 30.4922 59.2565C29.9835 58.6737 29.6442 57.9626 29.5113 57.2006C29.4778 56.7369 29.6282 56.2787 29.93 55.9251C30.2317 55.5716 30.6606 55.351 31.1238 55.3112C31.1479 55.2978 31.1641 55.2978 31.1909 55.2978C31.6129 55.3195 32.02 55.4602 32.3654 55.7036C38.1898 60.4511 45.4698 63.051 52.9839 63.0674C60.5264 63.1511 67.8501 60.5344 73.6319 55.6902C73.9372 55.4109 74.3362 55.2565 74.7499 55.2575C75.704 55.2575 76.4592 56.0127 76.4887 56.9533C76.3729 57.794 76.0394 58.5898 75.5212 59.2619L75.4782 59.2565Z"
                fill="#004AAD"
              />
            </svg>
          </div>
        </div>
      </div>

      <Link to="#" className="flex items-center justify-between mt-8">
        <div className="text-gray-200 shadow-lg shadow-gray-400 border border-gray-400 bg-gray-200 rounded-full ">
          <img
            className="md:h-10 md:w-10 w-8 h-8 "
            src="https://cdn-icons-png.flaticon.com/128/2791/2791552.png"
            alt="dwon arrow"
          />
        </div>
      </Link>
    </main>
  );
}

export default FAQMain;
