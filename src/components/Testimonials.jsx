

import React, { useState } from 'react';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      quote: "I had an amazing experience with UrbanNest360. The entire process of buying my new home was smooth and stress-free. Highly recommended for first-time buyers!",
      name: "Priya Malhotra",
      role: "UI/UX Designer",
      location: "Mumbai, Maharashtra",
      image: "https://i.pinimg.com/1200x/e3/b2/1a/e3b21a80d4842f176726e4b745768182.jpg",
      avatar: "https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg",
      property: "3BHK Apartment, Bandra",
      rating: 5,
    },
    {
      quote: "Thanks to UrbanNest360, I found the perfect rental property within my budget. Their team was patient, knowledgeable, and guided me at every step of the journey.",
      name: "James Smith",
      role: "Investment Specialist",
      location: "Bangalore, Karnataka",
      image: "https://i.pinimg.com/1200x/5b/b3/84/5bb384a8a62803b13f06231babf76fb8.jpg",
      avatar: "https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg",
      property: "Villa, Whitefield",
      rating: 5,
    },
    {
      quote: "There are so many wonderful things to say about UrbanNest360. Their staff genuinely cares about clients and is competent and professional. They helped me find the ideal home.",
      name: "Vikram Singh",
      role: "Marketing Manager",
      location: "Delhi, NCR",
      image: "https://i.pinimg.com/736x/e0/72/10/e0721026009b3910b47208337463212d.jpg",
      avatar: "https://i.pinimg.com/736x/1d/f1/48/1df148bff017c65474e302ce4b0d3ec5.jpg",
      property: "Penthouse, Dwarka",
      rating: 5,
    },
  ];

  const t = testimonials[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@400;500;600;700&display=swap');

        .test-section {
          font-family: 'Jost', sans-serif;
          padding: 100px 0;
          background: #faf8f5;
          position: relative;
          overflow: hidden;
        }
        .test-section::before {
          content: '"';
          position: absolute;
          bottom: -80px; right: 40px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 400px;
          color: rgba(188,108,37,0.06);
          line-height: 1;
          pointer-events: none;
        }
        .test-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media (max-width: 768px) {
          .test-inner { padding: 0 24px; }
          .test-section { padding: 60px 0; }
        }

        .test-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          flex-wrap: wrap;
          gap: 24px;
        }
        .test-tag {
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #BC6C25; margin-bottom: 14px; display: block;
        }
        .test-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 700; color: #1a1a1a;
          margin: 0; line-height: 1.1;
        }
        .test-title em { font-style: italic; color: #BC6C25; }

        .test-nav {
          display: flex; gap: 10px;
        }
        .test-nav-btn {
          width: 48px; height: 48px;
          border-radius: 50%;
          border: 2px solid #e8e0d6;
          background: white;
          color: #1a1a1a;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; font-weight: 600;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .test-nav-btn:hover {
          background: #BC6C25;
          border-color: #BC6C25;
          color: white;
          box-shadow: 0 4px 16px rgba(188,108,37,0.3);
        }

        .test-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .test-body { grid-template-columns: 1fr; gap: 36px; }
          .test-header { flex-direction: column; align-items: flex-start; }
        }

        .test-img-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        .test-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease;
        }
        .test-img-wrap:hover img { transform: scale(1.04); }
        .test-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%);
        }
        .test-img-label {
          position: absolute;
          bottom: 20px; left: 20px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          border-radius: 10px;
          padding: 10px 16px;
          color: #1a1a1a;
          font-size: 14px; font-weight: 600;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        }
        .test-img-label span {
          color: #BC6C25; display: block;
          font-size: 11px; font-weight: 700;
          opacity: 1; margin-bottom: 3px;
          text-transform: uppercase; letter-spacing: 0.1em;
        }

        .test-content { padding: 8px 0; }
        .test-stars {
          display: flex; gap: 4px; margin-bottom: 28px;
        }
        .test-star { color: #DDA15E; font-size: 20px; }

        .test-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 2.5vw, 28px);
          font-weight: 500; font-style: italic;
          color: #1a1a1a;
          line-height: 1.65; margin: 0 0 36px;
        }

        .test-author {
          display: flex; align-items: center; gap: 16px;
          padding-top: 28px;
          border-top: 1px solid #e8e0d6;
        }
        .test-avatar {
          width: 56px; height: 56px;
          border-radius: 50%; object-fit: cover;
          border: 3px solid #BC6C25;
          box-shadow: 0 4px 12px rgba(188,108,37,0.2);
        }
        .test-author-name {
          font-size: 17px; font-weight: 700;
          color: #1a1a1a; margin-bottom: 3px;
        }
        .test-author-role {
          font-size: 14px; color: #666; font-weight: 500;
        }
        .test-author-loc {
          font-size: 13px; color: #BC6C25;
          margin-top: 3px; font-weight: 600;
        }

        .test-dots {
          display: flex; gap: 8px;
          margin-top: 52px;
          justify-content: center;
        }
        .test-dot {
          height: 4px; border-radius: 4px;
          cursor: pointer; transition: all 0.3s ease;
          border: none; padding: 0;
        }
        .test-dot.active { background: #BC6C25; width: 36px; }
        .test-dot:not(.active) { width: 14px; background: #d6cbbf; }
        .test-dot:hover:not(.active) { background: #BC6C25; opacity: 0.5; }
      `}</style>

      <section className="test-section" id="Testimonials">
        <div className="test-inner">
          <div className="test-header">
            <div>
              <span className="test-tag">Client Stories</span>
              <h2 className="test-title">What Our Clients<br /><em>Say About Us</em></h2>
            </div>
            <div className="test-nav">
              <button className="test-nav-btn" onClick={() => setActive(a => (a - 1 + testimonials.length) % testimonials.length)}>←</button>
              <button className="test-nav-btn" onClick={() => setActive(a => (a + 1) % testimonials.length)}>→</button>
            </div>
          </div>

          <div className="test-body">
            <div className="test-img-wrap">
              <img src={t.image} alt={t.name} key={active} />
              <div className="test-img-overlay" />
              <div className="test-img-label">
                <span>Property</span>
                {t.property}
              </div>
            </div>

            <div className="test-content">
              <div className="test-stars">
                {[...Array(t.rating)].map((_, i) => <span key={i} className="test-star">★</span>)}
              </div>
              <p className="test-quote">"{t.quote}"</p>
              <div className="test-author">
                <img src={t.avatar} alt={t.name} className="test-avatar" />
                <div>
                  <div className="test-author-name">{t.name}</div>
                  <div className="test-author-role">{t.role}</div>
                  <div className="test-author-loc">📍 {t.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="test-dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`test-dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}