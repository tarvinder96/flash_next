import Link from "next/link";

export default function herov2() {
  return (
    <>
      <section className="mainHero relative">
        <div className="overlyhero"></div>
        <div className="max-w-screen-xl mx-auto lg:px-0 px-4 relative">
          <div className="lg:py-40 lg:pt-52 pt-48 py-20 text-left max-w-[777px]">
            <h1 className="lg:text-[22px] text-[18px] font-[500] leading-none mb-4 text-black lg:text-left text-right  ">
              YOUR SOCIAL PREREQUISITE
            </h1>
            <h1 className="lg:text-[45px] text-[18px] font-[600] leading-none mb-2 text-white text-right">
              MEET OTHER GOING TO THE{" "}
              <span className="text-[#fea759]">SAME </span>
            </h1>
            <h1 className="lg:text-[45px] text-[18px]  font-[600] leading-none mb-2 text-black cursor-pointer text-right">
              <u className="">CONCERT</u>
            </h1>
            <h1 className="lg:text-[45px] text-[18px]  font-[600] leading-none mb-2 text-black/60 cursor-pointer text-right">
              <u>VENU</u>{" "}
            </h1>
            <h1 className="lg:text-[45px] text-[18px]  font-[600] leading-none mb-2 text-black/40 cursor-pointer text-right">
              <u className=" ">GAME</u>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
