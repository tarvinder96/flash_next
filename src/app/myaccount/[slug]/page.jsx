"use client";

import { useParams, useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MyAccount() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;

  const [form, setForm] = useState({
    holder_name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({
    id: null,
    email: "",
    full_name: "",
    phone: "",
    date_of_birth: "",
  });

  // Load user from localStorage
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

  // Fetch event details using slug
  useEffect(() => {
    if (slug) {
      fetch(
        `https://actyvsolutions.com/flash_pack/public/api/geteventdetails/${slug}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data?.status) {
            setSelectedCountryId(data.data.country_id);
          } else {
            console.error("Event not found");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching event data:", error);
          setLoading(false);
        });
    }
  }, [slug]);

  // Logout
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

  // Input change handler
  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });

  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const numericValue = value.replace(/\D/g, ""); // Only digits
      setForm({ ...form, [name]: numericValue });
    } else if (name === "expiry") {
      let cleaned = value.replace(/\D/g, ""); // Only digits
      if (cleaned.length > 2) {
        cleaned = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
      }
      setForm({ ...form, [name]: cleaned });
    } else if (name === "holder_name") {
      const alphaOnly = value.replace(/[^a-zA-Z\s]/g, ""); // Only letters and spaces
      setForm({ ...form, [name]: alphaOnly });
    } else if (name === "cvv") {
      const numericCVV = value.replace(/\D/g, ""); // Only digits
      setForm({ ...form, [name]: numericCVV });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Submit card details using fetch
  const handleSubmit = async (e) => {
    e.preventDefault();
    const udata = JSON.parse(localStorage.getItem("user"));
    const formDataWithStatic = {
      ...form,
      user_id: udata?.id || null,
      email: udata?.email || "",
      full_name: udata?.full_name || "",
      phone: udata?.phone || "",
      date_of_birth: udata?.date_of_birth || "",
      slug: slug || "",
    };

    console.log("formDataWithStatic:", formDataWithStatic);
    try {
      const saveresponse = await fetch(
        `https://actyvsolutions.com/flash_pack/public/api/save-card-details`,
        // "https://actyvsolutions.com/flash_pack/public/api/save-card-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataWithStatic),
        }
      );

      const result = await saveresponse.json();

      if (result.status == "success") {
        alert("Booking has been Completed. Thank you!");
        router.push("/dashboard");
      } else {
        console.error(result);
        alert("Failed to save card details.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to save card details.");
    }
  };

  return (
    <>
      <Header />
      <section className="w-full bg-[linear-gradient(to_right,_#7c4caa,_#B14D98)] lg:pt-20 pt-10 pb-0">
        <h2 className="font-[700] lg:text-4xl text-2xl text-white text-center pt-10">
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
                  onClick={handleLogout}
                  type="button"
                  className="text-white bg-red-600 focus:outline-none font-medium rounded-lg px-4 py-2 text-[14px]"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-screen-xl m-auto mt-12">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
              <form onSubmit={handleSubmit} className="w-full">
                <h2 className="text-xl font-semibold mb-5">Card Details</h2>

                {/* Full Name */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Full Name (as on card)
                  </label>
                  <input
                    type="text"
                    name="holder_name"
                    value={form.holder_name}
                    onChange={handleChange}
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
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    // inputMode="numeric"
                    // pattern="[0-9]*"
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
                      name="expiry"
                      value={form.expiry}
                      onChange={handleChange}
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
                      name="cvv"
                      value={form.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className="border p-2 mt-1 rounded-lg bg-gray-100 w-full"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-6 w-full bg-[#7F5539] border border-[#7F5539] text-white py-2 rounded-lg"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
