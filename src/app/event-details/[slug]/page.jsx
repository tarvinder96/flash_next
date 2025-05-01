'use client';

import { useParams, useRouter } from 'next/navigation';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import Image from "next/image";
import Accordions from "@/components/Accordions";
import pool from "@/images/pool.svg";
import tv from "@/images/tv.svg";
import wifi from "@/images/wifi.svg";
import breakfast from "@/images/breakfast.svg";

import PropTypes from "prop-types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from 'react';

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const slug = params.slug; // This is the dynamic [slug] from URL

  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    router.back(); // For going back
  };

  useEffect(() => {
    // Fetch event details using the slug
    if (!eventData && slug) {
    fetch(`https://actyvsolutions.com/flash_pack/public/api/geteventdetails/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); 
        if (data && data.status) {
          setEventData(data.data); // Assuming your API returns data inside `data.data`
        } else {
          setError("Event not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
        setLoading(false); // Stop loading if there's an error
      });
    }
  }, [slug,eventData]); // Effect runs whenever the slug changes


  return (
    <>
      <Header />
      <main className="pt-[50px] details-bg">
        <section className="max-w-screen-xl mx-auto lg:px-0 px-4">
          <section className="relative md:py-16 py-16 ">
            <div className="container relative">
              {" "}
              <div className="lg:block hidden">
                <Gallery />
              </div>
              <div className="grid md:grid-cols-12 grid-cols-1 gap-6 ">
                <div className="lg:col-span-8 md:col-span-7 lg:order-1 order-2">
                  <div className="flex gap-1 items-center text-[#585858] pt-4">
                    <span> Home
                    </span>
                    <span>
                      {" "}
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                    </span>
                    <span>Asia</span>
                    <span>
                      {" "}
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                    </span>
                    <span>Vietnam</span>
                  </div>
                  <h5 className="text-3xl font-semibold mt-5 lg:px-0 px-4">
                    Secret Vietnam
                  </h5>
                  <p className="text-[#585858]">
                    From jungle to coast, Vietnam promises breathtaking beauty,
                    a fascinatingly complex history plus world-beloved street
                    food flavors. Here’s how to see its authentic Asian soul
                  </p>

                  <div className="border-dashed border-[2px] rounded-xl p-4 bg-white my-8 w-fit">
                    <h5 className="text-[18px] font-[600]">
                      This is one of our best-selling adventures
                    </h5>
                    <p className="text-[#585858]">
                      517 Flashpackers from 26 countries have been on this
                      adventure
                    </p>
                    <p className="text-[#585858]">
                      49 Secret Vietnam adventures run since 2022 (and counting)
                    </p>
                  </div>

                  <div className="">
                    <h2 className="text-[22px] font-[600]">Group Insights</h2>
                    <p className="text-[#585858]">
                      Based on historical data from past departures
                    </p>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                      <div className="border p-4 border-gray-900 rounded-xl my-5 bg-white">
                        <h3>Average group age</h3>
                        <div className="text-[32px] font-[700]">38-42</div>
                      </div>

                      <div className="border p-4 border-gray-900 rounded-xl my-5 bg-white">
                        <h3>Size</h3>
                        <div className="text-[30px] font-[500]">
                          10/ <span className="text-[#585858]">16</span>{" "}
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1">
                          <div
                            className="bg-[#252525] h-1 rounded-full"
                            style={{ width: "45%" }}
                          />
                        </div>
                      </div>

                      <div className="border p-4 border-gray-900 rounded-xl my-5 bg-white">
                        <h3>Gender split</h3>
                        <div className="flex items-center justify-between mt-5">
                          <div className="text-[#252525] text-[16px]">
                            81% <span className="text-[#585858]">Woman</span>{" "}
                          </div>

                          <div className="text-[#252525] text-[16px]">
                            19% <span className="text-[#585858]">Men</span>{" "}
                          </div>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-1">
                          <div
                            className="bg-[#252525] h-1 rounded-full"
                            style={{ width: "45%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h2 className="text-[22px] font-[600]">Whats included</h2>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
                      <div className="flex gap-3 text-[#585858] mb-4">
                        <div className="w-[50px]">
                          <Image src={tv} alt="" width={20} />
                        </div>
                        <div className="">
                          Lorem ipsum is placeholder text commonly used in the
                          graphic, print, and publishing industries for
                          previewing layouts and visual mockups.
                        </div>
                      </div>

                      <div className="flex gap-3 text-[#585858] mb-4">
                        <div className="w-[50px]">
                          <Image src={pool} alt="" width={20} />
                        </div>
                        <div className="">
                          Lorem ipsum is placeholder text commonly used in the
                          graphic, print, and publishing industries for
                          previewing layouts and visual mockups.
                        </div>
                      </div>

                      <div className="flex gap-3 text-[#585858] mb-4">
                        <div className="w-[50px]">
                          <Image src={breakfast} alt="" width={20} />
                        </div>
                        <div className="">
                          Lorem ipsum is placeholder text commonly used in the
                          graphic, print, and publishing industries for
                          previewing layouts and visual mockups.
                        </div>
                      </div>

                      <div className="flex gap-3 text-[#585858] mb-4">
                        <div className="w-[50px]">
                          <Image src={wifi} alt="" width={20} />
                        </div>
                        <div className="">
                          Lorem ipsum is placeholder text commonly used in the
                          graphic, print, and publishing industries for
                          previewing layouts and visual mockups.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h2 className="text-[22px] font-[600]"> Your itinerary</h2>

                    <div className="mt-5 ">
                      <Accordions />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-[22px] font-[600]">
                      Praise for our Pack Leaders
                    </h2>

                    <Carousel className="w-full mt-5" opts={{ align: "start" }}>
                      <CarouselContent>
                        <CarouselItem className="w-full lg:basis-1/2">
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
                              We all had an excellent time!!!! 'Rose', our guide
                              (full name Yue Xia), took great care of us. In
                              addition to speaking excellent English, she was
                              knowledgeable, experienced, friendly and extremely
                              efficient.
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
                        <CarouselItem className="w-full lg:basis-1/2">
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
                              We all had an excellent time!!!! 'Rose', our guide
                              (full name Yue Xia), took great care of us. In
                              addition to speaking excellent English, she was
                              knowledgeable, experienced, friendly and extremely
                              efficient.
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
                        <CarouselItem className="w-full lg:basis-1/2">
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
                              We all had an excellent time!!!! 'Rose', our guide
                              (full name Yue Xia), took great care of us. In
                              addition to speaking excellent English, she was
                              knowledgeable, experienced, friendly and extremely
                              efficient.
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
                        <CarouselItem className="w-full lg:basis-1/2">
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
                              We all had an excellent time!!!! 'Rose', our guide
                              (full name Yue Xia), took great care of us. In
                              addition to speaking excellent English, she was
                              knowledgeable, experienced, friendly and extremely
                              efficient.
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
                </div>
                <div className="lg:col-span-4 md:col-span-5 lg:order-2 order-1 lg:px-0 px-4">
                  <div className="p-4 rounded-md shadow border sticky top-[100px] bg-white mt-5">
                    <div className="bg-[#FFEFE4] w-full p-2 rounded-full text-center">
                      Pay <strong>$300</strong> now and reserve your spot
                    </div>

                    <h4 className="text-xl my-3">5 days from $3,495 usd</h4>

                    <div className="flex gap-2 mt-4">
                      <div className="border p-2">AGES 30-49</div>

                      <div className="border p-2">AGES 45-59</div>
                    </div>

                    <div className="mt-4">
                      <Link href="#" passHref legacyBehavior>
                        <button
                          type="button"
                          className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px] mt-4 w-full"
                        >
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end container*/}
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

