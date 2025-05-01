"use client";

import { useState } from "react";

export default function Accordions() {
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <div className="mb-2">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
            onClick={() => toggleAccordion(1)}
            aria-expanded={openAccordion === 1}
            aria-controls="accordion-collapse-body-1"
          >
            <span className="flex gap-2 items-center">
              {" "}
              <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">
                Day 1
              </div>{" "}
              <h2 className="text-xl text-gray-900 font-semibold">
                Dine at home with Hanoians{" "}
              </h2>{" "}
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 ${
                openAccordion === 1 ? "rotate-180" : ""
              } shrink-0`}
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
          id="accordion-collapse-body-1"
          className={`${openAccordion === 1 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200  ">
            <ol className="relative border-s border-gray-500 border-dotted  ">
              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1  text-base font-normal text-gray-500  ">
                  Touch down in Hanoi where a private Flash Pack transfer will
                  whisk you through the bustling streets to your central
                  boutique hotel
                </p>
              </li>

              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1  text-base font-normal text-gray-500  ">
                  Be invited into a Hanoian family home for a traditional Cha Ca
                  meal alongside three generations
                </p>
              </li>

              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1  text-base font-normal text-gray-500  ">
                  Enjoy an authentic feast of fish or vegetarian dishes that’s
                  near-impossible to find outside of a family kitchen; your
                  cultural immersion has begun
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
            onClick={() => toggleAccordion(2)}
            aria-expanded={openAccordion === 2}
            aria-controls="accordion-collapse-body-2"
          >
            <span className="flex gap-2 items-center">
              {" "}
              <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">
                Day 2
              </div>{" "}
              <h2 className="text-xl text-gray-900 font-semibold">
                Junk boat sailing, sunset cocktails & karaoke
              </h2>{" "}
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 ${
                openAccordion === 2 ? "rotate-180" : ""
              } shrink-0`}
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
          id="accordion-collapse-body-2"
          className={`${openAccordion === 2 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <ol className="relative border-s border-gray-500 border-dotted  ">
              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1  text-base font-normal text-gray-500  ">
                  Travel to Ha Long Bay where you’ll board a traditional junk
                  boat to cruise through the emerald waters and towering karst
                  islets of this Unesco World Heritage site
                </p>
              </li>

              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1  text-base font-normal text-gray-500  ">
                  Enjoy lunch on board as you sail to the isolated and
                  lesser-explored Lan Ha Bay, where you’ll take a bamboo boat
                  ride through the Dark and Light Cave
                </p>
              </li>

              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1  text-base font-normal text-gray-500  ">
                  Return to your junk boat for cocktails, a sunset dinner, and –
                  if your vocals are up to it – a night of karaoke. When in
                  Asia…
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
            onClick={() => toggleAccordion(3)}
            aria-expanded={openAccordion === 3}
            aria-controls="accordion-collapse-body-3"
          >
            <span className="flex gap-2 items-center">
              {" "}
              <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">
                Day 3
              </div>{" "}
              <h2 className="text-xl text-gray-900 font-semibold">
                Sunrise tai chi, kayaking & Hoi An arrival
              </h2>{" "}
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 ${
                openAccordion === 3 ? "rotate-180" : ""
              } shrink-0`}
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
          id="accordion-collapse-body-3"
          className={`${openAccordion === 3 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <ol className="relative border-s border-gray-500 border-dotted  ">
              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1  text-base font-normal text-gray-500  ">
                  Wake early for a sunrise tai chi class out on deck; the deep
                  breathing and slow movement against such majestic scenery
                  makes for a memorable group experience
                </p>
              </li>

              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1  text-base font-normal text-gray-500  ">
                  Take a kayaking excursion through idyllic Frog Pond Bay – the
                  film location for Kong Skull Island in the King Kong movie –
                  with towering sea cliffs and secret cave
                </p>
              </li>

              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1  text-base font-normal text-gray-500  ">
                  Paddle back to your luxury junk boat for brunch and breathe in
                  the epic scenery as you cruise back to port for your onward
                  journey to Hoi An{" "}
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <h2 id="accordion-collapse-heading-4">
          <button
            type="button"
            className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
            onClick={() => toggleAccordion(4)}
            aria-expanded={openAccordion === 4}
            aria-controls="accordion-collapse-body-4"
          >
            <span className="flex gap-2 items-center">
              <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">
                Day 4
              </div>
              <h2 className="text-xl text-gray-900 font-semibold">
                Walking tour, free afternoon & bamboo circus
              </h2>{" "}
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 ${
                openAccordion === 4 ? "rotate-180" : ""
              } shrink-0`}
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
          id="accordion-collapse-body-4"
          className={`${openAccordion === 4 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <ol className="relative border-s border-gray-500 border-dotted  ">
              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1 mb-2 text-base font-normal text-gray-500  ">
                  Discover the riverside city of Hoi An on a walking tour of the
                  Old Town, with its colourful clan houses and wooden-fronted
                  shophouses
                </p>
              </li>

              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1 mb-2 text-base font-normal text-gray-500  ">
                  Enjoy a free afternoon losing yourself in the winding alleys
                  that thrum with market stalls, Chinese lanterns and rich
                  architecture
                </p>
              </li>

              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1 mb-2 text-base font-normal text-gray-500  ">
                  Spend an evening at the internationally acclaimed ‘bamboo
                  circus’, where Vietnamese cultural stories are brought to life
                  in the most evocative of ways
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <h2 id="accordion-collapse-heading-5">
          <button
            type="button"
            className="flex items-center justify-between   w-full p-5 font-medium rtl:text-right bg-gray-200 text-gray-900 border border-b-0 gap-3"
            onClick={() => toggleAccordion(5)}
            aria-expanded={openAccordion === 5}
            aria-controls="accordion-collapse-body-5"
          >
            <span className="flex gap-2 items-center">
              <div className="bg-gray-900 text-white px-3 py-1 text-sm rounded-sm">
                Day 5
              </div>
              <h2 className="text-xl text-gray-900 font-semibold">
                Countryside cycling, noodle-making & local dinner
              </h2>{" "}
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 ${
                openAccordion === 5 ? "rotate-180" : ""
              } shrink-0`}
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
          id="accordion-collapse-body-5"
          className={`${openAccordion === 5 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <ol className="relative border-s border-gray-500 border-dotted  ">
              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1 mb-2 text-base font-normal text-gray-500  ">
                  Cycle through Hoi An’s countryside, past rice fields and
                  swaying palms, soaking up scenes of everyday rural life
                </p>
              </li>

              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1 mb-2 text-base font-normal text-gray-500  ">
                  Take a boat across the river to the tranquil island of Cam Kim
                  for an authentic noodle-making workshop with the local
                  villagers
                </p>
              </li>

              <li className="mb-4 ms-4 ">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0 -start-1.5 border border-white  "></div>
                <p className="relative -top-1 mb-2 text-base font-normal text-gray-500  ">
                  Tonight, meet local legend Mr Tu. Sit down with your group to
                  enjoy a sumptuous home-cooked meal, then Mr Tu and his friend
                  will show off their guitar skills with some Vietnamese
                  classics
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
