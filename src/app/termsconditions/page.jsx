'use client';
import { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function TermsConditions() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('https://actyvsolutions.com/flash_pack/public/api/terms-condition')
      .then(response => response.json())
      .then(data => {
        if (data.success && data.data) {
          setContent(data.data.description);
        }
      })
      .catch(error => console.error('Error fetching terms:', error));
  }, []);

  return (
    <>
      <Header />
      <section className="w-full bg-[#ffecdb] lg:pt-20 pt-10 pb-0">
        <h2 className="font-[700] lg:text-4xl text-2xl text-gray-900 text-center pt-10">
          Terms & Conditions
        </h2>
        <div className="w-full bg-white lg:py-20 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] lg:px-0 px-4">
          <div className="max-w-screen-xl m-auto">
            <div
              className="text-gray-600 terms-content"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
