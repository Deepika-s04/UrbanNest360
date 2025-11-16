// import React from "react";

// export default function Hero({ scrollToFeatured }) {
//   return (
//     <>
//       {/* Inject Playfair Display Font */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');
//           .font-playfair {
//             font-family: 'Playfair Display', serif;
//           }
//         `}
//       </style>

//       <div className="relative w-[95vw] sm:w-[90vw] h-[80vh] sm:h-[90vh] mx-auto my-6 sm:my-10 rounded-2xl overflow-hidden shadow-lg font-playfair">
//         <img
//           src="https://framerusercontent.com/images/rQXeeWMbrXXzxko63WI4Z1ZVIk.jpg?scale-down-to=1024"
//           alt="Modern Home"
//           className="w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 flex flex-col justify-center mx-4 sm:mx-6 md:mx-12 space-y-4 sm:space-y-6 max-w-full sm:max-w-xl">
//           <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//             FIND YOUR PERFECT <br /> HOME TODAY
//           </h1>

//           <p className="text-white text-sm sm:text-base leading-relaxed">
//             We provide tailored real estate solutions, guiding you through every step with <br />
//             personalized experiences that meet your unique needs and aspirations.
//           </p>

//           <button
//             onClick={scrollToFeatured}
//             className="bg-black text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-fit hover:bg-gray-200 transition hover:text-black text-sm sm:text-base"
//           >
//             Explore Properties
//           </button>

//           {/* Stats commented out as per your code */}
//           {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-10 pt-4 sm:pt-6 text-white text-sm sm:text-lg">
//             <div className="flex flex-col items-center sm:items-start">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">200+</h1>
//               <p>Projects Complete</p>
//             </div>
//             <div className="flex flex-col items-center sm:items-start">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">70+</h1>
//               <p>Happy Clients</p>
//             </div>
//             <div className="flex flex-col items-center sm:items-start">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">$10M+</h1>
//               <p>Project Value</p>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";

export default function Hero({ scrollToFeatured }) {
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

      <div className="relative w-[95vw] sm:w-[90vw] h-[80vh] sm:h-[90vh] mx-auto my-6 sm:my-10 rounded-2xl overflow-hidden shadow-lg font-playfair">
        <img
          src="https://framerusercontent.com/images/rQXeeWMbrXXzxko63WI4Z1ZVIk.jpg?scale-down-to=1024"
          alt="Modern Home"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center mx-4 sm:mx-6 md:mx-12 space-y-4 sm:space-y-6 max-w-full sm:max-w-xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            FIND YOUR PERFECT <br /> HOME TODAY
          </h1>

          <p className="text-white text-sm sm:text-base leading-relaxed">
            We provide tailored real estate solutions, guiding you through every step with <br />
            personalized experiences that meet your unique needs and aspirations.
          </p>

          <button
            onClick={scrollToFeatured}
            className="bg-black text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-fit hover:bg-gray-200 transition hover:text-black text-sm sm:text-base"
          >
            Explore Properties
          </button>
        </div>
      </div>
    </>
  );
}