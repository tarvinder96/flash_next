"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import faster from "../images/faster.png";
import Link from "next/link";

export default function SignupButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    setIsLoggedIn(!!userToken);
  }, []);

  const handleRedirect = () => {
    if (isLoggedIn) {
      router.push("/register-user");
    } else {
      router.push("/signup");
    }
  };

  return (
    <section className="lg:pb-[80px] pb-[40px]">
      <div className="max-w-screen-xl mx-auto lg:px-0 px-4">
        <div className="flex flex-wrap items-center justify-between w-full bg-[#EDE0D4] rounded-[20px] lg:p-20 p-8 gap-8">
          <div>
            <h2 className="lg:text-[40px] text-[20px] font-[700] text-left lg:leading-8">
              Find your perfect trip faster
            </h2>
            <h2 className="lg:text-[40px] text-[20px] font-[700] text-left">
              with an account
            </h2>
            <p className="lg:text-[16px] text-[14px]">
              <strong>80% of customers take 3-6 weeks</strong> exploring our
              trips before they decide on THE ONE.
            </p>
            <p className="lg:text-[16px] text-[14px]">
              <strong>Save trips and time.</strong> Build your collection and
              see who's going on each trip.
            </p>
            <p className="lg:text-[16px] text-[14px]">
              <strong>Never miss a deal.</strong> Get notified when trips you've
              saved go on sale.
            </p>

            <button
              onClick={handleRedirect}
              type="button"
              className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px] mt-4"
            >
              Sign Up!
            </button>
          </div>

          <div className="lg:block hidden">
            <Image src={faster} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
