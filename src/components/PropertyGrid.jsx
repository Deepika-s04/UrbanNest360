import React from 'react';

const propertyTypes = [
  { label: 'APARTMENT', count: 17, image: '/images/apartment.jpg' },
  { label: 'VILLA', count: 10, image: '/images/villa.jpg' },
  { label: 'SINGLE FAMILY HOME', count: 10, image: '/images/single-family.jpg' },
  { label: 'STUDIO', count: 7, image: '/images/studio.jpg' },
  { label: 'SHOP', count: 3, image: '/images/shop.jpg' },
  { label: 'OFFICE', count: 3, image: '/images/office.jpg' },
];

const PropertyGrid = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Display Different Content Types</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          The Houzez Grids widgets allow you to display property cities, types, status, etc within different grid style variations, colors and typography options
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map((type, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <img
                src={type.image}
                alt={type.label}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold">{type.label}</h3>
                <p className="text-white text-sm">{type.count} PROPERTIES</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;