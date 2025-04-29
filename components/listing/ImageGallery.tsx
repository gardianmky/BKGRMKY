"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: { url: string }[];
  heading: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, heading }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="relative h-[600px] w-full">
      {images && images.length > 0 ? (
        <>
          <Image
            src={images[currentImageIndex].url || "/placeholder.svg"}
            alt={heading}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                aria-label="View all images"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                View All ({images.length})
              </button>
            </>
          )}
        </>
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <p>No image available</p>
        </div>
      )}
      <div className="property-badge top-6 right-6">For Sale</div>
    </div>
  );
};

export default ImageGallery;