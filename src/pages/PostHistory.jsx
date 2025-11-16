import React, { useEffect, useState } from "react";

export default function PostHistoryPage() {
  const [properties, setProperties] = useState([]);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  // Load properties from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("properties");
    if (stored) {
      setProperties(JSON.parse(stored));
    }
  }, []);

  const formatPrice = (price) => {
    const numPrice = parseInt(price.replace(/,/g, ""));
    if (isNaN(numPrice)) return `₹${price}`;
    return `₹${numPrice.toLocaleString("en-IN")}`;
  };

  const openImageGallery = (images = [], index = 0) => {
    setCurrentImages(images || []);
    setCurrentIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (currentImages.length > 0) {
      setCurrentIndex((currentIndex + 1) % currentImages.length);
    }
  };

  const prevImage = () => {
    if (currentImages.length > 0) {
      setCurrentIndex(
        (currentIndex - 1 + currentImages.length) % currentImages.length
      );
    }
  };

  const deleteProperty = (index) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      const updated = [...properties];
      updated.splice(index, 1);
      setProperties(updated);
      localStorage.setItem("properties", JSON.stringify(updated));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DDA15E]/20 to-gray-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#BC6C25] mb-3">
            Your Properties
          </h1>
          <p className="text-gray-600">
            {properties.length === 0
              ? ""
              : `${properties.length} ${
                  properties.length === 1 ? "property" : "properties"
                } listed`}
          </p>
        </div>

        {/* Empty State */}
        {properties.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 bg-gray-100 rounded-xl max-w-2xl mx-auto">
            <svg
              className="w-20 h-20 text-gray-400 mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              No properties posted yet
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Start by posting your first property to see it here
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {properties.map((p, i) => {
              const images = p.imagesCount || [];

              return (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover-elevate"
                >
                  <div
                    className="relative h-56 bg-gray-200 overflow-hidden cursor-pointer"
                    onClick={() => openImageGallery(images, 0)}
                  >
                    {images.length > 0 ? (
                      <>
                        <img
                          src={images[0]}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                        {images.length > 1 && (
                          <span className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                            +{images.length - 1} more
                          </span>
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#DDA15E]/20">
                        <svg
                          className="w-16 h-16 text-[#BC6C25]/40"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="mb-3">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h2 className="text-lg font-bold text-gray-800 flex-1">
                          {p.title}
                        </h2>
                        <span className="bg-[#BC6C25]/10 text-[#BC6C25] border border-[#BC6C25]/20 text-sm px-3 py-1 rounded-full flex-shrink-0">
                          {p.category}
                        </span>
                      </div>

                      <p className="text-xl font-bold text-[#BC6C25] mb-3">
                        {formatPrice(p.price)}
                      </p>

                      <div className="flex items-start gap-2 mb-3">
                        <svg
                          className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <p className="text-sm text-gray-700">{p.location}</p>
                      </div>

                      {p.amenities && (
                        <p className="text-sm text-gray-500">{p.amenities}</p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-200 flex justify-end">
                      <button
                        onClick={() => deleteProperty(i)}
                        className="border border-red-500/50 text-red-500 hover:bg-red-50 text-sm px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-300"
          >
            &#8249;
          </button>
          <div className="max-w-4xl max-h-screen p-4">
            <img
              src={currentImages[currentIndex]}
              alt=""
              className="max-w-full max-h-[90vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-lg">
              {currentIndex + 1} / {currentImages.length}
            </p>
          </div>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-300"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
