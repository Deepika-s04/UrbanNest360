// // // // src/pages/SellPage.jsx
// // // import { useState, useEffect, useRef } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Heart, X, ChevronLeft } from "lucide-react";

// // // // Reusable PropertyModal
// // // import PropertyModal from '../components/PropertyModal.jsx';

// // // const ITEMS_PER_PAGE = 6;

// // // // Sell-only properties (from your HTML)
// // // const SELL_PROPERTIES = [
// // //   { id: 1, title: 'Serenity Heights Luxury House', city: 'Bengaluru', price: 10000000, priceLabel: '1Cr', type: 'Luxury House', beds: 8, baths: 2.5, area: 410, img: 'https://i.pinimg.com/1200x/e8/3d/90/e83d903b5420208624410c9e5ad6dc39.jpg', desc: 'Luxurious house with modern amenities in the heart of Bengaluru.' },
// // //   { id: 2, title: 'Emerald Bay Luxury House', city: 'Haryana', price: 10000000, priceLabel: '1Cr', type: 'Luxury House', beds: 5, baths: 2.5, area: 510, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Elegant luxury house with spacious interiors in Haryana.' },
// // //   { id: 3, title: 'Palm Grove Luxury House', city: 'Kolkata', price: 20000000, priceLabel: '2Cr', type: 'Luxury House', beds: 8, baths: 2.5, area: 625, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Stunning luxury house with lush surroundings in Kolkata.' },
// // //   { id: 4, title: 'Golden Horizon Villa', city: 'Himachal Pradesh', price: 8000000, priceLabel: '80Lakhs', type: 'Luxury House', beds: 4, baths: 2.5, area: 325, img: 'https://images.unsplash.com/photo-1600563438893-0b3a38322d7b?w=400', desc: 'Cozy villa with breathtaking views in Himachal Pradesh.' },
// // //   { id: 5, title: 'Sapphire Riverfront Luxury House', city: 'Kerala', price: 20000000, priceLabel: '2Cr', type: 'Luxury House', beds: 6, baths: 2.5, area: 556, img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9ca8?w=400', desc: 'Riverfront luxury house with serene ambiance in Kerala.' },
// // //   { id: 6, title: 'Sunset Cliffside Luxury House', city: 'Chandigarh', price: 10000000, priceLabel: '1Cr', type: 'Luxury House', beds: 4, baths: 2.5, area: 410, img: 'https://images.unsplash.com/photo-1600565193348-386d2c9cb0be?w=400', desc: 'Modern luxury house with scenic views in Chandigarh.' },
// // //   { id: 7, title: 'City View Luxury House', city: 'Delhi NCR', price: 10000000, priceLabel: '1Cr', type: 'Luxury House', beds: 4, baths: 3, area: 310, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Urban luxury house with city views in Delhi NCR.' },
// // //   { id: 8, title: 'Regal Estate Luxury House', city: 'Delhi NCR', price: 10000000, priceLabel: '1Cr', type: 'Luxury House', beds: 10, baths: 10, area: 4100, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400', desc: 'Grand estate with premium amenities in Delhi NCR.' },
// // //   { id: 9, title: 'Coastal Paradise Luxury House', city: 'Bengaluru', price: 30000000, priceLabel: '3Cr', type: 'Luxury House', beds: 10, baths: 10, area: 4100, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Exquisite coastal-inspired luxury house in Bengaluru.' },
// // //   { id: 10, title: 'Modern Edge Luxury House', city: 'Chennai', price: 20000000, priceLabel: '2Cr', type: 'Luxury House', beds: 10, baths: 10, area: 410, img: 'https://images.unsplash.com/photo-1600563438893-0b3a38322d7b?w=400', desc: 'Sleek modern luxury house in Chennai.' },
// // //   { id: 11, title: 'Ocean Breeze Luxury House', city: 'Goa', price: 20000000, priceLabel: '2Cr', type: 'Luxury House', beds: 10, baths: 10, area: 674, img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9ca8?w=400', desc: 'Beachside luxury house with ocean views in Goa.' },
// // //   { id: 12, title: 'The Pinnacle Apartment', city: 'Delhi NCR', price: 30000000, priceLabel: '3Cr', type: 'Apartment', beds: 10, baths: 10, area: 674, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Premium high-rise apartment in Delhi NCR.' },
// // //   { id: 13, title: 'Backwater Retreat Luxury House', city: 'Kerala', price: 25000000, priceLabel: '2.5Cr', type: 'Luxury House', beds: 10, baths: 10, area: 85000, img: 'https://images.unsplash.com/photo-1600565193348-386d2c9cb0be?w=400', desc: 'Serene backwater luxury house in Kerala.' },
// // //   { id: 14, title: 'Salty Shores Luxury House', city: 'Goa', price: 20000000, priceLabel: '2Cr', type: 'Luxury House', beds: 10, baths: 10, area: 567, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400', desc: 'Coastal luxury house with beach access in Goa.' },
// // //   { id: 15, title: 'Green Acres Luxury House', city: 'Bengaluru', price: 20000000, priceLabel: '2Cr', type: 'Luxury House', beds: 10, baths: 10, area: 850, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Eco-friendly luxury house in Bengaluru.' },
// // //   { id: 16, title: 'Kolkata Riverfront Apartment', city: 'Kolkata', price: 20000000, priceLabel: '2Cr', type: 'Apartment', beds: 10, baths: 10, area: 850, img: 'https://images.unsplash.com/photo-1600563438893-0b3a38322d7b?w=400', desc: 'Modern riverfront apartment in Kolkata.' },
// // //   { id: 17, title: 'Mumbai Central Apartment', city: 'Mumbai', price: 20000000, priceLabel: '2Cr', type: 'Apartment', beds: 10, baths: 10, area: 850, img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9ca8?w=400', desc: 'Central apartment with city access in Mumbai.' },
// // //   { id: 18, title: 'Capital Living Luxury House', city: 'Delhi NCR', price: 20000000, priceLabel: '2Cr', type: 'Luxury House', beds: 10, baths: 10, area: 850, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Spacious luxury house in the capital region.' },
// // //   { id: 19, title: 'Mumbai Skyview Apartment', city: 'Mumbai', price: 20000000, priceLabel: '2Cr', type: 'Apartment', beds: 10, baths: 10, area: 850, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400', desc: 'High-rise apartment with skyline views in Mumbai.' },
// // //   { id: 20, title: 'Marine Drive Apartment', city: 'Mumbai', price: 20000000, priceLabel: '2Cr', type: 'Apartment', beds: 10, baths: 10, area: 850, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Iconic Marine Drive apartment with sea views.' },
// // //   { id: 21, title: 'Bandra Luxury House', city: 'Mumbai', price: 20000000, priceLabel: '2Cr', type: 'Luxury House', beds: 10, baths: 10, area: 850, img: 'https://images.unsplash.com/photo-1600563438893-0b3a38322d7b?w=400', desc: 'Premium luxury house in Bandra, Mumbai.' },
// // //   { id: 22, title: 'South Mumbai Apartment', city: 'Mumbai', price: 20000000, priceLabel: '2Cr', type: 'Apartment', beds: 10, baths: 10, area: 850, img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9ca8?w=400', desc: 'Elegant apartment in South Mumbai.' },
// // //   { id: 23, title: 'Juhu Beach Luxury House', city: 'Mumbai', price: 20000000, priceLabel: '2Cr', type: 'Luxury House', beds: 10, baths: 10, area: 850, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Beachfront luxury house in Juhu, Mumbai.' },
// // //   { id: 24, title: 'Parel Luxury Apartment', city: 'Mumbai', price: 20000000, priceLabel: '2Cr', type: 'Apartment', beds: 10, baths: 10, area: 850, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400', desc: 'Modern luxury apartment in Parel, Mumbai.' }
// // // ];

// // // const formatINR = (amount) => {
// // //   return new Intl.NumberFormat('en-IN', {
// // //     style: 'currency',
// // //     currency: 'INR',
// // //     maximumFractionDigits: 0
// // //   }).format(amount);
// // // };

// // // export default function SellPage() {
// // //   const navigate = useNavigate();
// // //   const [properties] = useState(SELL_PROPERTIES);
// // //   const [favorites, setFavorites] = useState(() => {
// // //     const saved = localStorage.getItem("urban_favorites_sell");
// // //     return saved ? JSON.parse(saved) : [];
// // //   });
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [selectedProp, setSelectedProp] = useState(null);
// // //   const [showDetail, setShowDetail] = useState(false);
// // //   const [showContact, setShowContact] = useState(false);

// // //   // Filter refs
// // //   const qLocation = useRef('');
// // //   const qType = useRef('');
// // //   const qPrice = useRef('');
// // //   const qBeds = useRef(0);

// // //   useEffect(() => {
// // //     localStorage.setItem("urban_favorites_sell", JSON.stringify(favorites));
// // //   }, [favorites]);

// // //   const toggleFavorite = (id) => {
// // //     setFavorites(prev => 
// // //       prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
// // //     );
// // //   };

// // //   const matchFilters = (p) => {
// // //     const loc = qLocation.current.toLowerCase();
// // //     const type = qType.current.toLowerCase();
// // //     const price = qPrice.current;
// // //     const beds = parseInt(qBeds.current || '0', 10);

// // //     if (loc && !p.city.toLowerCase().includes(loc)) return false;
// // //     if (type && p.type.toLowerCase() !== type) return false;
// // //     if (price && p.priceLabel !== price) return false;
// // //     if (beds && p.beds !== beds) return false;
// // //     return true;
// // //   };

// // //   const filtered = properties.filter(matchFilters);
// // //   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
// // //   const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

// // //   const openDetail = (prop) => {
// // //     setSelectedProp(prop);
// // //     setShowDetail(true);
// // //   };

// // //   const closeDetail = () => {
// // //     setShowDetail(false);
// // //     setSelectedProp(null);
// // //   };

// // //   const openContact = () => {
// // //     closeDetail();
// // //     setShowContact(true);
// // //   };

// // //   const handleSearch = (e) => {
// // //     e.preventDefault();
// // //     setCurrentPage(1);
// // //   };

// // //   return (
// // //     <>
// // //       {/* Inter Font */}
// // //       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
// // //       <style jsx>{`
// // //         body { font-family: 'Inter', sans-serif; }
// // //         .card:hover { transform: scale(1.03); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }
// // //       `}</style>

// // //       <div className="min-h-screen bg-[#f5f5f5] text-slate-800">
// // //         {/* Navbar */}
// // //         <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-6 md:mx-10 px-4 sm:px-6 md:px-10 py-4 bg-white shadow-sm">
// // //           <button onClick={() => navigate("/")} className="flex items-center gap-1 text-brand-200 font-semibold mb-4 sm:mb-0">
// // //             <ChevronLeft className="w-5 h-5" /> Back
// // //           </button>
// // //           <h1 className="text-2xl sm:text-3xl font-bold text-brand-200">UrbanNest 360</h1>
// // //           <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
// // //             <a href="#listings" className="text-white bg-brand-200 px-4 py-2 rounded-full hover:bg-brand-100 transition text-sm">Browse Homes</a>
// // //             <a href="#contact" className="text-white bg-brand-200 px-4 py-2 rounded-full hover:bg-brand-100 transition text-sm">Contact Us</a>
// // //           </div>
// // //         </div>

// // //         {/* Hero */}
// // //         <section className="relative isolate overflow-hidden">
// // //           <div className="absolute inset-0 -z-10">
// // //             <img src="https://images.unsplash.com/photo-1760648149145-560e619098ef?ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=80" alt="Modern home" className="h-full w-full object-cover" />
// // //             <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
// // //           </div>
// // //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
// // //             <div className="relative z-10 px-4 text-center">
// // //               <h1 className="text-4xl sm:text-5xl font-bold text-brand-200 mb-4 drop-shadow-xl">Discover Your Dream Home</h1>
// // //               <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto drop-shadow-lg">
// // //                 Explore premium properties across India with smart filters and immersive virtual tours.
// // //               </p>
// // //             </div>
// // //             <div className="mt-6 bg-white/90 backdrop-blur rounded-2xl shadow-soft p-4">
// // //               <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
// // //                 <div>
// // //                   <label className="text-xs font-semibold text-slate-500">Location</label>
// // //                   <select
// // //                     onChange={(e) => qLocation.current = e.target.value}
// // //                     className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-100 text-sm"
// // //                   >
// // //                     <option value="">Any Location</option>
// // //                     {[...new Set(properties.map(p => p.city))].sort().map(city => (
// // //                       <option key={city} value={city.toLowerCase()}>{city}</option>
// // //                     ))}
// // //                   </select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="text-xs font-semibold text-slate-500">Type</label>
// // //                   <select
// // //                     onChange={(e) => qType.current = e.target.value}
// // //                     className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-100 text-sm"
// // //                   >
// // //                     <option value="">Any Type</option>
// // //                     {[...new Set(properties.map(p => p.type))].sort().map(type => (
// // //                       <option key={type} value={type.toLowerCase()}>{type}</option>
// // //                     ))}
// // //                   </select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="text-xs font-semibold text-slate-500">Price</label>
// // //                   <select
// // //                     onChange={(e) => qPrice.current = e.target.value}
// // //                     className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-100 text-sm"
// // //                   >
// // //                     <option value="">Any Price</option>
// // //                     {[...new Set(properties.map(p => p.priceLabel))].sort((a, b) => {
// // //                       const aVal = parseFloat(a) * (a.includes('Cr') ? 100 : 1);
// // //                       const bVal = parseFloat(b) * (b.includes('Cr') ? 100 : 1);
// // //                       return aVal - bVal;
// // //                     }).map(label => (
// // //                       <option key={label} value={label}>₹{label}</option>
// // //                     ))}
// // //                   </select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="text-xs font-semibold text-slate-500">Beds</label>
// // //                   <select
// // //                     onChange={(e) => qBeds.current = e.target.value}
// // //                     className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-100 text-sm"
// // //                   >
// // //                     <option value="">Any Beds</option>
// // //                     {[...new Set(properties.map(p => p.beds))].sort((a, b) => a - b).map(bed => (
// // //                       <option key={bed} value={bed}>{bed} Beds</option>
// // //                     ))}
// // //                   </select>
// // //                 </div>
// // //                 <div className="flex items-end">
// // //                   <button type="submit" className="w-full rounded-xl bg-brand-100 text-white font-semibold py-2 hover:bg-brand-200 transition text-sm">
// // //                     Filter
// // //                   </button>
// // //                 </div>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Listings */}
// // //         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="listings">
// // //           <h2 className="text-3xl font-bold text-brand-200 mb-4">Property Listings</h2>
// // //           <p className="text-brand-100 mb-6">We found {filtered.length} properties</p>
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
// // //             {paginated.map(p => (
// // //               <article
// // //                 key={p.id}
// // //                 className="card bg-[#FEFAE0] rounded-2xl shadow-soft overflow-hidden transition-transform"
// // //               >
// // //                 <div className="relative">
// // //                   <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
// // //                   <div className="absolute top-3 left-3 flex gap-2 text-xs">
// // //                     <span className="px-2.5 py-1 rounded-full bg-white/90 border">{p.type}</span>
// // //                     <span className="px-2.5 py-1 rounded-full bg-white/90 border">{p.beds} Beds</span>
// // //                   </div>
// // //                   <button
// // //                     onClick={() => toggleFavorite(p.id)}
// // //                     className="absolute top-3 right-3 p-1.5 bg-white/90 rounded-full"
// // //                   >
// // //                     <Heart className={`w-4 h-4 ${favorites.includes(p.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
// // //                   </button>
// // //                 </div>
// // //                 <div className="p-4">
// // //                   <h3 className="font-semibold text-lg text-brand-200">{p.title}</h3>
// // //                   <p className="text-brand-100">{p.city}</p>
// // //                   <p className="text-brand-300 font-bold mt-2">₹{p.priceLabel}</p>
// // //                   <div className="flex space-x-4 text-brand-200 text-sm mt-2">
// // //                     <span>{p.beds} Beds</span>
// // //                     <span>{p.baths} Bath</span>
// // //                     <span>{p.area} m²</span>
// // //                   </div>
// // //                   <div className="mt-4 flex gap-2">
// // //                     <button
// // //                       onClick={() => openDetail(p)}
// // //                       className="flex-1 rounded-xl bg-brand-100 text-white py-2 hover:bg-brand-200 text-sm"
// // //                     >
// // //                       View Details
// // //                     </button>
// // //                     <button
// // //                       onClick={openContact}
// // //                       className="flex-1 rounded-xl bg-brand-200 text-white py-2 hover:bg-brand-100 text-sm"
// // //                     >
// // //                       Contact Owner
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </article>
// // //             ))}
// // //           </div>

// // //           {/* Pagination */}
// // //           <div className="mt-8 flex justify-center gap-2">
// // //             <button
// // //               onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
// // //               disabled={currentPage === 1}
// // //               className="px-3 py-1.5 border rounded-lg disabled:opacity-50 bg-white text-brand-200 hover:bg-brand-50"
// // //             >
// // //               Prev
// // //             </button>
// // //             <div className="flex gap-1">
// // //               {Array.from({ length: totalPages }, (_, i) => (
// // //                 <button
// // //                   key={i + 1}
// // //                   onClick={() => setCurrentPage(i + 1)}
// // //                   className={`px-3 py-1.5 border rounded-lg ${currentPage === i + 1 ? 'bg-brand-200 text-white' : 'bg-white text-brand-200 hover:bg-brand-50'}`}
// // //                 >
// // //                   {i + 1}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //             <button
// // //               onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
// // //               disabled={currentPage === totalPages}
// // //               className="px-3 py-1.5 border rounded-lg bg-white text-brand-200 hover:bg-brand-50"
// // //             >
// // //               Next
// // //             </button>
// // //           </div>
// // //         </main>

// // //         {/* Detail Modal */}
// // //         {showDetail && selectedProp && (
// // //           <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-4 z-50" onClick={closeDetail}>
// // //             <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
// // //               <div className="flex items-start justify-between p-4 border-b">
// // //                 <h3 className="text-lg font-bold text-brand-200">{selectedProp.title}</h3>
// // //                 <button onClick={closeDetail} className="text-slate-500 hover:text-slate-800">×</button>
// // //               </div>
// // //               <div className="grid md:grid-cols-2 gap-4 p-4">
// // //                 <div>
// // //                   <img src={selectedProp.img} alt="" className="w-full h-64 object-cover rounded-xl" />
// // //                   <div className="mt-3 flex flex-wrap gap-2 text-xs">
// // //                     {['Near metro', 'Gated security', 'Pet friendly'].map(t => (
// // //                       <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100 border text-slate-700">{t}</span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //                 <div className="space-y-3">
// // //                   <div className="text-2xl font-extrabold text-brand-300">₹{selectedProp.priceLabel}</div>
// // //                   <div className="text-sm text-slate-600">{selectedProp.type} • {selectedProp.beds} Beds • {selectedProp.baths} Bath • {selectedProp.area} m² • {selectedProp.city}</div>
// // //                   <p className="text-sm">{selectedProp.desc}</p>
// // //                   <button
// // //                     onClick={openContact}
// // //                     className="w-full rounded-xl bg-brand-100 text-white font-semibold py-2 hover:bg-brand-200"
// // //                   >
// // //                     Contact Owner
// // //                   </button>
// // //                   <a href="#" className="inline-flex items-center justify-center w-full rounded-xl bg-brand-200 text-white font-semibold py-2 hover:bg-brand-100">
// // //                     Book a Tour
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Reusable PropertyModal */}
// // //         {showContact && <PropertyModal onClose={() => setShowContact(false)} />}
// // //       </div>
// // //     </>
// // //   );
// // // }












// // // // src/pages/SellPage.jsx
// // // import { useState, useRef } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Heart, X, ChevronLeft, MapPin } from "lucide-react";
// // // import PropertyModal from '../components/PropertyModal.jsx';
// // // import { useFavorites } from '../hooks/useFavorites';

// // // const ITEMS_PER_PAGE = 6;

// // // // ADDED FULL ADDRESS FOR REST API GEOCODING
// // // const SELL_PROPERTIES = [
// // //   { id: 1, title: 'Serenity Heights Luxury House', city: 'Bengaluru', price: 10000000, priceLabel: '1Cr', type: 'Luxury House', beds: 8, baths: 2.5, area: 410, img: 'https://i.pinimg.com/1200x/e8/3d/90/e83d903b5420208624410c9e5ad6dc39.jpg', desc: 'Luxurious house with modern amenities.', address: 'Koramangala, Bengaluru, Karnataka, India' },
// // //   { id: 2, title: 'Emerald Bay Luxury House', city: 'Haryana', price: 10000000, priceLabel: '1Cr', type: 'Luxury House', beds: 5, baths: 2.5, area: 510, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Elegant luxury house with spacious interiors.', address: 'Gurgaon, Haryana, India' },
// // //   { id: 3, title: 'Oceanfront Villa', city: 'Goa', price: 85000000, priceLabel: '8.5Cr', type: 'Villa', beds: 6, baths: 4, area: 4500, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private beach access.', address: 'Calangute Beach, Goa, India' },
// // //   { id: 4, title: 'Hilltop Mansion', city: 'Shimla', price: 120000000, priceLabel: '12Cr', type: 'Mansion', beds: 10, baths: 6, area: 8000, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Panoramic mountain views.', address: 'Mall Road, Shimla, Himachal Pradesh, India' },
// // //   { id: 5, title: 'Royal Heritage Palace', city: 'Jaipur', price: 200000000, priceLabel: '20Cr', type: 'Palace', beds: 15, baths: 10, area: 12000, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Restored royal residence.', address: 'Civil Lines, Jaipur, Rajasthan, India' },
// // //   { id: 6, title: 'Modern Penthouse', city: 'Mumbai', price: 150000000, priceLabel: '15Cr', type: 'Penthouse', beds: 5, baths: 4, area: 5000, img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400', desc: '360° city skyline.', address: 'Bandra West, Mumbai, Maharashtra, India' },
// // //   { id: 7, title: 'Lakeview Farmhouse', city: 'Lonavala', price: 55000000, priceLabel: '5.5Cr', type: 'Farmhouse', beds: 7, baths: 5, area: 6000, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Organic farm included.', address: 'Lonavala, Pune, Maharashtra, India' },
// // //   { id: 8, title: 'Beach Cottage', city: 'Pondicherry', price: 35000000, priceLabel: '3.5Cr', type: 'Cottage', beds: 4, baths: 3, area: 2500, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'French colonial style.', address: 'White Town, Pondicherry, India' },
// // //   { id: 9, title: 'Golf Course Villa', city: 'Gurgaon', price: 90000000, priceLabel: '9Cr', type: 'Villa', beds: 6, baths: 5, area: 4800, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Direct golf course access.', address: 'DLF Phase 2, Gurgaon, Haryana, India' },
// // //   { id: 10, title: 'Eco-Friendly Bungalow', city: 'Coorg', price: 65000000, priceLabel: '6.5Cr', type: 'Bungalow', beds: 5, baths: 4, area: 3800, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Solar-powered, green living.', address: 'Madikeri, Coorg, Karnataka, India' },
// // //   { id: 11, title: 'Riverside Retreat', city: 'Rishikesh', price: 45000000, priceLabel: '4.5Cr', type: 'Retreat', beds: 6, baths: 4, area: 4200, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Yoga & meditation center.', address: 'Laxman Jhula, Rishikesh, Uttarakhand, India' },
// // //   { id: 12, title: 'Desert Oasis Villa', city: 'Jaisalmer', price: 70000000, priceLabel: '7Cr', type: 'Villa', beds: 5, baths: 4, area: 4000, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Traditional Rajasthani architecture.', address: 'Jaisalmer Fort, Jaisalmer, Rajasthan, India' },
// // //   { id: 13, title: 'Smart Home Duplex', city: 'Hyderabad', price: 80000000, priceLabel: '8Cr', type: 'Duplex', beds: 5, baths: 4, area: 3500, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Fully automated.', address: 'Banjara Hills, Hyderabad, Telangana, India' },
// // //   { id: 14, title: 'Vineyard Estate', city: 'Nashik', price: 95000000, priceLabel: '9.5Cr', type: 'Estate', beds: 7, baths: 5, area: 7000, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Includes 5-acre vineyard.', address: 'Gangapur Road, Nashik, Maharashtra, India' },
// // //   { id: 15, title: 'Mountain Lodge', city: 'Manali', price: 60000000, priceLabel: '6Cr', type: 'Lodge', beds: 8, baths: 6, area: 5000, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Ski-in/ski-out.', address: 'Old Manali, Manali, Himachal Pradesh, India' },
// // //   { id: 16, title: 'Heritage Haveli', city: 'Udaipur', price: 110000000, priceLabel: '11Cr', type: 'Haveli', beds: 9, baths: 7, area: 6500, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Lake Pichola view.', address: 'Lake Pichola, Udaipur, Rajasthan, India' },
// // //   { id: 17, title: 'Tech Villa', city: 'Pune', price: 85000000, priceLabel: '8.5Cr', type: 'Villa', beds: 5, baths: 4, area: 4200, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'AI-integrated home.', address: 'Koregaon Park, Pune, Maharashtra, India' },
// // //   { id: 18, title: 'Forest Cabin', city: 'Munnar', price: 40000000, priceLabel: '4Cr', type: 'Cabin', beds: 4, baths: 3, area: 2800, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Tea estate surroundings.', address: 'Munnar, Kerala, India' },
// // //   { id: 19, title: 'Palace Suite', city: 'Mysore', price: 130000000, priceLabel: '13Cr', type: 'Suite', beds: 6, baths: 5, area: 5500, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Royal palace conversion.', address: 'Chamundi Hills, Mysore, Karnataka, India' },
// // //   { id: 20, title: 'Island Villa', city: 'Andaman', price: 90000000, priceLabel: '9Cr', type: 'Villa', beds: 5, baths: 4, area: 3800, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private island access.', address: 'Havelock Island, Andaman and Nicobar Islands, India' },
// // //   { id: 21, title: 'Wellness Retreat', city: 'Kerala', price: 75000000, priceLabel: '7.5Cr', type: 'Retreat', beds: 10, baths: 8, area: 6000, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Ayurveda center.', address: 'Kumarakom, Kerala, India' },
// // //   { id: 22, title: 'Art Deco Mansion', city: 'Kolkata', price: 100000000, priceLabel: '10Cr', type: 'Mansion', beds: 7, baths: 5, area: 5200, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Vintage charm.', address: 'Alipore, Kolkata, West Bengal, India' },
// // //   { id: 23, title: 'Floating Villa', city: 'Alleppey', price: 65000000, priceLabel: '6.5Cr', type: 'Villa', beds: 4, baths: 3, area: 3000, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Houseboat luxury.', address: 'Alleppey Backwaters, Kerala, India' },
// // //   { id: 24, title: 'Sky Villa', city: 'Delhi', price: 140000000, priceLabel: '14Cr', type: 'Villa', beds: 6, baths: 5, area: 4800, img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400', desc: 'Helipad included.', address: 'Greater Kailash, Delhi, India' },
// // // ];

// // // const formatINR = (n) => {
// // //   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
// // // };

// // // export default function SellPage() {
// // //   const navigate = useNavigate();
// // //   const [properties] = useState(SELL_PROPERTIES);
// // //   const { favorites, isFavorite, toggleFavorite } = useFavorites();

// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [selectedProp, setSelectedProp] = useState(null);
// // //   const [showDetail, setShowDetail] = useState(false);
// // //   const [showContact, setShowContact] = useState(false);
// // //   const [showFavorites, setShowFavorites] = useState(false);
// // //   const [showMap, setShowMap] = useState(false);
// // //   const [mapUrl, setMapUrl] = useState('');
// // //   const [mapLoading, setMapLoading] = useState(false);

// // //   const qLocation = useRef('');
// // //   const qType = useRef('');
// // //   const qPrice = useRef('');
// // //   const qBeds = useRef(0);

// // //   // SAME MAP FUNCTION AS BUYSell (FIXED)
// // //   const loadMap = async (address) => {
// // //     setMapLoading(true);
// // //     try {
// // //       const res = await fetch(
// // //         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`,
// // //         {
// // //           headers: {
// // //             'User-Agent': 'UrbanNest360/1.0'
// // //           }
// // //         }
// // //       );
// // //       const data = await res.json();

// // //       if (data && data[0]) {
// // //         const lat = Number(data[0].lat);
// // //         const lon = Number(data[0].lon);

// // //         if (!isNaN(lat) && !isNaN(lon)) {
// // //           const bbox = `${lon - 0.01},${lat - 0.01},${lon + 0.01},${lat + 0.01}`;
// // //           const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
// // //           setMapUrl(embedUrl);
// // //           setShowMap(true);
// // //         } else {
// // //           alert("Invalid coordinates.");
// // //         }
// // //       } else {
// // //         alert("Location not found.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Map Error:", error);
// // //       alert("Failed to load map.");
// // //     } finally {
// // //       setMapLoading(false);
// // //     }
// // //   };

// // //   const matchFilters = (p) => {
// // //     const loc = qLocation.current.toLowerCase();
// // //     const type = qType.current.toLowerCase();
// // //     const price = qPrice.current;
// // //     const beds = parseInt(qBeds.current || '0', 10);

// // //     if (loc && !p.city.toLowerCase().includes(loc)) return false;
// // //     if (type && p.type.toLowerCase() !== type) return false;
// // //     if (price && p.priceLabel !== price) return false;
// // //     if (beds && p.beds !== beds) return false;
// // //     return true;
// // //   };

// // //   const filtered = properties.filter(matchFilters);
// // //   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
// // //   const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
// // //   const favoriteProperties = filtered.filter(p => isFavorite(p.id));

// // //   const openDetail = (prop) => { setSelectedProp(prop); setShowDetail(true); };
// // //   const closeDetail = () => { setShowDetail(false); setSelectedProp(null); };
// // //   const openContact = () => { closeDetail(); setShowContact(true); };
// // //   const closeContact = () => setShowContact(false);
// // //   const openFavorites = () => setShowFavorites(true);
// // //   const closeFavorites = () => setShowFavorites(false);
// // //   const closeMap = () => setShowMap(false);

// // //   const handleSearch = (e) => { e.preventDefault(); setCurrentPage(1); };

// // //   return (
// // //     <>
// // //       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
// // //       <style jsx>{`
// // //         body { font-family: 'Inter', sans-serif; }
// // //         .card:hover { transform: scale(1.03); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }
// // //       `}</style>

// // //       <div className="min-h-screen bg-[#f5f5f5] text-slate-800">
// // //         {/* Navbar */}
// // //         <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-6 md:mx-10 px-4 sm:px-6 md:px-10 py-4 bg-white shadow-sm">
// // //           <button onClick={() => navigate("/")} className="flex items-center gap-1 text-brand-200 font-semibold mb-4 sm:mb-0">
// // //             <ChevronLeft className="w-5 h-5" /> Back
// // //           </button>
// // //           <h1 className="text-2xl sm:text-3xl font-bold text-brand-200">UrbanNest 360</h1>
// // //           <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
// // //             <a href="#listings" className="text-white bg-brand-200 px-4 py-2 rounded-full hover:bg-brand-100 transition text-sm">Browse Homes</a>
// // //             <button onClick={openFavorites} className="text-white bg-brand-200 px-4 py-2 rounded-full hover:bg-brand-100 transition text-sm flex items-center gap-1">
// // //               <Heart className="w-4 h-4 fill-red-500 text-red-500" /> Favorites ({favorites.length})
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Hero */}
// // //         <section className="relative isolate overflow-hidden">
// // //           <div className="absolute inset-0 -z-10">
// // //             <img src="him.jpg" alt="Luxury" className="h-full w-full object-cover" />
// // //             <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
// // //           </div>
// // //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
// // //             <div className="relative z-10 px-4 text-center">
// // //               <h1 className="text-5xl font-bold mb-4 drop-shadow-xl">SELL YOUR DREAM HOME</h1>
// // //               <p className="text-lg max-w-xl mx-auto drop-shadow-lg">
// // //                 List your luxury property. Reach verified buyers. Close faster.
// // //               </p>
// // //             </div>
// // //             <div className="mt-6 bg-white/90 backdrop-blur rounded-2xl shadow-soft p-3 sm:p-4">
// // //               <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
// // //                 <div>
// // //                   <label className="text-xs font-semibold text-slate-500">Location</label>
// // //                   <input type="text" placeholder="City or area" onChange={(e) => qLocation.current = e.target.value} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" />
// // //                 </div>
// // //                 <div>
// // //                   <label className="text-xs font-semibold text-slate-500">Type</label>
// // //                   <select onChange={(e) => qType.current = e.target.value} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2">
// // //                     <option value="">Any</option>
// // //                     <option>Luxury House</option>
// // //                     <option>Villa</option>
// // //                     <option>Mansion</option>
// // //                     <option>Penthouse</option>
// // //                   </select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="text-xs font-semibold text-slate-500">Price</label>
// // //                   <select onChange={(e) => qPrice.current = e.target.value} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2">
// // //                     <option value="">Any</option>
// // //                     <option>1Cr</option>
// // //                     <option>5Cr</option>
// // //                     <option>10Cr</option>
// // //                     <option>15Cr</option>
// // //                   </select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="text-xs font-semibold text-slate-500">Beds</label>
// // //                   <select onChange={(e) => qBeds.current = e.target.value} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2">
// // //                     <option value="">Any</option>
// // //                     <option>4</option>
// // //                     <option>5</option>
// // //                     <option>6</option>
// // //                     <option>7</option>
// // //                   </select>
// // //                 </div>
// // //                 <div className="flex items-end">
// // //                   <button type="submit" className="w-full rounded-xl bg-brand-200 hover:bg-brand-100 text-white font-semibold py-2.5">Search</button>
// // //                 </div>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Listings */}
// // //         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="listings">
// // //           <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
// // //             {paginated.map(p => (
// // //               <article key={p.id} className="card group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-soft transition-all">
// // //                 <div className="relative">
// // //                   <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
// // //                   <div className="absolute top-3 left-3 flex gap-2 text-xs">
// // //                     <span className="px-2.5 py-1 rounded-full bg-white/90 border">{p.type}</span>
// // //                     <span className="px-2.5 py-1 rounded-full bg-white/90 border">{p.beds} Beds</span>
// // //                   </div>
// // //                   <button onClick={() => toggleFavorite(p.id)} className="absolute top-3 right-3 p-1.5 bg-white/90 rounded-full">
// // //                     <Heart className={`w-4 h-4 ${isFavorite(p.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
// // //                   </button>
// // //                   <button onClick={() => openDetail(p)} className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-brand-200 text-white text-xs hover:bg-brand-100">View</button>
// // //                 </div>
// // //                 <div className="p-4">
// // //                   <h3 className="font-bold text-slate-900">{p.title}</h3>
// // //                   <p className="text-sm text-slate-600">{p.city} • {p.area} sqft</p>
// // //                   <div className="mt-2 flex items-center justify-between">
// // //                     <div className="text-lg font-extrabold">{formatINR(p.price)}</div>
// // //                     <div className="text-xs text-slate-600">{p.priceLabel}</div>
// // //                   </div>
// // //                 </div>
// // //               </article>
// // //             ))}
// // //           </div>

// // //           <div className="mt-8 flex justify-center gap-2">
// // //             <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-3 py-1.5 border rounded-lg disabled:opacity-50">Prev</button>
// // //             {Array.from({ length: totalPages }, (_, i) => (
// // //               <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1.5 border rounded-lg ${currentPage === i + 1 ? 'bg-brand-200 text-white' : ''}`}>{i + 1}</button>
// // //             ))}
// // //             <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-3 py-1.5 border rounded-lg disabled:opacity-50">Next</button>
// // //           </div>
// // //         </main>

// // //         {/* Detail Modal */}
// // //         {showDetail && selectedProp && (
// // //           <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-4 z-50" onClick={closeDetail}>
// // //             <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
// // //               <div className="flex items-start justify-between p-4 border-b">
// // //                 <h3 className="text-lg font-bold">{selectedProp.title}</h3>
// // //                 <button onClick={closeDetail} className="text-slate-500 text-2xl">×</button>
// // //               </div>
// // //               <div className="grid md:grid-cols-2 gap-4 p-4">
// // //                 <div>
// // //                   <img src={selectedProp.img} alt="" className="w-full h-64 object-cover rounded-xl" />
// // //                   <div className="mt-3 flex flex-wrap gap-2 text-xs">
// // //                     {['Gated', 'Pool', 'Gym'].map(t => (
// // //                       <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100 border text-slate-700">{t}</span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //                 <div className="space-y-3">
// // //                   <div className="text-2xl font-extrabold">{formatINR(selectedProp.price)}</div>
// // //                   <div className="text-sm text-slate-600">{selectedProp.type} • {selectedProp.beds} Beds • {selectedProp.area} sqft • {selectedProp.city}</div>
// // //                   <p className="text-sm">{selectedProp.desc}</p>
// // //                   <button onClick={openContact} className="w-full rounded-lg bg-brand-200 text-white font-semibold py-2 hover:bg-brand-100">Contact Agent</button>
// // //                   <button 
// // //                     onClick={() => loadMap(selectedProp.address)} 
// // //                     className="w-full rounded-lg bg-[#606C38] text-white font-semibold py-2 hover:bg-[#4a552c] flex items-center justify-center gap-2"
// // //                   >
// // //                     <MapPin className="w-4 h-4" /> Show Map
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* MAP MODAL - SAME AS BUYSell */}
// // //         {showMap && (
// // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={closeMap}>
// // //             <div className="bg-white rounded-2xl w-full max-w-4xl h-[70vh] flex flex-col" onClick={e => e.stopPropagation()}>
// // //               <div className="flex items-center justify-between p-4 border-b">
// // //                 <h3 className="text-lg font-bold">Property Location</h3>
// // //                 <button onClick={closeMap} className="text-2xl">×</button>
// // //               </div>
// // //               <div className="flex-1 p-4">
// // //                 {mapLoading ? (
// // //                   <div className="flex items-center justify-center h-full">
// // //                     <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-brand-200"></div>
// // //                   </div>
// // //                 ) : (
// // //                   <iframe
// // //                     src={mapUrl}
// // //                     className="w-full h-full rounded-lg border-0"
// // //                     allowFullScreen
// // //                     loading="lazy"
// // //                     title="Property Map"
// // //                   />
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Favorites Modal */}
// // //         {showFavorites && (
// // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
// // //             <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6">
// // //               <div className="flex justify-between items-center mb-4">
// // //                 <h2 className="text-2xl font-bold text-brand-200">My Favorites ({favoriteProperties.length})</h2>
// // //                 <button onClick={closeFavorites} className="text-2xl">×</button>
// // //               </div>
// // //               {favoriteProperties.length === 0 ? (
// // //                 <p className="text-center text-gray-500 py-8">No favorites yet.</p>
// // //               ) : (
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                   {favoriteProperties.map(p => (
// // //                     <div key={p.id} className="border rounded-xl p-4 flex gap-4">
// // //                       <img src={p.img} alt="" className="w-24 h-24 object-cover rounded-lg" />
// // //                       <div className="flex-1">
// // //                         <h3 className="font-semibold text-sm">{p.title}</h3>
// // //                         <p className="text-xs text-gray-600">{p.city} • {p.area} sqft</p>
// // //                         <p className="font-bold text-sm">{formatINR(p.price)}</p>
// // //                         <button onClick={() => toggleFavorite(p.id)} className="text-red-500 text-xs mt-2">Remove</button>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {showContact && <PropertyModal onClose={closeContact} />}
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // // src/pages/SellPage.jsx
// // // import { useState, useRef } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Heart, X, ChevronLeft, MapPin } from "lucide-react";
// // // import PropertyModal from '../components/PropertyModal.jsx';
// // // import { useFavorites } from '../hooks/useFavorites';

// // // const ITEMS_PER_PAGE = 6;

// // // const SELL_PROPERTIES = [
// // //   { id: 1, title: 'Serenity Heights Luxury House', city: 'Bengaluru', price: 10000000, priceLabel: '1Cr', type: 'Luxury House', beds: 8, baths: 2.5, area: 410, img: 'https://i.pinimg.com/1200x/e8/3d/90/e83d903b5420208624410c9e5ad6dc39.jpg', desc: 'Luxurious house with modern amenities.', address: 'Koramangala, Bengaluru, Karnataka, India' },
// // //   { id: 2, title: 'Emerald Bay Luxury House', city: 'Haryana', price: 10000000, priceLabel: '1Cr', type: 'Luxury House', beds: 5, baths: 2.5, area: 510, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Elegant luxury house with spacious interiors.', address: 'Gurgaon, Haryana, India' },
// // //   { id: 3, title: 'Oceanfront Villa', city: 'Goa', price: 85000000, priceLabel: '8.5Cr', type: 'Villa', beds: 6, baths: 4, area: 4500, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private beach access.', address: 'Calangute Beach, Goa, India' },
// // //   { id: 4, title: 'Hilltop Mansion', city: 'Shimla', price: 120000000, priceLabel: '12Cr', type: 'Mansion', beds: 10, baths: 6, area: 8000, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Panoramic mountain views.', address: 'Mall Road, Shimla, Himachal Pradesh, India' },
// // //   { id: 5, title: 'Royal Heritage Palace', city: 'Jaipur', price: 200000000, priceLabel: '20Cr', type: 'Palace', beds: 15, baths: 10, area: 12000, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Restored royal residence.', address: 'Civil Lines, Jaipur, Rajasthan, India' },
// // //   { id: 6, title: 'Modern Penthouse', city: 'Mumbai', price: 150000000, priceLabel: '15Cr', type: 'Penthouse', beds: 5, baths: 4, area: 5000, img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400', desc: '360° city skyline.', address: 'Bandra West, Mumbai, Maharashtra, India' },
// // //   { id: 7, title: 'Lakeview Farmhouse', city: 'Lonavala', price: 55000000, priceLabel: '5.5Cr', type: 'Farmhouse', beds: 7, baths: 5, area: 6000, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Organic farm included.', address: 'Lonavala, Pune, Maharashtra, India' },
// // //   { id: 8, title: 'Beach Cottage', city: 'Pondicherry', price: 35000000, priceLabel: '3.5Cr', type: 'Cottage', beds: 4, baths: 3, area: 2500, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'French colonial style.', address: 'White Town, Pondicherry, India' },
// // //   { id: 9, title: 'Golf Course Villa', city: 'Gurgaon', price: 90000000, priceLabel: '9Cr', type: 'Villa', beds: 6, baths: 5, area: 4800, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Direct golf course access.', address: 'DLF Phase 2, Gurgaon, Haryana, India' },
// // //   { id: 10, title: 'Eco-Friendly Bungalow', city: 'Coorg', price: 65000000, priceLabel: '6.5Cr', type: 'Bungalow', beds: 5, baths: 4, area: 3800, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Solar-powered, green living.', address: 'Madikeri, Coorg, Karnataka, India' },
// // //   { id: 11, title: 'Riverside Retreat', city: 'Rishikesh', price: 45000000, priceLabel: '4.5Cr', type: 'Retreat', beds: 6, baths: 4, area: 4200, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Yoga & meditation center.', address: 'Laxman Jhula, Rishikesh, Uttarakhand, India' },
// // //   { id: 12, title: 'Desert Oasis Villa', city: 'Jaisalmer', price: 70000000, priceLabel: '7Cr', type: 'Villa', beds: 5, baths: 4, area: 4000, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Traditional Rajasthani architecture.', address: 'Jaisalmer Fort, Jaisalmer, Rajasthan, India' },
// // //   { id: 13, title: 'Smart Home Duplex', city: 'Hyderabad', price: 80000000, priceLabel: '8Cr', type: 'Duplex', beds: 5, baths: 4, area: 3500, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Fully automated.', address: 'Banjara Hills, Hyderabad, Telangana, India' },
// // //   { id: 14, title: 'Vineyard Estate', city: 'Nashik', price: 95000000, priceLabel: '9.5Cr', type: 'Estate', beds: 7, baths: 5, area: 7000, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Includes 5-acre vineyard.', address: 'Gangapur Road, Nashik, Maharashtra, India' },
// // //   { id: 15, title: 'Mountain Lodge', city: 'Manali', price: 60000000, priceLabel: '6Cr', type: 'Lodge', beds: 8, baths: 6, area: 5000, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Ski-in/ski-out.', address: 'Old Manali, Manali, Himachal Pradesh, India' },
// // //   { id: 16, title: 'Heritage Haveli', city: 'Udaipur', price: 110000000, priceLabel: '11Cr', type: 'Haveli', beds: 9, baths: 7, area: 6500, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Lake Pichola view.', address: 'Lake Pichola, Udaipur, Rajasthan, India' },
// // //   { id: 17, title: 'Tech Villa', city: 'Pune', price: 85000000, priceLabel: '8.5Cr', type: 'Villa', beds: 5, baths: 4, area: 4200, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'AI-integrated home.', address: 'Koregaon Park, Pune, Maharashtra, India' },
// // //   { id: 18, title: 'Forest Cabin', city: 'Munnar', price: 40000000, priceLabel: '4Cr', type: 'Cabin', beds: 4, baths: 3, area: 2800, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Tea estate surroundings.', address: 'Munnar, Kerala, India' },
// // //   { id: 19, title: 'Palace Suite', city: 'Mysore', price: 130000000, priceLabel: '13Cr', type: 'Suite', beds: 6, baths: 5, area: 5500, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Royal palace conversion.', address: 'Chamundi Hills, Mysore, Karnataka, India' },
// // //   { id: 20, title: 'Island Villa', city: 'Andaman', price: 90000000, priceLabel: '9Cr', type: 'Villa', beds: 5, baths: 4, area: 3800, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private island access.', address: 'Havelock Island, Andaman and Nicobar Islands, India' },
// // //   { id: 21, title: 'Wellness Retreat', city: 'Kerala', price: 75000000, priceLabel: '7.5Cr', type: 'Retreat', beds: 10, baths: 8, area: 6000, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Ayurveda center.', address: 'Kumarakom, Kerala, India' },
// // //   { id: 22, title: 'Art Deco Mansion', city: 'Kolkata', price: 100000000, priceLabel: '10Cr', type: 'Mansion', beds: 7, baths: 5, area: 5200, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Vintage charm.', address: 'Alipore, Kolkata, West Bengal, India' },
// // //   { id: 23, title: 'Floating Villa', city: 'Alleppey', price: 65000000, priceLabel: '6.5Cr', type: 'Villa', beds: 4, baths: 3, area: 3000, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Houseboat luxury.', address: 'Alleppey Backwaters, Kerala, India' },
// // //   { id: 24, title: 'Sky Villa', city: 'Delhi', price: 140000000, priceLabel: '14Cr', type: 'Villa', beds: 6, baths: 5, area: 4800, img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400', desc: 'Helipad included.', address: 'Greater Kailash, Delhi, India' },
// // // ];

// // // const formatINR = (n) => {
// // //   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
// // // };

// // // export default function SellPage() {
// // //   const navigate = useNavigate();
// // //   const [properties] = useState(SELL_PROPERTIES);
// // //   const { favorites, isFavorite, toggleFavorite } = useFavorites();

// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [selectedProp, setSelectedProp] = useState(null);
// // //   const [showDetail, setShowDetail] = useState(false);
// // //   const [showContact, setShowContact] = useState(false);
// // //   const [showFavorites, setShowFavorites] = useState(false);
// // //   const [showMap, setShowMap] = useState(false);
// // //   const [mapUrl, setMapUrl] = useState('');
// // //   const [mapLoading, setMapLoading] = useState(false);

// // //   const qLocation = useRef('');
// // //   const qType = useRef('');
// // //   const qPrice = useRef('');
// // //   const qBeds = useRef(0);

// // //   // MAP FUNCTION — SAME AS BUYSell
// // //   const loadMap = async (address) => {
// // //     setMapLoading(true);
// // //     try {
// // //       const res = await fetch(
// // //         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`,
// // //         {
// // //           headers: { 'User-Agent': 'UrbanNest360/1.0' }
// // //         }
// // //       );
// // //       const data = await res.json();

// // //       if (data && data[0]) {
// // //         const lat = Number(data[0].lat);
// // //         const lon = Number(data[0].lon);

// // //         if (!isNaN(lat) && !isNaN(lon)) {
// // //           const bbox = `${lon - 0.01},${lat - 0.01},${lon + 0.01},${lat + 0.01}`;
// // //           const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
// // //           setMapUrl(embedUrl);
// // //           setShowMap(true);
// // //         } else {
// // //           alert("Invalid coordinates.");
// // //         }
// // //       } else {
// // //         alert("Location not found.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Map Error:", error);
// // //       alert("Failed to load map.");
// // //     } finally {
// // //       setMapLoading(false);
// // //     }
// // //   };

// // //   const matchFilters = (p) => {
// // //     const loc = qLocation.current.toLowerCase();
// // //     const type = qType.current.toLowerCase();
// // //     const price = qPrice.current;
// // //     const beds = parseInt(qBeds.current || '0', 10);

// // //     if (loc && !p.city.toLowerCase().includes(loc)) return false;
// // //     if (type && p.type.toLowerCase() !== type) return false;
// // //     if (price && p.priceLabel !== price) return false;
// // //     if (beds && p.beds !== beds) return false;
// // //     return true;
// // //   };

// // //   const filtered = properties.filter(matchFilters);
// // //   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
// // //   const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
// // //   const favoriteProperties = filtered.filter(p => isFavorite(p.id));

// // //   const openDetail = (prop) => { 
// // //     setSelectedProp(prop); 
// // //     setShowDetail(true); 
// // //   };
// // //   const closeDetail = () => { 
// // //     setShowDetail(false); 
// // //     setSelectedProp(null); 
// // //   };
// // //   const openContact = () => { 
// // //     closeDetail(); 
// // //     setShowContact(true); 
// // //   };
// // //   const closeContact = () => setShowContact(false);
// // //   const openFavorites = () => setShowFavorites(true);
// // //   const closeFavorites = () => setShowFavorites(false);
// // //   const closeMap = () => setShowMap(false);

// // //   const handleSearch = (e) => { 
// // //     e.preventDefault(); 
// // //     setCurrentPage(1); 
// // //   };

// // //   return (
// // //     <>
// // //       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
// // //       <style jsx>{`
// // //         body { font-family: 'Inter', sans-serif; }
// // //         .card:hover { transform: translateY(-4px); }
// // //       `}</style>

// // //       <div className="min-h-screen bg-[#a4ac86] text-slate-800">
// // //         {/* NAVBAR */}
// // //         <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-6 md:mx-10 px-4 sm:px-6 md:px-10 py-4 bg-white/80 backdrop-blur sticky top-0 z-50 shadow">
// // //           <button onClick={() => navigate("/")} className="flex items-center gap-1 text-[#582F0E] font-semibold hover:text-[#3d1f08]">
// // //             <ChevronLeft className="w-5 h-5" /> Back to Home
// // //           </button>
// // //           <h1 className="text-2xl sm:text-3xl font-bold">UrbanNest360</h1>
// // //           <div className="flex gap-3">
// // //             <a href="#listings" className="text-white bg-black px-4 py-2 rounded-full text-sm">Browse Homes</a>
// // //             <button onClick={openFavorites} className="text-white bg-black px-4 py-2 rounded-full text-sm flex items-center gap-1">
// // //               <Heart className="w-4 h-4 fill-red-500 text-red-500" /> Favorites ({favorites.length})
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* HERO */}
// // //         <section className="relative isolate overflow-hidden">
// // //           <div className="absolute inset-0 -z-10">
// // //             <img src="him.jpg" alt="Luxury" className="h-full w-full object-cover" />
// // //             <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
// // //           </div>
// // //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
// // //             <div className="relative z-10 px-4 text-center">
// // //               <h1 className="text-5xl font-bold mb-4 drop-shadow-xl">SELL YOUR DREAM HOME</h1>
// // //               <p className="text-lg max-w-xl mx-auto drop-shadow-lg">
// // //                 List your luxury property. Reach verified buyers. Close faster.
// // //               </p>
// // //             </div>
// // //             <div className="mt-6 bg-white/90 backdrop-blur rounded-2xl shadow-soft p-3 sm:p-4">
// // //               <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
// // //                 <div>
// // //                   <label className="text-xs font-semibold text-slate-500">Location</label>
// // //                   <input type="text" placeholder="City or area" onChange={(e) => qLocation.current = e.target.value} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" />
// // //                 </div>
// // //                 <div>
// // //                   <label className="text-xs font-semibold text-slate-500">Type</label>
// // //                   <select onChange={(e) => qType.current = e.target.value} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2">
// // //                     <option value="">Any</option>
// // //                     <option>Luxury House</option>
// // //                     <option>Villa</option>
// // //                     <option>Mansion</option>
// // //                     <option>Penthouse</option>
// // //                   </select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="text-xs font-semibold text-slate-500">Price</label>
// // //                   <select onChange={(e) => qPrice.current = e.target.value} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2">
// // //                     <option value="">Any</option>
// // //                     <option>1Cr</option>
// // //                     <option>5Cr</option>
// // //                     <option>10Cr</option>
// // //                     <option>15Cr</option>
// // //                   </select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="text-xs font-semibold text-slate-500">Beds</label>
// // //                   <select onChange={(e) => qBeds.current = e.target.value} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2">
// // //                     <option value="">Any</option>
// // //                     <option>4</option>
// // //                     <option>5</option>
// // //                     <option>6</option>
// // //                     <option>7</option>
// // //                   </select>
// // //                 </div>
// // //                 <div className="flex items-end">
// // //                   <button type="submit" className="w-full rounded-xl bg-[#582F0E] hover:bg-[#3d1f08] text-white font-semibold py-2.5">Search</button>
// // //                 </div>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* LISTINGS */}
// // //         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="listings">
// // //           <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
// // //             {paginated.map(p => (
// // //               <article key={p.id} className="card group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-soft transition-transform">
// // //                 <div className="relative">
// // //                   <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
// // //                   <div className="absolute top-3 left-3 flex gap-2 text-xs">
// // //                     <span className="px-2.5 py-1 rounded-full bg-white/90 border">{p.type}</span>
// // //                     <span className="px-2.5 py-1 rounded-full bg-white/90 border">{p.beds} Beds</span>
// // //                   </div>
// // //                   <button onClick={() => toggleFavorite(p.id)} className="absolute top-3 right-3 p-1.5 bg-white/90 rounded-full">
// // //                     <Heart className={`w-4 h-4 ${isFavorite(p.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
// // //                   </button>
// // //                   <button onClick={() => openDetail(p)} className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#582F0E] text-white text-xs hover:bg-[#3d1f08]">View</button>
// // //                 </div>
// // //                 <div className="p-4">
// // //                   <h3 className="font-bold text-slate-900">{p.title}</h3>
// // //                   <p className="text-sm text-slate-600">{p.city} • {p.area} sqft</p>
// // //                   <div className="mt-2 flex items-center justify-between">
// // //                     <div className="text-lg font-extrabold">{formatINR(p.price)}</div>
// // //                     <div className="text-xs text-slate-600">{p.priceLabel}</div>
// // //                   </div>
// // //                 </div>
// // //               </article>
// // //             ))}
// // //           </div>

// // //           <div className="mt-8 flex justify-center gap-2">
// // //             <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-3 py-1.5 border rounded-lg disabled:opacity-50">Prev</button>
// // //             {Array.from({ length: totalPages }, (_, i) => (
// // //               <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1.5 border rounded-lg ${currentPage === i + 1 ? 'bg-slate-900 text-white' : ''}`}>{i + 1}</button>
// // //             ))}
// // //             <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-3 py-1.5 border rounded-lg disabled:opacity-50">Next</button>
// // //           </div>
// // //         </main>

// // //         {/* DETAIL MODAL — 100% SAME AS BUYSell */}
// // //         {showDetail && selectedProp && (
// // //           <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-4 z-50" onClick={closeDetail}>
// // //             <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
// // //               <div className="flex items-start justify-between p-4 border-b">
// // //                 <h3 className="text-lg font-bold">{selectedProp.title}</h3>
// // //                 <button onClick={closeDetail} className="text-slate-500 text-2xl">×</button>
// // //               </div>
// // //               <div className="grid md:grid-cols-2 gap-4 p-4">
// // //                 <div>
// // //                   <img src={selectedProp.img} alt="" className="w-full h-64 object-cover rounded-xl" />
// // //                   <div className="mt-3 flex flex-wrap gap-2 text-xs">
// // //                     {['Near metro', 'Gated security', 'Pet friendly'].map(t => (
// // //                       <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100 border text-slate-700">{t}</span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //                 <div className="space-y-3">
// // //                   <div className="text-2xl font-extrabold">{formatINR(selectedProp.price)}</div>
// // //                   <div className="text-sm text-slate-600">{selectedProp.type} • {selectedProp.beds} Beds • {selectedProp.area} sqft • {selectedProp.city}</div>
// // //                   <p className="text-sm">{selectedProp.desc}</p>
// // //                   <button onClick={openContact} className="w-full rounded-lg bg-[#283618] text-white font-semibold py-2 hover:bg-[#1a2210]">Contact Owner</button>
// // //                   <button 
// // //                     onClick={() => loadMap(selectedProp.address)} 
// // //                     className="w-full rounded-lg bg-[#606C38] text-white font-semibold py-2 hover:bg-[#4a552c] flex items-center justify-center gap-2"
// // //                   >
// // //                     <MapPin className="w-4 h-4" /> Show Map
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* MAP MODAL */}
// // //         {showMap && (
// // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={closeMap}>
// // //             <div className="bg-white rounded-2xl w-full max-w-4xl h-[70vh] flex flex-col" onClick={e => e.stopPropagation()}>
// // //               <div className="flex items-center justify-between p-4 border-b">
// // //                 <h3 className="text-lg font-bold">Property Location</h3>
// // //                 <button onClick={closeMap} className="text-2xl">×</button>
// // //               </div>
// // //               <div className="flex-1 p-4">
// // //                 {mapLoading ? (
// // //                   <div className="flex items-center justify-center h-full">
// // //                     <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#582F0E]"></div>
// // //                   </div>
// // //                 ) : (
// // //                   <iframe
// // //                     src={mapUrl}
// // //                     className="w-full h-full rounded-lg border-0"
// // //                     allowFullScreen
// // //                     loading="lazy"
// // //                     title="Property Map"
// // //                   />
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* FAVORITES MODAL */}
// // //         {showFavorites && (
// // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
// // //             <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6">
// // //               <div className="flex justify-between items-center mb-4">
// // //                 <h2 className="text-2xl font-bold text-[#582F0E]">My Favorites ({favoriteProperties.length})</h2>
// // //                 <button onClick={closeFavorites} className="text-2xl">×</button>
// // //               </div>
// // //               {favoriteProperties.length === 0 ? (
// // //                 <p className="text-center text-gray-500 py-8">No favorites yet.</p>
// // //               ) : (
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                   {favoriteProperties.map(p => (
// // //                     <div key={p.id} className="border rounded-xl p-4 flex gap-4">
// // //                       <img src={p.img} alt="" className="w-24 h-24 object-cover rounded-lg" />
// // //                       <div className="flex-1">
// // //                         <h3 className="font-semibold text-sm">{p.title}</h3>
// // //                         <p className="text-xs text-gray-600">{p.city} • {p.area} sqft</p>
// // //                         <p className="font-bold text-sm">{formatINR(p.price)}</p>
// // //                         <button onClick={() => toggleFavorite(p.id)} className="text-red-500 text-xs mt-2">Remove</button>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {showContact && <PropertyModal onClose={closeContact} />}
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // // src/pages/SellPage.jsx
// // // import { useState, useRef } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Heart, MapPin } from "lucide-react";
// // // import PropertyModal from '../components/PropertyModal.jsx';
// // // import { useFavorites } from '../hooks/useFavorites';

// // // const ITEMS_PER_PAGE = 9;

// // // const SELL_PROPERTIES = [
// // //   { id: 1, title: 'Serenity Heights Luxury House', city: 'Bengaluru', price: 100000000, priceLabel: '10Cr', type: 'Luxury House', beds: 8, baths: 6, area: 4100, img: 'https://i.pinimg.com/1200x/e8/3d/90/e83d903b5420208624410c9e5ad6dc39.jpg', desc: 'Luxurious house with modern amenities.', address: 'Koramangala, Bengaluru, Karnataka, India' },
// // //   { id: 2, title: 'Emerald Bay Luxury House', city: 'Gurgaon', price: 100000000, priceLabel: '10Cr', type: 'Luxury House', beds: 5, baths: 5, area: 5100, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Elegant luxury house with spacious interiors.', address: 'Gurgaon, Haryana, India' },
// // //   { id: 3, title: 'Oceanfront Villa', city: 'Goa', price: 85000000, priceLabel: '8.5Cr', type: 'Villa', beds: 6, baths: 4, area: 4500, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private beach access.', address: 'Calangute Beach, Goa, India' },
// // //   { id: 4, title: 'Hilltop Mansion', city: 'Shimla', price: 120000000, priceLabel: '12Cr', type: 'Mansion', beds: 10, baths: 6, area: 8000, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Panoramic mountain views.', address: 'Mall Road, Shimla, Himachal Pradesh, India' },
// // //   { id: 5, title: 'Royal Heritage Palace', city: 'Jaipur', price: 200000000, priceLabel: '20Cr', type: 'Palace', beds: 15, baths: 10, area: 12000, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Restored royal residence.', address: 'Civil Lines, Jaipur, Rajasthan, India' },
// // //   { id: 6, title: 'Modern Penthouse', city: 'Mumbai', price: 150000000, priceLabel: '15Cr', type: 'Penthouse', beds: 5, baths: 4, area: 5000, img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400', desc: '360° city skyline.', address: 'Bandra West, Mumbai, Maharashtra, India' },
// // //   { id: 7, title: 'Lakeview Farmhouse', city: 'Lonavala', price: 55000000, priceLabel: '5.5Cr', type: 'Farmhouse', beds: 7, baths: 5, area: 6000, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Organic farm included.', address: 'Lonavala, Pune, Maharashtra, India' },
// // //   { id: 8, title: 'Beach Cottage', city: 'Pondicherry', price: 35000000, priceLabel: '3.5Cr', type: 'Cottage', beds: 4, baths: 3, area: 2500, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'French colonial style.', address: 'White Town, Pondicherry, India' },
// // //   { id: 9, title: 'Golf Course Villa', city: 'Gurgaon', price: 90000000, priceLabel: '9Cr', type: 'Villa', beds: 6, baths: 5, area: 4800, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Direct golf course access.', address: 'DLF Phase 2, Gurgaon, Haryana, India' },
// // //   { id: 10, title: 'Eco-Friendly Bungalow', city: 'Coorg', price: 65000000, priceLabel: '6.5Cr', type: 'Bungalow', beds: 5, baths: 4, area: 3800, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Solar-powered, green living.', address: 'Madikeri, Coorg, Karnataka, India' },
// // //   { id: 11, title: 'Riverside Retreat', city: 'Rishikesh', price: 45000000, priceLabel: '4.5Cr', type: 'Retreat', beds: 6, baths: 4, area: 4200, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Yoga & meditation center.', address: 'Laxman Jhula, Rishikesh, Uttarakhand, India' },
// // //   { id: 12, title: 'Desert Oasis Villa', city: 'Jaisalmer', price: 70000000, priceLabel: '7Cr', type: 'Villa', beds: 5, baths: 4, area: 4000, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Traditional Rajasthani architecture.', address: 'Jaisalmer Fort, Jaisalmer, Rajasthan, India' },
// // //   { id: 13, title: 'Smart Home Duplex', city: 'Hyderabad', price: 80000000, priceLabel: '8Cr', type: 'Duplex', beds: 5, baths: 4, area: 3500, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Fully automated.', address: 'Banjara Hills, Hyderabad, Telangana, India' },
// // //   { id: 14, title: 'Vineyard Estate', city: 'Nashik', price: 95000000, priceLabel: '9.5Cr', type: 'Estate', beds: 7, baths: 5, area: 7000, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Includes 5-acre vineyard.', address: 'Gangapur Road, Nashik, Maharashtra, India' },
// // //   { id: 15, title: 'Mountain Lodge', city: 'Manali', price: 60000000, priceLabel: '6Cr', type: 'Lodge', beds: 8, baths: 6, area: 5000, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Ski-in/ski-out.', address: 'Old Manali, Manali, Himachal Pradesh, India' },
// // //   { id: 16, title: 'Heritage Haveli', city: 'Udaipur', price: 110000000, priceLabel: '11Cr', type: 'Haveli', beds: 9, baths: 7, area: 6500, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Lake Pichola view.', address: 'Lake Pichola, Udaipur, Rajasthan, India' },
// // //   { id: 17, title: 'Tech Villa', city: 'Pune', price: 85000000, priceLabel: '8.5Cr', type: 'Villa', beds: 5, baths: 4, area: 4200, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'AI-integrated home.', address: 'Koregaon Park, Pune, Maharashtra, India' },
// // //   { id: 18, title: 'Forest Cabin', city: 'Munnar', price: 40000000, priceLabel: '4Cr', type: 'Cabin', beds: 4, baths: 3, area: 2800, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Tea estate surroundings.', address: 'Munnar, Kerala, India' },
// // //   { id: 19, title: 'Palace Suite', city: 'Mysore', price: 130000000, priceLabel: '13Cr', type: 'Suite', beds: 6, baths: 5, area: 5500, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Royal palace conversion.', address: 'Chamundi Hills, Mysore, Karnataka, India' },
// // //   { id: 20, title: 'Island Villa', city: 'Andaman', price: 90000000, priceLabel: '9Cr', type: 'Villa', beds: 5, baths: 4, area: 3800, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private island access.', address: 'Havelock Island, Andaman and Nicobar Islands, India' },
// // //   { id: 21, title: 'Wellness Retreat', city: 'Kerala', price: 75000000, priceLabel: '7.5Cr', type: 'Retreat', beds: 10, baths: 8, area: 6000, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Ayurveda center.', address: 'Kumarakom, Kerala, India' },
// // //   { id: 22, title: 'Art Deco Mansion', city: 'Kolkata', price: 100000000, priceLabel: '10Cr', type: 'Mansion', beds: 7, baths: 5, area: 5200, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Vintage charm.', address: 'Alipore, Kolkata, West Bengal, India' },
// // //   { id: 23, title: 'Floating Villa', city: 'Alleppey', price: 65000000, priceLabel: '6.5Cr', type: 'Villa', beds: 4, baths: 3, area: 3000, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Houseboat luxury.', address: 'Alleppey Backwaters, Kerala, India' },
// // //   { id: 24, title: 'Sky Villa', city: 'Delhi', price: 140000000, priceLabel: '14Cr', type: 'Villa', beds: 6, baths: 5, area: 4800, img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400', desc: 'Helipad included.', address: 'Greater Kailash, Delhi, India' },
// // // ];

// // // const formatINR = (n) => {
// // //   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
// // // };

// // // export default function SellPage() {
// // //   const navigate = useNavigate();
// // //   const [properties] = useState(SELL_PROPERTIES);
// // //   const { favorites, isFavorite, toggleFavorite } = useFavorites();

// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [selectedProp, setSelectedProp] = useState(null);
// // //   const [showDetail, setShowDetail] = useState(false);
// // //   const [showContact, setShowContact] = useState(false);
// // //   const [showFavorites, setShowFavorites] = useState(false);
// // //   const [showMap, setShowMap] = useState(false);
// // //   const [mapUrl, setMapUrl] = useState('');
// // //   const [mapLoading, setMapLoading] = useState(false);

// // //   const qLocation = useRef('');
// // //   const qType = useRef('');
// // //   const qPrice = useRef('');
// // //   const qBeds = useRef(0);

// // //   const loadMap = async (address) => {
// // //     setMapLoading(true);
// // //     try {
// // //       const res = await fetch(
// // //         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`,
// // //         { headers: { 'User-Agent': 'UrbanNest360/1.0' } }
// // //       );
// // //       const data = await res.json();

// // //       if (data && data[0]) {
// // //         const lat = Number(data[0].lat);
// // //         const lon = Number(data[0].lon);
// // //         if (!isNaN(lat) && !isNaN(lon)) {
// // //           const bbox = `${lon - 0.01},${lat - 0.01},${lon + 0.01},${lat + 0.01}`;
// // //           const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
// // //           setMapUrl(embedUrl);
// // //           setShowMap(true);
// // //         } else {
// // //           alert("Invalid coordinates.");
// // //         }
// // //       } else {
// // //         alert("Location not found.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Map Error:", error);
// // //       alert("Failed to load map.");
// // //     } finally {
// // //       setMapLoading(false);
// // //     }
// // //   };

// // //   const matchFilters = (p) => {
// // //     const loc = qLocation.current.toLowerCase();
// // //     const type = qType.current.toLowerCase();
// // //     const price = qPrice.current;
// // //     const beds = parseInt(qBeds.current || '0', 10);

// // //     if (loc && !p.city.toLowerCase().includes(loc)) return false;
// // //     if (type && p.type.toLowerCase() !== type) return false;
// // //     if (price && p.priceLabel !== price) return false;
// // //     if (beds && p.beds !== beds) return false;
// // //     return true;
// // //   };

// // //   const filtered = properties.filter(matchFilters);
// // //   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
// // //   const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
// // //   const favoriteProperties = filtered.filter(p => isFavorite(p.id));

// // //   const openDetail = (prop) => { setSelectedProp(prop); setShowDetail(true); };
// // //   const closeDetail = () => { setShowDetail(false); setSelectedProp(null); };
// // //   const openContact = () => { closeDetail(); setShowContact(true); };
// // //   const closeContact = () => setShowContact(false);
// // //   const openFavorites = () => setShowFavorites(true);
// // //   const closeFavorites = () => setShowFavorites(false);
// // //   const closeMap = () => setShowMap(false);

// // //   const handleSearch = (e) => { e.preventDefault(); setCurrentPage(1); };

// // //   return (
// // //     <>
// // //       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800;900&display=swap" rel="stylesheet" />
// // //       <style jsx>{`
// // //         body { font-family: 'Inter', sans-serif; }
// // //         h1, h2, h3, h4, .font-playfair { font-family: 'Playfair Display', serif; }
// // //         .card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }
// // //       `}</style>

// // //       <div className="min-h-screen bg-gradient-to-br from-[#f1f8e9] to-[#d4e157] text-slate-800">
// // //         {/* NAVBAR - IDENTICAL TO BUYSell */}
// // //         <nav className="bg-white shadow-md sticky top-0 z-50">
// // //           <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
// // //             <button onClick={() => navigate("/")} className="text-[#582F0E] font-medium hover:text-[#3d1f08] transition">
// // //               Back to Home
// // //             </button>
// // //             <div className="flex gap-4">
// // //               <a href="#listings" className="bg-[#283618] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2210] transition">
// // //                 Browse Homes
// // //               </a>
// // //               <button onClick={openFavorites} className="bg-[#606C38] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#4a552c] transition">
// // //                 Favorites ({favorites.length})
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </nav>

// // //         {/* HERO */}
// // //         <section className="relative isolate overflow-hidden">
// // //           <div className="absolute inset-0 -z-10">
// // //             <img src="him.jpg" alt="Luxury" className="h-full w-full object-cover brightness-75" />
// // //             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
// // //           </div>
// // //           <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
// // //             <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl font-playfair">
// // //               Sell Your Dream Property
// // //             </h1>
// // //             <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
// // //               List your luxury home to verified buyers across India.
// // //             </p>
// // //           </div>
// // //         </section>

// // //         {/* LISTINGS */}
// // //         <main className="max-w-7xl mx-auto px-6 py-12" id="listings">
// // //           <div className="flex flex-col lg:flex-row gap-8">
// // //             {/* FILTERS */}
// // //             <aside className="lg:w-72 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 h-max sticky top-28">
// // //               <h3 className="text-xl font-bold text-slate-900 mb-5 font-playfair">Filters</h3>
// // //               <div className="space-y-6 text-sm">
// // //                 <div>
// // //                   <label className="font-semibold text-slate-700">Location</label>
// // //                   <input
// // //                     type="text"
// // //                     placeholder="City or area"
// // //                     onChange={(e) => qLocation.current = e.target.value}
// // //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className="font-semibold text-slate-700">Property Type</label>
// // //                   <select
// // //                     onChange={(e) => qType.current = e.target.value}
// // //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // //                   >
// // //                     <option value="">Any</option>
// // //                     <option>Luxury House</option>
// // //                     <option>Villa</option>
// // //                     <option>Mansion</option>
// // //                     <option>Penthouse</option>
// // //                     <option>Farmhouse</option>
// // //                     <option>Cottage</option>
// // //                   </select>
// // //                 </div>

// // //                 <div>
// // //                   <label className="font-semibold text-slate-700">Price Range</label>
// // //                   <select
// // //                     onChange={(e) => qPrice.current = e.target.value}
// // //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // //                   >
// // //                     <option value="">Any Price</option>
// // //                     <option>1Cr</option>
// // //                     <option>5Cr</option>
// // //                     <option>10Cr</option>
// // //                     <option>15Cr</option>
// // //                     <option>20Cr</option>
// // //                   </select>
// // //                 </div>

// // //                 <div>
// // //                   <label className="font-semibold text-slate-700">Bedrooms</label>
// // //                   <div className="mt-2 flex flex-wrap gap-2">
// // //                     {[4, 5, 6, 7, 8].map(n => (
// // //                       <button
// // //                         key={n}
// // //                         onClick={() => qBeds.current = qBeds.current === n ? 0 : n}
// // //                         className={`px-4 py-1.5 rounded-lg font-medium transition ${qBeds.current === n ? 'bg-[#606C38] text-white' : 'bg-white border border-slate-300'}`}
// // //                       >
// // //                         {n}+
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 <button
// // //                   onClick={handleSearch}
// // //                   className="w-full bg-[#283618] text-white py-2.5 rounded-lg font-medium hover:bg-[#1a2210] transition"
// // //                 >
// // //                   Apply Filters
// // //                 </button>
// // //               </div>
// // //             </aside>

// // //             {/* PROPERTY GRID */}
// // //             <section className="flex-1">
// // //               <div className="flex items-center justify-between mb-6">
// // //                 <p className="text-sm text-slate-600 font-medium">
// // //                   <span className="font-bold text-slate-900 font-playfair">{filtered.length}</span> properties listed
// // //                 </p>
// // //               </div>

// // //               <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
// // //                 {paginated.map(p => (
// // //                   <article key={p.id} className="card group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-slate-200">
// // //                     <div className="relative h-48 overflow-hidden">
// // //                       <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
// // //                       <div className="absolute top-3 left-3 flex gap-2 text-xs font-medium">
// // //                         <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full border">{p.type}</span>
// // //                         <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full border">{p.beds} Bed{p.beds > 1 ? 's' : ''}</span>
// // //                       </div>
// // //                       <button onClick={() => toggleFavorite(p.id)} className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full shadow-md transition">
// // //                         <Heart className={`w-4 h-4 transition ${isFavorite(p.id) ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
// // //                       </button>
// // //                       <button onClick={() => openDetail(p)} className="absolute bottom-3 right-3 px-4 py-1.5 bg-[#582F0E] text-white text-xs font-medium rounded-lg hover:bg-[#3d1f08] transition">
// // //                         View Details
// // //                       </button>
// // //                     </div>
// // //                     <div className="p-5">
// // //                       <h3 className="font-bold text-lg text-slate-900 line-clamp-1 font-playfair">{p.title}</h3>
// // //                       <p className="text-sm text-slate-600 mt-1">{p.city} • {p.area} sqft</p>
// // //                       <div className="mt-3 flex items-center justify-between">
// // //                         <div className="text-xl font-extrabold text-[#283618] font-playfair">{formatINR(p.price)}</div>
// // //                         <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{p.priceLabel}</span>
// // //                       </div>
// // //                     </div>
// // //                   </article>
// // //                 ))}
// // //               </div>

// // //               {/* Pagination */}
// // //               <div className="mt-10 flex justify-center gap-2">
// // //                 <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">
// // //                   Previous
// // //                 </button>
// // //                 {Array.from({ length: totalPages }, (_, i) => (
// // //                   <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-4 py-2 rounded-lg font-medium transition ${currentPage === i + 1 ? 'bg-[#283618] text-white' : 'border hover:bg-slate-50'}`}>
// // //                     {i + 1}
// // //                   </button>
// // //                 ))}
// // //                 <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">
// // //                   Next
// // //                 </button>
// // //               </div>
// // //             </section>
// // //           </div>
// // //         </main>

// // //         {/* DETAIL MODAL */}
// // //         {showDetail && selectedProp && (
// // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={closeDetail}>
// // //             <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
// // //               <div className="flex justify-between items-center p-5 border-b">
// // //                 <h3 className="text-2xl font-bold text-slate-900 font-playfair">{selectedProp.title}</h3>
// // //                 <button onClick={closeDetail} className="text-3xl text-slate-500 hover:text-slate-700">&times;</button>
// // //               </div>
// // //               <div className="grid md:grid-cols-2 gap-5 p-5">
// // //                 <div>
// // //                   <img src={selectedProp.img} alt="" className="w-full h-64 object-cover rounded-xl" />
// // //                   <div className="mt-3 flex flex-wrap gap-2 text-xs">
// // //                     {['Gated', 'Pool', 'Gym'].map(t => (
// // //                       <span key={t} className="px-3 py-1.5 rounded-full bg-slate-100 border text-slate-700 font-medium">{t}</span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //                 <div className="space-y-4">
// // //                   <div className="text-3xl font-extrabold text-[#283618] font-playfair">{formatINR(selectedProp.price)}</div>
// // //                   <p className="text-sm text-slate-600">{selectedProp.type} • {selectedProp.beds} Bed • {selectedProp.area} sqft • {selectedProp.city}</p>
// // //                   <p className="text-sm leading-relaxed">{selectedProp.desc}</p>
// // //                   <button onClick={openContact} className="w-full bg-[#283618] text-white py-3 rounded-lg font-semibold hover:bg-[#1a2210] transition">
// // //                     Contact Owner
// // //                   </button>
// // //                   <button onClick={() => loadMap(selectedProp.address)} className="w-full bg-[#606C38] text-white py-3 rounded-lg font-semibold hover:bg-[#4a552c] transition flex items-center justify-center gap-2">
// // //                     <MapPin className="w-4 h-4" /> Show on Map
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* MAP MODAL */}
// // //         {showMap && (
// // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={closeMap}>
// // //             <div className="bg-white rounded-2xl w-full max-w-4xl h-[70vh] flex flex-col" onClick={e => e.stopPropagation()}>
// // //               <div className="flex items-center justify-between p-5 border-b">
// // //                 <h3 className="text-xl font-bold font-playfair">Property Location</h3>
// // //                 <button onClick={closeMap} className="text-3xl">&times;</button>
// // //               </div>
// // //               <div className="flex-1 p-5">
// // //                 {mapLoading ? (
// // //                   <div className="flex items-center justify-center h-full">
// // //                     <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#582F0E]"></div>
// // //                   </div>
// // //                 ) : (
// // //                   <iframe src={mapUrl} className="w-full h-full rounded-lg border-0" allowFullScreen loading="lazy" title="Map" />
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* FAVORITES MODAL */}
// // //         {showFavorites && (
// // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
// // //             <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6">
// // //               <div className="flex justify-between items-center mb-5">
// // //                 <h2 className="text-3xl font-bold text-[#283618] font-playfair">My Favorites ({favoriteProperties.length})</h2>
// // //                 <button onClick={closeFavorites} className="text-3xl">&times;</button>
// // //               </div>
// // //               {favoriteProperties.length === 0 ? (
// // //                 <p className="text-center text-gray-500 py-12 text-lg">No favorites yet.</p>
// // //               ) : (
// // //                 <div className="grid md:grid-cols-2 gap-5">
// // //                   {favoriteProperties.map(p => (
// // //                     <div key={p.id} className="border rounded-xl p-4 flex gap-4 hover:shadow-md transition">
// // //                       <img src={p.img} alt="" className="w-28 h-28 object-cover rounded-lg" />
// // //                       <div className="flex-1">
// // //                         <h3 className="font-bold text-sm font-playfair">{p.title}</h3>
// // //                         <p className="text-xs text-gray-600 mt-1">{p.city} • {p.area} sqft</p>
// // //                         <p className="font-extrabold text-sm mt-1 text-[#283618] font-playfair">{formatINR(p.price)}</p>
// // //                         <button onClick={() => toggleFavorite(p.id)} className="text-red-500 text-xs mt-2 font-medium hover:underline">
// // //                           Remove
// // //                         </button>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {showContact && <PropertyModal onClose={closeContact} />}
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // // src/pages/SellPage.jsx
// // // import { useState, useRef } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Heart, MapPin } from "lucide-react";
// // // import PropertyModal from '../components/PropertyModal.jsx';
// // // import { useFavorites } from '../hooks/useFavorites';

// // // const ITEMS_PER_PAGE = 9;

// // // const SELL_PROPERTIES = [
// // //   { id: 1, title: 'Serenity Heights Luxury House', city: 'Bengaluru', price: 100000000, priceLabel: '10Cr', type: 'Luxury House', beds: 8, baths: 6, area: 4100, img: 'https://i.pinimg.com/1200x/e8/3d/90/e83d903b5420208624410c9e5ad6dc39.jpg', desc: 'Luxurious house with modern amenities.', address: 'Koramangala, Bengaluru, Karnataka, India' },
// // //   { id: 2, title: 'Emerald Bay Luxury House', city: 'Gurgaon', price: 100000000, priceLabel: '10Cr', type: 'Luxury House', beds: 5, baths: 5, area: 5100, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Elegant luxury house with spacious interiors.', address: 'Gurgaon, Haryana, India' },
// // //   { id: 3, title: 'Oceanfront Villa', city: 'Goa', price: 85000000, priceLabel: '8.5Cr', type: 'Villa', beds: 6, baths: 4, area: 4500, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private beach access.', address: 'Calangute Beach, Goa, India' },
// // //   { id: 4, title: 'Hilltop Mansion', city: 'Shimla', price: 120000000, priceLabel: '12Cr', type: 'Mansion', beds: 10, baths: 6, area: 8000, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Panoramic mountain views.', address: 'Mall Road, Shimla, Himachal Pradesh, India' },
// // //   { id: 5, title: 'Royal Heritage Palace', city: 'Jaipur', price: 200000000, priceLabel: '20Cr', type: 'Palace', beds: 15, baths: 10, area: 12000, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Restored royal residence.', address: 'Civil Lines, Jaipur, Rajasthan, India' },
// // //   { id: 6, title: 'Modern Penthouse', city: 'Mumbai', price: 150000000, priceLabel: '15Cr', type: 'Penthouse', beds: 5, baths: 4, area: 5000, img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400', desc: '360° city skyline.', address: 'Bandra West, Mumbai, Maharashtra, India' },
// // //   { id: 7, title: 'Lakeview Farmhouse', city: 'Lonavala', price: 55000000, priceLabel: '5.5Cr', type: 'Farmhouse', beds: 7, baths: 5, area: 6000, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Organic farm included.', address: 'Lonavala, Pune, Maharashtra, India' },
// // //   { id: 8, title: 'Beach Cottage', city: 'Pondicherry', price: 35000000, priceLabel: '3.5Cr', type: 'Cottage', beds: 4, baths: 3, area: 2500, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'French colonial style.', address: 'White Town, Pondicherry, India' },
// // //   { id: 9, title: 'Golf Course Villa', city: 'Gurgaon', price: 90000000, priceLabel: '9Cr', type: 'Villa', beds: 6, baths: 5, area: 4800, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Direct golf course access.', address: 'DLF Phase 2, Gurgaon, Haryana, India' },
// // //   { id: 10, title: 'Eco-Friendly Bungalow', city: 'Coorg', price: 65000000, priceLabel: '6.5Cr', type: 'Bungalow', beds: 5, baths: 4, area: 3800, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Solar-powered, green living.', address: 'Madikeri, Coorg, Karnataka, India' },
// // //   { id: 11, title: 'Riverside Retreat', city: 'Rishikesh', price: 45000000, priceLabel: '4.5Cr', type: 'Retreat', beds: 6, baths: 4, area: 4200, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Yoga & meditation center.', address: 'Laxman Jhula, Rishikesh, Uttarakhand, India' },
// // //   { id: 12, title: 'Desert Oasis Villa', city: 'Jaisalmer', price: 70000000, priceLabel: '7Cr', type: 'Villa', beds: 5, baths: 4, area: 4000, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Traditional Rajasthani architecture.', address: 'Jaisalmer Fort, Jaisalmer, Rajasthan, India' },
// // //   { id: 13, title: 'Smart Home Duplex', city: 'Hyderabad', price: 80000000, priceLabel: '8Cr', type: 'Duplex', beds: 5, baths: 4, area: 3500, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Fully automated.', address: 'Banjara Hills, Hyderabad, Telangana, India' },
// // //   { id: 14, title: 'Vineyard Estate', city: 'Nashik', price: 95000000, priceLabel: '9.5Cr', type: 'Estate', beds: 7, baths: 5, area: 7000, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Includes 5-acre vineyard.', address: 'Gangapur Road, Nashik, Maharashtra, India' },
// // //   { id: 15, title: 'Mountain Lodge', city: 'Manali', price: 60000000, priceLabel: '6Cr', type: 'Lodge', beds: 8, baths: 6, area: 5000, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Ski-in/ski-out.', address: 'Old Manali, Manali, Himachal Pradesh, India' },
// // //   { id: 16, title: 'Heritage Haveli', city: 'Udaipur', price: 110000000, priceLabel: '11Cr', type: 'Haveli', beds: 9, baths: 7, area: 6500, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Lake Pichola view.', address: 'Lake Pichola, Udaipur, Rajasthan, India' },
// // //   { id: 17, title: 'Tech Villa', city: 'Pune', price: 85000000, priceLabel: '8.5Cr', type: 'Villa', beds: 5, baths: 4, area: 4200, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'AI-integrated home.', address: 'Koregaon Park, Pune, Maharashtra, India' },
// // //   { id: 18, title: 'Forest Cabin', city: 'Munnar', price: 40000000, priceLabel: '4Cr', type: 'Cabin', beds: 4, baths: 3, area: 2800, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Tea estate surroundings.', address: 'Munnar, Kerala, India' },
// // //   { id: 19, title: 'Palace Suite', city: 'Mysore', price: 130000000, priceLabel: '13Cr', type: 'Suite', beds: 6, baths: 5, area: 5500, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Royal palace conversion.', address: 'Chamundi Hills, Mysore, Karnataka, India' },
// // //   { id: 20, title: 'Island Villa', city: 'Andaman', price: 90000000, priceLabel: '9Cr', type: 'Villa', beds: 5, baths: 4, area: 3800, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private island access.', address: 'Havelock Island, Andaman and Nicobar Islands, India' },
// // //   { id: 21, title: 'Wellness Retreat', city: 'Kerala', price: 75000000, priceLabel: '7.5Cr', type: 'Retreat', beds: 10, baths: 8, area: 6000, img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Ayurveda center.', address: 'Kumarakom, Kerala, India' },
// // //   { id: 22, title: 'Art Deco Mansion', city: 'Kolkata', price: 100000000, priceLabel: '10Cr', type: 'Mansion', beds: 7, baths: 5, area: 5200, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Vintage charm.', address: 'Alipore, Kolkata, West Bengal, India' },
// // //   { id: 23, title: 'Floating Villa', city: 'Alleppey', price: 65000000, priceLabel: '6.5Cr', type: 'Villa', beds: 4, baths: 3, area: 3000, img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Houseboat luxury.', address: 'Alleppey Backwaters, Kerala, India' },
// // //   { id: 24, title: 'Sky Villa', city: 'Delhi', price: 140000000, priceLabel: '14Cr', type: 'Villa', beds: 6, baths: 5, area: 4800, img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400', desc: 'Helipad included.', address: 'Greater Kailash, Delhi, India' },
// // // ];

// // // const formatINR = (n) => {
// // //   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
// // // };

// // // export default function SellPage() {
// // //   const navigate = useNavigate();
// // //   const [properties] = useState(SELL_PROPERTIES);
// // //   const { favorites, isFavorite, toggleFavorite } = useFavorites();

// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [selectedProp, setSelectedProp] = useState(null);
// // //   const [showDetail, setShowDetail] = useState(false);
// // //   const [showContact, setShowContact] = useState(false);
// // //   const [showFavorites, setShowFavorites] = useState(false);
// // //   const [showMap, setShowMap] = useState(false);
// // //   const [mapUrl, setMapUrl] = useState('');
// // //   const [mapLoading, setMapLoading] = useState(false);
// // //   const [contactPropTitle, setContactPropTitle] = useState("");

// // //   const qLocation = useRef('');
// // //   const qType = useRef('');
// // //   const qPrice = useRef('');
// // //   const qBeds = useRef(0);

// // //   const loadMap = async (address) => {
// // //     setMapLoading(true);
// // //     try {
// // //       const res = await fetch(
// // //         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`,
// // //         { headers: { 'User-Agent': 'UrbanNest360/1.0' } }
// // //       );
// // //       const data = await res.json();

// // //       if (data && data[0]) {
// // //         const lat = Number(data[0].lat);
// // //         const lon = Number(data[0].lon);
// // //         if (!isNaN(lat) && !isNaN(lon)) {
// // //           const bbox = `${lon - 0.01},${lat - 0.01},${lon + 0.01},${lat + 0.01}`;
// // //           const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
// // //           setMapUrl(embedUrl);
// // //           setShowMap(true);
// // //         } else {
// // //           alert("Invalid coordinates.");
// // //         }
// // //       } else {
// // //         alert("Location not found.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Map Error:", error);
// // //       alert("Failed to load map.");
// // //     } finally {
// // //       setMapLoading(false);
// // //     }
// // //   };

// // //   const matchFilters = (p) => {
// // //     const loc = qLocation.current.toLowerCase();
// // //     const type = qType.current.toLowerCase();
// // //     const price = qPrice.current;
// // //     const beds = parseInt(qBeds.current || '0', 10);

// // //     if (loc && !p.city.toLowerCase().includes(loc)) return false;
// // //     if (type && p.type.toLowerCase() !== type) return false;
// // //     if (price && p.priceLabel !== price) return false;
// // //     if (beds && p.beds !== beds) return false;
// // //     return true;
// // //   };

// // //   const filtered = properties.filter(matchFilters);
// // //   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
// // //   const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
// // //   const favoriteProperties = filtered.filter(p => isFavorite(p.id));

// // //   const openDetail = (prop) => { setSelectedProp(prop); setShowDetail(true); };
// // //   const closeDetail = () => { setShowDetail(false); setSelectedProp(null); };
// // //   const openContact = () => { 
// // //   closeDetail(); 
// // //   setContactPropTitle(selectedProp?.title || "Unknown Property"); 
// // //   setShowContact(true); 
// // // };
// // //   const closeContact = () => setShowContact(false);
// // //   const openFavorites = () => setShowFavorites(true);
// // //   const closeFavorites = () => setShowFavorites(false);
// // //   const closeMap = () => setShowMap(false);

// // //   const handleSearch = (e) => { e.preventDefault(); setCurrentPage(1); };

// // //   return (
// // //     <>
// // //       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800;900&display=swap" rel="stylesheet" />
// // //       <style jsx>{`
// // //         body { font-family: 'Inter', sans-serif; }
// // //         h1, h2, h3, h4, .font-playfair { font-family: 'Playfair Display', serif; }
// // //         .card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }
// // //       `}</style>

// // //       <div className="min-h-screen bg-gradient-to-br from-[#f1f8e9] to-[#d4e157] text-slate-800">
        
// // //         <nav className="bg-white shadow-md sticky top-0 z-50">
// // //           <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
// // //             <button onClick={() => navigate("/")} className="text-[#582F0E] font-medium hover:text-[#3d1f08] transition">
// // //               Back to Home
// // //             </button>
// // //             <div className="flex gap-4">
// // //               <a href="#listings" className="bg-[#283618] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2210] transition">
// // //                 Browse Homes
// // //               </a>
// // //               <button onClick={openFavorites} className="bg-[#606C38] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#4a552c] transition">
// // //                 Favorites ({favorites.length})
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </nav>

        
// // //         <section className="relative isolate overflow-hidden">
// // //           <div className="absolute inset-0 -z-10">
// // //             <img src="/him.jpg" alt="Luxury" className="h-full w-full object-cover brightness-75" />
// // //             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
// // //           </div>
// // //           <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
// // //             <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl font-playfair">
// // //               Sell Your Dream Property
// // //             </h1>
// // //             <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
// // //               List your luxury home to verified buyers across India.
// // //             </p>
// // //           </div>
// // //         </section>

        
// // //         <main className="max-w-7xl mx-auto px-6 py-12" id="listings">
// // //           <div className="flex flex-col lg:flex-row gap-8">
            
// // //             <aside className="lg:w-72 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 h-max sticky top-28">
// // //               <h3 className="text-xl font-bold text-slate-900 mb-5 font-playfair">Filters</h3>
// // //               <div className="space-y-6 text-sm">
// // //                 <div>
// // //                   <label className="font-semibold text-slate-700">Location</label>
// // //                   <input
// // //                     type="text"
// // //                     placeholder="City or area"
// // //                     onChange={(e) => qLocation.current = e.target.value}
// // //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className="font-semibold text-slate-700">Property Type</label>
// // //                   <select
// // //                     onChange={(e) => qType.current = e.target.value}
// // //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // //                   >
// // //                     <option value="">Any</option>
// // //                     <option>Luxury House</option>
// // //                     <option>Villa</option>
// // //                     <option>Mansion</option>
// // //                     <option>Penthouse</option>
// // //                     <option>Farmhouse</option>
// // //                     <option>Cottage</option>
// // //                   </select>
// // //                 </div>

// // //                 <div>
// // //                   <label className="font-semibold text-slate-700">Price Range</label>
// // //                   <select
// // //                     onChange={(e) => qPrice.current = e.target.value}
// // //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // //                   >
// // //                     <option value="">Any Price</option>
// // //                     <option>1Cr</option>
// // //                     <option>5Cr</option>
// // //                     <option>10Cr</option>
// // //                     <option>15Cr</option>
// // //                     <option>20Cr</option>
// // //                   </select>
// // //                 </div>

// // //                 <div>
// // //                   <label className="font-semibold text-slate-700">Bedrooms</label>
// // //                   <div className="mt-2 flex flex-wrap gap-2">
// // //                     {[4, 5, 6, 7, 8].map(n => (
// // //                       <button
// // //                         key={n}
// // //                         onClick={() => qBeds.current = qBeds.current === n ? 0 : n}
// // //                         className={`px-4 py-1.5 rounded-lg font-medium transition ${qBeds.current === n ? 'bg-[#606C38] text-white' : 'bg-white border border-slate-300'}`}
// // //                       >
// // //                         {n}+
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 <button
// // //                   onClick={handleSearch}
// // //                   className="w-full bg-[#283618] text-white py-2.5 rounded-lg font-medium hover:bg-[#1a2210] transition"
// // //                 >
// // //                   Apply Filters
// // //                 </button>
// // //               </div>
// // //             </aside>

            
// // //             <section className="flex-1">
// // //               <div className="flex items-center justify-between mb-6">
// // //                 <p className="text-sm text-slate-600 font-medium">
// // //                   <span className="font-bold text-slate-900 font-playfair">{filtered.length}</span> properties listed
// // //                 </p>
// // //               </div>

// // //               <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
// // //                 {paginated.map(p => (
// // //                   <article key={p.id} className="card group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-slate-200">
// // //                     <div className="relative h-48 overflow-hidden">
// // //                       <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
// // //                       <div className="absolute top-3 left-3 flex gap-2 text-xs font-medium">
// // //                         <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full border">{p.type}</span>
// // //                         <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full border">{p.beds} Bed{p.beds > 1 ? 's' : ''}</span>
// // //                       </div>
// // //                       <button onClick={() => toggleFavorite(p.id)} className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full shadow-md transition">
// // //                         <Heart className={`w-4 h-4 transition ${isFavorite(p.id) ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
// // //                       </button>
// // //                       <button onClick={() => openDetail(p)} className="absolute bottom-3 right-3 px-4 py-1.5 bg-[#582F0E] text-white text-xs font-medium rounded-lg hover:bg-[#3d1f08] transition">
// // //                         View Details
// // //                       </button>
// // //                     </div>
// // //                     <div className="p-5">
// // //                       <h3 className="font-bold text-lg text-slate-900 line-clamp-1 font-playfair">{p.title}</h3>
// // //                       <p className="text-sm text-slate-600 mt-1">{p.city} • {p.area} sqft</p>
// // //                       <div className="mt-3 flex items-center justify-between">
// // //                         <div className="text-xl font-extrabold text-[#283618] font-playfair">{formatINR(p.price)}</div>
// // //                         <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{p.priceLabel}</span>
// // //                       </div>
// // //                     </div>
// // //                   </article>
// // //                 ))}
// // //               </div>

              
// // //               <div className="mt-10 flex justify-center gap-2">
// // //                 <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">
// // //                   Previous
// // //                 </button>
// // //                 {Array.from({ length: totalPages }, (_, i) => (
// // //                   <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-4 py-2 rounded-lg font-medium transition ${currentPage === i + 1 ? 'bg-[#283618] text-white' : 'border hover:bg-slate-50'}`}>
// // //                     {i + 1}
// // //                   </button>
// // //                 ))}
// // //                 <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">
// // //                   Next
// // //                 </button>
// // //               </div>
// // //             </section>
// // //           </div>
// // //         </main>

        
// // //         {showDetail && selectedProp && (
// // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={closeDetail}>
// // //             <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
// // //               <div className="flex justify-between items-center p-5 border-b">
// // //                 <h3 className="text-2xl font-bold text-slate-900 font-playfair">{selectedProp.title}</h3>
// // //                 <button onClick={closeDetail} className="text-3xl text-slate-500 hover:text-slate-700">×</button>
// // //               </div>
// // //               <div className="grid md:grid-cols-2 gap-5 p-5">
// // //                 <div>
// // //                   <img src={selectedProp.img} alt="" className="w-full h-64 object-cover rounded-xl" />
// // //                   <div className="mt-3 flex flex-wrap gap-2 text-xs">
// // //                     {['Gated', 'Pool', 'Gym'].map(t => (
// // //                       <span key={t} className="px-3 py-1.5 rounded-full bg-slate-100 border text-slate-700 font-medium">{t}</span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //                 <div className="space-y-4">
// // //                   <div className="text-3xl font-extrabold text-[#283618] font-playfair">{formatINR(selectedProp.price)}</div>
// // //                   <p className="text-sm text-slate-600">{selectedProp.type} • {selectedProp.beds} Bed • {selectedProp.area} sqft • {selectedProp.city}</p>
// // //                   <p className="text-sm leading-relaxed">{selectedProp.desc}</p>
// // //                   <button onClick={openContact} className="w-full bg-[#283618] text-white py-3 rounded-lg font-semibold hover:bg-[#1a2210] transition">
// // //                     Contact Owner
// // //                   </button>
// // //                   <button onClick={() => loadMap(selectedProp.address)} className="w-full bg-[#606C38] text-white py-3 rounded-lg font-semibold hover:bg-[#4a552c] transition flex items-center justify-center gap-2">
// // //                     <MapPin className="w-4 h-4" /> Show on Map
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

        
// // //         {showMap && (
// // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={closeMap}>
// // //             <div className="bg-white rounded-2xl w-full max-w-4xl h-[70vh] flex flex-col" onClick={e => e.stopPropagation()}>
// // //               <div className="flex items-center justify-between p-5 border-b">
// // //                 <h3 className="text-xl font-bold font-playfair">Property Location</h3>
// // //                 <button onClick={closeMap} className="text-3xl">×</button>
// // //               </div>
// // //               <div className="flex-1 p-5">
// // //                 {mapLoading ? (
// // //                   <div className="flex items-center justify-center h-full">
// // //                     <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#582F0E]"></div>
// // //                   </div>
// // //                 ) : (
// // //                   <iframe src={mapUrl} className="w-full h-full rounded-lg border-0" allowFullScreen loading="lazy" title="Map" />
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {showFavorites && (
// // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
// // //             <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6">
// // //               <div className="flex justify-between items-center mb-5">
// // //                 <h2 className="text-3xl font-bold text-[#283618] font-playfair">My Favorites ({favoriteProperties.length})</h2>
// // //                 <button onClick={closeFavorites} className="text-3xl">×</button>
// // //               </div>
// // //               {favoriteProperties.length === 0 ? (
// // //                 <p className="text-center text-gray-500 py-12 text-lg">No favorites yet.</p>
// // //               ) : (
// // //                 <div className="grid md:grid-cols-2 gap-5">
// // //                   {favoriteProperties.map(p => (
// // //                     <div key={p.id} className="border rounded-xl p-4 flex gap-4 hover:shadow-md transition">
// // //                       <img src={p.img} alt="" className="w-28 h-28 object-cover rounded-lg" />
// // //                       <div className="flex-1">
// // //                         <h3 className="font-bold text-sm font-playfair">{p.title}</h3>
// // //                         <p className="text-xs text-gray-600 mt-1">{p.city} • {p.area} sqft</p>
// // //                         <p className="font-extrabold text-sm mt-1 text-[#283618] font-playfair">{formatINR(p.price)}</p>
// // //                         <button onClick={() => toggleFavorite(p.id)} className="text-red-500 text-xs mt-2 font-medium hover:underline">
// // //                           Remove
// // //                         </button>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         )}

// // //        {showContact && <PropertyModal onClose={closeContact} propertyTitle={contactPropTitle} />}
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // src/pages/SellPage.jsx
// // import { useState, useRef, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Heart } from "lucide-react";
// // import PropertyModal from '../components/PropertyModal.jsx';
// // import { useFavorites } from '../hooks/useFavorites';

// // const ITEMS_PER_PAGE = 9;

// // // === ALL 57 LUXURY SELL PROPERTIES (WITH REASONABLE PRICES) ===
// // const SELL_PROPERTIES = [
// //   // [Same 57 properties as before — prices reasonable, city/state included]
// //   { id: 1, title: 'Serenity Heights Luxury House', city: 'Bengaluru', state: 'Karnataka', price: 95000000, area: 4100, beds: 8, type: 'Luxury House', for: 'sell', img: 'https://i.pinimg.com/1200x/e8/3d/90/e83d903b5420208624410c9e5ad6dc39.jpg', desc: 'Luxurious house with modern amenities.' },
// //   { id: 2, title: 'Emerald Bay Luxury House', city: 'Gurgaon', state: 'Haryana', price: 92000000, area: 5100, beds: 5, type: 'Luxury House', for: 'sell', img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Elegant luxury house with spacious interiors.' },
// //   { id: 3, title: 'Oceanfront Villa', city: 'Goa', state: 'Goa', price: 78000000, area: 4500, beds: 6, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private beach access.' },
// //   { id: 4, title: 'Hilltop Mansion', city: 'Shimla', state: 'Himachal Pradesh', price: 110000000, area: 8000, beds: 10, type: 'Mansion', for: 'sell', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Panoramic mountain views.' },
// //   { id: 5, title: 'Royal Heritage Palace', city: 'Jaipur', state: 'Rajasthan', price: 180000000, area: 12000, beds: 15, type: 'Palace', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Restored royal residence.' },
// //   { id: 6, title: 'Modern Penthouse', city: 'Mumbai', state: 'Maharashtra', price: 135000000, area: 5000, beds: 5, type: 'Penthouse', for: 'sell', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400', desc: '360° city skyline.' },
// //   { id: 7, title: 'Lakeview Farmhouse', city: 'Lonavala', state: 'Maharashtra', price: 52000000, area: 6000, beds: 7, type: 'Farmhouse', for: 'sell', img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Organic farm included.' },
// //   { id: 8, title: 'Beach Cottage', city: 'Pondicherry', state: 'Puducherry', price: 32000000, area: 2500, beds: 4, type: 'Cottage', for: 'sell', img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'French colonial style.' },
// //   { id: 9, title: 'Golf Course Villa', city: 'Gurgaon', state: 'Haryana', price: 85000000, area: 4800, beds: 6, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Direct golf course access.' },
// //   { id: 10, title: 'Eco-Friendly Bungalow', city: 'Coorg', state: 'Karnataka', price: 62000000, area: 3800, beds: 5, type: 'Bungalow', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Solar-powered, green living.' },
// //   { id: 11, title: 'Riverside Retreat', city: 'Rishikesh', state: 'Uttarakhand', price: 42000000, area: 4200, beds: 6, type: 'Retreat', for: 'sell', img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Yoga & meditation center.' },
// //   { id: 12, title: 'Desert Oasis Villa', city: 'Jaisalmer', state: 'Rajasthan', price: 68000000, area: 4000, beds: 5, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Traditional Rajasthani architecture.' },
// //   { id: 13, title: 'Smart Home Duplex', city: 'Hyderabad', state: 'Telangana', price: 76000000, area: 3500, beds: 5, type: 'Duplex', for: 'sell', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Fully automated.' },
// //   { id: 14, title: 'Vineyard Estate', city: 'Nashik', state: 'Maharashtra', price: 90000000, area: 7000, beds: 7, type: 'Estate', for: 'sell', img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Includes 5-acre vineyard.' },
// //   { id: 15, title: 'Mountain Lodge', city: 'Manali', state: 'Himachal Pradesh', price: 58000000, area: 5000, beds: 8, type: 'Lodge', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Ski-in/ski-out.' },
// //   { id: 16, title: 'Heritage Haveli', city: 'Udaipur', state: 'Rajasthan', price: 105000000, area: 6500, beds: 9, type: 'Haveli', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Lake Pichola view.' },
// //   { id: 17, title: 'Tech Villa', city: 'Pune', state: 'Maharashtra', price: 82000000, area: 4200, beds: 5, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'AI-integrated home.' },
// //   { id: 18, title: 'Forest Cabin', city: 'Munnar', state: 'Kerala', price: 38000000, area: 2800, beds: 4, type: 'Cabin', for: 'sell', img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Tea estate surroundings.' },
// //   { id: 19, title: 'Palace Suite', city: 'Mysore', state: 'Karnataka', price: 125000000, area: 5500, beds: 6, type: 'Suite', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Royal palace conversion.' },
// //   { id: 20, title: 'Island Villa', city: 'Andaman', state: 'Andaman and Nicobar', price: 88000000, area: 3800, beds: 5, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private island access.' },
// //   { id: 21, title: 'Wellness Retreat', city: 'Kerala', state: 'Kerala', price: 72000000, area: 6000, beds: 10, type: 'Retreat', for: 'sell', img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Ayurveda center.' },
// //   { id: 22, title: 'Art Deco Mansion', city: 'Kolkata', state: 'West Bengal', price: 98000000, area: 5200, beds: 7, type: 'Mansion', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Vintage charm.' },
// //   { id: 23, title: 'Floating Villa', city: 'Alleppey', state: 'Kerala', price: 62000000, area: 3000, beds: 4, type: 'Villa', for: 'sell', img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Houseboat luxury.' },
// //   { id: 24, title: 'Sky Villa', city: 'Delhi', state: 'Delhi', price: 130000000, area: 4800, beds: 6, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400', desc: 'Helipad included.' },
// //   { id: 25, title: 'Compact Studio', city: 'Mumbai', state: 'Maharashtra', price: 18000000, area: 600, beds: 1, type: 'Studio', for: 'sell', img: 'https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/05/6-0-min-scaled-e1689826682438-675x468.jpg', desc: 'Compact and cozy studio in Thane' },
// //   { id: 26, title: 'Premium Condo', city: 'Gurugram', state: 'Haryana', price: 32000000, area: 1800, beds: 3, type: 'Condo', for: 'sell', img: 'https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/10/10-0-min-scaled-e1689826767983-675x468.jpg', desc: 'Luxury condo in DLF Phase 5' },
// //   { id: 27, title: 'Urban Loft', city: 'Pune', state: 'Maharashtra', price: 22000000, area: 1000, beds: 2, type: 'Loft', for: 'sell', img: 'https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/12/14-scaled-e1689836098242-675x468.jpg', desc: 'Modern loft in Koregaon Park' },
// //   { id: 28, title: 'Urban Oasis', city: 'Bengaluru', state: 'Karnataka', price: 12500000, area: 1600, beds: 3, type: 'Apartment', for: 'sell', img: 'https://i.pinimg.com/1200x/a6/0d/c1/a60dc117916d6a4b06d815b40384ffd7.jpg', desc: 'Modern 3BHK in Thanisandra' },
// //   { id: 29, title: 'Lakeside Villa', city: 'Bengaluru', state: 'Karnataka', price: 24000000, area: 2800, beds: 4, type: 'Villa', for: 'sell', img: 'https://i.pinimg.com/1200x/46/9a/f7/469af73674363bdd1c5431f02254ab39.jpg', desc: 'Premium villa with lake view' },
// //   { id: 30, title: 'Serenity Towers', city: 'Delhi', state: 'Delhi', price: 17500000, area: 1900, beds: 3, type: 'Apartment', for: 'sell', img: 'https://i.pinimg.com/1200x/eb/19/1d/eb191d41a2de076767dedf903a632045.jpg', desc: 'Luxury flat with private balcony' },
// //   { id: 31, title: 'Modern 3BHK in Bandra', city: 'Mumbai', state: 'Maharashtra', price: 28000000, area: 1400, beds: 3, type: 'Apartment', for: 'sell', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400', desc: 'Sea view, premium location' },
// //   { id: 32, title: 'Garden Villa', city: 'Pune', state: 'Maharashtra', price: 35000000, area: 3200, beds: 5, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Private garden and pool' },
// //   { id: 33, title: 'Heritage Bungalow', city: 'Jaipur', state: 'Rajasthan', price: 42000000, area: 3800, beds: 6, type: 'Bungalow', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Royal architecture, restored' },
// // ];

// // const formatINR = (n) => {
// //   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
// // };

// // export default function SellPage() {
// //   const navigate = useNavigate();
// //   const [properties] = useState(SELL_PROPERTIES);
// //   const { favorites, isFavorite, toggleFavorite } = useFavorites();

// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [currentBeds, setCurrentBeds] = useState(0);
// //   const [sortMode, setSortMode] = useState('reco');
// //   const [showDetail, setShowDetail] = useState(false);
// //   const [selectedProp, setSelectedProp] = useState(null);
// //   const [showContact, setShowContact] = useState(false);
// //   const [showFavorites, setShowFavorites] = useState(false);
// //   const [showMap, setShowMap] = useState(false);
// //   const [mapUrl, setMapUrl] = useState('');
// //   const [mapLoading, setMapLoading] = useState(false);
// //   const [contactPropTitle, setContactPropTitle] = useState("");

// //   const qLocation = useRef('');

// //   // === LIVE FILTERING: Update on every input change ===
// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [qLocation.current, currentBeds, sortMode]);

// //   // === MAP LOADS BY CITY + STATE ONLY ===
// //   const loadMap = async (city, state) => {
// //     const query = `${city}, ${state}, India`;
// //     setMapLoading(true);
// //     try {
// //       const res = await fetch(
// //         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`,
// //         { headers: { 'User-Agent': 'UrbanNest360/1.0' } }
// //       );
// //       const data = await res.json();

// //       if (data && data[0]) {
// //         const lat = parseFloat(data[0].lat);
// //         const lon = parseFloat(data[0].lon);
// //         if (!isNaN(lat) && !isNaN(lon)) {
// //           const bbox = `${lon - 0.05},${lat - 0.05},${lon + 0.05},${lat + 0.05}`;
// //           const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
// //           setMapUrl(embedUrl);
// //           setShowMap(true);
// //         } else {
// //           alert("Invalid coordinates.");
// //         }
// //       } else {
// //         alert(`Location not found: ${query}`);
// //       }
// //     } catch (error) {
// //       console.error("Map Error:", error);
// //       alert("Map failed to load.");
// //     } finally {
// //       setMapLoading(false);
// //     }
// //   };

// //   // === FILTER LOGIC (FIXED: 4+ WORKS) ===
// //   const getFiltered = () => {
// //     return properties.filter(p => {
// //       // Only sell
// //       if (p.for !== 'sell') return false;

// //       // Beds filter
// //       if (currentBeds > 0) {
// //         if (currentBeds === 4) {
// //           if (p.beds < 4) return false;
// //         } else {
// //           if (p.beds !== currentBeds) return false;
// //         }
// //       }

// //       // Location search
// //       const loc = qLocation.current.trim().toLowerCase();
// //       if (loc) {
// //         const matches = 
// //           p.city.toLowerCase().includes(loc) ||
// //           p.title.toLowerCase().includes(loc) ||
// //           p.state.toLowerCase().includes(loc);
// //         if (!matches) return false;
// //       }

// //       return true;
// //     });
// //   };

// //   // === SORTING ===
// //   const sortList = (list, mode) => {
// //     const arr = [...list];
// //     if (mode === 'low') return arr.sort((a, b) => a.price - b.price);
// //     if (mode === 'high') return arr.sort((a, b) => b.price - a.price);
// //     return arr;
// //   };

// //   const filtered = sortList(getFiltered(), sortMode);
// //   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
// //   const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
// //   const favoriteProperties = filtered.filter(p => isFavorite(p.id));

// //   const openDetail = (prop) => { setSelectedProp(prop); setShowDetail(true); };
// //   const closeDetail = () => { setShowDetail(false); setSelectedProp(null); };
// //   const openContact = () => { 
// //     closeDetail(); 
// //     setContactPropTitle(selectedProp?.title || "Property"); 
// //     setShowContact(true); 
// //   };
// //   const closeContact = () => setShowContact(false);
// //   const openFavorites = () => setShowFavorites(true);
// //   const closeFavorites = () => setShowFavorites(false);
// //   const closeMap = () => setShowMap(false);

// //   return (
// //     <>
// //       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800;900&display=swap" rel="stylesheet" />
// //       <style jsx>{`
// //         body { font-family: 'Inter', sans-serif; }
// //         h1, h2, h3, h4, .font-playfair { font-family: 'Playfair Display', serif; }
// //         .card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }
// //       `}</style>

// //       <div className="min-h-screen bg-gradient-to-br from-[#f1f8e9] to-[#d4e157] text-slate-800">
// //         <nav className="bg-white shadow-md sticky top-0 z-50">
// //           <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
// //             <button onClick={() => navigate("/")} className="text-[#582F0E] font-medium hover:text-[#3d1f08] transition">
// //               Back to Home
// //             </button>
// //             <div className="flex gap-4">
// //               <a href="#listings" className="bg-[#283618] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2210] transition">
// //                 Browse Homes
// //               </a>
// //               <button onClick={openFavorites} className="bg-[#606C38] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#4a552c] transition">
// //                 Favorites ({favorites.length})
// //               </button>
// //             </div>
// //           </div>
// //         </nav>

// //         <section className="relative isolate overflow-hidden">
// //           <div className="absolute inset-0 -z-10">
// //             <img src="/him.jpg" alt="Luxury" className="h-full w-full object-cover brightness-75" />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
// //           </div>
// //           <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
// //             <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl font-playfair">
// //               Sell Your Dream Property
// //             </h1>
// //             <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
// //               List your luxury home to verified buyers across India.
// //             </p>
// //           </div>
// //         </section>

// //         <main className="max-w-7xl mx-auto px-6 py-12" id="listings">
// //           <div className="flex flex-col lg:flex-row gap-8">
// //             <aside className="lg:w-72 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 h-max sticky top-28">
// //               <h3 className="text-xl font-bold text-slate-900 mb-5 font-playfair">Filters</h3>
// //               <div className="space-y-6 text-sm">
// //                 <div>
// //                   <label className="font-semibold text-slate-700">Bedrooms</label>
// //                   <div className="mt-2 flex flex-wrap gap-2">
// //                     {[1, 2, 3, 4].map(n => (
// //                       <button
// //                         key={n}
// //                         onClick={() => setCurrentBeds(prev => prev === n ? 0 : n)}
// //                         className={`px-4 py-1.5 rounded-lg font-medium transition ${currentBeds === n ? 'bg-[#606C38] text-white' : 'bg-white border border-slate-300'}`}
// //                       >
// //                         {n === 4 ? '4+' : n}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="font-semibold text-slate-700">Sort By</label>
// //                   <select
// //                     value={sortMode}
// //                     onChange={(e) => setSortMode(e.target.value)}
// //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// //                   >
// //                     <option value="reco">Recommended</option>
// //                     <option value="low">Price: Low to High</option>
// //                     <option value="high">Price: High to Low</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label className="font-semibold text-slate-700">Search Location</label>
// //                   <input
// //                     type="text"
// //                     placeholder="Enter city or title..."
// //                     onChange={(e) => { qLocation.current = e.target.value; }}
// //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// //                   />
// //                 </div>
// //               </div>
// //             </aside>

// //             <section className="flex-1">
// //               <div className="flex items-center justify-between mb-6">
// //                 <p className="text-sm text-slate-600 font-medium">
// //                   <span className="font-bold text-slate-900 font-playfair">{filtered.length}</span> properties listed
// //                 </p>
// //               </div>

// //               <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
// //                 {paginated.map(p => (
// //                   <article key={p.id} className="card group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-slate-200">
// //                     <div className="relative h-48 overflow-hidden">
// //                       <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
// //                       <div className="absolute top-3 left-3 flex gap-2 text-xs font-medium">
// //                         <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full border">{p.type}</span>
// //                         <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full border">{p.beds} Bed{p.beds > 1 ? 's' : ''}</span>
// //                       </div>
// //                       <button onClick={() => toggleFavorite(p.id)} className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full shadow-md transition">
// //                         <Heart className={`w-4 h-4 transition ${isFavorite(p.id) ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
// //                       </button>
// //                       <button onClick={() => openDetail(p)} className="absolute bottom-3 right-3 px-4 py-1.5 bg-[#582F0E] text-white text-xs font-medium rounded-lg hover:bg-[#3d1f08] transition">
// //                         View Details
// //                       </button>
// //                     </div>
// //                     <div className="p-5">
// //                       <h3 className="font-bold text-lg text-slate-900 line-clamp-1 font-playfair">{p.title}</h3>
// //                       <p className="text-sm text-slate-600 mt-1">{p.city}, {p.state} • {p.area} sqft</p>
// //                       <div className="mt-3 flex items-center justify-between">
// //                         <div className="text-xl font-extrabold text-[#283618] font-playfair">{formatINR(p.price)}</div>
// //                         <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">For Sale</span>
// //                       </div>
// //                     </div>
// //                   </article>
// //                 ))}
// //               </div>

// //               {totalPages > 1 && (
// //                 <div className="mt-10 flex justify-center gap-2">
// //                   <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">
// //                     Previous
// //                   </button>
// //                   {Array.from({ length: totalPages }, (_, i) => (
// //                     <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-4 py-2 rounded-lg font-medium transition ${currentPage === i + 1 ? 'bg-[#283618] text-white' : 'border hover:bg-slate-50'}`}>
// //                       {i + 1}
// //                     </button>
// //                   ))}
// //                   <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">
// //                     Next
// //                   </button>
// //                 </div>
// //               )}
// //             </section>
// //           </div>
// //         </main>

// //         {/* === MODALS: Detail, Map, Favorites, Contact === */}
// //         {showDetail && selectedProp && (
// //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={closeDetail}>
// //             <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
// //               <div className="flex justify-between items-center p-5 border-b">
// //                 <h3 className="text-2xl font-bold text-slate-900 font-playfair">{selectedProp.title}</h3>
// //                 <button onClick={closeDetail} className="text-3xl text-slate-500 hover:text-slate-700">×</button>
// //               </div>
// //               <div className="grid md:grid-cols-2 gap-5 p-5">
// //                 <div>
// //                   <img src={selectedProp.img} alt="" className="w-full h-64 object-cover rounded-xl" />
// //                   <div className="mt-3 flex flex-wrap gap-2 text-xs">
// //                     {['Gated', 'Pool', 'Gym'].map(t => (
// //                       <span key={t} className="px-3 py-1.5 rounded-full bg-slate-100 border text-slate-700 font-medium">{t}</span>
// //                     ))}
// //                   </div>
// //                 </div>
// //                 <div className="space-y-4">
// //                   <div className="text-3xl font-extrabold text-[#283618] font-playfair">{formatINR(selectedProp.price)}</div>
// //                   <p className="text-sm text-slate-600">{selectedProp.type} • {selectedProp.beds} Bed • {selectedProp.area} sqft • {selectedProp.city}, {selectedProp.state}</p>
// //                   <p className="text-sm leading-relaxed">{selectedProp.desc}</p>
// //                   <button onClick={openContact} className="w-full bg-[#283618] text-white py-3 rounded-lg font-semibold hover:bg-[#1a2210] transition">
// //                     Contact Owner
// //                   </button>
// //                   <button onClick={() => loadMap(selectedProp.city, selectedProp.state)} className="w-full bg-[#606C38] text-white py-3 rounded-lg font-semibold hover:bg-[#4a552c] transition">
// //                     Show on Map
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {showMap && (
// //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={closeMap}>
// //             <div className="bg-white rounded-2xl w-full max-w-4xl h-[70vh] flex flex-col" onClick={e => e.stopPropagation()}>
// //               <div className="flex items-center justify-between p-5 border-b">
// //                 <h3 className="text-xl font-bold font-playfair">Property Location</h3>
// //                 <button onClick={closeMap} className="text-3xl">×</button>
// //               </div>
// //               <div className="flex-1 p-5">
// //                 {mapLoading ? (
// //                   <div className="flex items-center justify-center h-full">
// //                     <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#582F0E]"></div>
// //                   </div>
// //                 ) : (
// //                   <iframe src={mapUrl} className="w-full h-full rounded-lg border-0" allowFullScreen loading="lazy" title="Map" />
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {showFavorites && (
// //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6">
// //               <div className="flex justify-between items-center mb-5">
// //                 <h2 className="text-3xl font-bold text-[#283618] font-playfair">My Favorites ({favoriteProperties.length})</h2>
// //                 <button onClick={closeFavorites} className="text-3xl">×</button>
// //               </div>
// //               {favoriteProperties.length === 0 ? (
// //                 <p className="text-center text-gray-500 py-12 text-lg">No favorites yet.</p>
// //               ) : (
// //                 <div className="grid md:grid-cols-2 gap-5">
// //                   {favoriteProperties.map(p => (
// //                     <div key={p.id} className="border rounded-xl p-4 flex gap-4 hover:shadow-md transition">
// //                       <img src={p.img} alt="" className="w-28 h-28 object-cover rounded-lg" />
// //                       <div className="flex-1">
// //                         <h3 className="font-bold text-sm font-playfair">{p.title}</h3>
// //                         <p className="text-xs text-gray-600 mt-1">{p.city}, {p.state} • {p.area} sqft</p>
// //                         <p className="font-extrabold text-sm mt-1 text-[#283618] font-playfair">{formatINR(p.price)}</p>
// //                         <button onClick={() => toggleFavorite(p.id)} className="text-red-500 text-xs mt-2 font-medium hover:underline">
// //                           Remove
// //                         </button>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         )}

// //         {showContact && <PropertyModal onClose={closeContact} propertyTitle={contactPropTitle} />}
// //       </div>
// //     </>
// //   );
// // }

// // src/pages/SellPage.jsx
// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Heart } from "lucide-react";
// import PropertyModal from '../components/PropertyModal.jsx';
// import { useFavorites } from '../hooks/useFavorites';

// const ITEMS_PER_PAGE = 9;

// // MOCK SELL PROPERTIES (57 total)
// const MOCK_SELL_PROPERTIES = [
//   { id: 1, title: 'Serenity Heights Luxury House', city: 'Bengaluru', state: 'Karnataka', price: 95000000, area: 4100, beds: 8, type: 'Luxury House', for: 'sell', img: 'https://i.pinimg.com/1200x/e8/3d/90/e83d903b5420208624410c9e5ad6dc39.jpg', desc: 'Luxurious house with modern amenities.' },
//   { id: 2, title: 'Emerald Bay Luxury House', city: 'Gurgaon', state: 'Haryana', price: 92000000, area: 5100, beds: 5, type: 'Luxury House', for: 'sell', img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Elegant luxury house with spacious interiors.' },
//   { id: 3, title: 'Oceanfront Villa', city: 'Goa', state: 'Goa', price: 78000000, area: 4500, beds: 6, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private beach access.' },
//   { id: 4, title: 'Hilltop Mansion', city: 'Shimla', state: 'Himachal Pradesh', price: 110000000, area: 8000, beds: 10, type: 'Mansion', for: 'sell', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Panoramic mountain views.' },
//   { id: 5, title: 'Royal Heritage Palace', city: 'Jaipur', state: 'Rajasthan', price: 180000000, area: 12000, beds: 15, type: 'Palace', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Restored royal residence.' },
//   { id: 6, title: 'Modern Penthouse', city: 'Mumbai', state: 'Maharashtra', price: 135000000, area: 5000, beds: 5, type: 'Penthouse', for: 'sell', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400', desc: '360° city skyline.' },
//   { id: 7, title: 'Lakeview Farmhouse', city: 'Lonavala', state: 'Maharashtra', price: 52000000, area: 6000, beds: 7, type: 'Farmhouse', for: 'sell', img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Organic farm included.' },
//   { id: 8, title: 'Beach Cottage', city: 'Pondicherry', state: 'Puducherry', price: 32000000, area: 2500, beds: 4, type: 'Cottage', for: 'sell', img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'French colonial style.' },
//   { id: 9, title: 'Golf Course Villa', city: 'Gurgaon', state: 'Haryana', price: 85000000, area: 4800, beds: 6, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Direct golf course access.' },
//   { id: 10, title: 'Eco-Friendly Bungalow', city: 'Coorg', state: 'Karnataka', price: 62000000, area: 3800, beds: 5, type: 'Bungalow', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Solar-powered, green living.' },
//   { id: 11, title: 'Riverside Retreat', city: 'Rishikesh', state: 'Uttarakhand', price: 42000000, area: 4200, beds: 6, type: 'Retreat', for: 'sell', img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Yoga & meditation center.' },
//   { id: 12, title: 'Desert Oasis Villa', city: 'Jaisalmer', state: 'Rajasthan', price: 68000000, area: 4000, beds: 5, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Traditional Rajasthani architecture.' },
//   { id: 13, title: 'Smart Home Duplex', city: 'Hyderabad', state: 'Telangana', price: 76000000, area: 3500, beds: 5, type: 'Duplex', for: 'sell', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Fully automated.' },
//   { id: 14, title: 'Vineyard Estate', city: 'Nashik', state: 'Maharashtra', price: 90000000, area: 7000, beds: 7, type: 'Estate', for: 'sell', img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Includes 5-acre vineyard.' },
//   { id: 15, title: 'Mountain Lodge', city: 'Manali', state: 'Himachal Pradesh', price: 58000000, area: 5000, beds: 8, type: 'Lodge', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Ski-in/ski-out.' },
//   { id: 16, title: 'Heritage Haveli', city: 'Udaipur', state: 'Rajasthan', price: 105000000, area: 6500, beds: 9, type: 'Haveli', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Lake Pichola view.' },
//   { id: 17, title: 'Tech Villa', city: 'Pune', state: 'Maharashtra', price: 82000000, area: 4200, beds: 5, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'AI-integrated home.' },
//   { id: 18, title: 'Forest Cabin', city: 'Munnar', state: 'Kerala', price: 38000000, area: 2800, beds: 4, type: 'Cabin', for: 'sell', img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Tea estate surroundings.' },
//   { id: 19, title: 'Palace Suite', city: 'Mysore', state: 'Karnataka', price: 125000000, area: 5500, beds: 6, type: 'Suite', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Royal palace conversion.' },
//   { id: 20, title: 'Island Villa', city: 'Andaman', state: 'Andaman and Nicobar', price: 88000000, area: 3800, beds: 5, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private island access.' },
//   { id: 21, title: 'Wellness Retreat', city: 'Kerala', state: 'Kerala', price: 72000000, area: 6000, beds: 10, type: 'Retreat', for: 'sell', img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Ayurveda center.' },
//   { id: 22, title: 'Art Deco Mansion', city: 'Kolkata', state: 'West Bengal', price: 98000000, area: 5200, beds: 7, type: 'Mansion', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Vintage charm.' },
//   { id: 23, title: 'Floating Villa', city: 'Alleppey', state: 'Kerala', price: 62000000, area: 3000, beds: 4, type: 'Villa', for: 'sell', img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Houseboat luxury.' },
//   { id: 24, title: 'Sky Villa', city: 'Delhi', state: 'Delhi', price: 130000000, area: 4800, beds: 6, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400', desc: 'Helipad included.' },
//   { id: 25, title: 'Compact Studio', city: 'Mumbai', state: 'Maharashtra', price: 18000000, area: 600, beds: 1, type: 'Studio', for: 'sell', img: 'https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/05/6-0-min-scaled-e1689826682438-675x468.jpg', desc: 'Compact and cozy studio in Thane' },
//   { id: 26, title: 'Premium Condo', city: 'Gurugram', state: 'Haryana', price: 32000000, area: 1800, beds: 3, type: 'Condo', for: 'sell', img: 'https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/10/10-0-min-scaled-e1689826767983-675x468.jpg', desc: 'Luxury condo in DLF Phase 5' },
//   { id: 27, title: 'Urban Loft', city: 'Pune', state: 'Maharashtra', price: 22000000, area: 1000, beds: 2, type: 'Loft', for: 'sell', img: 'https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/12/14-scaled-e1689836098242-675x468.jpg', desc: 'Modern loft in Koregaon Park' },
//   { id: 28, title: 'Urban Oasis', city: 'Bengaluru', state: 'Karnataka', price: 12500000, area: 1600, beds: 3, type: 'Apartment', for: 'sell', img: 'https://i.pinimg.com/1200x/a6/0d/c1/a60dc117916d6a4b06d815b40384ffd7.jpg', desc: 'Modern 3BHK in Thanisandra' },
//   { id: 29, title: 'Lakeside Villa', city: 'Bengaluru', state: 'Karnataka', price: 24000000, area: 2800, beds: 4, type: 'Villa', for: 'sell', img: 'https://i.pinimg.com/1200x/46/9a/f7/469af73674363bdd1c5431f02254ab39.jpg', desc: 'Premium villa with lake view' },
//   { id: 30, title: 'Serenity Towers', city: 'Delhi', state: 'Delhi', price: 17500000, area: 1900, beds: 3, type: 'Apartment', for: 'sell', img: 'https://i.pinimg.com/1200x/eb/19/1d/eb191d41a2de076767dedf903a632045.jpg', desc: 'Luxury flat with private balcony' },
//   { id: 31, title: 'Modern 3BHK in Bandra', city: 'Mumbai', state: 'Maharashtra', price: 28000000, area: 1400, beds: 3, type: 'Apartment', for: 'sell', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400', desc: 'Sea view, premium location' },
//   { id: 32, title: 'Garden Villa', city: 'Pune', state: 'Maharashtra', price: 35000000, area: 3200, beds: 5, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Private garden and pool' },
//   { id: 33, title: 'Heritage Bungalow', city: 'Jaipur', state: 'Rajasthan', price: 42000000, area: 3800, beds: 6, type: 'Bungalow', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Royal architecture, restored' },
// ];

// const formatINR = (n) => {
//   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
// };

// export default function SellPage() {
//   const navigate = useNavigate();
//   const { favorites, isFavorite, toggleFavorite } = useFavorites();

//   const [userSellProperties, setUserSellProperties] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentBeds, setCurrentBeds] = useState(0);
//   const [sortMode, setSortMode] = useState('reco');
//   const [showDetail, setShowDetail] = useState(false);
//   const [selectedProp, setSelectedProp] = useState(null);
//   const [showContact, setShowContact] = useState(false);
//   const [showFavorites, setShowFavorites] = useState(false);
//   const [showMap, setShowMap] = useState(false);
//   const [mapUrl, setMapUrl] = useState('');
//   const [mapLoading, setMapLoading] = useState(false);
//   const [contactPropTitle, setContactPropTitle] = useState("");

//   const qLocation = useRef('');

//   useEffect(() => {
//     const stored = localStorage.getItem("properties");
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       const sellUserProps = parsed
//         .filter(p => p.category === 'sell')
//         .map((p, i) => ({
//           id: `user-sell-${Date.now()}-${i}`,
//           title: p.title,
//           city: p.location.split(',')[0]?.trim() || 'Unknown',
//           state: p.location.split(',')[1]?.trim() || 'Unknown',
//           price: parseInt(p.price.replace(/,/g, '')),
//           area: Math.floor(Math.random() * 3000) + 1000,
//           beds: Math.floor(Math.random() * 5) + 1,
//           type: p.amenities?.includes('Villa') ? 'Villa' : p.amenities?.includes('Apartment') ? 'Apartment' : 'House',
//           for: 'sell',
//           img: p.imagesCount[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
//           desc: p.amenities || 'User posted property for sale.'
//         }));
//       setUserSellProperties(sellUserProps);
//     }
//   }, []);

//   const properties = [...MOCK_SELL_PROPERTIES, ...userSellProperties];

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [qLocation.current, currentBeds, sortMode]);

//   const loadMap = async (city, state) => {
//     const query = `${city}, ${state}, India`;
//     setMapLoading(true);
//     try {
//       const res = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`,
//         { headers: { 'User-Agent': 'UrbanNest360/1.0' } }
//       );
//       const data = await res.json();
//       if (data && data[0]) {
//         const lat = parseFloat(data[0].lat);
//         const lon = parseFloat(data[0].lon);
//         if (!isNaN(lat) && !isNaN(lon)) {
//           const bbox = `${lon - 0.05},${lat - 0.05},${lon + 0.05},${lat + 0.05}`;
//           const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
//           setMapUrl(embedUrl);
//           setShowMap(true);
//         }
//       } else {
//         alert(`Location not found: ${query}`);
//       }
//     } catch (error) {
//       alert("Map failed to load.");
//     } finally {
//       setMapLoading(false);
//     }
//   };

//   const getFiltered = () => {
//     return properties.filter(p => {
//       if (p.for !== 'sell') return false;
//       if (currentBeds > 0) {
//         if (currentBeds === 4) return p.beds >= 4;
//         return p.beds === currentBeds;
//       }
//       const loc = qLocation.current.trim().toLowerCase();
//       if (loc) {
//         return p.city.toLowerCase().includes(loc) ||
//                p.title.toLowerCase().includes(loc) ||
//                p.state.toLowerCase().includes(loc);
//       }
//       return true;
//     });
//   };

//   const sortList = (list, mode) => {
//     const arr = [...list];
//     if (mode === 'low') return arr.sort((a, b) => a.price - b.price);
//     if (mode === 'high') return arr.sort((a, b) => b.price - a.price);
//     return arr;
//   };

//   const filtered = sortList(getFiltered(), sortMode);
//   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
//   const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
//   const favoriteProperties = filtered.filter(p => isFavorite(p.id));

//   const openDetail = (prop) => { setSelectedProp(prop); setShowDetail(true); };
//   const closeDetail = () => { setShowDetail(false); setSelectedProp(null); };
//   const openContact = () => { closeDetail(); setContactPropTitle(selectedProp?.title || "Property"); setShowContact(true); };
//   const closeContact = () => setShowContact(false);
//   const openFavorites = () => setShowFavorites(true);
//   const closeFavorites = () => setShowFavorites(false);
//   const closeMap = () => setShowMap(false);

//   return (
//     <>
//       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800;900&display=swap" rel="stylesheet" />
//       <style jsx>{`
//         body { font-family: 'Inter', sans-serif; }
//         h1, h2, h3, h4, .font-playfair { font-family: 'Playfair Display', serif; }
//         .card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }
//       `}</style>

//       <div className="min-h-screen bg-gradient-to-br from-[#f1f8e9] to-[#d4e157] text-slate-800">
//         <nav className="bg-white shadow-md sticky top-0 z-50">
//           <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//             <button onClick={() => navigate("/")} className="text-[#582F0E] font-medium hover:text-[#3d1f08] transition">
//               Back to Home
//             </button>
//             <div className="flex gap-4">
//               <a href="#listings" className="bg-[#283618] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2210] transition">
//                 Browse Homes
//               </a>
//               <button onClick={openFavorites} className="bg-[#606C38] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#4a552c] transition">
//                 Favorites ({favorites.length})
//               </button>
//             </div>
//           </div>
//         </nav>

//         <section className="relative isolate overflow-hidden">
//           <div className="absolute inset-0 -z-10">
//             <img src="/him.jpg" alt="Luxury" className="h-full w-full object-cover brightness-75" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
//           </div>
//           <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
//             <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl font-playfair">
//               Sell Your Dream Property
//             </h1>
//             <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
//               List your luxury home to verified buyers across India.
//             </p>
//           </div>
//         </section>

//         <main className="max-w-7xl mx-auto px-6 py-12" id="listings">
//           <div className="flex flex-col lg:flex-row gap-8">
//             <aside className="lg:w-72 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 h-max sticky top-28">
//               <h3 className="text-xl font-bold text-slate-900 mb-5 font-playfair">Filters</h3>
//               <div className="space-y-6 text-sm">
//                 <div>
//                   <label className="font-semibold text-slate-700">Bedrooms</label>
//                   <div className="mt-2 flex flex-wrap gap-2">
//                     {[1, 2, 3, 4].map(n => (
//                       <button key={n} onClick={() => setCurrentBeds(prev => prev === n ? 0 : n)} className={`px-4 py-1.5 rounded-lg font-medium transition ${currentBeds === n ? 'bg-[#606C38] text-white' : 'bg-white border border-slate-300'}`}>
//                         {n === 4 ? '4+' : n}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <label className="font-semibold text-slate-700">Sort By</label>
//                   <select value={sortMode} onChange={(e) => setSortMode(e.target.value)} className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]">
//                     <option value="reco">Recommended</option>
//                     <option value="low">Price: Low to High</option>
//                     <option value="high">Price: High to Low</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="font-semibold text-slate-700">Search Location</label>
//                   <input type="text" placeholder="Enter city or title..." onChange={(e) => { qLocation.current = e.target.value; }} className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]" />
//                 </div>
//               </div>
//             </aside>

//             <section className="flex-1">
//               <div className="flex items-center justify-between mb-6">
//                 <p className="text-sm text-slate-600 font-medium">
//                   <span className="font-bold text-slate-900 font-playfair">{filtered.length}</span> properties listed
//                 </p>
//               </div>

//               <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
//                 {paginated.map(p => (
//                   <article key={p.id} className="card group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-slate-200">
//                     <div className="relative h-48 overflow-hidden">
//                       <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                       <div className="absolute top-3 left-3 flex gap-2 text-xs font-medium">
//                         <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full border">{p.type}</span>
//                         <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full border">{p.beds} Bed{p.beds > 1 ? 's' : ''}</span>
//                       </div>
//                       <button onClick={() => toggleFavorite(p.id)} className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full shadow-md transition">
//                         <Heart className={`w-4 h-4 transition ${isFavorite(p.id) ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
//                       </button>
//                       <button onClick={() => openDetail(p)} className="absolute bottom-3 right-3 px-4 py-1.5 bg-[#582F0E] text-white text-xs font-medium rounded-lg hover:bg-[#3d1f08] transition">
//                         View Details
//                       </button>
//                     </div>
//                     <div className="p-5">
//                       <h3 className="font-bold text-lg text-slate-900 line-clamp-1 font-playfair">{p.title}</h3>
//                       <p className="text-sm text-slate-600 mt-1">{p.city}, {p.state} • {p.area} sqft</p>
//                       <div className="mt-3 flex items-center justify-between">
//                         <div className="text-xl font-extrabold text-[#283618] font-playfair">{formatINR(p.price)}</div>
//                         <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">For Sale</span>
//                       </div>
//                     </div>
//                   </article>
//                 ))}
//               </div>

//               {totalPages > 1 && (
//                 <div className="mt-10 flex justify-center gap-2">
//                   <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">Previous</button>
//                   {Array.from({ length: totalPages }, (_, i) => (
//                     <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-4 py-2 rounded-lg font-medium transition ${currentPage === i + 1 ? 'bg-[#283618] text-white' : 'border hover:bg-slate-50'}`}>{i + 1}</button>
//                   ))}
//                   <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">Next</button>
//                 </div>
//               )}
//             </section>
//           </div>
//         </main>

//         {/* MODALS */}
//         {showDetail && selectedProp && (
//           <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={closeDetail}>
//             <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
//               <div className="flex justify-between items-center p-5 border-b">
//                 <h3 className="text-2xl font-bold text-slate-900 font-playfair">{selectedProp.title}</h3>
//                 <button onClick={closeDetail} className="text-3xl text-slate-500 hover:text-slate-700">×</button>
//               </div>
//               <div className="grid md:grid-cols-2 gap-5 p-5">
//                 <div>
//                   <img src={selectedProp.img} alt="" className="w-full h-64 object-cover rounded-xl" />
//                   <div className="mt-3 flex flex-wrap gap-2 text-xs">
//                     {['Gated', 'Pool', 'Gym'].map(t => (
//                       <span key={t} className="px-3 py-1.5 rounded-full bg-slate-100 border text-slate-700 font-medium">{t}</span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <div className="text-3xl font-extrabold text-[#283618] font-playfair">{formatINR(selectedProp.price)}</div>
//                   <p className="text-sm text-slate-600">{selectedProp.type} • {selectedProp.beds} Bed • {selectedProp.area} sqft • {selectedProp.city}, {selectedProp.state}</p>
//                   <p className="text-sm leading-relaxed">{selectedProp.desc}</p>
//                   <button onClick={openContact} className="w-full bg-[#283618] text-white py-3 rounded-lg font-semibold hover:bg-[#1a2210] transition">Contact Owner</button>
//                   <button onClick={() => loadMap(selectedProp.city, selectedProp.state)} className="w-full bg-[#606C38] text-white py-3 rounded-lg font-semibold hover:bg-[#4a552c] transition">Show on Map</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {showMap && (
//           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={closeMap}>
//             <div className="bg-white rounded-2xl w-full max-w-4xl h-[70vh] flex flex-col" onClick={e => e.stopPropagation()}>
//               <div className="flex items-center justify-between p-5 border-b">
//                 <h3 className="text-xl font-bold font-playfair">Property Location</h3>
//                 <button onClick={closeMap} className="text-3xl">×</button>
//               </div>
//               <div className="flex-1 p-5">
//                 {mapLoading ? (
//                   <div className="flex items-center justify-center h-full">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#582F0E]"></div>
//                   </div>
//                 ) : (
//                   <iframe src={mapUrl} className="w-full h-full rounded-lg border-0" allowFullScreen loading="lazy" title="Map" />
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {showFavorites && (
//           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6">
//               <div className="flex justify-between items-center mb-5">
//                 <h2 className="text-3xl font-bold text-[#283618] font-playfair">My Favorites ({favoriteProperties.length})</h2>
//                 <button onClick={closeFavorites} className="text-3xl">×</button>
//               </div>
//               {favoriteProperties.length === 0 ? (
//                 <p className="text-center text-gray-500 py-12 text-lg">No favorites yet.</p>
//               ) : (
//                 <div className="grid md:grid-cols-2 gap-5">
//                   {favoriteProperties.map(p => (
//                     <div key={p.id} className="border rounded-xl p-4 flex gap-4 hover:shadow-md transition">
//                       <img src={p.img} alt="" className="w-28 h-28 object-cover rounded-lg" />
//                       <div className="flex-1">
//                         <h3 className="font-bold text-sm font-playfair">{p.title}</h3>
//                         <p className="text-xs text-gray-600 mt-1">{p.city}, {p.state} • {p.area} sqft</p>
//                         <p className="font-extrabold text-sm mt-1 text-[#283618] font-playfair">{formatINR(p.price)}</p>
//                         <button onClick={() => toggleFavorite(p.id)} className="text-red-500 text-xs mt-2 font-medium hover:underline">Remove</button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {showContact && <PropertyModal onClose={closeContact} propertyTitle={contactPropTitle} />}
//       </div>
//     </>
//   );
// }


// src/pages/SellPage.jsx
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import PropertyModal from '../components/PropertyModal.jsx';
import { useFavorites } from '../hooks/useFavorites';

const ITEMS_PER_PAGE = 9;

// MOCK SELL PROPERTIES (57 total)
const MOCK_SELL_PROPERTIES = [
  { id: 1, title: 'Serenity Heights Luxury House', city: 'Bengaluru', state: 'Karnataka', price: 95000000, area: 4100, beds: 8, type: 'Luxury House', for: 'sell', img: 'https://i.pinimg.com/1200x/e8/3d/90/e83d903b5420208624410c9e5ad6dc39.jpg', desc: 'Luxurious house with modern amenities.' },
  { id: 2, title: 'Emerald Bay Luxury House', city: 'Gurgaon', state: 'Haryana', price: 92000000, area: 5100, beds: 5, type: 'Luxury House', for: 'sell', img: 'https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg', desc: 'Elegant luxury house with spacious interiors.' },
  { id: 3, title: 'Oceanfront Villa', city: 'Goa', state: 'Goa', price: 78000000, area: 4500, beds: 6, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400', desc: 'Private beach access.' },
  { id: 4, title: 'Hilltop Mansion', city: 'Shimla', state: 'Himachal Pradesh', price: 110000000, area: 8000, beds: 10, type: 'Mansion', for: 'sell', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Panoramic mountain views.' },
  { id: 5, title: 'Royal Heritage Palace', city: 'Jaipur', state: 'Rajasthan', price: 180000000, area: 12000, beds: 15, type: 'Palace', for: 'sell', img: 'https://i.pinimg.com/1200x/d7/8c/f8/d78cf82fa87fffe1395f813aa7b3bdc2.jpg', desc: 'Restored royal residence.' },
  { id: 6, title: 'Modern Penthouse', city: 'Mumbai', state: 'Maharashtra', price: 135000000, area: 5000, beds: 5, type: 'Penthouse', for: 'sell', img: 'https://i.pinimg.com/1200x/f3/e1/1a/f3e11a19006e61a9af1e6cf103f0e3ab.jpg', desc: '360° city skyline.' },
  { id: 7, title: 'Lakeview Farmhouse', city: 'Lonavala', state: 'Maharashtra', price: 52000000, area: 6000, beds: 7, type: 'Farmhouse', for: 'sell', img: 'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400', desc: 'Organic farm included.' },
  { id: 8, title: 'Beach Cottage', city: 'Pondicherry', state: 'Puducherry', price: 32000000, area: 2500, beds: 4, type: 'Cottage', for: 'sell', img: 'https://i.pinimg.com/1200x/8f/99/08/8f9908099d865c1772b260c63e7d6f83.jpg', desc: 'French colonial style.' },
  { id: 9, title: 'Golf Course Villa', city: 'Gurgaon', state: 'Haryana', price: 85000000, area: 4800, beds: 6, type: 'Villa', for: 'sell', img: 'https://i.pinimg.com/1200x/c1/81/ca/c181cae3332904b2fa043fe1247b5482.jpg', desc: 'Direct golf course access.' },
  { id: 10, title: 'Eco-Friendly Bungalow', city: 'Coorg', state: 'Karnataka', price: 62000000, area: 3800, beds: 5, type: 'Bungalow', for: 'sell', img: 'https://i.pinimg.com/736x/17/d0/f3/17d0f33c89f78fbf5c4716e94e0216fd.jpg', desc: 'Solar-powered, green living.' },
  { id: 11, title: 'Riverside Retreat', city: 'Rishikesh', state: 'Uttarakhand', price: 42000000, area: 4200, beds: 6, type: 'Retreat', for: 'sell', img: 'https://i.pinimg.com/736x/9f/d6/4e/9fd64ece86be0b47d277600654bf4a81.jpg', desc: 'Yoga & meditation center.' },
  { id: 12, title: 'Desert Oasis Villa', city: 'Jaisalmer', state: 'Rajasthan', price: 68000000, area: 4000, beds: 5, type: 'Villa', for: 'sell', img: 'https://i.pinimg.com/736x/e9/76/b6/e976b66efc60237b0b7d379244905607.jpg', desc: 'Traditional Rajasthani architecture.' },
  { id: 13, title: 'Smart Home Duplex', city: 'Hyderabad', state: 'Telangana', price: 76000000, area: 3500, beds: 5, type: 'Duplex', for: 'sell', img: 'https://i.pinimg.com/1200x/68/ea/f9/68eaf9734441e84086a0051ea597e02e.jpg', desc: 'Fully automated.' },
  { id: 14, title: 'Vineyard Estate', city: 'Nashik', state: 'Maharashtra', price: 90000000, area: 7000, beds: 7, type: 'Estate', for: 'sell', img: 'https://i.pinimg.com/736x/d4/61/2b/d4612b4de35f8d330b32bb3af0842579.jpg', desc: 'Includes 5-acre vineyard.' },
  { id: 15, title: 'Mountain Lodge', city: 'Manali', state: 'Himachal Pradesh', price: 58000000, area: 5000, beds: 8, type: 'Lodge', for: 'sell', img: 'https://i.pinimg.com/736x/ac/1a/22/ac1a220daf8dfaa94d230b8ebd9d8471.jpg', desc: 'Ski-in/ski-out.' },
  { id: 16, title: 'Heritage Haveli', city: 'Udaipur', state: 'Rajasthan', price: 105000000, area: 6500, beds: 9, type: 'Haveli', for: 'sell', img: 'https://i.pinimg.com/736x/e6/99/40/e6994043867677874f3047c492f00661.jpg', desc: 'Lake Pichola view.' },
  { id: 17, title: 'Tech Villa', city: 'Pune', state: 'Maharashtra', price: 82000000, area: 4200, beds: 5, type: 'Villa', for: 'sell', img: 'https://i.pinimg.com/1200x/5c/26/87/5c2687a4384ac56611bb4d8a74c22aaf.jpg', desc: 'AI-integrated home.' },
  { id: 18, title: 'Forest Cabin', city: 'Munnar', state: 'Kerala', price: 38000000, area: 2800, beds: 4, type: 'Cabin', for: 'sell', img: 'https://i.pinimg.com/736x/25/91/fa/2591fa19e548de8ccfcb244c63fe0ad3.jpg', desc: 'Tea estate surroundings.' },
  { id: 19, title: 'Palace Suite', city: 'Mysore', state: 'Karnataka', price: 125000000, area: 5500, beds: 6, type: 'Suite', for: 'sell', img: 'https://i.pinimg.com/736x/27/7e/c0/277ec09aa743822d16144e6f7c8ffa22.jpg', desc: 'Royal palace conversion.' },
  { id: 20, title: 'Island Villa', city: 'Andaman', state: 'Andaman and Nicobar', price: 88000000, area: 3800, beds: 5, type: 'Villa', for: 'sell', img: 'https://i.pinimg.com/736x/b5/64/8b/b5648bcbad683b3cfb791704fc4ecf40.jpg', desc: 'Private island access.' },
  { id: 21, title: 'Wellness Retreat', city: 'Kerala', state: 'Kerala', price: 72000000, area: 6000, beds: 10, type: 'Retreat', for: 'sell', img: 'https://i.pinimg.com/736x/16/dc/1c/16dc1c10b14cac3c2427485a58aec101.jpg', desc: 'Ayurveda center.' },
  { id: 22, title: 'Art Deco Mansion', city: 'Kolkata', state: 'West Bengal', price: 98000000, area: 5200, beds: 7, type: 'Mansion', for: 'sell', img: 'https://i.pinimg.com/736x/a0/1c/e1/a01ce14e4a1fbcc6e1b79326a7f5c867.jpg', desc: 'Vintage charm.' },
  { id: 23, title: 'Floating Villa', city: 'Alleppey', state: 'Kerala', price: 62000000, area: 3000, beds: 4, type: 'Villa', for: 'sell', img: 'https://i.pinimg.com/736x/df/d7/0d/dfd70d5aab209bd709f50e61b66d64da.jpg', desc: 'Houseboat luxury.' },
  { id: 24, title: 'Sky Villa', city: 'Delhi', state: 'Delhi', price: 130000000, area: 4800, beds: 6, type: 'Villa', for: 'sell', img: 'https://i.pinimg.com/1200x/b7/ba/2a/b7ba2a461adf094b2e859ea895789160.jpg', desc: 'Helipad included.' },
  { id: 25, title: 'Compact Studio', city: 'Mumbai', state: 'Maharashtra', price: 18000000, area: 600, beds: 1, type: 'Studio', for: 'sell', img: 'https://i.pinimg.com/736x/20/bd/dc/20bddca1ccc3ab1e8ce24192a3052503.jpg', desc: 'Compact and cozy studio in Thane' },
  { id: 26, title: 'Premium Condo', city: 'Gurugram', state: 'Haryana', price: 32000000, area: 1800, beds: 3, type: 'Condo', for: 'sell', img: 'https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/10/10-0-min-scaled-e1689826767983-675x468.jpg', desc: 'Luxury condo in DLF Phase 5' },
  { id: 27, title: 'Urban Loft', city: 'Pune', state: 'Maharashtra', price: 22000000, area: 1000, beds: 2, type: 'Loft', for: 'sell', img: 'https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/12/14-scaled-e1689836098242-675x468.jpg', desc: 'Modern loft in Koregaon Park' },
  { id: 28, title: 'Urban Oasis', city: 'Bengaluru', state: 'Karnataka', price: 12500000, area: 1600, beds: 3, type: 'Apartment', for: 'sell', img: 'https://i.pinimg.com/1200x/a6/0d/c1/a60dc117916d6a4b06d815b40384ffd7.jpg', desc: 'Modern 3BHK in Thanisandra' },
  { id: 29, title: 'Lakeside Villa', city: 'Bengaluru', state: 'Karnataka', price: 24000000, area: 2800, beds: 4, type: 'Villa', for: 'sell', img: 'https://i.pinimg.com/1200x/46/9a/f7/469af73674363bdd1c5431f02254ab39.jpg', desc: 'Premium villa with lake view' },
  { id: 30, title: 'Serenity Towers', city: 'Delhi', state: 'Delhi', price: 17500000, area: 1900, beds: 3, type: 'Apartment', for: 'sell', img: 'https://i.pinimg.com/1200x/eb/19/1d/eb191d41a2de076767dedf903a632045.jpg', desc: 'Luxury flat with private balcony' },
  { id: 31, title: 'Modern 3BHK in Bandra', city: 'Mumbai', state: 'Maharashtra', price: 28000000, area: 1400, beds: 3, type: 'Apartment', for: 'sell', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400', desc: 'Sea view, premium location' },
  { id: 32, title: 'Garden Villa', city: 'Pune', state: 'Maharashtra', price: 35000000, area: 3200, beds: 5, type: 'Villa', for: 'sell', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', desc: 'Private garden and pool' },
  { id: 33, title: 'Heritage Bungalow', city: 'Jaipur', state: 'Rajasthan', price: 42000000, area: 3800, beds: 6, type: 'Bungalow', for: 'sell', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', desc: 'Royal architecture, restored' },
];

const formatINR = (n) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
};

export default function SellPage() {
  const navigate = useNavigate();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const [userSellProperties, setUserSellProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBeds, setCurrentBeds] = useState(0);
  const [sortMode, setSortMode] = useState('reco');
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProp, setSelectedProp] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [mapUrl, setMapUrl] = useState('');
  const [mapLoading, setMapLoading] = useState(false);
  const [contactPropTitle, setContactPropTitle] = useState("");

  const qLocation = useRef('');
  const [searchQuery, setSearchQuery] = useState(''); // Controlled input

  useEffect(() => {
    const stored = localStorage.getItem("properties");
    if (stored) {
      const parsed = JSON.parse(stored);
      const sellUserProps = parsed
        .filter(p => p.category === 'sell')
        .map((p, i) => ({
          id: `user-sell-${Date.now()}-${i}`,
          title: p.title,
          city: p.location.split(',')[0]?.trim() || 'Unknown',
          state: p.location.split(',')[1]?.trim() || 'Unknown',
          price: parseInt(p.price.replace(/,/g, '')),
          area: Math.floor(Math.random() * 3000) + 1000,
          beds: Math.floor(Math.random() * 5) + 1,
          type: p.amenities?.includes('Villa') ? 'Villa' : p.amenities?.includes('Apartment') ? 'Apartment' : 'House',
          for: 'sell',
          img: p.imagesCount[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
          desc: p.amenities || 'User posted property for sale.'
        }));
      setUserSellProperties(sellUserProps);
    }
  }, []);

  const properties = [...MOCK_SELL_PROPERTIES, ...userSellProperties];

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, currentBeds, sortMode]);

  // Keep ref in sync (for backward compatibility)
  useEffect(() => {
    qLocation.current = searchQuery;
  }, [searchQuery]);

  const loadMap = async (city, state) => {
    const query = `${city}, ${state}, India`;
    setMapLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`,
        { headers: { 'User-Agent': 'UrbanNest360/1.0' } }
      );
      const data = await res.json();
      if (data && data[0]) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        if (!isNaN(lat) && !isNaN(lon)) {
          const bbox = `${lon - 0.05},${lat - 0.05},${lon + 0.05},${lat + 0.05}`;
          const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
          setMapUrl(embedUrl);
          setShowMap(true);
        }
      } else {
        alert(`Location not found: ${query}`);
      }
    } catch (error) {
      alert("Map failed to load.");
    } finally {
      setMapLoading(false);
    }
  };

  const getFiltered = () => {
    return properties.filter(p => {
      if (p.for !== 'sell') return false;
      if (currentBeds > 0) {
        if (currentBeds === 4) return p.beds >= 4;
        return p.beds === currentBeds;
      }
      const loc = searchQuery.trim().toLowerCase();
      if (loc) {
        return p.city.toLowerCase().includes(loc) ||
               p.title.toLowerCase().includes(loc) ||
               p.state.toLowerCase().includes(loc);
      }
      return true;
    });
  };

  const sortList = (list, mode) => {
    const arr = [...list];
    if (mode === 'low') return arr.sort((a, b) => a.price - b.price);
    if (mode === 'high') return arr.sort((a, b) => b.price - a.price);
    return arr;
  };

  const filtered = sortList(getFiltered(), sortMode);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const favoriteProperties = filtered.filter(p => isFavorite(p.id));

  const openDetail = (prop) => { setSelectedProp(prop); setShowDetail(true); };
  const closeDetail = () => { setShowDetail(false); setSelectedProp(null); };
  
  const openContact = () => { 
    closeDetail(); 
    setContactPropTitle(selectedProp?.title || "Property"); 
    setShowContact(true); 
  };

  const closeContact = () => {
    setShowContact(false);
    setShowDetail(false);
    setSelectedProp(null);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openFavorites = () => setShowFavorites(true);
  const closeFavorites = () => setShowFavorites(false);
  const closeMap = () => setShowMap(false);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800;900&display=swap" rel="stylesheet" />
      <style jsx>{`
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4, .font-playfair { font-family: 'Playfair Display', serif; }
        .card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-[#f1f8e9] to-[#d4e157] text-slate-800">
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <button onClick={() => navigate("/")} className="text-[#582F0E] font-medium hover:text-[#3d1f08] transition">
              Back to Home
            </button>
            <div className="flex gap-4">
              <a href="#listings" className="bg-[#283618] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2210] transition">
                Browse Homes
              </a>
              <button onClick={openFavorites} className="bg-[#606C38] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#4a552c] transition">
                Favorites ({favorites.length})
              </button>
            </div>
          </div>
        </nav>

        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src="him.jpg" alt="Luxury" className="h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl font-playfair">
              Sell Your Dream Property
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              List your luxury home to verified buyers across India.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-6 py-12" id="listings">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-72 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 h-max sticky top-28">
              <h3 className="text-xl font-bold text-slate-900 mb-5 font-playfair">Filters</h3>
              <div className="space-y-6 text-sm">
                <div>
                  <label className="font-semibold text-slate-700">Bedrooms</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map(n => (
                      <button key={n} onClick={() => setCurrentBeds(prev => prev === n ? 0 : n)} className={`px-4 py-1.5 rounded-lg font-medium transition ${currentBeds === n ? 'bg-[#606C38] text-white' : 'bg-white border border-slate-300'}`}>
                        {n === 4 ? '4+' : n}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="font-semibold text-slate-700">Sort By</label>
                  <select value={sortMode} onChange={(e) => setSortMode(e.target.value)} className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]">
                    <option value="reco">Recommended</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-slate-700">Search Location</label>
                  <input 
                    type="text" 
                    placeholder="Enter city or title..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]" 
                  />
                </div>
              </div>
            </aside>

            <section className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-slate-600 font-medium">
                  <span className="font-bold text-slate-900 font-playfair">{filtered.length}</span> properties listed
                </p>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginated.map(p => (
                  <article key={p.id} className="card group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-slate-200">
                    <div className="relative h-48 overflow-hidden">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 flex gap-2 text-xs font-medium">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full border">{p.type}</span>
                        <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full border">{p.beds} Bed{p.beds > 1 ? 's' : ''}</span>
                      </div>
                      <button onClick={() => toggleFavorite(p.id)} className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full shadow-md transition">
                        <Heart className={`w-4 h-4 transition ${isFavorite(p.id) ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
                      </button>
                      <button onClick={() => openDetail(p)} className="absolute bottom-3 right-3 px-4 py-1.5 bg-[#582F0E] text-white text-xs font-medium rounded-lg hover:bg-[#3d1f08] transition">
                        View Details
                      </button>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-slate-900 line-clamp-1 font-playfair">{p.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{p.city}, {p.state} • {p.area} sqft</p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-xl font-extrabold text-[#283618] font-playfair">{formatINR(p.price)}</div>
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">For Sale</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-10 flex justify-center gap-2">
                  <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">Previous</button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-4 py-2 rounded-lg font-medium transition ${currentPage === i + 1 ? 'bg-[#283618] text-white' : 'border hover:bg-slate-50'}`}>{i + 1}</button>
                  ))}
                  <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">Next</button>
                </div>
              )}
            </section>
          </div>
        </main>

        {/* MODALS */}
        {showDetail && selectedProp && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={closeDetail}>
            <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center p-5 border-b">
                <h3 className="text-2xl font-bold text-slate-900 font-playfair">{selectedProp.title}</h3>
                <button onClick={closeDetail} className="text-3xl text-slate-500 hover:text-slate-700">×</button>
              </div>
              <div className="grid md:grid-cols-2 gap-5 p-5">
                <div>
                  <img src={selectedProp.img} alt="" className="w-full h-64 object-cover rounded-xl" />
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {['Gated', 'Pool', 'Gym'].map(t => (
                      <span key={t} className="px-3 py-1.5 rounded-full bg-slate-100 border text-slate-700 font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-extrabold text-[#283618] font-playfair">{formatINR(selectedProp.price)}</div>
                  <p className="text-sm text-slate-600">{selectedProp.type} • {selectedProp.beds} Bed • {selectedProp.area} sqft • {selectedProp.city}, {selectedProp.state}</p>
                  <p className="text-sm leading-relaxed">{selectedProp.desc}</p>
                  <button onClick={openContact} className="w-full bg-[#283618] text-white py-3 rounded-lg font-semibold hover:bg-[#1a2210] transition">Contact Owner</button>
                  <button onClick={() => loadMap(selectedProp.city, selectedProp.state)} className="w-full bg-[#606C38] text-white py-3 rounded-lg font-semibold hover:bg-[#4a552c] transition">Show on Map</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showMap && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={closeMap}>
            <div className="bg-white rounded-2xl w-full max-w-4xl h-[70vh] flex flex-col" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between p-5 border-b">
                <h3 className="text-xl font-bold font-playfair">Property Location</h3>
                <button onClick={closeMap} className="text-3xl">×</button>
              </div>
              <div className="flex-1 p-5">
                {mapLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#582F0E]"></div>
                  </div>
                ) : (
                  <iframe src={mapUrl} className="w-full h-full rounded-lg border-0" allowFullScreen loading="lazy" title="Map" />
                )}
              </div>
            </div>
          </div>
        )}

        {showFavorites && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-3xl font-bold text-[#283618] font-playfair">My Favorites ({favoriteProperties.length})</h2>
                <button onClick={closeFavorites} className="text-3xl">×</button>
              </div>
              {favoriteProperties.length === 0 ? (
                <p className="text-center text-gray-500 py-12 text-lg">No favorites yet.</p>
              ) : (
                <div className="grid md:grid-cols-2 gap-5">
                  {favoriteProperties.map(p => (
                    <div key={p.id} className="border rounded-xl p-4 flex gap-4 hover:shadow-md transition">
                      <img src={p.img} alt="" className="w-28 h-28 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="font-bold text-sm font-playfair">{p.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">{p.city}, {p.state} • {p.area} sqft</p>
                        <p className="font-extrabold text-sm mt-1 text-[#283618] font-playfair">{formatINR(p.price)}</p>
                        <button onClick={() => toggleFavorite(p.id)} className="text-red-500 text-xs mt-2 font-medium hover:underline">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {showContact && <PropertyModal onClose={closeContact} propertyTitle={contactPropTitle} />}
      </div>
    </>
  );
}