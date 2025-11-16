// // src/components/AboutUs.jsx
// import React from 'react';

// export default function AboutUs() {
//   return (
//     <div
//       id="AboutUs"
//       className="flex flex-col lg:flex-row items-center justify-center mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20 px-4 sm:px-6 lg:px-20 gap-6 sm:gap-10"
//     >
//       {/* Left Image Section */}
//       <div className="relative w-full max-w-md sm:max-w-lg h-[400px] sm:h-[500px]">
//         <img
//           src="https://framerusercontent.com/images/yzpRxn2HI5TBopZVeE1K1WuVA.jpg"
//           alt="Main House"
//           className="absolute inset-0 w-full h-full object-cover rounded-xl border-2 border-white shadow-lg z-10"
//         />
//         <img
//           src="https://i.pinimg.com/1200x/65/1f/4f/651f4f9fb5835cad1daf80771359a256.jpg"
//           alt="Tall Building"
//           className="absolute top-0 left-0 w-[45%] h-[45%] object-cover rounded-xl border-2 border-white z-20 shadow-lg"
//         />
//         <img
//           src="https://i.pinimg.com/736x/4a/a5/94/4aa594e30c95ec2d6b1679b32a5bd500.jpg"
//           alt="Minimalist Building"
//           className="absolute bottom-0 right-0 w-[45%] h-[45%] object-cover rounded-xl border-2 border-white z-20 shadow-lg"
//         />
//       </div>

//       {/* Right Text Section */}
//       <div className="max-w-xl px-4 sm:px-0">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 font-extrabold mb-4">
//           About Us
//         </h1>
//         <h2 className="text-xl sm:text-2xl font-semibold mb-6">
//           Explore Our Vacational Rental Home
//         </h2>
//         <div className="space-y-2 text-gray-700 text-sm sm:text-base mb-6">
//           <p>
//             Though we have a great deal of commercial expertise under our belt,
//             our firm is primarily focused on high-end vocational rental projects.
//           </p>
//           <p>
//             As a distinct reaction to the customer and the environment, each of
//             our projects takes shape.
//           </p>
//         </div>

//         <ul className="space-y-2 text-gray-800 font-medium text-sm sm:text-base mb-6">
//           <li>• Quality real estate services</li>
//           <li>• 100% Satisfaction guarantee</li>
//           <li>• Highly professional team</li>
//           <li>• Dealing always on time</li>
//         </ul>

//         <button className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base hover:bg-gray-700 transition">
//           More about UrbanNest360
//         </button>
//       </div>
//     </div>
//   );
// }


// // src/components/AboutUs.jsx
// import React from 'react';

// export default function AboutUs() {
//   return (
//     <div
//       id="AboutUs"
//       className="flex flex-col lg:flex-row items-center justify-center mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20 px-4 sm:px-6 lg:px-20 gap-6 sm:gap-10"
//     >
//       {/* Left Image Section */}
//       <div className="relative w-full max-w-md sm:max-w-lg h-[400px] sm:h-[500px]">
//         <div className="absolute inset-0 w-full h-full rounded-xl border-2 border-white shadow-lg z-10 overflow-hidden">
//           <img
//             src="https://framerusercontent.com/images/yzpRxn2HI5TBopZVeE1K1WuVA.jpg"
//             alt="Main House"
//             className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
//           />
//         </div>

//         <div className="absolute top-0 left-0 w-[45%] h-[45%] rounded-xl border-2 border-white z-20 shadow-lg overflow-hidden">
//           <img
//             src="https://i.pinimg.com/1200x/65/1f/4f/651f4f9fb5835cad1daf80771359a256.jpg"
//             alt="Tall Building"
//             className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
//           />
//         </div>

//         <div className="absolute bottom-0 right-0 w-[45%] h-[45%] rounded-xl border-2 border-white z-20 shadow-lg overflow-hidden">
//           <img
//             src="https://i.pinimg.com/736x/4a/a5/94/4aa594e30c95ec2d6b1679b32a5bd500.jpg"
//             alt="Minimalist Building"
//             className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
//           />
//         </div>
//       </div>

//       {/* Right Text Section */}
//       <div className="max-w-xl px-4 sm:px-0">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 font-extrabold mb-4">
//           About Us
//         </h1>
//         <h2 className="text-xl sm:text-2xl font-semibold mb-6">
//           Explore Our Vacational Rental Home
//         </h2>
//         <div className="space-y-2 text-gray-700 text-sm sm:text-base mb-6">
//           <p>
//             Though we have a great deal of commercial expertise under our belt,
//             our firm is primarily focused on high-end vocational rental projects.
//           </p>
//           <p>
//             As a distinct reaction to the customer and the environment, each of
//             our projects takes shape.
//           </p>
//         </div>

//         <ul className="space-y-2 text-gray-800 font-medium text-sm sm:text-base mb-6">
//           <li>• Quality real estate services</li>
//           <li>• 100% Satisfaction guarantee</li>
//           <li>• Highly professional team</li>
//           <li>• Dealing always on time</li>
//         </ul>

//         <button className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base hover:bg-gray-700 transition">
//           More about UrbanNest360
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function AboutUs() {
  return (
    <>
      {/* Inject Playfair Display font directly */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>

      <div
        className="flex flex-col lg:flex-row items-center justify-center mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20 px-4 sm:px-6 lg:px-20 gap-10 font-playfair"
        id="AboutUs"
      >
        
        <div className="relative w-full max-w-md sm:max-w-lg h-[500px] sm:h-[600px] flex justify-center items-center">
          
          <img
            src="https://i.pinimg.com/1200x/64/9c/d5/649cd50998712ae75792a2205ad6250e.jpg"
            alt="Main Modern House"
            className="w-[90%] h-[90%] object-cover rounded-2xl border border-white shadow-xl z-10 transform transition-transform duration-500 ease-in-out hover:scale-105"
          />

          
          <img
            src="https://i.pinimg.com/1200x/b6/0a/8e/b60a8ec3e774e5a89c393390e7065ce9.jpg"
            alt="Front Elevation"
            className="absolute top-[5%] left-[5%] w-[40%] h-[40%] object-cover rounded-2xl border border-white shadow-xl z-20 -translate-x-[10%] -translate-y-[10%] transform transition-transform duration-500 ease-in-out hover:scale-105"
          />

          
          <img
            src="https://i.pinimg.com/736x/4a/a5/94/4aa594e30c95ec2d6b1679b32a5bd500.jpg"
            alt="Luxury Villa"
            className="absolute bottom-[5%] right-[5%] w-[40%] h-[40%] object-cover rounded-2xl border border-white shadow-xl z-20 translate-x-[10%] translate-y-[10%] transform transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 font-extrabold mb-4">
            About Us
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
            Explore Our Vacation Rental Homes
          </h2>
          <div className="space-y-3 text-gray-700 text-sm sm:text-base mb-6">
            <p>
              With extensive experience in real estate, our firm focuses primarily on
              high-end vacation rental projects that blend luxury and comfort.
            </p>
            <p>
              Each of our developments is a distinct reflection of our client’s vision
              and the surrounding environment, creating a truly personal experience.
            </p>
          </div>

          <ul className="space-y-2 text-gray-800 font-medium text-sm sm:text-base">
            <li>• Quality real estate services</li>
            <li>• 100% satisfaction guarantee</li>
            <li>• Highly professional team</li>
            <li>• Always on-time delivery</li>
          </ul>
        </div>
      </div>
    </>
  );
}