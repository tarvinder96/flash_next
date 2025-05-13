"use client";
import logo from "../images/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [socialLinks, setSocialLinks] = useState(null);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await fetch(
          `https://actyvsolutions.com/flash_pack/public/api/getsociallink`
        );
        const data = await response.json();
        if (data.status) {
          setSocialLinks(data.data);
        } else {
          console.error("Failed to fetch social links:", data.message);
        }
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchSocialLinks();
  }, []);

  if (!socialLinks) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="footer bg-white">
        <div className="container mx-auto px-4">
          <>
            <footer className="relative z-10 bg-white  pt-20 pb-10 lg:pt-[120px] lg:pb-20">
              <div className="container mx-auto">
                <div className="flex flex-wrap ">
                  <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                    <div className="w-full mb-10">
                      <a
                        href=" "
                        className="flex items-center space-x-3 rtl:space-x-reverse mb-5"
                      >
                        <Image className="w-[210px]" src={logo} alt="" />
                      </a>
                      <p className="text-base text-body-color dark:text-dark-6 mb-7">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Sit amet consectetur adipiscing elit quisque faucibus
                        ex. Adipiscing elit quisque faucibus ex sapien vitae
                        pellentesque.
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                    <div className="w-full mb-10">
                      <h4 className="text-lg font-semibold text-dark   mb-9">
                        Company
                      </h4>
                      <ul className="space-y-3">
                        <li>
                          {/* <Link href="/" passHref legacyBehavior>
                            <a className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                              Site Map
                            </a>
                          </Link> */}
                        </li>
                        <li>
                          <Link href="/privacypolicy" passHref legacyBehavior>
                            <a className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                              Privacy policy
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/termsconditions" passHref legacyBehavior>
                            <a className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                              Terms & Conditions
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                    <div className="w-full mb-10">
                      <h4 className="text-lg font-semibold text-dark  mb-9">
                        Quick Links
                      </h4>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                              Membership
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="all-trips" passHref legacyBehavior>
                            <a className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                              Book
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="aboutus" passHref legacyBehavior>
                            <a className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                              About
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                    <div className="w-full mb-10">
                      <h4 className="text-lg font-semibold text-dark  mb-9">
                        Recent Events
                      </h4>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                              Untouched Albania
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                              Spectacular Peru
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                              Secret Vietnam
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                    <div className="w-full mb-10">
                      <h4 className="text-lg font-semibold text-dark mb-9">
                        Our Info
                      </h4>

                      <div className="flex mt-4 mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-map-pin size-4 text-[#7F5539] me-2 mt-1"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx={12} cy={10} r={3} />
                        </svg>
                        <div className="">
                          <h6 className="text-black ">
                            P.O. Box # 322 <br /> 5 Sicomac Rd, Suite 6<br />
                            North Apex, SM 8548
                          </h6>
                        </div>
                      </div>

                      <div className="flex items-center mb-6">
                        {socialLinks.facebook && (
                          <a
                            href={socialLinks.facebook}
                            target="_blank"
                            className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                          >
                            <svg
                              width={8}
                              height={16}
                              viewBox="0 0 8 16"
                              className="fill-current text-[#7F5539]"
                            >
                              <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                            </svg>
                          </a>
                        )}
                        {socialLinks.xender && (
                          <a
                            href={socialLinks.xender}
                            target="_blank"
                            className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={15}
                              height={15}
                              fill="currentColor "
                              className="bi bi-twitter-x text-[#7F5539]"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                          </a>
                        )}
                        {socialLinks.youtube && (
                          <a
                            href={socialLinks.youtube}
                            target="_blank"
                            className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                          >
                            <svg
                              width={16}
                              height={12}
                              viewBox="0 0 16 12"
                              className="fill-current text-[#7F5539]"
                            >
                              <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                            </svg>
                          </a>
                        )}
                        {socialLinks.linkedin && (
                          <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                          >
                            <svg
                              width={14}
                              height={14}
                              viewBox="0 0 14 14"
                              className="fill-current text-[#7F5539]"
                            >
                              <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                            </svg>
                          </a>
                        )}
                        {socialLinks.pinterest && (
                          <a
                            href={socialLinks.pinterest}
                            target="_blank"
                            className="flex items-center justify-center w-8 h-8 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              fill="currentColor"
                              className="bi bi-pinterest text-[#7F5539]"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="absolute left-0 bottom-0 z-[-1]">
                  <svg
                    width={217}
                    height={229}
                    viewBox="0 0 217 229"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                      fill="url(#paint0_linear_1179_5)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1179_5"
                        x1="76.5"
                        y1={281}
                        x2="76.5"
                        y2="1.22829e-05"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3056D3" stopOpacity="0.08" />
                        <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute top-10 right-10 z-[-1]">
                  <svg
                    width={75}
                    height={75}
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                      fill="url(#paint0_linear_1179_4)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1179_4"
                        x1="-1.63917e-06"
                        y1="37.5"
                        x2={75}
                        y2="37.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#13C296" stopOpacity="0.31" />
                        <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </footer>
          </>
        </div>
      </section>
      <div className="bg-gray-800 py-2 shadow-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center ">
          <div className="text-center text-sm text-white flex justify-center">
            <p>2025 All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
