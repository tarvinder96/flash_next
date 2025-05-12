"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

import SideBar from "@/components/SideBar";

export default function dashboard() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;
  const [userData, setUserData] = useState({
    id: null,
    email: "",
    full_name: "",
    phone: "",
    date_of_birth: "",
  });
  //console.log('userData',userData);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));

    setUserData({
      id: data?.id || null,
      email: data?.email || "",
      full_name: data?.full_name || "",
      phone: data?.phone || "",
      date_of_birth: data?.date_of_birth || "",
    });
  }, []);
  return (
    <>
      <section className="">
        <SideBar />
        <div className="p-4 sm:ml-64 bg-[#fff7f157]  pb-10">
          <div className=" rounded-lg   mt-20">
            <div className="mb-5">
              <h1 className="text-3xl font-semibold">
                Hi {userData.full_name || ""}
              </h1>
              <p className="text-gray-700">Let's around the world</p>
            </div>
            <div className="flex gap-3 lg:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 w-full">
                <div className="w-full p-3 bg-[#fea759]  rounded-md mb-4">
                  <div className="flex justify-between">
                    <div className="text-sm">#125 trip : Amazing Greece</div>
                    <div className="font-semibold text-sm">3 days left</div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-3 grid-cols-1">
                  <div className="bg-white mx-auto shadow-sm p-5 border rounded-lg w-full h-full border-gray-200">
                    <div className="">
                      <h2 className="text-gray-400 text-sm">Done Bookings</h2>

                      <div className="flex items-center justify-between mt-2">
                        <div>
                          {" "}
                          <h2 className="text-[32px] font-semibold text-center text-green-700">
                            210
                          </h2>
                        </div>
                        {/* <div className="bg-green-600/20 px-3 py-1 text-green-600 rounded-md"></div> */}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white mx-auto shadow-sm p-5 border rounded-lg w-full h-full border-gray-200">
                    <div className="">
                      <h2 className="text-gray-400 text-sm">
                        Cancelled Bookings
                      </h2>

                      <div className="flex items-center justify-between mt-2">
                        <div>
                          {" "}
                          <h2 className="text-[32px] font-semibold text-center text-red-700">
                            13
                          </h2>
                        </div>
                        {/* <div className="bg-red-600/20 px-3 py-1 text-red-600 rounded-md">
                          6.2%
                        </div> */}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white mx-auto shadow-sm p-5 border rounded-lg w-full h-full border-gray-200">
                    <div className="">
                      <h2 className="text-gray-400 text-sm">Spending Money</h2>

                      <div className="flex items-center justify-between mt-2">
                        <div>
                          {" "}
                          <h2 className="text-[32px] font-semibold text-center text-[#eb8a33]">
                            $245K
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-3 bg-white  shadow sm:rounded-lg border border-gray-200 p-5 ">
                  <div className="relative overflow-x-auto ">
                    <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                          Last Bookings
                        </h2>
                      </div>
                      <label htmlFor="table-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-500  "
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="table-search"
                          className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500   "
                          placeholder="Search for items"
                        />
                      </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                          <th scope="col" className="p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-all-search"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "
                              />
                              <label
                                htmlFor="checkbox-all-search"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Code
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Trip Name
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Departure Date
                          </th>

                          <th scope="col" className="px-6 py-3">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b   border-gray-200 hover:bg-gray-50  ">
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-search-1"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "
                              />
                              <label
                                htmlFor="checkbox-table-search-1"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                          >
                            #453
                          </th>
                          <td className="px-6 py-4">Tropical Tours Greece</td>
                          <td className="px-6 py-4">9/21/2025</td>

                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-[#f18136]   hover:underline"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr className="bg-white border-b   border-gray-200 hover:bg-gray-50  ">
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-search-2"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  focus:ring-2 "
                              />
                              <label
                                htmlFor="checkbox-table-search-2"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                          >
                            #454
                          </th>
                          <td className="px-6 py-4">Tropical Tours Ghana</td>
                          <td className="px-6 py-4">7/14/2025</td>

                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-[#f18136]   hover:underline"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr className="bg-white border-b   border-gray-200 hover:bg-gray-50  ">
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-search-3"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  focus:ring-2 "
                              />
                              <label
                                htmlFor="checkbox-table-search-3"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                          >
                            #257
                          </th>
                          <td className="px-6 py-4">Tropical Tours Maldives</td>
                          <td className="px-6 py-4">11/2/2026</td>
                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-[#f18136]   hover:underline"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr className="bg-white border-b   border-gray-200 hover:bg-gray-50  ">
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-3"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  focus:ring-2 "
                              />
                              <label
                                htmlFor="checkbox-table-3"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                          >
                            #536
                          </th>
                          <td className="px-6 py-4">
                            Tropical Tours Dubai Tour
                          </td>
                          <td className="px-6 py-4">3/3/2026</td>

                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-[#f18136]   hover:underline"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr className="bg-white border-b   border-gray-200 hover:bg-gray-50  ">
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-table-3"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500   focus:ring-2  "
                              />
                              <label
                                htmlFor="checkbox-table-3"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                          >
                            #532
                          </th>
                          <td className="px-6 py-4">
                            Tropical Tours South Africa
                          </td>
                          <td className="px-6 py-4">11/2/2026</td>

                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-[#f18136]   hover:underline"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 w-full">
                <div className="w-full h-full shadow sm:rounded-lg border bg-white border-gray-200 p-4 ">
                  <ul className="">
                    <div className="flex items-center  justify-between">
                      <h3 className="mb-0 text-lg font-semibold text-ld">
                        Up coming Trips
                      </h3>
                      <span
                        className="flex h-fit w-fit items-center font-medium bg-green-700 text-white p-1 text-xs rounded-full px-2.5 py-[5px]"
                        data-testid="flowbite-badge"
                      >
                        <span>5 new</span>
                      </span>
                    </div>
                    <div className="max-h-80 mt-3">
                      <div className="simplebar-wrapper">
                        <div className=" ">
                          <div className="simplebar-height-auto-observer" />
                        </div>
                        <div className="simplebar-mask">
                          <div className="simplebar-offset">
                            <div
                              className="simplebar-content-wrapper overflow-y-auto"
                              tabIndex={0}
                              role="region"
                              aria-label="scrollable content"
                            >
                              <div
                                className="simplebar-content"
                                style={{ padding: 0 }}
                              >
                                <li
                                  role="menuitem"
                                  className="focus:outline-none hover:bg-gray-100"
                                >
                                  <a
                                    type="button"
                                    className="cursor-pointer text-sm text-ld hover:text-primary focus:bg-hover focus:outline-none py-3 flex justify-between items-center bg-hover group/link w-full"
                                    tabIndex={-1}
                                    href="#"
                                  >
                                    <div className="flex items-center">
                                      <span className="flex items-center justify-center relative bg-blue-100 rounded-full h-10 w-10">
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
                                      </span>
                                      <div className="ps-4">
                                        <h5 className="mb-1 text-sm text-gray-800 font-semibold">
                                          Lisbon: City Break
                                        </h5>
                                        <span className="text-xs block text-gray-500">
                                          5 day's
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  role="menuitem"
                                  className="focus:outline-none hover:bg-gray-100"
                                >
                                  <a
                                    type="button"
                                    className="cursor-pointer text-sm text-ld hover:text-primary focus:bg-hover focus:outline-none py-3 flex justify-between items-center bg-hover group/link w-full"
                                    tabIndex={-1}
                                    href="#"
                                  >
                                    <div className="flex items-center">
                                      <span className="flex items-center justify-center relative bg-red-100 rounded-full h-10 w-10">
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
                                      </span>
                                      <div className="ps-4">
                                        <h5 className="mb-1 text-sm font-semibold text-gray-800">
                                          Tropical Puerto Rico
                                        </h5>
                                        <span className="text-xs block  text-gray-600">
                                          8 day's
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  role="menuitem"
                                  className="focus:outline-none hover:bg-gray-100"
                                >
                                  <a
                                    type="button"
                                    className="cursor-pointer text-sm text-ld hover:text-primary focus:bg-hover focus:outline-none py-3 flex justify-between items-center bg-hover group/link w-full"
                                    tabIndex={-1}
                                    href="#"
                                  >
                                    <div className="flex items-center">
                                      <span className="flex items-center justify-center relative bg-yellow-100 rounded-full h-10 w-10">
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
                                      </span>
                                      <div className="ps-4">
                                        <h5 className="mb-1 text-sm text-gray-800 font-semibold">
                                          Colombia’s Caribbean Coast
                                        </h5>
                                        <span className="text-xs block text-gray-600">
                                          4 day's
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  role="menuitem"
                                  className="focus:outline-none hover:bg-gray-100"
                                >
                                  <a
                                    type="button"
                                    className="cursor-pointer text-sm text-ld hover:text-primary focus:bg-hover focus:outline-none py-3 flex justify-between items-center bg-hover group/link w-full"
                                    tabIndex={-1}
                                    href="#"
                                  >
                                    <div className="flex items-center">
                                      <span className="flex items-center justify-center relative bg-green-100 rounded-full h-10 w-10">
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
                                      </span>
                                      <div className="ps-4">
                                        <h5 className="mb-1 text-sm text-gray-800 font-semibold">
                                          Utah: Moab Adventure
                                        </h5>
                                        <span className="text-xs block text-gray-600">
                                          6 day's
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  role="menuitem"
                                  className="focus:outline-none hover:bg-gray-100"
                                >
                                  <a
                                    type="button"
                                    className="cursor-pointer text-sm text-ld hover:text-primary focus:bg-hover focus:outline-none py-3 flex justify-between items-center bg-hover group/link w-full"
                                    tabIndex={-1}
                                    href="#"
                                  >
                                    <div className="flex items-center">
                                      <span className="flex items-center justify-center relative bg-orange-100 rounded-full h-10 w-10">
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
                                      </span>
                                      <div className="ps-4">
                                        <h5 className="mb-1 text-sm text-gray-800 font-semibold">
                                          Colombia’s Caribbean Coast
                                        </h5>
                                        <span className="text-xs block text-gray-600">
                                          8 day's
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
