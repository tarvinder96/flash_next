import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default async function PrivacyPolicyPage() {
  let description = ""; 

  try {
    

    const res = await fetch(`https://actyvsolutions.com/flash_pack/public/api/privacy-policy`, {
      cache: "no-store",
    });
    

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    description = data?.data?.description
      ? data?.data?.description.replace(/\r\n/g, "<br />") 
      : "Privacy policy is unavailable";
  } catch (error) {
    console.error("Error fetching privacy policy:", error);
    description = "Privacy policy is currently unavailable."; 
  }

  return (
    <>
      <Header />
      <section className="w-full bg-[#ffecdb] lg:pt-20 pt-10 pb-0">
        <h2 className="font-[700] lg:text-4xl text-2xl text-gray-900 text-center pt-10">
          Privacy Policy
        </h2>
        <div className="w-full bg-white lg:py-20 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] lg:px-0 px-4">
          <div className="max-w-screen-xl m-auto prose prose-sm lg:prose-lg">
            {/* Render HTML content safely */}
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}