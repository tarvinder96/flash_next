"use client";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import imgright from "@/images/ad1.jpg";

export default function RegisterUser() {
  const [userid, setUserid] = useState(null);

  useEffect(() => {
    const item = localStorage.getItem("signup_user_id");
    if (item) {
      setUserid(item);
    }
  }, []);
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    dob: "",
    country_id: "",
    countryCode: "+1",
    phone: "",
    email: "",
    city: "",
    zipcode: "",
  });

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `https://actyvsolutions.com/flash_pack/public/api/get-profile/${userid}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await res.json();
        if (data.status && data.data) {
          const profileData = data.data;

          setForm({
            fullName: profileData?.full_name || "",
            gender: profileData?.gender || "",
            dob: profileData?.date_of_birth || "",
            country_id: profileData?.country_id || "",
            countryCode: "+1",
            phone: profileData?.phone || "",
            email: profileData?.email || "",
            city: profileData?.city || "",
            zipcode: profileData?.zipcode || "",
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    const fetchCountries = async () => {
      try {
        const res = await fetch(
          `https://actyvsolutions.com/flash_pack/public/api/get-country`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        const data = await res.json();
        if (data.status === "success") {
          setCountries(data.data);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchProfile();
    fetchCountries();
  }, [userid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      full_name: form.fullName,
      gender: form.gender,
      date_of_birth: form.dob,
      country_id: form.country_id,
      // nationality: form.nationality,
      country_code: form.countryCode,
      phone: form.phone,
      email: form.email,
      city: form.city,
      zipcode: form.zipcode,
    };

    try {
      const res = await fetch(
        `https://actyvsolutions.com/flash_pack/public/api/update-profile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error response:", errorText);
        Swal.fire("Error", "Failed to update profile.", "error");
        return;
      }

      const data = await res.json();
      if (data.status) {
        await Swal.fire("Success", data.message, "success");
        window.location.href = `/`;
      } else {
        Swal.fire("Error", "Error saving profile", "error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire("Error", "Failed to submit profile.", "error");
    }
  };

  return (
    <>
      <Header />
      <main className="mt-[114px]">
        <section>
          <div className="max-w-screen-xl mx-auto lg:px-0 px-4">
            <div className="container relative">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                <div className="lg:col-span-6 md:col-span-7">
                  <h2 className="text-xl font-semibold mb-2">
                    Personal Information
                  </h2>
                  <form
                    className="max-w-[400px] w-full"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-3">
                      <label>First Full Name (as on passport)</label>
                      <input
                        type="text"
                        name="fullName"
                        className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                        value={form.fullName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label>Gender (as on passport)</label>
                      <select
                        name="gender"
                        className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                        value={form.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label>Date of Birth (as on passport)</label>
                      <input
                        type="date"
                        name="dob"
                        className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                        placeholder="DD/MM/YYYY"
                        value={form.dob}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label>Nationality</label>
                      <select
                        name="country_id"
                        className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                        value={form.country_id}
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        {countries.map((country) => (
                          <option key={country.id} value={country.id}>
                            {country.country_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                        placeholder="City"
                        value={form.city}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label>Zip Code</label>
                      <input
                        type="text"
                        name="zipcode"
                        className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                        placeholder="Zip Code"
                        value={form.zipcode}
                        onChange={handleChange}
                      />
                    </div>
                    <h2 className="text-xl font-semibold mb-2 mt-4">
                      Account Information
                    </h2>

                    <div className="mb-3">
                      <label>Phone Number</label>
                      <div className="flex gap-3">
                        <select
                          name="countryCode"
                          className="w-[60px] border mt-1 rounded-lg bg-gray-100"
                          value={form.countryCode}
                          onChange={handleChange}
                        >
                          <option value="+1">+1</option>
                          <option value="+91">+91</option>
                          <option value="+93">+93</option>
                        </select>
                        <input
                          type="text"
                          name="phone"
                          className="border p-2 mt-1 rounded-lg bg-gray-100 w-full"
                          placeholder="Phone Number"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                        value={form.email}
                        readOnly
                      />
                    </div>

                    <div className="mb-3 pb-20">
                      <button
                        type="submit"
                        className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px] mt-4"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

                <div className="lg:col-span-6 md:col-span-5 px-4 lg:block hidden">
                  <div className="sticky top-[120px]">
                    <Image
                      className="w-full rounded-xl h-[550px] object-cover shadow-sm"
                      src={imgright}
                      alt="Profile image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
