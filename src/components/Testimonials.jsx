import PropTypes from "prop-types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = ({ heading, reviews, carouselOptions }) => {
  return (
    <section className=" pb-0 px-4 ">
      <div className="container px-4">
        <div className="pb-10">
          <h2 className="lg:text-4xl text-2xl font-bold text-center">
            Rated as Excellent by over 1,000 travelers
          </h2>
          <div className="max-w-[450px] mx-auto w-full">
            <p className="text-center lg:text-[16px] text-[14px]">
              Rated as Excellent on Trustpilot
            </p>
          </div>
          <div className="lg:w-[100px] w-[50px] h-[4px] mt-2 rounded-[50px] bg-[#7F5539] mx-auto"></div>
        </div>

        <div className="px-4 pb-10 lg:hidden block">
          <Carousel className="w-full" opts={{ align: "start" }}>
            <CarouselContent>
              <CarouselItem className="w-full">
                <div className="w-full bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="lg:text-xl text-[18px] font-semibold text-gray-800">
                        Jerry &amp; Adele, Bob &amp; Carol
                      </h3>
                      <p className="text-sm text-gray-500 lg:text-[16px] text-[14px]">
                        Client Reviews China
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 lg:text-[16px] text-[14px]">
                    We all had an excellent time!!!! 'Rose', our guide (full
                    name Yue Xia), took great care of us. In addition to
                    speaking excellent English, she was knowledgeable,
                    experienced, friendly and extremely efficient.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full">
                <div className="w-full bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="lg:text-xl text-[18px] font-semibold text-gray-800">
                        Jerry &amp; Adele, Bob &amp; Carol
                      </h3>
                      <p className="text-sm text-gray-500 lg:text-[16px] text-[14px]">
                        Client Reviews China
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 lg:text-[16px] text-[14px]">
                    We all had an excellent time!!!! 'Rose', our guide (full
                    name Yue Xia), took great care of us. In addition to
                    speaking excellent English, she was knowledgeable,
                    experienced, friendly and extremely efficient.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full">
                <div className="w-full bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="lg:text-xl text-[18px] font-semibold text-gray-800">
                        Jerry &amp; Adele, Bob &amp; Carol
                      </h3>
                      <p className="text-sm text-gray-500 lg:text-[16px] text-[14px]">
                        Client Reviews China
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 lg:text-[16px] text-[14px]">
                    We all had an excellent time!!!! 'Rose', our guide (full
                    name Yue Xia), took great care of us. In addition to
                    speaking excellent English, she was knowledgeable,
                    experienced, friendly and extremely efficient.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-full">
                <div className="w-full bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="lg:text-xl text-[18px] font-semibold text-gray-800">
                        Jerry &amp; Adele, Bob &amp; Carol
                      </h3>
                      <p className="text-sm text-gray-500 lg:text-[16px] text-[14px]">
                        Client Reviews China
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 lg:text-[16px] text-[14px]">
                    We all had an excellent time!!!! 'Rose', our guide (full
                    name Yue Xia), took great care of us. In addition to
                    speaking excellent English, she was knowledgeable,
                    experienced, friendly and extremely efficient.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-[-50px] left-1/2 ">
              <CarouselPrevious className="" />
              <CarouselNext className="" />
            </div>
          </Carousel>
        </div>

        <div className="max-w-screen-xl mx-auto lg:block hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
            <div className="grid gap-4">
              <div>
                <div className="w-full h-full mx-auto bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Jerry &amp; Adele, Bob &amp; Carol
                      </h3>
                      <p className="text-sm text-gray-500">
                        Client Reviews China
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    We all had an excellent time!!!! 'Rose', our guide (full
                    name Yue Xia), took great care of us. In addition to
                    speaking excellent English, she was knowledgeable,
                    experienced, friendly and extremely efficient.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full h-full mx-auto bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Kathy
                      </h3>
                      <p className="text-sm text-gray-500">
                        Review Australia New Zealand
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Medhat, Local office answers did a superlative job with the
                    actual workings of the itinerary for my trip to
                    Australia/New Zealand. Royale Limousines' drivers were
                    always on time and courteous. Guides, especially, John, in
                    Sydney, were excellent.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full h-full mx-auto bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Johan Smith
                      </h3>
                      <p className="text-sm text-gray-500">
                        Review Australia New Zealand
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <div className="w-full h-full mx-auto bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Sam Crish
                      </h3>
                      <p className="text-sm text-gray-500">
                        Review Australia New Zealand
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full h-full mx-auto bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Marry Mithal
                      </h3>
                      <p className="text-sm text-gray-500">
                        Review Australia New Zealand
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Medhat, Local office answers did a superlative job with the
                    actual workings of the itinerary for my trip to
                    Australia/New Zealand. Royale Limousines' drivers were
                    always on time and courteous. Guides, especially, John, in
                    Sydney, were excellent.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full h-full mx-auto bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Rose
                      </h3>
                      <p className="text-sm text-gray-500">
                        Review Australia New Zealand
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Medhat, Local office answers did a superlative job with the
                    actual workings of the itinerary for my trip to
                    Australia/New Zealand. Royale Limousines' drivers were
                    always on time and courteous. Guides, especially, John, in
                    Sydney, were excellent.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <div className="w-full h-full mx-auto bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Wargon Smith
                      </h3>
                      <p className="text-sm text-gray-500">
                        Review Australia New Zealand
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Medhat, Local office answers did a superlative job with the
                    actual workings of the itinerary for my trip to
                    Australia/New Zealand. Royale Limousines' drivers were
                    always on time and courteous. Guides, especially, John, in
                    Sydney, were excellent.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full h-full mx-auto bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Harry Gurpal
                      </h3>
                      <p className="text-sm text-gray-500">
                        Review Australia New Zealand
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Medhat, Local office answers did a superlative job with the
                    actual workings of the itinerary for my trip to
                    Australia/New Zealand. Royale Limousines' drivers were
                    always on time and courteous. Guides, especially, John, in
                    Sydney, were excellent.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full h-full mx-auto bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Tomlison
                      </h3>
                      <p className="text-sm text-gray-500">
                        Review Australia New Zealand
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Medhat, Local office answers did a superlative job with the
                    actual workings of the itinerary for my trip to
                    Australia/New Zealand. Royale Limousines' drivers were
                    always on time and courteous. Guides, especially, John, in
                    Sydney, were excellent.
                  </p>
                  <div className="mt-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.75l6.16 3.73-1.66-7.13 5.54-4.76-7.2-.62L12 2.5l-2.84 6.48-7.2.62 5.54 4.76-1.66 7.13L12 17.75z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  heading: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  carouselOptions: PropTypes.shape({
    align: PropTypes.string,
  }),
};

Testimonials.defaultProps = {
  heading: "Client Reviews",
  reviews: [],
  carouselOptions: {
    align: "start",
  },
};

const reviews = [
  {
    name: "Kathy",
    title: "Review Australia New Zealand",
    text: "Medhat, Local office answers did a superlative job with the actual workings of the itinerary for my trip to Australia/New Zealand. Royale Limousines' drivers were always on time and courteous. Guides, especially, John, in Sydney, were excellent.",
    rating: 4,
  },
  {
    name: "Jerry & Adele, Bob & Carol",
    title: "Client Reviews China",
    text: "We all had an excellent time!!!! 'Rose', our guide (full name Yue Xia), took great care of us. In addition to speaking excellent English, she was knowledgeable, experienced, friendly and extremely efficient.",
    rating: 5,
  },

  {
    name: "Kathy",
    title: "Client Reviews Iceland",
    text: "The Hotel Borg was wonderful - my room (walk-in shower, of course!), the front desk personnel, the hotel location.  I was very pleased.  The tours of out town were really interesting.  As you will read below, my favorite and the highlight was the tour of the glacier ice tunnel.  The bus transportation was always on time.",
    rating: 5,
  },

  {
    name: "Jerry & Adele, Bob & Carol",
    title: "Client Reviews China",
    text: "We all had an excellent time!!!! 'Rose', our guide (full name Yue Xia), took great care of us. In addition to speaking excellent English, she was knowledgeable, experienced, friendly and extremely efficient.",
    rating: 5,
  },
];

export default function App() {
  return (
    <div>
      <Testimonials
        heading="What Our Clients Say"
        reviews={reviews}
        carouselOptions={{ align: "center" }}
      />
    </div>
  );
}
