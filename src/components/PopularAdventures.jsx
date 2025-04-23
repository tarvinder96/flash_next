import Image from "next/image";
import adveOne from "../images/ad1.jpg";
import adveTwo from "../images/ad2.jpg";
import adveThree from "../images/ad3.jpg";
import adveFour from "../images/ad4.jpg";
import adveFive from "../images/ad5.jpg";

export default function PopularAdventures() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto lg:px-0 px-4">
          <div className="">
            <h2 className="lg:text-4xl text-2xl font-bold text-center">
              Our most popular adventures
            </h2>
            <div className="max-w-[450px] mx-auto w-full">
              <p className="text-center lg:text-[16px] text-[14px]">
                Over 50,000 solo travelers have joined us. Here are their top
                trips!Need help? Book a call with us now.
              </p>
            </div>
            <div className="lg:w-[100px] w-[50px] h-[4px] mt-2 rounded-[50px] bg-[#7F5539] mx-auto"></div>
          </div>

          <div className="p-6 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left Tall Image */}
            <div className="md:row-span-2">
              <div className="relative h-full">
                <Image
                  className="w-full h-full object-cover rounded-[15px]"
                  src={adveOne}
                  alt=""
                />
                <div className="absolute p-3 left-0 bottom-0 text-white bg-gray-900/50  w-full rounded-b-[15px]">
                  <h2 className="text-xl font-bold">Untouched Albania</h2>
                  <p className="text-sm">7 Days in Albania</p>
                </div>
              </div>
            </div>
            {/* Top Right Image */}
            <div>
              <div className="relative h-full">
                <Image
                  className="w-full h-full object-cover rounded-[15px]"
                  src={adveTwo}
                  alt=""
                />{" "}
                <div className="absolute p-3 left-0 bottom-0 text-white bg-gray-900/50  w-full rounded-b-[15px]">
                  <h2 className="text-xl font-bold">Spectacular Peru</h2>
                  <p className="text-sm">9 Days in Peru</p>
                </div>
              </div>
            </div>
            {/* Middle Right Image */}
            <div>
              <div className="relative h-full">
                <Image
                  className="w-full h-full object-cover rounded-[15px]"
                  src={adveThree}
                  alt=""
                />{" "}
                <div className="absolute p-3 left-0 bottom-0 text-white bg-gray-900/50  w-full rounded-b-[15px]">
                  <h2 className="text-xl font-bold">Secret Vietnam</h2>
                  <p className="text-sm">7 Days in Vietnam</p>
                </div>
              </div>
            </div>
            {/* Bottom Left */}
            <div>
              <div className="relative h-full">
                <Image
                  className="w-full h-full object-cover rounded-[15px]"
                  src={adveFour}
                  alt=""
                />{" "}
                <div className="absolute p-3 left-0 bottom-0 text-white bg-gray-900/50  w-full rounded-b-[15px]">
                  <h2 className="text-xl font-bold">Secret Vietnam</h2>
                  <p className="text-sm">7 Days in Vietnam</p>
                </div>
              </div>
            </div>
            {/* Bottom Middle */}
            <div>
              <div className="relative h-full">
                <Image
                  className="w-full h-full object-cover rounded-[15px]"
                  src={adveFive}
                  alt=""
                />{" "}
                <div className="absolute p-3 left-0 bottom-0 text-white bg-gray-900/50  w-full rounded-b-[15px]">
                  <h2 className="text-xl font-bold">Secret Vietnam</h2>
                  <p className="text-sm">7 Days in Vietnam</p>
                </div>
              </div>
            </div>
            {/* Bottom Right */}
          </div>

          <div className="flex flex-wrap gap-1 mt-3 px-4 justify-center">
            <button
              type="button"
              className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
            >
              view all
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
