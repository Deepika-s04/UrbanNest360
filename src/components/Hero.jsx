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
//           src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
//           alt="Modern Home"
//           className="w-full h-full object-cover brightness-50"
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
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";

export default function Hero({ scrollToFeatured }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div
        className="relative mx-auto my-6 sm:my-10 rounded-2xl overflow-hidden"
        style={{
          width: "92vw",
          height: "90vh",
          minHeight: "560px",
          background: "#0a0a0a",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
          alt="Beautiful Home"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.65, filter: "saturate(0.7) brightness(0.88)" }}
        />

        {/* Side gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(6,6,6,0.88) 28%, rgba(6,6,6,0.08) 100%)",
          }}
        />

        {/* Bottom gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,6,6,0.55) 0%, transparent 55%)",
          }}
        />

        {/* Main Content */}
        <div
          className="absolute inset-0 flex flex-col justify-center"
          style={{ padding: "0 clamp(28px, 6vw, 72px)", maxWidth: "600px" }}
        >
          <h1
            className="text-white font-semibold mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 6vw, 68px)",
              lineHeight: 1.02,
            }}
          >
            Find Your
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(255,255,255,0.82)" }}>
              Perfect Home
            </em>
            <br />
            Today
          </h1>

          <p
            className="mb-10 font-light"
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.52)",
              maxWidth: "350px",
              lineHeight: "1.85",
            }}
          >
            Personalized guidance through every step of your journey — built
            around your unique needs and aspirations.
          </p>

          <button
            onClick={scrollToFeatured}
            className="inline-flex items-center gap-3 font-medium uppercase"
            style={{
              background: "#c9a96e",
              color: "#0a0a0a",
              fontSize: "12px",
              letterSpacing: "1.8px",
              padding: "15px 32px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            Explore Properties
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="#0a0a0a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 flex items-center gap-2"
          style={{ left: "clamp(28px, 6vw, 72px)" }}
        >
          <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c9a96e", opacity: 0.5 }} />
          <span style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>
            Scroll to explore
          </span>
        </div>
      </div>
    </>
  );
}