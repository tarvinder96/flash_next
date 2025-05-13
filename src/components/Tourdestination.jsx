"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TourBox from "./TourBox";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TourSlider() {
  const [destinations, setDestinations] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(
          `https://actyvsolutions.com/flash_pack/public/api/get-destination`
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error("HTTP Error:", response.status, errorText);
          return;
        }

        const data = await response.json();
        setDestinations(data.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  const handleViewDetails = (slug) => {
    console.log("Navigating to slug:", slug);
    router.push(`/event-details/${slug}`);
  };

  return (
    <div className="container py-20 px-4 bg-[#FFFCFA]">
      <div className="max-w-screen-xl mx-auto">
        <div className="pb-10">
          <h2 className="lg:text-4xl text-2xl font-bold text-center">
            Top destinations
          </h2>
          <div className="lg:w-[100px] w-[50px] h-[4px] mt-2 rounded-[50px] bg-[#7F5539] mx-auto"></div>
        </div>

        <Carousel className="max-w-screen-xl mx-auto" opts={{ align: "start" }}>
          <CarouselContent>
            {destinations.map((destination) => {
              console.log(destination.slug);

              let image = "";
              try {
                const parsedImage = destination.about_us_image;
                image =
                  parsedImage.length > 0
                    ? `https://actyvsolutions.com/flash_pack/public/images/event_about_images/${parsedImage}`
                    : "";
              } catch {
                image = "";
              }
              return (
                <CarouselItem
                  key={destination.id}
                  className="md:basis-1/2 basis-1/2 lg:basis-1/6"
                >
                  <TourBox
                    title={destination.title}
                    imageSrc={image}
                    location={destination.location}
                    rating={4.5}
                    score={"5.0"}
                    onClick={() => handleViewDetails(destination.slug)}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
