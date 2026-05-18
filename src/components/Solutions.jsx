

import React, { useEffect } from 'react';

const submitInterest = async () => {
  const FORMSPREE_URL = 'https://formspree.io/f/xnnlqalo';
  const formData = new FormData();
  formData.append('page', 'Solutions Page');
  formData.append('timestamp', new Date().toISOString());
  formData.append('userAgent', navigator.userAgent);
  formData.append('url', window.location.href);
  try {
    await fetch(FORMSPREE_URL, { method: 'POST', body: formData, headers: { Accept: 'application/json' } });
  } catch (err) {}
};

export default function Solutions() {
  useEffect(() => { submitInterest(); }, []);

  const cards = [
    {
      title: "Safe & Trustworthy",
      desc: "Every listing is verified and reviewed. All living, dining, kitchen and play areas were designed with your family's safety in mind. We ensure every transaction is transparent.",
      img: "https://i.pinimg.com/736x/6a/7a/15/6a7a150b675aeb0ed2b1995aa74ceb25.jpg",
    },
    {
      title: "Zero Commissions",
      desc: "We believe in transparent pricing. No hidden fees, no agent markups. What you see is exactly what you pay — always fair, always honest.",
      img: "https://i.pinimg.com/736x/22/5d/c5/225dc5df9df63c7b698fa623f566556d.jpg",
    },
    {
      title: "Dedicated Support",
      desc: "All-inclusive real estate services to facilitate easy management of your properties. Our experts are available around the clock to assist you at every step.",
      img: "https://i.pinimg.com/736x/15/09/1a/15091a9e572405ce64b501e279559244.jpg",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@400;500;600;700&display=swap');

        .sol-section {
          font-family: 'Jost', sans-serif;
          padding: 100px 0;
          background: #faf8f5;
          position: relative;
        }
        .sol-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media (max-width: 768px) {
          .sol-inner { padding: 0 24px; }
          .sol-section { padding: 60px 0; }
        }

        .sol-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          flex-wrap: wrap;
          gap: 24px;
        }
        .sol-tag {
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #BC6C25; margin-bottom: 14px; display: block;
        }
        .sol-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 54px);
          font-weight: 700; color: #1a1a1a;
          margin: 0; line-height: 1.1;
        }
        .sol-title em { font-style: italic; color: #BC6C25; }
        .sol-desc {
          font-size: 16px; color: #555;
          max-width: 340px; line-height: 1.75;
          margin: 0; font-weight: 400;
        }

        .sol-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 900px) {
          .sol-grid { grid-template-columns: 1fr; }
          .sol-header { flex-direction: column; align-items: flex-start; }
          .sol-desc { max-width: 100%; }
        }

        .sol-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e8e0d6;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .sol-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }

        .sol-card-img {
          height: 220px;
          overflow: hidden;
        }
        .sol-card-img img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease;
        }
        .sol-card:hover .sol-card-img img { transform: scale(1.05); }

        .sol-card-body {
          padding: 28px 32px 36px;
        }
        .sol-card-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px; color: #BC6C25;
          font-weight: 600; letter-spacing: 0.1em;
          margin-bottom: 12px; display: block;
        }
        .sol-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px; font-weight: 700;
          color: #1a1a1a; margin: 0 0 14px; line-height: 1.2;
        }
        .sol-card-desc {
          font-size: 15px; color: #555;
          line-height: 1.75; margin: 0 0 24px; font-weight: 400;
        }
        .sol-card-line {
          height: 2px; border-radius: 2px;
          width: 40px; background: #BC6C25;
          transition: width 0.3s ease;
        }
        .sol-card:hover .sol-card-line { width: 80px; }
      `}</style>

      <section className="sol-section" id="Solutions">
        <div className="sol-inner">
          <div className="sol-header">
            <div>
              <span className="sol-tag">What We Offer</span>
              <h2 className="sol-title">Your Best<br /><em>Possible Solutions</em></h2>
            </div>
            <p className="sol-desc">
              Our thoughtfully designed services offer a special blend of eco-friendly living and urban convenience.
            </p>
          </div>

          <div className="sol-grid">
            {cards.map((card, i) => (
              <div key={i} className="sol-card">
                <div className="sol-card-img">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="sol-card-body">
                  <span className="sol-card-num">0{i + 1}</span>
                  <h3 className="sol-card-title">{card.title}</h3>
                  <p className="sol-card-desc">{card.desc}</p>
                  <div className="sol-card-line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}