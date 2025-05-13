import Image from "next/image";
import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/ui/card";

export default function TourBox({ imageSrc, location, onClick }) {
  return (
    <Card
      onClick={onClick}
      className="border-none shadow-none bg-transparent cursor-pointer hover:opacity-90 transition"
    >
      <CardContent className="p-0 relative">
        <Image
          className="w-full rounded-[500px]"
          src={imageSrc}
          alt={location || "Tour image"}
          width={500}
          height={300}
        />
      </CardContent>
      {location && (
        <p className="text-xl font-semibold tracking-tight text-gray-900 text-center mt-3">
          {location}
        </p>
      )}
    </Card>
  );
}

TourBox.defaultProps = {
  imageSrc: "https://via.placeholder.com/150",
  location: "Unknown location",
};

TourBox.propTypes = {
  imageSrc: PropTypes.string,
  location: PropTypes.string,
  onClick: PropTypes.func, // ✅ add this
};
