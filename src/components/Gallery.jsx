"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function AfricaTours() {
  const { slug } = useParams(); // dynamically gets slug from the URL

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);


  useEffect(() => {
    fetch(`https://actyvsolutions.com/flash_pack/public/api/geteventdetails/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          const imageArray = JSON.parse(data.data.image || "[]");
          // Construct full image URLs
          const fullImageURLs = imageArray.map(
            (img) => `https://actyvsolutions.com/flash_pack/public/images/event_images/${img}`
          );
          setImages(fullImageURLs);
        }
      })
      .catch((err) => console.error("Failed to fetch images", err));
  }, [slug]);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  if (images.length === 0) {
    return <p className="text-center mt-10">Loading images...</p>;
  }

  return (
    <main className="px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px]">
        {/* Large image on the left */}
        <div className="md:col-span-2 row-span-3">
          <div
            className="group relative h-full overflow-hidden rounded-xl shadow cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={images[0]}
              alt=""
              className="w-full h-full object-cover"
              fill
            />
            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out" />
          </div>
        </div>

        {/* Right-side stacked images */}
        {images.slice(1).map((img, i) => (
          <div
            key={i + 1}
            className="relative h-full overflow-hidden rounded-xl shadow cursor-pointer"
            onClick={() => openLightbox(i + 1)}
          >
            <Image
              src={img}
              alt=""
              className="w-full h-full object-cover"
              fill
            />
            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
          >
            &times;
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl hover:text-gray-300"
          >
            &#8249;
          </button>

          <div className="relative w-full h-[80vh] mx-4">
            <Image
              src={images[currentImage]}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl hover:text-gray-300"
          >
            &#8250;
          </button>
        </div>
      )}
    </main>
  );
}