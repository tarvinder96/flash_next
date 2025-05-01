"use client";
import Swal from "sweetalert2";
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
    cpassword: "",
  });

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Signup Successful!",
          text: "You will be redirected shortly...",
          timer: 2000,
          showConfirmButton: false,
        });

        localStorage.setItem("signup_user_id", data.user_id);

        setTimeout(() => {
          window.location.href = `/register-user`;
        }, 2000);

        setForm({ name: "", email: "", password: "", cpassword: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: data.message || "Something went wrong",
        });
      }
    } catch (error) {
      console.error("Signup error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-50 login-page relative">
          <div className="overlyhero"></div>
          <div className="relative z-10 flex flex-col items-center justify-center px-6 lg:py-0">
            <div className="w-full bg-white/80 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign Up
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label           
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your Name
                    </label>
                    <inputs
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
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
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
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={form.password}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cpassword"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      value={form.cpassword}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div className="">
                    <button
                      type="submit"
                      className="text-dark justify-center w-full flex items-center bg-[#ffa858] font-medium rounded-lg text-sm px-5 py-3.5 text-center mb-3"
                    >
                      Sign Up
                    </button>

                    <button
                      type="button"
                      className="justify-center w-full flex items-center bg-[#ffffff] font-medium rounded-lg text-sm px-5 py-3.5 text-center mb-2 border border-black gap-2"
                    >
                      <span>
                        {" "}
                        <Image src={google} width={18} alt="google" />{" "}
                      </span>{" "}
                      Continue with Google
                    </button>
                  </div>

                  <p className="text-sm font-light text-gray-500">
                    You have an account?{" "}
                    <Link
                      href="/login"
                      className="font-medium text-primary-600 hover:underline"
                    >
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
