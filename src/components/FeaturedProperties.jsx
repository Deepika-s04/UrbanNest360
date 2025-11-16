import React from 'react';

export default function FeaturedProperties({ openModal }) {
  const properties = [
    {
      img: 'https://i.pinimg.com/1200x/a6/0d/c1/a60dc117916d6a4b06d815b40384ffd7.jpg',
      tag: 'For Rent',
      location: 'Sobha City, Bengaluru',
      title: 'Urban Oasis',
      desc: 'Modern 3BHK apartment in Thanisandra with Vastu-compliant design, modular kitchen, and close proximity to Manyata Tech Park.',
      price: '₹1,30,00,000',
      beds: 3,
      baths: 2,
      sqft: 1600,
    },
    {
      img: 'https://i.pinimg.com/1200x/cd/18/86/cd188606fc246b97743f4c38d405788a.jpg',
      tag: 'For Sale',
      location: 'DLF Camellias, Gurugram',
      title: 'Skyview Residences',
      desc: 'Luxury 2BHK apartment with golf course views, infinity pool, and excellent connectivity to Cyber City.',
      price: '₹1,10,00,000',
      beds: 2,
      baths: 2,
      sqft: 1300,
    },
    {
      img: 'https://i.pinimg.com/1200x/46/9a/f7/469af73674363bdd1c5431f02254ab39.jpg',
      tag: 'For Rent',
      location: 'Prestige Lakeside Habitat, Bengaluru',
      title: 'Lakeside Villa',
      desc: 'Premium 4BHK villa with lake-facing garden, 24/7 security, and access to clubhouse and sports facilities.',
      price: '₹2,50,00,000',
      beds: 4,
      baths: 3,
      sqft: 2800,
    },
    {
      img: 'https://i.pinimg.com/1200x/02/96/0c/02960c95e8f17a63e483de27a6572a91.jpg',
      tag: 'For Sale',
      location: 'Godrej Air, Hoodi, Bengaluru',
      title: 'Green Haven',
      desc: 'Spacious 3BHK apartment with lush green surroundings, rooftop amenities, and proximity to ITPL.',
      price: '₹90,00,000',
      beds: 3,
      baths: 2,
      sqft: 1500,
    },
    {
      img: 'https://i.pinimg.com/1200x/eb/19/1d/eb191d41a2de076767dedf903a632045.jpg',
      tag: 'For Rent',
      location: 'Adarsh Palm Retreat, Delhi',
      title: 'Serenity Towers',
      desc: 'Luxury 3BHK flat with private balcony, gated community, and easy access to Outer Ring Road.',
      price: '₹1,80,00,000',
      beds: 3,
      baths: 3,
      sqft: 1900,
    },
    {
      img: 'https://i.pinimg.com/1200x/1d/9f/1a/1d9f1a70f452c346d823c2528ff0a9ad.jpg',
      tag: 'For Sale',
      location: 'Brigade Utopia, Bengaluru',
      title: 'Paradise Homes',
      desc: 'Modern 4BHK with landscaped gardens, sports facilities, and excellent metro connectivity.',
      price: '₹2,60,00,000',
      beds: 4,
      baths: 4,
      sqft: 2500,
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

      <section
        id="featured-properties"
        className="py-12 sm:py-20 bg-gray-800 rounded-t-3xl mt-10 sm:mt-16 font-playfair"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 sm:mb-12 text-white">
            <div>
              <button className="text-white bg-amber-500 px-4 sm:px-5 py-2 rounded-lg mb-4 font-semibold shadow-md hover:bg-amber-600 transition text-sm sm:text-base">
                FEATURED PROPERTIES
              </button>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                Featured Properties
              </h2>
              <p className="mt-3 sm:mt-5 text-sm sm:text-lg md:text-xl">
                Discover handpicked properties that combine luxury, affordability, and prime locations to<br />
                give you the perfect home-buying experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {properties.map((p, idx) => (
              <div
                key={idx}
                onClick={openModal}
                className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition m-3 sm:m-5 cursor-pointer"
              >
                {/* Reduced image height */}
                <div className="relative h-40 sm:h-52">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {p.tag}
                  </span>
                </div>

                {/* Reduced padding inside card */}
                <div className="p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-1">{p.location}</p>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-xs sm:text-sm line-clamp-2">{p.desc}</p>
                  <p className="text-amber-600 font-semibold mt-2 mb-2 text-xs sm:text-sm">
                    {p.price}
                  </p>
                  <hr className="bg-black my-2" />
                  <div className="flex justify-between items-center text-xs">
                    <p>Bed {p.beds}</p>
                    <p>Bath {p.baths}</p>
                    <p>{p.sqft} sqft</p>
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