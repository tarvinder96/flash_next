'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function EventDetailsPage({ slug }) {
  const { event_id } = useParams();  // Accessing event_id directly
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openAccordion, setOpenAccordion] = useState(null); // State to toggle accordion

  // Fetch event data by event_id
  useEffect(() => {
    
      const fetchEventData = async () => {
        try {
          const eventResponse = await fetch(`https://actyvsolutions.com/flash_pack/public/api/get-itinerary/${slug}`);
          // const eventResponse = await fetch(`http://localhost:8000/api/get-itinerary/${slug}`);
          console.log("value",eventResponse);
          const data = await eventResponse.json();
        console.log("value",data);
          if (data.status === 'success') {
            setEventData(data.data);
          } else {
            console.error('Event not found');
          }
        } catch (error) {
          console.error('Error fetching event data:', error);
        } finally {
          setLoading(false);
        }
      };

      if (slug) {
        fetchEventData();
      }
    
  }, [slug]);

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // If no event data found
  if (!eventData) {
    return <div>No event details found.</div>;
  }

  // Toggle accordion
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div>
      {eventData.map((event, index) => (
        <div key={index} className="mb-2">
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openAccordion === index}
              aria-controls={`accordion-collapse-body-${index}`}
            >
              <span className="flex gap-2 items-center">
                <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">
                  {event.days}
                </div>
                <h2 className="text-xl text-gray-900 font-semibold">
                  {event.title}
                </h2>
              </span>
              <svg
                data-accordion-icon=""
                className={`w-3 h-3 ${openAccordion === index ? "rotate-180" : ""} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`${openAccordion === index ? "" : "hidden"}`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <ol className="relative border-s border-gray-500 border-dotted">
               
                  <li className="mb-4 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white"></div>
                    <p className="relative -top-1 text-base font-normal text-gray-500">
                      {/* {event.description} */}
                      {event.description.replace(/<[^>]+>/g, '')}
                    </p>
                  </li>
              
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
