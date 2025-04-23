export default function Subscript() {
  return (
    <>
      <section className="bg-[#EDE0D4] mt-20 py-10">
        <div className="py-8 pt-10 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Sign up for weekly deals
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </p>
          <form className="w-full max-w-md mx-auto">
            <label
              htmlFor="default-email"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Email sign-up
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="default-email"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email here..."
                required=""
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-[#7F5539] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
