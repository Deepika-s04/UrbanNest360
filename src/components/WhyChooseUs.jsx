// import React from 'react';

// export default function WhyChooseUs() {
//   return (
//     <section className="py-8 sm:py-12" style={{ backgroundColor: '#C2C5AA' }}>
//       <div className="text-center mb-6 sm:mb-8">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-5">Why Choose Us</h1>
//         <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold mb-8 sm:mb-12">We provide full service at every step!</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto px-4">
//         <div className="bg-white rounded-xl shadow-md border-2 shadow-gray-400 px-4 sm:px-5 py-5 sm:py-6 flex flex-col items-center text-center transition-transform hover:scale-105 ease-in-out duration-300">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUchTIps4I9wFqXFWg8fb1kKo65dQxHRyIe_2pmxf9dVywRuOc2cSq1k519esDD8vlfVk&usqp=CAU"
//             alt="Trusted Icon"
//             className="w-10 h-10 sm:w-12 sm:h-12 mt-6 sm:mt-10 mb-6 sm:mb-8"
//           />
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4">Trusted By Thousands</h2>
//           <p className="py-4 sm:py-5 text-sm sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-10">
//             Our platform is trusted by thousands of buyers and sellers, ensuring safe, verified, and transparent property transactions.
//           </p>
//         </div>

//         <div className="bg-white rounded-xl shadow-md border-2 shadow-gray-400 px-4 sm:px-5 py-5 sm:py-6 flex flex-col items-center text-center transition-transform hover:scale-105 ease-in-out duration-300">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEzWJ_USzgkHsTzIeLviHC9ttDv6kQ4gRKA&s"
//             alt="Properties Icon"
//             className="w-10 h-10 sm:w-12 sm:h-12 mb-6 sm:mb-8 mt-6 sm:mt-10"
//           />
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4">Wide Range Of Properties</h2>
//           <p className="py-4 sm:py-5 mb-6 sm:mb-10 text-sm sm:text-lg md:text-xl text-gray-600 leading-relaxed">
//             From affordable apartments to luxury villas, we offer a diverse portfolio of properties to match every lifestyle and budget.
//           </p>
//         </div>

//         <div className="bg-white rounded-xl border-2 shadow-md shadow-gray-400 px-4 sm:px-5 py-5 sm:py-6 flex flex-col items-center text-center transition-transform hover:scale-105 ease-in-out duration-300">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTyPAeF_ZuSiHnd6WuPyPhs-QRBjce7ndDg&s"
//             alt="Financing Icon"
//             className="mt-6 sm:mt-10 w-10 h-10 sm:w-12 sm:h-12 mb-6 sm:mb-8"
//           />
//           <h2 className="text-xl sm:text-2xl font-semibold mb-4">Financing Made Easy</h2>
//           <p className="py-4 sm:py-5 mb-6 sm:mb-10 text-sm sm:text-lg md:text-xl text-gray-600 leading-relaxed">
//             Get expert assistance with home loans and financing options, making your property purchase smooth and hassle-free.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';

export default function WhyChooseUs() {
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

      <section className="py-12 sm:py-16 lg:py-20 font-playfair" style={{ backgroundColor: '#C2C5AA' }}>
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto px-4">
            We provide full service at every step!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Card 1: Trusted */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Trusted By Thousands</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our platform is trusted by thousands of buyers and sellers, ensuring safe, verified, and transparent property transactions.
            </p>
          </div>

          {/* Card 2: Properties */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Wide Range Of Properties</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              From affordable apartments to luxury villas, we offer a diverse portfolio to match every lifestyle and budget.
            </p>
          </div>

          {/* Card 3: Financing */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Financing Made Easy</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Get expert assistance with home loans and financing options, making your property purchase smooth and hassle-free.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}