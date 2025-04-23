"use client";

import { useEffect } from "react";

export default function DatePicker() {
  useEffect(() => {
    // Dynamically import the Datepicker to avoid issues with SSR (Next.js or other frameworks)
    import("flowbite-datepicker").then(({ Datepicker }) => {
      const datepickerEl = document.getElementById("default-datepicker");
      if (datepickerEl) {
        new Datepicker(datepickerEl, {
          // Add your desired options here
          format: "yyyy-mm-dd",
          autohide: true,
        });
      }
    });
  }, []);

  return (
    <div className="w-full">
      <input
        type="text "
        id="default-datepicker"
        className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Select a date"
      />
    </div>
  );
}
