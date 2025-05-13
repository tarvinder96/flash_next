"use client";

import { useParams, useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Checkout() {
  const router = useRouter();
  const { slug } = useParams();

  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  //console.log("selectedCountryId", selectedCountryId);
  const [userData, setUserData] = useState({
    id: null,
    email: "",
    full_name: "",
    phone: "",
    date_of_birth: "",
    city: "",
    zipcode: "",
    country_id: "",
  });
  const [loading, setLoading] = useState(true);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUserData({
        id: parsed.id || null,
        email: parsed.email || "",
        full_name: parsed.full_name || "",
        phone: parsed.phone || "",
        date_of_birth: parsed.date_of_birth || "",
        city: parsed.city || "",
        zipcode: parsed.zipcode || "",
        country_id: parsed.country_id || "",
        slug: slug,
      });
    }
  }, []);

  console.log("userData", userData);

  // Fetch countries first
  useEffect(() => {
    fetch("https://actyvsolutions.com/flash_pack/public/api/get-country")
      .then((response) => response.json())
      .then((data) => {
        if (data?.status && Array.isArray(data.data)) {
          setCountries(data.data);
        } else {
          console.error("Failed to fetch countries.");
        }
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  

  const handleViewDetails = async(slug) => {
    if (slug) {
      try {
        const saveresponse = await fetch(
          `https://actyvsolutions.com/flash_pack/public/api/bookings`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );
  
        const result = await saveresponse.json();
  
        if (result.status == "success") {
          alert("Thank you for booking! Your reservation is saved. Complete the payment to finalize your booking.");
          router.push(`/myaccount/${slug}`);
        } else {
          console.error(result);
          alert("Failed to save card details.");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("Failed to save card details.");
      }



     
    } else {
      console.error("Invalid event slug");
    }
  };

  return (
    <>
      <Header />
      <section className="w-full bg-[linear-gradient(to_right,_#7c4caa,_#B14D98)] lg:pt-20 pt-10 pb-0">
        <h2 className="font-[700] lg:text-4xl text-2xl text-white text-center pt-10">
          {" "}
          Checkout
        </h2>
        <div className="w-full bg-white lg:py-20 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Billing address</h2>
              <div className=" ">
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1">
                    Full Name (as on passport)
                  </label>
                  <input
                    className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                    type="text"
                    value={userData.full_name || ""}
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
                    value={userData.email || ""}
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
                    type="text"
                    readOnly
                    value={userData.date_of_birth || ""}
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
                      defaultValue="+1"
                      disabled
                    >
                      <option value="+1">+1</option>
                      <option value="US">+1</option>
                      <option value="CA">+93</option>
                    </select>
                    <input
                      className="border p-2 mt-1 rounded-lg bg-gray-100 w-full"
                      placeholder="Phone Number"
                      type="text"
                      value={userData.phone || ""}
                      readOnly
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label>Town/City</label>
                  <input
                    type="text"
                    name="city"
                    readOnly
                    placeholder="Enter town/city..."
                    className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                    value={userData.city || ""}
                  />
                </div>

                <div className="mb-3">
                  <label>Postcode/Zipcode</label>
                  <input
                    type="text"
                    name="zipcode"
                    readOnly
                    placeholder="Enter code..."
                    className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                    value={userData.zipcode || ""}
                  />
                </div>
                <div className="mb-3">
                  <label>Country</label>
                  <select
                    className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                    value={userData.country_id}
                    onChange={(e) => setSelectedCountryId(e.target.value)} // ✅ This is required
                  >
                    <option value="">Select country...</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.country_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" />I have read,
                  understand and agree to the terms and conditions of sale
                </label>
              </div>
              <button
                onClick={() => handleViewDetails(slug)}
                className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px] mt-4"
              >
                Continue to Payment
              </button>
            </div>
            {/* Right Column */}
            <div>
              <div className="bg-[#ffefe1] p-6 rounded-xl mb-6">
                <h2 className="text-2xl font-bold mb-4">Order details</h2>
                <h3 className="font-semibold">Secret Vietnam</h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">
                  From Slovenia's jagged peaks to Croatia’s dreamy coastline,
                  this adventure packs in fairytale lakes, hilltop towns and
                  plenty of gourmet food. Welcome to the good life
                </p>
                <div className="flex gap-4 text-sm font-semibold mb-1">
                  <span className="bg-white border rounded-full px-3 py-1">
                    14th Jun 2025
                  </span>
                  <span className="bg-white border rounded-full px-3 py-1">
                    22nd Jun 2025
                  </span>
                </div>
                <p className="text-sm mb-4">9 days, 8 nights</p>
                <h4 className="font-semibold mb-2">Package includes</h4>
                <ul className="space-y-2 text-sm text-gray-800">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 10h18M9 21V6h6v15" />
                    </svg>
                    Stay in hand-picked 4-star hotels
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                    All activities mentioned on the itinerary
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    Experienced Pack Leader with you throughout the trip
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16v16H4z" />
                    </svg>
                    Local transport
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3h18v4H3z" />
                      <path d="M3 10h18v4H3z" />
                      <path d="M3 17h18v4H3z" />
                    </svg>
                    8 breakfasts, 1 lunch, 2 dinners
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l9 4-9 4-9-4 9-4z" />
                      <path d="M12 22V10" />
                    </svg>
                    Exclusively for people in their 30s and 40s
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 0-12 0v2a4 4 0 0 0 4 4v4a4 4 0 0 0 8 0v-4a4 4 0 0 0 4-4v-2a6 6 0 0 0-4-5.65" />
                    </svg>
                    Arrival transfer included
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    We offset your carbon emissions
                  </li>
                </ul>
              </div>
              <div className="bg-[#ffefe1] p-6 rounded-xl">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Trip total</span>
                  <span>$4,395</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
