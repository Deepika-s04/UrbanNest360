

import React, { useState } from 'react';

const BedIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12V7a1 1 0 011-1h16a1 1 0 011 1v5M3 12h18M3 12v5m18-5v5M3 17h18M7 12V9a1 1 0 011-1h3a1 1 0 011 1v3M12 12V9a1 1 0 011-1h3a1 1 0 011 1v3"/>
  </svg>
);

const BathIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4zM6 12V6a3 3 0 013-3h1a1 1 0 011 1v1"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 20v1m8-1v1"/>
  </svg>
);

const AreaIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h4M4 4v4M20 4h-4m4 0v4M4 20h4m-4 0v-4m16 4h-4m4 0v-4"/>
    <rect x="7" y="7" width="10" height="10" rx="1" strokeLinecap="round"/>
  </svg>
);

export default function LatestProperties({ openModal }) {
  const [activeTag, setActiveTag] = useState('All');

  const properties = [
    {
      img: 'https://cdn.prod.website-files.com/69031d88368ce33e31aa8145/69049ce6fdfdcc7119bbbb40_preview%20(12).jpg',
      tag: 'For Rent', price: '₹20,000', priceNote: '/month',
      title: 'Compact Studio', location: 'Hiranandani Estate, Thane, Mumbai',
      beds: 1, baths: 1, sqft: 600,
    },
    {
      img: 'https://t3.ftcdn.net/jpg/09/12/45/40/240_F_912454068_vOyqVPLB3lZ7YIcKonRyqjbWKkiF3GWG.jpg',
      tag: 'For Sale', price: '₹1,50,00,000', priceNote: '',
      title: 'Coastal Breeze Apartment', location: 'Marine Drive, Mumbai',
      beds: 2, baths: 2, sqft: 1200,
    },
    {
      img: 'https://cdn.prod.website-files.com/69031d88368ce33e31aa8145/69049ccc95450886cb629261_preview%20(11).jpg',
      tag: 'For Sale', price: '₹2,20,00,000', priceNote: '',
      title: 'Greenwood Villa', location: 'Whitefield, Bengaluru',
      beds: 3, baths: 2, sqft: 2000,
    },
    {
      img: 'https://cdn.prod.website-files.com/69031d88368ce33e31aa8145/69049c7deeb0535d8477b255_preview%20(8).jpg',
      tag: 'For Rent', price: '₹35,000', priceNote: '/month',
      title: 'Premium Condo', location: 'DLF Phase 5, Gurugram',
      beds: 3, baths: 2, sqft: 1800,
    },
    {
      img: 'https://cdn.prod.website-files.com/68c28ff9bcc4c10653ae8d54/68da594f0d1fea07997808ab_property-image-2.png',
      tag: 'For Rent', price: '₹25,000', priceNote: '/month',
      title: 'Urban Loft', location: 'Koregaon Park, Pune',
      beds: 2, baths: 1, sqft: 1000,
    },
    {
      img: 'https://i.pinimg.com/1200x/33/80/58/3380589d3796bf1a2dcbba9764ee94f0.jpg',
      tag: 'For Sale', price: '₹1,80,00,000', priceNote: '',
      title: 'Serenity Villa', location: 'Electronic City, Bengaluru',
      beds: 3, baths: 2, sqft: 1700,
    },
  ];

  const tags = ['All', 'For Sale', 'For Rent'];
  const filtered = activeTag === 'All' ? properties : properties.filter(p => p.tag === activeTag);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        .lp-section { font-family: 'DM Sans', sans-serif; }
        .lp-playfair { font-family: 'Playfair Display', serif; }
        .lp-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1.5px solid #dde8dd;
        }
        .lp-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(13,36,16,0.14); border-color: transparent; }
        .lp-img-wrap { position: relative; overflow: hidden; height: 230px; }
        .lp-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .lp-card:hover .lp-img-wrap img { transform: scale(1.06); }
        .lp-tag-btn {
          padding: 10px 24px; border-radius: 30px;
          font-size: 15px; font-weight: 600;
          cursor: pointer; border: 2px solid transparent;
          transition: all 0.2s; font-family: 'DM Sans', sans-serif;
        }
        .lp-tag-btn.active { background: #0d2410; color: white; border-color: #0d2410; }
        .lp-tag-btn.inactive { background: white; color: #5a5a5a; border-color: #dde8dd; }
        .lp-tag-btn.inactive:hover { border-color: #0d2410; color: #0d2410; }
        .lp-stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 10px 0;
          color: #2a4a2a;
        }
        .lp-stat-item svg { color: #3a7a3a; }
        .lp-stat-label { font-size: 13px; font-weight: 600; }
        @media (max-width: 600px) {
          .lp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section className="lp-section" style={{ background: "#eef4ee", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              display: "inline-block", background: "#0d2410", color: "#a8d5a2",
              fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
              padding: "8px 20px", borderRadius: 30, marginBottom: 20
            }}>New Listings</span>

            <h2 className="lp-playfair" style={{
              fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 800,
              color: "#0d2410", lineHeight: 1.1, marginBottom: 16
            }}>
              Latest Properties<br />
              <em style={{ fontStyle: "italic", fontWeight: 700, color: "#1a4a20" }}>Fresh on the Market</em>
            </h2>

            <p style={{
              fontSize: "clamp(15px, 2vw, 17px)", fontWeight: 400,
              color: "#4a6a4a", maxWidth: 540, margin: "0 auto", lineHeight: 1.75
            }}>
              Browse our exclusive selection of newly listed properties — modern designs, premium amenities, and prime locations tailored for you.
            </p>
          </div>

          {/* Filter tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 44 }}>
            {tags.map(t => (
              <button key={t} className={`lp-tag-btn ${activeTag === t ? 'active' : 'inactive'}`}
                onClick={() => setActiveTag(t)}>
                {t}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="lp-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 24 }}>
            {filtered.map((p, idx) => (
              <div key={idx} className="lp-card" onClick={openModal}>

                <div className="lp-img-wrap">
                  <img src={p.img} alt={p.title} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,36,16,0.45) 0%, transparent 55%)" }} />

                  <span style={{
                    position: "absolute", top: 16, left: 16,
                    background: p.tag === 'For Rent' ? '#e8ecf4' : '#e8f0e8',
                    color: p.tag === 'For Rent' ? '#0d1526' : '#0d2410',
                    fontSize: 13, fontWeight: 700, padding: "6px 14px", borderRadius: 20,
                    border: `1.5px solid ${p.tag === 'For Rent' ? '#c0ccdd' : '#b0ccb0'}`
                  }}>{p.tag}</span>

                  <span style={{
                    position: "absolute", bottom: 14, left: 16,
                    display: "flex", alignItems: "center", gap: 5,
                    color: "rgba(255,255,255,0.9)", fontSize: 13, fontWeight: 500
                  }}>
                    <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {p.location}
                  </span>
                </div>

                <div style={{ padding: "22px 24px 26px" }}>
                  <h3 className="lp-playfair" style={{ fontSize: 21, fontWeight: 700, color: "#0d2410", marginBottom: 14 }}>{p.title}</h3>

                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 18 }}>
                    <span className="lp-playfair" style={{ fontSize: 24, fontWeight: 800, color: "#1a4a20" }}>{p.price}</span>
                    {p.priceNote && <span style={{ fontSize: 14, fontWeight: 500, color: "#7a9a7a" }}>{p.priceNote}</span>}
                  </div>

                  <div style={{ display: "flex", gap: 0, paddingTop: 16, borderTop: "1.5px solid #dde8dd" }}>
                    <div className="lp-stat-item" style={{ borderRight: "1.5px solid #dde8dd" }}>
                      <BedIcon />
                      <span className="lp-stat-label">{p.beds} Bed{p.beds > 1 ? 's' : ''}</span>
                    </div>
                    <div className="lp-stat-item" style={{ borderRight: "1.5px solid #dde8dd" }}>
                      <BathIcon />
                      <span className="lp-stat-label">{p.baths} Bath{p.baths > 1 ? 's' : ''}</span>
                    </div>
                    <div className="lp-stat-item">
                      <AreaIcon />
                      <span className="lp-stat-label">{p.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }} />
        </div>
      </section>
    </>
  );
}