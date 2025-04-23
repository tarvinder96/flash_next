import SearchBar from "@/components/SearchBar";
import Link from "next/link";

export default function Search() {
  return (
    <>
      <div className="px-2 pt-2 w-full">
        <Link href="/" passHref legacyBehavior>
          <button
            type="button"
            className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg text-[18px] px-4 py-1 me-2 my-4 ms-5"
          >
            Back
          </button>
        </Link>
        <SearchBar />
      </div>
    </>
  );
}
