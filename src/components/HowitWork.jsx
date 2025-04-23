"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HowitWork() {
  const [howWorksData, setHowWorksData] = useState([]);

  useEffect(() => {
    const fetchHowWorks = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/how_works`
        );
        const data = await response.json();
        
        // Check if response contains "data" or directly array
        setHowWorksData(Array.isArray(data) ? data : data.data || []);
      } catch (error) {
        console.error("Error fetching HowWorks data:", error);
      }
    };

    fetchHowWorks();
  }, []);

  return (
    <section className="lg:pt-[80px] pt-[40px]">
      <div className="max-w-screen-xl mx-auto lg:px-0 px-4">
        <div className="pb-10">
          <h2 className="lg:text-4xl text-2xl font-bold text-center">How It Works</h2>
          <div className="lg:w-[100px] w-[50px] h-[4px] mt-2 rounded-[50px] bg-[#7F5539] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-4 gap-6">
          {howWorksData.length === 0 ? (
            <p className="text-center text-gray-500">No data available.</p>
          ) : (
            howWorksData.map((item) => (
              <div key={item.id} className="border border-[#B08968] rounded-[20px] p-4 bg-[#EDE0D4] relative h-full">
                <div className="text-center flex justify-center absolute left-1/2 transform -translate-x-1/2 top-[-20px] z-10">
                  <div className="h-[40px] w-[40px] flex items-center justify-center rounded-[100px] bg-[#B08968] text-white text-[22px]">
                    {item.step}
                  </div>
                </div>

                <h2 className="text-center lg:text-[22px] text=[20px] font-[500] mt-5">
                  {item.title}
                </h2>
                <p className="text-[#585858] text-center lg:text-[16px] text-[14px]">
                  {item.description}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
