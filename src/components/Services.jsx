
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const items = [
    {
      num: "01",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a4a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
          <path d="M9 21V12h6v9" />
        </svg>
      ),
      title: "Property Buying",
      desc: "Find your dream home from our extensive listings of verified properties across India's top cities.",
      link: "/buy-sell",
      accent: "#1a4a20",
      bg: "#eef4ee",
    },
    {
      num: "02",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d2410" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12V22H4V12" />
          <path d="M22 7H2v5h20V7z" />
          <path d="M12 22V7" />
          <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
        </svg>
      ),
      title: "Property Selling",
      desc: "Sell your property quickly and efficiently with our deep market expertise and wide buyer network.",
      link: "/sell",
      accent: "#0d2410",
      bg: "#e8f0e8",
    },
    {
      num: "03",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d1526" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
      ),
      title: "Property Renting",
      desc: "Explore the best rental options carefully curated to suit your lifestyle, family size and budget.",
      link: "/rent",
      accent: "#0d1526",
      bg: "#e8ecf4",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        .srv-section { font-family: 'DM Sans', sans-serif; }
        .srv-playfair { font-family: 'Playfair Display', serif; }
        .srv-card {
          background: #fff;
          border-radius: 20px;
          padding: 40px 32px;
          border: 1.5px solid #e4e4e4;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .srv-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.10);
          border-color: transparent;
        }
        .srv-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 4px;
          border-radius: 0 0 20px 20px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .srv-card:hover::after { opacity: 1; }
        .srv-card-0::after { background: #1a4a20; }
        .srv-card-1::after { background: #0d2410; }
        .srv-card-2::after { background: #0d1526; }
        .srv-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: none;
          background: none;
          cursor: pointer;
          padding: 0;
          transition: gap 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .srv-explore-btn:hover { gap: 14px; }
        @media (max-width: 600px) {
          .srv-card { padding: 32px 24px; }
        }
      `}</style>

      <section className="srv-section" style={{ background: "#f7f5f2", padding: "80px 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{
            display: "inline-block", background: "#0d2410", color: "white",
            fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
            padding: "8px 20px", borderRadius: 30, marginBottom: 20
          }}>Our Services</span>

          <h2 className="srv-playfair" style={{
            fontSize: "clamp(34px, 5vw, 54px)", fontWeight: 800,
            color: "#1a1a1a", lineHeight: 1.1, marginBottom: 16
          }}>
            Everything You Need,<br />
            <em style={{ fontStyle: "italic", fontWeight: 700, color: "#0d2410" }}>All in One Place</em>
          </h2>

          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 400,
            color: "#6b6b6b", maxWidth: 520, margin: "0 auto", lineHeight: 1.7
          }}>
            From buying your dream home to renting the perfect space — we handle it all with expertise and care.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}>
          {items.map((item, i) => (
            <div key={item.title} className={`srv-card srv-card-${i}`}>

              <span className="srv-playfair" style={{
                position: "absolute", top: 20, right: 24,
                fontSize: 72, fontWeight: 800,
                color: "#f0ece6", lineHeight: 1, userSelect: "none", pointerEvents: "none"
              }}>
                {item.num}
              </span>

              <div style={{
                width: 60, height: 60, borderRadius: 16,
                background: item.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 24,
              }}>
                {item.icon}
              </div>

              <h3 className="srv-playfair" style={{
                fontSize: 26, fontWeight: 700, color: "#1a1a1a",
                marginBottom: 12, lineHeight: 1.2
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: 16, fontWeight: 400, color: "#6b6b6b",
                lineHeight: 1.75, marginBottom: 32, flex: 1
              }}>
                {item.desc}
              </p>

              <button
                className="srv-explore-btn"
                onClick={() => navigate(item.link)}
                style={{ color: item.accent }}
              >
                Explore Now
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke={item.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}