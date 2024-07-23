import InputField from "../components/Input/InputField";
import { useForm, SubmitHandler } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import Layout from "../layouts/Layout";
import contactpng from "../assets/contact/contact.png";
import contactLarge from "../assets/contact/Frame 3910.png";
import { BiPhone } from "react-icons/bi";
import TextArea from "../components/Input/TextArea";
type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  subject: string;
  message: string;
};
const emailValidataion = {
  value:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: "Please enter a valid email",
};
const nameValidataion = {
  value:
    /^[A-Za-z]+$/,
  message: "Please enter a letters Only",
};
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <Layout>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 mt-20 px-0 xl:px-10">
          <div className="block lg:hidden w-full">
            <img src={contactLarge} alt="" className="w-full" />
          </div>
          <div className="hidden lg:flex flex-col ">
            <div className="image mb-10">
              <img src={contactpng} alt="" className="h-[633px] w-[573px]" />
            </div>
            <div className="">
              <h2 className="text-3xl font-bold max-w-[665px] my-2">
                LET'S CONNECT WITH US
              </h2>
              <p className="text-md my-2">
                Questions,comments, or suggestions?Simply fill in the form and
                we'll be in touch shortly.
              </p>
              <div className="text-lg my-2">
                <div className="flex items-center gap-2">
                  <CiLocationOn className="text-[#3C95D1]" />
                  Kathmandu,Nepal
                </div>
                <div className="flex items-center gap-2">
                  <BiPhone className="text-[#3C95D1]" />
                  9849554485
                </div>
                <div className="flex  items-center gap-2">
                  <CgMail className="text-[#3C95D1] " />
                  Contact@xyz.com
                </div>
              </div>
            </div>
          </div>
          <div className="box-shadow rounded-lg w-[80%] m-auto">
            <div className="md:border-none grid grid-cols-1 lg:px-10 lg:py-12 ">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="flex gap-4">
                  <InputField
                    register={register}
                    title={"firstname"}
                    type={"text"}
                    errors={errors}
                    pattern={nameValidataion}
                  />
                  <InputField
                    register={register}
                    title={"lastname"}
                    type={"text"}
                    errors={errors}
                    pattern={nameValidataion}
                  />
                </div>
                <InputField
                  register={register}
                  title={"email"}
                  type={"text"}
                  errors={errors}
                  pattern={emailValidataion}
                />
                <InputField
                  placeholder="Phone Number*"
                  register={register}
                  title={"phone"}
                  type={"number"}
                  errors={errors}
                />
                <InputField
                  register={register}
                  title={"subject"}
                  type={"text"}
                  errors={errors}
                  pattern={nameValidataion}
                />
                <TextArea
                  placeholder="Your message..."
                  register={register}
                  title={"message"}
                  type={"text"}
                  errors={errors}

                />
                <input
                  type="submit"
                  value={"Send Message"}
                  className="bg-[#004AAD] text-center w-full text-white rounded-md py-1"
                />
              </form>
            </div>
            <div className="block lg:hidden mt-5">
              <h2 className="text-3xl font-bold max-w-[665px] my-2">
                LET'S CONNECT WITH US
              </h2>
              <p className="text-md my-2">
                Questions,comments, or suggestions?Simply fill in the form and
                we'll be in touch shortly.
              </p>
              <div className="text-lg my-2">
                <div className="flex items-center gap-2">
                  <CiLocationOn className="text-[#3C95D1]" />
                  Kathmandu,Nepal
                </div>
                <div className="flex items-center gap-2">
                  <BiPhone className="text-[#3C95D1]" />
                  9849554485
                </div>
                <div className="flex  items-center gap-2">
                  <CgMail className="text-[#3C95D1] " />
                  Contact@xyz.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Contact;







