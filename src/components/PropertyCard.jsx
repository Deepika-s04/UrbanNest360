import React from 'react';

export default function PropertyCard({ property, openContactModal }) {
  return (
    <div
      onClick={openContactModal}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={property.img}
        alt={property.title}
        className="w-full h-56 sm:h-64 object-cover"
      />
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          {property.title}
        </h3>
        <p className="text-amber-600 font-bold text-xl sm:text-2xl mb-3">
          {property.price}
        </p>
        <div className="flex justify-between text-gray-600 text-sm sm:text-base">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft} sqft</span>
        </div>
      </div>
    </div>
  );
}