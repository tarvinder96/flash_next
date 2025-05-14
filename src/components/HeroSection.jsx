"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import banner from "@/images/bannerv1.jpg";

export default function HeroV2() {
  return (
    <>
      <section className="relative">
        <Image src={banner} alt="banner" width="100%" />
      </section>
    </>
  );
}
