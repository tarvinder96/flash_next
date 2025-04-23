"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import google from "@/images/google.svg";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function encodeId(id) {
    const prefix = randomAlphaNumeric(5); // Generate random alpha-numeric prefix
    return `${prefix}${id}`; // Append user ID to the prefix
  }



  // Function to generate random alphanumeric string of given length
  function randomAlphaNumeric(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length)); // Pick random character
    }
    return result;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (form.password !== form.cpassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user-register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(form)
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Signup successful!");
        console.log(data.user_id);
        const encodedId = encodeId(data.user_id);
        // Redirect with email in query
        window.location.href = `/register-user/${encodedId}`;
  
        setForm({ name: "", email: "", password: "", cpassword: "" });
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-50 login-page relative">
          <div className="absolute inset-0 bg-black opacity-60 "></div>
          <div className="relative z-10 flex flex-col items-center justify-center px-6 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign Up
                </h1>

                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={form.password}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      value={form.cpassword}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-white justify-center w-full flex items-center bg-[#7F5539] font-medium rounded-lg text-sm px-5 py-3.5 text-center mb-3"
                  >
                    Sign Up
                  </button>

                  <button
                    type="button"
                    className="justify-center w-full flex items-center bg-white font-medium rounded-lg text-sm px-5 py-3.5 text-center mb-2 border border-black gap-2"
                  >
                    <Image src={google} width={18} alt="google" />
                    Continue with Google
                  </button>

                  <p className="text-sm font-light text-gray-500">
                    You have an account?{" "}
                    <Link href="/login" className="font-medium text-primary-600 hover:underline">
                      Sign in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}