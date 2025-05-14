"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";

import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const params = useParams();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const userDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setIsUserDropdownOpen(false);
      }
    }

    if (isUserDropdownOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isUserDropdownOpen]);

  const [userData, setUserData] = useState({
    id: null,
    email: "",
    full_name: "",
    phone: "",
    date_of_birth: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserData({
      id: null,
      email: "",
      full_name: "",
      phone: "",
      date_of_birth: "",
    });
    router.push("/login");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Sidebar Toggle Button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
              >
                <span className="sr-only">
                  {isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                </span>
                {isSidebarOpen ? (
                  // Close (X) Icon
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    />
                  </svg>
                ) : (
                  // Menu (Hamburger) Icon
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                  </svg>
                )}
              </button>

              {/* Logo */}
              <a href="" className="flex ms-2 md:me-24">
                <Image className="lg:w-[210px] w-[122px]" src={logo} alt="" />
              </a>
            </div>

            <div>
              <header
                className={`py-2  top-0 left-0 w-full z-20 transition-colors duration-300 ${
                  scrolled ? "" : ""
                }`}
              >
                <nav className="w-full z-20">
                  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-1">
                    <div className="flex space-x-3 rtl:space-x-reverse">
                      <Link href="login" passHref legacyBehavior>
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="text-gray-900 bg-white border-[#fea759] border border-white-300 focus:outline-none hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-100   rounded-lg text-sm lg:px-5 lg:py-2 px-2 py-1 flex items-center gap-1 lg:text-[16px] text-[12px] h-[45px]"
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
                          Logout
                        </button>
                      </Link>

                      <button
                        type="button"
                        className="text-gray-900 justify-center  flex items-center gap-1 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 bg-[#fea759] h-[45px] w-fit"
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
                  </div>

                  <div
                    className={`fixed top-0 right-0 h-full bg-[#ffa858] shadow-lg transform transition-transform duration-300 ${
                      isOpen ? "translate-x-0" : "translate-x-full"
                    } w-64 z-50`}
                  >
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                      onClick={toggleMenu}
                    >
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <ul className="flex flex-col p-4 space-y-4 ">
                      <li>
                        <Link href="#" passHref legacyBehavior>
                          <a className="block py-2 px-3 text-gray-800">Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" passHref legacyBehavior>
                          <a className="block py-2 px-3 text-gray-800">
                            Profile
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" passHref legacyBehavior>
                          <a className="block py-2 px-3 text-gray-800">
                            Membership
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" passHref legacyBehavior>
                          <a className="block py-2 px-3 text-gray-800">Book</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="aboutus" passHref legacyBehavior>
                          <a className="block py-2 px-3 text-gray-800">About</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </header>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-[#7F5539] border-r  border-gray-200   ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-[#7F5539]  ">
          <ul className="space-y-2 font-medium pt-5">
            <li>
              <Link href="/dashboard" passHref legacyBehavior>
                <a className="flex items-center p-2 text-white rounded-lg   hover:bg-gray-100 hover:text-gray-700   group font-[400]">
                  <svg
                    className="w-6 h-6"
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
                      strokeWidth={1.5}
                      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                    />
                  </svg>

                  <span className="ms-3">Dashboard</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/dashboard" passHref legacyBehavior>
                <a className="flex items-center p-2 text-white rounded-lg   hover:bg-gray-100 hover:text-gray-700   group font-[400]">
                  <svg
                    className="w-6 h-6  "
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
                      strokeWidth={1.5}
                      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <span className="ms-3">My Account</span>
                </a>
              </Link>
            </li>

            {/* Sidebar Dropdown */}

            <>
              <li>
                <Link href="/forms" passHref legacyBehavior>
                  <a className="font-[400] flex items-center p-2 text-white rounded-lg   hover:bg-white hover:text-gray-700   group">
                    <svg
                      className="w-6 h-6"
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
                        strokeWidth={1.5}
                        d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                      />
                    </svg>

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      My Trips
                    </span>
                  </a>
                </Link>
              </li>
              <li></li>
              <li>
                <Link href="/my-bookings" passHref legacyBehavior>
                  <a className="font-[400] flex items-center p-2 text-white rounded-lg   hover:bg-white hover:text-gray-700   group">
                    <svg
                      className="w-6 h-6"
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
                        strokeWidth={1.5}
                        d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"
                      />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      My bookings
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tabletwo" passHref legacyBehavior>
                  <a className="font-[400] flex items-center p-2 text-white rounded-lg   hover:bg-white hover:text-gray-700   group">
                    <svg
                      className="w-6 h-6"
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
                        strokeWidth={1.5}
                        d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"
                      />
                    </svg>

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Card details
                    </span>
                  </a>
                </Link>
              </li>
              <li></li>
              <li>
                <Link href="" passHref legacyBehavior>
                  <a className="font-[400] flex items-center p-2 text-white rounded-lg   hover:bg-white hover:text-gray-700   group">
                    <svg
                      className="w-6 h-6"
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
                        strokeWidth={1.5}
                        d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                      />
                    </svg>

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Membership
                    </span>
                  </a>
                </Link>
              </li>

              <li>
                <a
                  onClick={handleLogout}
                  className="font-[400] flex items-center p-2 text-white rounded-lg   hover:bg-white hover:text-gray-700  group"
                >
                  <svg
                    className="w-6 h-6"
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
                      strokeWidth={1.5}
                      d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Sign out
                  </span>
                </a>
              </li>
            </>
          </ul>
        </div>
      </aside>
    </>
  );
}
