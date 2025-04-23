"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full shadow-md z-50 bg-white py-2">
        <nav className=" w-full z-20">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-1">
            <Link href="/" passHref legacyBehavior>
              <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image className="lg:w-[210px] w-[122px]" src={logo} alt="" />
              </a>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link href="login" passHref legacyBehavior>
                <button
                  type="button"
                  className="text-gray-800 border-gray-800 border border-white-300 focus:outline-none hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-100   rounded-lg text-sm lg:px-5 lg:py-2 px-2 py-1 flex items-center gap-1 lg:text-[16px] text-[12px]"
                >
                  <span className="">
                    <svg
                      className="lg:w-[18px] lg:h-[18px] w-[13px] h-[13px]"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 20.4063V18.3399C17 17.2438 16.5786 16.1926 15.8284 15.4175C15.0783 14.6425 14.0609 14.207 13 14.207H5C3.93913 14.207 2.92172 14.6425 2.17157 15.4175C1.42143 16.1926 1 17.2438 1 18.3399V20.4063"
                        stroke="currentcolor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 9.5938C11.2091 9.5938 13 7.74346 13 5.46096C13 3.17846 11.2091 1.32812 9 1.32812C6.79086 1.32812 5 3.17846 5 5.46096C5 7.74346 6.79086 9.5938 9 9.5938Z"
                        stroke="currentcolor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Sign In or Join
                </button>
              </Link>

              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between ${
                isOpen ? "block" : "hidden"
              } w-full md:flex md:w-auto md:order-1`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <Link href="/" passHref legacyBehavior>
                    <a
                      className={`block py-2 px-3 rounded-sm md:p-0  ${
                        activeItem === "Home"
                          ? "text-gray-800-white"
                          : "text-gray-800  "
                      }`}
                      aria-current="page"
                      onClick={() => handleItemClick("myAccount")}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref legacyBehavior>
                    <a
                      className={`block py-2 px-3 rounded-sm md:p-0  ${
                        activeItem === "alltrip"
                          ? "text-gray-800"
                          : "text-gray-800  "
                      }`}
                      aria-current="page"
                      onClick={() => handleItemClick("alltrip")}
                    >
                      All Trips
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/" passHref legacyBehavior>
                    <a
                      className={`block py-2 px-3 rounded-sm md:p-0  ${
                        activeItem === "offter"
                          ? "text-gray-800"
                          : "text-gray-800  "
                      }`}
                      aria-current="page"
                      onClick={() => handleItemClick("offter")}
                    >
                      Offter
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref legacyBehavior>
                    <a
                      className={`block py-2 px-3 rounded-sm md:p-0  ${
                        activeItem === "Aboutus"
                          ? "text-gray-800"
                          : "text-gray-800  "
                      }`}
                      aria-current="page"
                      onClick={() => handleItemClick("Aboutus")}
                    >
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref legacyBehavior>
                    <a
                      className={`block py-2 px-3 rounded-sm md:p-0  ${
                        activeItem === "contactus"
                          ? "text-gray-800"
                          : "text-gray-800"
                      }`}
                      aria-current="page"
                      onClick={() => handleItemClick("contactus")}
                    >
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
