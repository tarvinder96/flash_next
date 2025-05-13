"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AllTrip() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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
          setFilteredEvents(data.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleViewDetails = (slug) => {
    router.push(`/event-details/${slug}`);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = events.filter((event) =>
      event.location.toLowerCase().includes(query)
    );
    setFilteredEvents(filtered);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
  };

  return (
    <>
      <Header />
      <section className="w-full bg-[linear-gradient(to_right,_#7c4caa,_#B14D98)] lg:pt-20 pt-10 pb-0">
        <h2 className="font-[700] lg:text-4xl text-2xl text-white text-center pt-10">
          All Event
        </h2>
        <div className="w-full bg-white lg:py-20 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between items-center">
              <div>
                <form
                  onSubmit={handleSearchSubmit}
                  className="min-w-[350px] mx-auto"
                >
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-900 focus:border-gray-900"
                      placeholder="Search event by name..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-[#7F5539] hover:bg-[#7F5539] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <select className="w-full border p-2 mt-1 rounded-lg bg-gray-100">
                  <option>Short By</option>
                  <option>Newest Trips</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* 🗂 Event Grid */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 gap-4">
              {filteredEvents.map((event, index) => {
                const imageUrl = `https://actyvsolutions.com/flash_pack/public/images/event_about_images/${event.about_us_image}`;
                return (
                  <div key={index} className="p-2 border rounded-xl">
                    <div className="rounded-xl border bg-white text-neutral-950 border-none shadow-none">
                      <div className="p-0 relative">
                        {event.image && (
                          <Image
                            className="rounded-xl w-full"
                            src={imageUrl}
                            alt={event.location || "Event Image"}
                            width={500}
                            height={300}
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
                          From <strong>{event.price}</strong>
                        </p>

                        <button
                          type="button"
                          onClick={() => handleViewDetails(event.slug)}
                          className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
                        >
                          View details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
