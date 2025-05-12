'use client';
import { useParams, useRouter } from 'next/navigation';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect } from 'react';

export default function myaccount() {
  const params = useParams();
   const slug = params.slug;
  
   const userData = JSON.parse(localStorage.getItem("user"));
   const userid = userData?.id || null;
   const email = userData?.email || null;
   const full_name = userData?.full_name || null;
   const phone = userData?.phone || null;
   const date_of_birth = userData?.date_of_birth || null;
   console.log(userid);


  // Fetch the user data after the component mounts or slug changes
  useEffect(() => {
    if (slug) {
      
      fetch(`https://actyvsolutions.com/flash_pack/public/api/geteventdetails/${slug}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.status) {
            setSelectedCountryId(data.data.country_id); // Set selectedCountryId from event data
          } else {
            console.error("Event not found");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching event data:', error);
          setLoading(false);
        });

      
    }
  }, [slug]);
  return (
    <>
      <Header />
      <section className="w-full bg-[linear-gradient(to_right,_#7c4caa,_#B14D98)] lg:pt-20 pt-10 pb-0">
        <h2 className="font-[700] lg:text-4xl text-2xl text-white text-center pt-10">
          {" "}
          My Account
        </h2>
        <div className="w-full bg-white lg:py-10 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] px-4">
          <div className="max-w-screen-xl m-auto border-b border-b-gray-400 pb-2">
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-8">
                <Link href="#" passHref legacyBehavior>
                  <div className="font-semibold text-[#e49044] cursor-pointer">
                    Account
                  </div>
                </Link>

                <Link href="#" passHref legacyBehavior>
                  <div className="font-semibold cursor-pointer">My Trips</div>
                </Link>
              </div>

              <div>
                <button
                  type="button"
                  className="text-white bg-red-600 focus:outline-none   font-medium rounded-lg   px-4 py-2 text-[14px]"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-screen-xl m-auto mt-10">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
              <div>
                <form className="max-w-[400px] w-full">
                  <h2 className="text-xl font-semibold mb-5">Your Details</h2>

                  {/* Full Name */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">
                      Full Name (as on passport)
                    </label>
                    <input
                      className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                      type="text"
                      defaultValue={full_name}
                      readOnly
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                      placeholder=""
                      readOnly
                      type="email"
                      value={email}
                    />
                  </div>

                  {/* Date of Birth */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">
                      Date of Birth (as on passport)
                    </label>
                    <input
                      className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                      placeholder="DD/MM/YYYY"
                      defaultValue="17/05/1992"
                      type="date"
                      readOnly
                      value={date_of_birth}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <div className="flex gap-3">
                      <select
                        className="w-[60px] border mt-1 rounded-lg bg-gray-100"
                        defaultValue="US"
                        readOnly
                      >
                        <option value="+1">+1</option>
                        <option value="US">+1</option>
                        <option value="CA">+93</option>
                      </select>
                      <input
                        className="border p-2 mt-1 rounded-lg bg-gray-100 w-full"
                        placeholder="Phone Number"
                        type="text"                    
                        defaultValue={phone}
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Edit Button */}
                  <div className="mb-3 pb-20">
                    <button
                      type="button"
                      className="text-gray-600 bg-transparent border border-gray-600 hover:text-white hover:bg-gray-600 focus:outline-none font-medium rounded-lg lg:text-[18px] h-[45px] text-[14px] mt-5 w-full flex items-center justify-center gap-2"
                    >
                      <span>
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
                            strokeWidth={2}
                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                          />
                        </svg>
                      </span>
                      Edit
                    </button>
                  </div>
                </form>
              </div>

              <div>
                <form className="max-w-[400px] w-full ">
                  <h2 className="text-xl font-semibold mb-5">Card Details</h2>

                  {/* Full Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Full Name (as on card)
                    </label>
                    <input
                      type="text"
                      placeholder="Johan Due"
                      className="border p-2 mt-1 rounded-lg bg-gray-100 w-full"
                    />
                  </div>

                  {/* Card Number */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="border p-2 mt-1 rounded-lg bg-gray-100 w-full"
                    />
                  </div>

                  {/* Expiry and CVV */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-2 mt-1 rounded-lg bg-gray-100 w-full"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">
                        CVV
                      </label>
                      <input
                        type="password"
                        placeholder="123"
                        className="border p-2 mt-1 rounded-lg bg-gray-100 w-full"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-6 w-full bg-[#7F5539] border border-[#7F5539] text-white py-2 rounded-lg  "
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
