import Layout from "../layouts/Layout";
import Select from "../components/Select/Select";
import { HostelSearchCard, SliderCard } from "../components/Card/Card";
import SearchHostel from "../components/Search/SearchHostel";
import Stars from "../components/HostelSearchComponents/Stars";

const Hostel = () => {
  const genderOptions = [
    { title: "Select Your Gender", value: "1" },
    { title: "Male", value: "2" },
    { title: "Female", value: "3" },
  ];

  const districtOptions = [
    { title: "Filter by District", value: "1" },
    { title: "District 1", value: "2" },
    { title: "District 2", value: "3" },
  ];

  const cityOptions = [
    { title: "eg.Kathmandu", value: "1" },
    { title: "City 1", value: "2" },
    { title: "City 2", value: "3" },
    { title: "City 3", value: "4" },
    { title: "City 4", value: "5" },
  ];

  const priceOptions = [
    { title: "Filter by Price", value: "1" },
    { title: "Price 1", value: "2" },
    { title: "Price 2", value: "3" },
  ];

  const servicesOptions = [
    { title: "Filter by Service", value: "1" },
    { title: "Service 1", value: "2" },
    { title: "Service 2", value: "3" },
  ];

  const professionOptions = [
    { title: "Filter by Profession", value: "1" },
    { title: "Profession 1", value: "2" },
    { title: "Profession 2", value: "3" },
  ];

  return (
    <>
      <Layout>
        <SearchHostel />

        <h1 className="text-gray-900 mt-5 text-lg ld:text-2xl mb-2 lg:ml-80 ">
          Your Search:{" "}
          <span className="font-semibold text-md">ABC HOSTEL PVT LTD</span>
        </h1>
        <div className="hidden lg:flex">
          <aside
            className={
              "sticky top-0 flex h-screen w-96 flex-col border-r border-r-[#adadad] mr-7 pr-10"
            }
          >
            <div className="mt-6 flex flex-1 flex-col">
              <div className="space-y-3">
                <Select
                  options={genderOptions}
                  variant={"gray"}
                  title="Gender"
                />
                <Select
                  options={districtOptions}
                  variant={"gray"}
                  title="DISTRICT"
                />
                <Select options={cityOptions} variant={"gray"} title="CITY" />
                <Select options={priceOptions} variant={"gray"} title="PRICE" />
                <Select
                  options={servicesOptions}
                  variant={"gray"}
                  title="Services"
                />
                <Select
                  options={professionOptions}
                  variant={"gray"}
                  title="Profession"
                />
              </div>
              <Stars />
            </div>
          </aside>

          <div className="w-full h-auto ">
            <HostelSearchCard
              address="Imadol,Lalitpur"
              title="Bodhi Tree Hostel Pvt Ltd"
              price={[5000, 10000]}
              room={[1, 2]}
              category={["Men", "Women"]}
            />
            <HostelSearchCard
              address="Imadol,Lalitpur"
              title="Bodhi Tree Hostel Pvt Ltd"
              price={[5000, 10000]}
              room={[1, 2]}
              category={["Men", "Women"]}
            />
            <HostelSearchCard
              address="Imadol,Lalitpur"
              title="Bodhi Tree Hostel Pvt Ltd"
              price={[5000, 10000]}
              room={[1, 2]}
              category={["Men", "Women"]}
            />
            <HostelSearchCard
              address="Imadol,Lalitpur"
              title="Bodhi Tree Hostel Pvt Ltd"
              price={[5000, 10000]}
              room={[1, 2]}
              category={["Men", "Women"]}
            />
            <HostelSearchCard
              address="Imadol,Lalitpur"
              title="Bodhi Tree Hostel Pvt Ltd"
              price={[5000, 10000]}
              room={[1, 2]}
              category={["Men", "Women"]}
            />
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
            <SliderCard
              title={"Bodhi Tree"}
              starCount={5}
              address={"Imadol,Lalitpur"}
              key={1}
            />
            <SliderCard
              title={"Bodhi Tree"}
              starCount={5}
              address={"Imadol,Lalitpur"}
              key={1}
            />
            <SliderCard
              title={"Bodhi Tree"}
              starCount={5}
              address={"Imadol,Lalitpur"}
              key={1}
              price={[5000]}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Hostel;
