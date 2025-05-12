"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Events() {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://actyvsolutions.com/flash_pack/public/api/getevents`
        );
        const data = await res.json();

        if (data.status && data.data) {
          setEvents(data.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Navigate to event details page on button click
  const handleViewDetails = (slug) => {
    router.push(`/event-details/${slug}`);
  };

  return (
    <section className="lg:py-20 py-10">
      <div className="max-w-screen-xl mx-auto lg:px-0 px-4">
        <Carousel className="max-w-screen-xl mx-auto" opts={{ align: "start" }}>
          <div className="pb-10">
            <h2 className="lg:text-4xl text-2xl font-bold text-center">
              Trips for First-Timers
            </h2>
            <div className="max-w-[450px] mx-auto w-full">
              <p className="text-center lg:text-[16px] text-[14px]">
                New to Dash Pack? These adventures are the perfect introduction.
              </p>
            </div>
            <div className="lg:w-[100px] w-[50px] h-[4px] mt-2 rounded-[50px] bg-[#7F5539] mx-auto"></div>
          </div>

          <CarouselContent>
            {events.map((event) => {
              // Correct: use about_us_image directly
              let imageUrl = "";
              if (event.about_us_image) {
                // imageUrl = `http://127.0.0.1:8000/images/event_about_images/${event.about_us_image}`;
                imageUrl = `https://actyvsolutions.com/flash_pack/public/images/event_about_images/${event.about_us_image}`;
              }
              return (
                <CarouselItem
                  key={event.id}
                  className="md:basis-1/2 basis-1/1 lg:basis-1/4"
                >
                  <div className="p-2 border rounded-xl">
                    <div className="rounded-xl bg-white text-neutral-950 border-none shadow-none">
                      <div className="p-0 relative">
                        {imageUrl && (
                          <Image
                            className="rounded-xl w-full"
                            src={imageUrl}
                            alt={event.heading || "Event Image"}
                            width={500}
                            height={300}
                            priority={false}
                          />
                        )}
                      </div>
                      <div className="px-3 py-2">
                        <p className="text-gray-500">{event.days}</p>
                        <h5 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-1">
                          {event.location}
                        </h5>
                        <p className="text-gray-900 mb-1">{event.age}</p>
                        <p className="text-gray-900 mb-2">
                          From <span className="font-bold">{event.price}</span>
                        </p>
                        <button
                          type="button"
                          className="text-white bg-[#7F5539] border border-[#7F5539] font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
                          onClick={() => handleViewDetails(event.slug)}
                        >
                          View details
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <div className="absolute bottom-[-50px] left-1/2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
