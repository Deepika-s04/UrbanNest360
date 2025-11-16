import React from "react";

export default function Stats() {
  const stats = [
    ["850+", "ELEGANT APARTMENTS"],
    ["950+", "LUXURY HOUSES"],
    ["18K+", "SATISFIED GUESTS"],
    ["2K+", "HAPPY OWNERS"],
  ];

  return (
    <div className="py-10 sm:py-16" style={{ backgroundColor: "#132a13" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center px-4">
        {stats.map(([num, txt]) => (
          <div key={txt}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              {num}
            </h1>
            <p className="text-sm sm:text-lg text-white mt-2">{txt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
