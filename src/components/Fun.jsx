import Link from "next/link";

export default function Fun() {
  return (
    <>
      <section className="fun lg:mt-20 mt-10 lg:py-[150px] py-[50px]">
        <div className="max-w-screen-xl mx-auto lg:px-0 px-4">
          <div className="max-w-[550px] w-full">
            <h2 className="lg:text-4xl text-2xl font-semibold">
              Ready To Fun With Us
            </h2>
            <p className="lg:text-[16px] text-[14px]">
              {" "}
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            {/* <button
              type="button"
              className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px] mt-4"
            >
              Browse Event
            </button> */}
            <Link href="/all-trips">
              <button
                type="button"
                className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px] mt-4"
              >
                Browse Event
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
