import React from 'react';

export default function LatestProperties({ openModal }) {
  const properties = [
    {
      img: 'https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/05/6-0-min-scaled-e1689826682438-675x468.jpg',
      tag: 'For Rent',
      price: '₹20,000 /mo',
      title: 'Compact Studio',
      location: 'Hiranandani Estate, Thane, Mumbai',
      beds: 1,
      baths: 1,
      sqft: 600,
    },
    {
      img: 'https://i.pinimg.com/1200x/ab/e0/9e/abe09e62b4aaecdee71e81af50211563.jpg',
      tag: 'For Sale',
      price: '₹1,50,00,000',
      title: 'Coastal Breeze Apartment',
      location: 'Marine Drive, Mumbai',
      beds: 2,
      baths: 2,
      sqft: 1200,
    },
    {
      img: 'https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/10/9-0-min-scaled-e1689826719902-675x468.jpg',
      tag: 'For Sale',
      price: '₹2,20,00,000',
      title: 'Greenwood Villa',
      location: 'Whitefield, Bengaluru',
      beds: 3,
      baths: 2,
      sqft: 2000,
    },
    {
      img: 'https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/10/10-0-min-scaled-e1689826767983-675x468.jpg',
      tag: 'For Rent',
      price: '₹35,000 /mo',
      title: 'Premium Condo',
      location: 'DLF Phase 5, Gurugram',
      beds: 3,
      baths: 2,
      sqft: 1800,
    },
    {
      img: 'https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/12/14-scaled-e1689836098242-675x468.jpg',
      tag: 'For Rent',
      price: '₹25,000 /mo',
      title: 'Urban Loft',
      location: 'Koregaon Park, Pune',
      beds: 2,
      baths: 1,
      sqft: 1000,
    },
    {
      img: 'https://i.pinimg.com/1200x/33/80/58/3380589d3796bf1a2dcbba9764ee94f0.jpg',
      tag: 'For Sale',
      price: '₹1,80,00,000',
      title: 'Serenity Villa',
      location: 'Electronic City, Bengaluru',
      beds: 3,
      baths: 2,
      sqft: 1700,
    },
  ];

  return (
    <>
      {/* Inject Playfair Display Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>

      <section className="py-10 sm:py-16 font-playfair" style={{ backgroundColor: '#FEFAE0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-4 sm:mb-5">
            Latest Properties
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-12 sm:mb-20 text-gray-900 text-center">
            Browse through our exclusive selection of featured properties, offering modern designs, premium amenities, and prime locations tailored for you
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {properties.map((p, idx) => (
              <div
                key={idx}
                onClick={openModal}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>
                <div className="p-4 sm:p-6 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{p.price}</h3>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-700">{p.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{p.location}</p>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-600 pt-4 border-t">
                    <span>{p.beds} Bed</span>
                    <span>{p.baths} Bath</span>
                    <span>{p.sqft} Sq ft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}