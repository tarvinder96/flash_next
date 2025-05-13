"use client";
import React from "react";
import Link from "next/link";
export default function HeroV2() {
  return (
    <>
      <section className="mainHero relative">
        {/* Overlay background for darker shade */}
        <div className="overlyhero"></div>

        {/* Container for the content */}
        <div className="max-w-screen-xl mx-auto lg:px-0 px-4 relative">
          {/* Hero Text Content */}
          <div className="lg:py-40 lg:pt-52 pt-48 py-20 text-center">
            <h1 className="lg:text-[32px] text-[25px] font-[600] leading-none mb-4 text-white">
              DIFFERENT TRIPS, DIFFERENT FOLKS, SAME MOMENT{" "}
            </h1>
            <h1 className="lg:text-[25px] text-[18px] font-[600] leading-none mb-2 text-white">
              MEET OTHER GOING TO THE{" "}
              <span className="text-[#fea759]">SAME CONCERT</span> <u>VENU</u>{" "}
              <u>GAME</u>{" "}
            </h1>

            {/* Button to browse trips */}
            <div className="flex flex-wrap gap-1 my-5 px-4 justify-center">
              {/* <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
              >
                Browse Event
              </button> */}
              <Link href="/all-trips">
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
                >
                  Browse Event
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
