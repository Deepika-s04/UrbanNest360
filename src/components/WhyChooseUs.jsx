


import React from 'react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      num: "5K+",
      title: "Trusted By Thousands",
      desc: "Thousands of buyers and sellers trust our platform for safe, verified, and transparent property transactions across India.",
      color: "#BC6C25",
      bg: "rgba(188,108,37,0.08)",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      num: "20+",
      title: "Wide Range Of Properties",
      desc: "From affordable apartments to luxury villas — a diverse portfolio to match every lifestyle and budget across 20+ cities.",
      color: "#4A7C59",
      bg: "rgba(74,124,89,0.08)",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      num: "98%",
      title: "Financing Made Easy",
      desc: "Expert assistance with home loans and financing options, making your property purchase smooth and completely hassle-free.",
      color: "#3A6B8A",
      bg: "rgba(58,107,138,0.08)",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@400;500;600;700&display=swap');

        .why-section {
          font-family: 'Jost', sans-serif;
          padding: 100px 0;
          background: white;
          position: relative;
        }
        .why-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media (max-width: 768px) {
          .why-inner { padding: 0 24px; }
          .why-section { padding: 60px 0; }
        }

        .why-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .why-tag {
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #BC6C25; margin-bottom: 16px; display: block;
        }
        .why-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 4vw, 56px);
          font-weight: 700; color: #1a1a1a;
          margin: 0 0 16px; line-height: 1.1;
        }
        .why-title em { font-style: italic; color: #BC6C25; }
        .why-subtitle {
          font-size: 17px; color: #555;
          max-width: 500px; margin: 0 auto;
          line-height: 1.75; font-weight: 400;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr; }
        }

        .why-card {
          padding: 40px 36px;
          border-radius: 20px;
          background: #faf8f5;
          border: 1px solid #e8e0d6;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .why-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.1);
          background: white;
        }
        .why-card:hover::after { opacity: 1; }

        .why-icon-wrap {
          width: 60px; height: 60px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
        }
        .why-icon-wrap svg { width: 30px; height: 30px; }

        .why-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px; font-weight: 700;
          line-height: 1; margin-bottom: 10px;
        }
        .why-card-title {
          font-size: 20px; font-weight: 700;
          color: #1a1a1a; margin: 0 0 14px;
        }
        .why-card-desc {
          font-size: 15px; color: #555;
          line-height: 1.75; margin: 0; font-weight: 400;
        }
      `}</style>

      <section className="why-section">
        <div className="why-inner">
          <div className="why-header">
            <span className="why-tag">Our Advantage</span>
            <h2 className="why-title">Why Choose <em>UrbanNest360</em></h2>
            <p className="why-subtitle">We provide full service at every step — from discovery to keys in hand.</p>
          </div>

          <div className="why-grid">
            {reasons.map((r, i) => (
              <div key={i} className="why-card">
                <style>{`.why-card:nth-child(${i + 1})::after { background: ${r.color}; }`}</style>
                <div className="why-icon-wrap" style={{ background: r.bg, color: r.color }}>
                  {r.icon}
                </div>
                <div className="why-num" style={{ color: r.color }}>{r.num}</div>
                <h3 className="why-card-title">{r.title}</h3>
                <p className="why-card-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}