"use client";

import React, { useEffect, useState } from "react";

export default function HowitWork() {
  const [howWorksData, setHowWorksData] = useState([]);

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  useEffect(() => {
    const fetchHowWorks = async () => {
      try {
        const response = await fetch(
          `https://actyvsolutions.com/flash_pack/public/api/how_works`
        );
        const data = await response.json();
        setHowWorksData(Array.isArray(data) ? data : data.data || []);
      } catch (error) {
        console.error("Error fetching HowWorks data:", error);
      }
    };
    fetchHowWorks();
  }, []);

  return (
    <section className="lg:pt-[80px] pt-[40px]">
      <div className="max-w-[800px] mx-auto lg:px-0 px-4">
        <div className="pb-10">
          <h2 className="lg:text-4xl text-2xl font-bold text-center">
            How <span style={{ color: "rgba(255, 168, 88, 1)" }}>It</span> Works
          </h2>
          <div className="lg:w-[100px] w-[50px] h-[4px] mt-2 rounded-[50px] bg-[#7F5539] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
          {howWorksData.length === 0 ? (
            <p className="text-center text-gray-500">No data available.</p>
          ) : (
            howWorksData.map((item) => (
              <div
                key={item.id}
                className="border border-[#B08968] rounded-[20px] p-4 bg-[#EDE0D4] relative h-full"
              >
                <div className="text-center flex justify-center absolute left-1/2 transform -translate-x-1/2 top-[-20px] z-10">
                  <div className="h-[40px] w-[40px] flex items-center justify-center rounded-[100px] bg-[#B08968] text-white text-[22px]">
                    {item.step}
                  </div>
                </div>

                <h2 className="text-center lg:text-[22px] text-[20px] font-[600] mt-5">
                  {item.title}
                </h2>

                <p className="text-center lg:text-[16px] text-[14px] font-normal">
                  {(() => {
                    const cleanText = stripHtml(item.description || "");
                    const words = cleanText.split(/\s+/);
                    const totalWords = words.length;
                    const segments = [];

                    words.forEach((word, index) => {
                      let color = "black";

                      if (
                        index < 2 || // first 2
                        (index >= Math.floor(totalWords / 2) &&
                          index < Math.floor(totalWords / 2) + 2) || // middle 2
                        index >= totalWords - 2 // last 2
                      ) {
                        color = "rgba(255, 168, 88, 1)";
                      }

                      segments.push(
                        <span key={index} style={{ color }}>
                          {word}{" "}
                        </span>
                      );
                    });
                    return <>{segments}</>;
                  })()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
