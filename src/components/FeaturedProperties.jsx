
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

export default function FeaturedProperties({ openModal }) {
  const [activeTag, setActiveTag] = useState('All');

  const properties = [
    {
      img: 'https://i.pinimg.com/1200x/a6/0d/c1/a60dc117916d6a4b06d815b40384ffd7.jpg',
      tag: 'For Rent', price: '₹1,30,00,000', priceNote: '',
      location: 'Sobha City, Bengaluru', title: 'Urban Oasis',
      desc: 'Modern 3BHK apartment in Thanisandra with Vastu-compliant design, modular kitchen, and close proximity to Manyata Tech Park.',
      beds: 3, baths: 2, sqft: 1600,
    },
    {
      img: 'https://i.pinimg.com/1200x/cd/18/86/cd188606fc246b97743f4c38d405788a.jpg',
      tag: 'For Sale', price: '₹1,10,00,000', priceNote: '',
      location: 'DLF Camellias, Gurugram', title: 'Skyview Residences',
      desc: 'Luxury 2BHK apartment with golf course views, infinity pool, and excellent connectivity to Cyber City.',
      beds: 2, baths: 2, sqft: 1300,
    },
    {
      img: 'https://i.pinimg.com/1200x/46/9a/f7/469af73674363bdd1c5431f02254ab39.jpg',
      tag: 'For Rent', price: '₹2,50,00,000', priceNote: '',
      location: 'Prestige Lakeside Habitat, Bengaluru', title: 'Lakeside Villa',
      desc: 'Premium 4BHK villa with lake-facing garden, 24/7 security, and access to clubhouse and sports facilities.',
      beds: 4, baths: 3, sqft: 2800,
    },
    {
      img: 'https://i.pinimg.com/1200x/02/96/0c/02960c95e8f17a63e483de27a6572a91.jpg',
      tag: 'For Sale', price: '₹90,00,000', priceNote: '',
      location: 'Godrej Air, Hoodi, Bengaluru', title: 'Green Haven',
      desc: 'Spacious 3BHK apartment with lush green surroundings, rooftop amenities, and proximity to ITPL.',
      beds: 3, baths: 2, sqft: 1500,
    },
    {
      img: 'https://i.pinimg.com/1200x/eb/19/1d/eb191d41a2de076767dedf903a632045.jpg',
      tag: 'For Rent', price: '₹1,80,00,000', priceNote: '',
      location: 'Adarsh Palm Retreat, Delhi', title: 'Serenity Towers',
      desc: 'Luxury 3BHK flat with private balcony, gated community, and easy access to Outer Ring Road.',
      beds: 3, baths: 3, sqft: 1900,
    },
    {
      img: 'https://i.pinimg.com/1200x/1d/9f/1a/1d9f1a70f452c346d823c2528ff0a9ad.jpg',
      tag: 'For Sale', price: '₹2,60,00,000', priceNote: '',
      location: 'Brigade Utopia, Bengaluru', title: 'Paradise Homes',
      desc: 'Modern 4BHK with landscaped gardens, sports facilities, and excellent metro connectivity.',
      beds: 4, baths: 4, sqft: 2500,
    },
  ];

  const tags = ['All', 'For Sale', 'For Rent'];
  const filtered = activeTag === 'All' ? properties : properties.filter(p => p.tag === activeTag);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        .fp2-section { font-family: 'DM Sans', sans-serif; }
        .fp2-playfair { font-family: 'Playfair Display', serif; }
        .fp2-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1.5px solid #dde8dd;
        }
        .fp2-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(13,36,16,0.14); border-color: transparent; }
        .fp2-img-wrap { position: relative; overflow: hidden; height: 230px; }
        .fp2-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .fp2-card:hover .fp2-img-wrap img { transform: scale(1.06); }
        .fp2-tag-btn {
          padding: 10px 24px; border-radius: 30px;
          font-size: 15px; font-weight: 600;
          cursor: pointer; border: 2px solid transparent;
          transition: all 0.2s; font-family: 'DM Sans', sans-serif;
        }
        .fp2-tag-btn.active { background: #0d2410; color: white; border-color: #0d2410; }
        .fp2-tag-btn.inactive { background: white; color: #5a5a5a; border-color: #dde8dd; }
        .fp2-tag-btn.inactive:hover { border-color: #0d2410; color: #0d2410; }
        .fp2-stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 10px 0;
          color: #2a4a2a;
        }
        .fp2-stat-item svg { color: #3a7a3a; }
        .fp2-stat-label { font-size: 13px; font-weight: 600; }
        @media (max-width: 600px) {
          .fp2-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section className="fp2-section" style={{ background: "#eef4ee", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              display: "inline-block", background: "#0d2410", color: "#a8d5a2",
              fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
              padding: "8px 20px", borderRadius: 30, marginBottom: 20
            }}>Featured Properties</span>

            <h2 className="fp2-playfair" style={{
              fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 800,
              color: "#0d2410", lineHeight: 1.1, marginBottom: 16
            }}>
              Handpicked Homes<br />
              <em style={{ fontStyle: "italic", fontWeight: 700, color: "#1a4a20" }}>Just for You</em>
            </h2>

            <p style={{
              fontSize: "clamp(15px, 2vw, 17px)", fontWeight: 400,
              color: "#4a6a4a", maxWidth: 540, margin: "0 auto", lineHeight: 1.75
            }}>
              Discover properties that combine luxury, affordability, and prime locations — carefully selected by our expert team.
            </p>
          </div>

          {/* Filter tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 44 }}>
            {tags.map(t => (
              <button key={t} className={`fp2-tag-btn ${activeTag === t ? 'active' : 'inactive'}`}
                onClick={() => setActiveTag(t)}>
                {t}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="fp2-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 24 }}>
            {filtered.map((p, idx) => (
              <div key={idx} className="fp2-card" onClick={openModal}>

                <div className="fp2-img-wrap">
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
                  <h3 className="fp2-playfair" style={{ fontSize: 21, fontWeight: 700, color: "#0d2410", marginBottom: 8 }}>{p.title}</h3>

                  <p style={{ fontSize: 14, color: "#4a6a4a", lineHeight: 1.65, marginBottom: 14, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.desc}</p>

                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 18 }}>
                    <span className="fp2-playfair" style={{ fontSize: 24, fontWeight: 800, color: "#1a4a20" }}>{p.price}</span>
                    {p.priceNote && <span style={{ fontSize: 14, fontWeight: 500, color: "#7a9a7a" }}>{p.priceNote}</span>}
                  </div>

                  <div style={{ display: "flex", gap: 0, paddingTop: 16, borderTop: "1.5px solid #dde8dd" }}>
                    <div className="fp2-stat-item" style={{ borderRight: "1.5px solid #dde8dd" }}>
                      <BedIcon />
                      <span className="fp2-stat-label">{p.beds} Bed{p.beds > 1 ? 's' : ''}</span>
                    </div>
                    <div className="fp2-stat-item" style={{ borderRight: "1.5px solid #dde8dd" }}>
                      <BathIcon />
                      <span className="fp2-stat-label">{p.baths} Bath{p.baths > 1 ? 's' : ''}</span>
                    </div>
                    <div className="fp2-stat-item">
                      <AreaIcon />
                      <span className="fp2-stat-label">{p.sqft} sqft</span>
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