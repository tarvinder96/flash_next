import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HotelBox from "../HotelBox";
import HotelOne from "@/images/h1.jpg";
import HotelTwo from "@/images/h2.jpg";
import HotelThree from "@/images/h3.jpg";
import HotelFour from "@/images/h4.jpg";
import HotelFive from "@/images/h5.jpg";
import HotelSix from "@/images/h6.jpg";
import HotelSeven from "@/images/h7.jpg";
import HotelEight from "@/images/h8.jpg";
import HotelNine from "@/images/h9.jpg";
import HotelTen from "@/images/h10.jpg";
import HotelEleven from "@/images/h11.jpg";
import HotelTwelve from "@/images/h12.jpg";
import GroupPackages from "./GroupPackages";
import packagesOne from "@/images/h8.jpg";
import packagesTwo from "@/images/h6.jpg";
import packagesThree from "@/images/h5.jpg";
import packagesFour from "@/images/h3.jpg";
import packagesFive from "@/images/h1.jpg";
import packagesSix from "@/images/h2.jpg";
import HolidaysSpecial from "./HolidaysSpecial";
import holidaysSpecialOne from "@/images/holidays1.jpg";
import holidaysSpecialTwo from "@/images/holidays2.jpg";
import holidaysSpecialThree from "@/images/holidays3.jpg";
import holidaysSpecialFour from "@/images/holidays4.jpg";
import holidaysSpecialFive from "@/images/holidays5.jpg";
import holidaysSpecialSix from "@/images/holidays6.jpg";




const hotelData = [
  {
    imageSrc: HotelOne,
    title: "Elite Paradise Hotel",
    location: "London, United Kingdom",
    rating: 4.5,
    score: "4.5",
  },
  {
    imageSrc: HotelTwo,
    title: "Urban Escape Lodge",
    location: "Tokyo, Japan",
    rating: 4.0,
    score: "4.0",
  },
  {
    imageSrc: HotelThree,
    title: "Oceanview Villas",
    location: "Sydney, Australia",
    rating: 4.8,
    score: "4.8",
  },
  {
    imageSrc: HotelFour,
    title: "Alpine Serenity Resort",
    location: "Zermatt, Switzerland",
    rating: 4.7,
    score: "4.7",
  },
  {
    imageSrc: HotelFive,
    title: "Majestic Sands Resort",
    location: "Dubai, UAE",
    rating: 4.6,
    score: "4.6",
  },
  {
    imageSrc: HotelSix,
    title: "The Metropolitan Inn",
    location: "Los Angeles, USA",
    rating: 4.2,
    score: "4.2",
  },
  {
    imageSrc: HotelSeven,
    title: "Tropical Paradise Retreat",
    location: "Bora Bora, French Polynesia",
    rating: 4.9,
    score: "4.9",
  },
  {
    imageSrc: HotelEight,
    title: "Lakeside Haven Resort",
    location: "Queenstown, New Zealand",
    rating: 4.3,
    score: "4.3",
  },
  {
    imageSrc: HotelNine,
    title: "Golden Sunrise Hotel",
    location: "Santorini, Greece",
    rating: 4.8,
    score: "4.8",
  },
  {
    imageSrc: HotelTen,
    title: "Rainforest Escape",
    location: "Costa Rica, Central America",
    rating: 4.7,
    score: "4.7",
  },
  {
    imageSrc: HotelEleven,
    title: "Mountain Peak Retreat",
    location: "Aspen, USA",
    rating: 4.6,
    score: "4.6",
  },
  {
    imageSrc: HotelTwelve,
    title: "Sunset Bay Resort",
    location: "Maldives",
    rating: 4.9,
    score: "4.9",
  },
];



export default function HotelHolidays() {
  return (
    <>
      <section className="py-20 pt-0">
        <div className="container mx-auto p-4">
          <div className="max-w-screen-xl mx-auto">
            <Tabs defaultValue="hotels" className="w-full">
              <TabsList className="p-8 px-2 mb-8">
                <TabsTrigger className="p-4" value="hotels">
                  Hotels
                </TabsTrigger>
                <TabsTrigger className="p-4" value="packages">
                  Group Packages
                </TabsTrigger>
                <TabsTrigger className="p-4" value="holidays">
                  Holidays Special
                </TabsTrigger>
              </TabsList>

              <TabsContent value="hotels">
                <h1 className="text-gray-900 text-xl font-semibold pb-4">Top Rated Hotels</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                  {hotelData.map((hotel, index) => (
                    <div key={index} className="p-2">
                      <HotelBox
                        imageSrc={hotel.imageSrc}
                        title={hotel.title}
                        location={hotel.location}
                        rating={hotel.rating}
                        score={hotel.score}
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="packages">
                <h1 className="text-gray-900 text-xl font-semibold pb-4">We Provide Best Group Packages</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                  <GroupPackages
                    imageSrc={packagesOne}
                    title="8 Day Classic Dubai & Abu Dhabi Private Tour"
                    description="Round trip airfare from NYC, 6 nights accommodation, all transfers, most meals and sightseeing"
                    buttonText="View Details"
                    link="#"
                  />

                  <GroupPackages
                    imageSrc={packagesTwo}
                    title="8 Day India Private Tour"
                    description="Round trip airfare from NYC, 6 nights accommodation, all transfers, most meals and sightseeing"
                    buttonText="View Details"
                    link="#"
                  />

                  <GroupPackages
                    imageSrc={packagesThree}
                    title="9 Day Morocco Kasbahs, Oases & Desert"
                    description="Round trip airfare from NYC, 7 nights accommodation, all transfers, most meals and sightseeing"
                    buttonText="View Details"
                    link="#"
                  />

                  <GroupPackages
                    imageSrc={packagesFour}
                    title="9 Day Morocco Imperial Cities Tour"
                    description="Round trip airfare from NYC, 7 nights accommodation, all transfers, most meals and sightseeing"
                    buttonText="View Details"
                    link="#"
                  />

                  <GroupPackages
                    imageSrc={packagesFive}
                    title="10 Day Egypt in Depth Tour"
                    description="Round trip airfare from NYC, 8 nights accommodation, all transfers, most meals and sightseeing"
                    buttonText="View Details"
                    link="#"
                  />

                  <GroupPackages
                    imageSrc={packagesSix}
                    title="10 Day Dubai in Style Package"
                    description="Round trip airfare from NYC, 8 nights accommodation, all transfers, most meals and sightseeing"
                    buttonText="View Details"
                    link="#"
                  />




                </div>
              </TabsContent>

              <TabsContent value="holidays">
                <h1 className="text-gray-900 text-xl font-semibold pb-4">Best Holidays Special</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                  <HolidaysSpecial
                    imageSrc={holidaysSpecialOne}
                    title="10 Day Pilgrimage & Jordan Tour"
                    description="8 nights accommodation, all transfers, most meals and sightseeing..."
                    buttonText="View Details"
                    link="#"
                  />

                  <HolidaysSpecial
                    imageSrc={holidaysSpecialTwo}
                    title="11 Day Pilgrimage & Jordan Tour"
                    description="9 nights accommodation, all transfers, most meals and sightseeing..."
                    buttonText="View Details"
                    link="#"
                  />

                  <HolidaysSpecial
                    imageSrc={holidaysSpecialThree}
                    title="12 Day Pilgrimage & Dubai Tour"
                    description="10 nights accommodation, all transfers, most meals and sightseeing..."
                    buttonText="View Details"
                    link="#"
                  />

                  <HolidaysSpecial
                    imageSrc={holidaysSpecialFour}
                    title="14 Day Pilgrimage & Turkey Tour"
                    description="12 nights accommodation, all transfers, most meals and sightseeing..."
                    buttonText="View Details"
                    link="#"
                  />

                  <HolidaysSpecial
                    imageSrc={holidaysSpecialFive}
                    title="7 Day Classic Dubai Private Tour"
                    description="Round trip airfare from NYC, 5 nights accommodation, all transfers, most meals and sightseeing..."
                    buttonText="View Details"
                    link="#"
                  />

                  <HolidaysSpecial
                    imageSrc={holidaysSpecialSix}
                    title="8 Day India Private Tour"
                    description="Round trip airfare from NYC, 6 nights accommodation, all transfers, most meals and sightseeing..."
                    buttonText="View Details"
                    link="#"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
