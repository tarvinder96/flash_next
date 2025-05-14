import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function AboutUsPage() {
  let description = "";

  try {
    //  `https://actyvsolutions.com/flash_pack/public/api/get-about`,
    const res = await fetch(
      `https://actyvsolutions.com/flash_pack/public/api/get-about`,
      {
        next: { revalidate: 0 }, // prevent caching
      }
    );

    if (!res.ok) {
      console.error("API returned an error response", res.status);
      throw new Error("Failed to fetch");
    }

    const data = await res.json();

    description = data?.data?.description
      ? data.data.description
          .split(/\r?\n/)
          .map((line) => line.trim()) // Remove extra spaces
          .filter((line) => line.length > 0) // Remove empty lines
          .join("<br />") // Add controlled line breaks
      : "About content is unavailable";
  } catch (error) {
    console.error("Error fetching about content:", error.message);
    description = "About content is currently unavailable.";
  }

  return (
    <>
      <Header />
      <section className="w-full bg-[#ffecdb] lg:pt-20 pt-10 pb-0">
        <h2 className="font-[700] lg:text-4xl text-2xl text-gray-900 text-center pt-10">
          About Us
        </h2>
        <div className="w-full bg-white lg:py-20 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] lg:px-0 px-4">
          <div className="max-w-screen-xl m-auto prose prose-sm lg:prose-lg prose-p:my-2 prose-br:my-0">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
