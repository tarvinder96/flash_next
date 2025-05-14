 
import DatePicker from "@/components/DatePicker";
import Events from "@/components/Events";
import FindPerfecttrip from "@/components/FindPerfecttrip";
import Footer from "@/components/Footer";
import Fun from "@/components/Fun";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowitWork from "@/components/HowitWork";
import InfoSection from "@/components/InfoSection";
import PopularAdventures from "@/components/PopularAdventures";
import Subscript from "@/components/Subscript";
import Testimonials from "@/components/Testimonials";
import TourSlider from "@/components/Tourdestination";  
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <Header/>
    <HeroSection/>
    <TourSlider/>
    <HowitWork/>
    <Fun/>
    {/* <Events/> */}
    {/* <PopularAdventures/> */}
    <FindPerfecttrip/>
   
    <Testimonials/>
    <Subscript/>
    <Footer/>
    </>
  );
}
