// // // // // src/pages/BuySellPage.jsx
// // // // import { useState, useEffect, useRef } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { Heart, X, ChevronLeft } from "lucide-react";

// // // // // Import your reusable PropertyModal
// // // // import PropertyModal from '../components/PropertyModal.jsx';

// // // // const ITEMS_PER_PAGE = 9;

// // // // // Mock data (replace with your backend later)
// // // // const MOCK_PROPERTIES = [
// // // //   { id: 1, title: "Luxury 3BHK in Bandra", price: 35000000, city: "Mumbai", area: 1200, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Premium apartment with sea view" },
// // // //   { id: 2, title: "Modern Villa in Koramangala", price: 85000000, city: "Bangalore", area: 3500, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Luxury villa with garden" },
// // // //   { id: 3, title: "2BHK Flat in Noida", price: 9500000, city: "Noida", area: 950, beds: 2, type: "Apartment", for: "rent", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400", desc: "Affordable and spacious" },
// // // //   { id: 4, title: "Penthouse in Juhu", price: 120000000, city: "Mumbai", area: 2800, beds: 4, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400", desc: "Ultra-luxury penthouse" },
// // // //   { id: 5, title: "Studio in Indiranagar", price: 4500000, city: "Bangalore", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Cozy studio for singles" },
// // // //   { id: 6, title: "4BHK Bungalow in Gurgaon", price: 65000000, city: "Delhi NCR", area: 4000, beds: 4, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600563438893-0b3a38322d7b?w=400", desc: "Spacious independent home" },
// // // //   { id: 7, title: "1BHK in Andheri", price: 8500000, city: "Mumbai", area: 650, beds: 1, type: "Apartment", for: "rent", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400", desc: "Compact and modern" },
// // // //   { id: 8, title: "Duplex in Whitefield", price: 22000000, city: "Bangalore", area: 1800, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1600565193348-386d2c9cb0be?w=400", desc: "Duplex with terrace" },
// // // //   { id: 9, title: "Farmhouse in Alibaug", price: 38000000, city: "Near Mumbai", area: 5000, beds: 6, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9ca8?w=400", desc: "Weekend getaway" },
// // // //   { id: 10, title: "2BHK in Pune", price: 7200000, city: "Pune", area: 980, beds: 2, type: "Apartment", for: "rent", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "IT hub location" },
// // // //   { id: 11, title: "3BHK in Hyderabad", price: 18000000, city: "Hyderabad", area: 1600, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Gated community" },
// // // //   { id: 12, title: "Row House in Pune", price: 9800000, city: "Pune", area: 1400, beds: 3, type: "Villa", for: "rent", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400", desc: "Quiet neighborhood" },
// // // //   // Add more to reach 27+ for pagination
// // // //   ...Array.from({ length: 20 }, (_, i) => ({
// // // //     id: 13 + i,
// // // //     title: `${i % 2 === 0 ? '2BHK' : '3BHK'} in ${['Mumbai', 'Delhi', 'Bangalore', 'Pune'][i % 4]}`,
// // // //     price: 5000000 + (i * 300000),
// // // //     city: ['Mumbai', 'Delhi', 'Bangalore', 'Pune'][i % 4],
// // // //     area: 800 + (i * 50),
// // // //     beds: i % 2 === 0 ? 2 : 3,
// // // //     type: i % 3 === 0 ? 'Apartment' : i % 3 === 1 ? 'Villa' : 'Studio',
// // // //     for: i % 2 === 0 ? 'buy' : 'rent',
// // // //     img: `https://images.unsplash.com/photo-15${i % 5}8204-e02f11c3d0e2?w=400`,
// // // //     desc: "Great location with amenities"
// // // //   }))
// // // // ];

// // // // const formatINR = (n) => {
// // // //   return new Intl.NumberFormat('en-IN', {
// // // //     style: 'currency',
// // // //     currency: 'INR',
// // // //     maximumFractionDigits: 0
// // // //   }).format(n);
// // // // };

// // // // export default function BuySellPage() {
// // // //   const navigate = useNavigate();
// // // //   const [properties, setProperties] = useState([]);
// // // //   const [favorites, setFavorites] = useState(() => {
// // // //     const saved = localStorage.getItem("urban_favorites");
// // // //     return saved ? JSON.parse(saved) : [];
// // // //   });
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [currentFor, setCurrentFor] = useState('');
// // // //   const [currentBeds, setCurrentBeds] = useState(0);
// // // //   const [sortMode, setSortMode] = useState('reco');
// // // //   const [showDetail, setShowDetail] = useState(false);
// // // //   const [selectedProp, setSelectedProp] = useState(null);
// // // //   const [showContact, setShowContact] = useState(false);

// // // //   // Search refs
// // // //   const qLocation = useRef('');
// // // //   const qType = useRef('');
// // // //   const qMin = useRef(0);
// // // //   const qMax = useRef(0);

// // // //   useEffect(() => {
// // // //     setProperties(MOCK_PROPERTIES);
// // // //     localStorage.setItem("urban_favorites", JSON.stringify(favorites));
// // // //   }, [favorites]);

// // // //   const toggleFavorite = (id) => {
// // // //     setFavorites(prev => 
// // // //       prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
// // // //     );
// // // //   };

// // // //   const matchFilters = (p) => {
// // // //     const loc = qLocation.current.toLowerCase();
// // // //     const type = qType.current;
// // // //     const min = parseInt(qMin.current || '0', 10);
// // // //     const max = parseInt(qMax.current || '0', 10);

// // // //     if (loc && !(p.city.toLowerCase().includes(loc) || p.title.toLowerCase().includes(loc))) return false;
// // // //     if (type && p.type !== type) return false;
// // // //     if (min && p.price < min) return false;
// // // //     if (max && p.price > max) return false;
// // // //     return true;
// // // //   };

// // // //   const getFiltered = () => {
// // // //     return properties.filter(p => {
// // // //       if (currentFor && p.for !== currentFor) return false;
// // // //       if (currentBeds && (currentBeds === 4 ? p.beds < 4 : p.beds !== currentBeds)) return false;
// // // //       return matchFilters(p);
// // // //     });
// // // //   };

// // // //   const sortList = (list, mode) => {
// // // //     const arr = [...list];
// // // //     if (mode === 'low') return arr.sort((a, b) => a.price - b.price);
// // // //     if (mode === 'high') return arr.sort((a, b) => b.price - a.price);
// // // //     return arr;
// // // //   };

// // // //   const filtered = sortList(getFiltered(), sortMode);
// // // //   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
// // // //   const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

// // // //   const openDetail = (prop) => {
// // // //     setSelectedProp(prop);
// // // //     setShowDetail(true);
// // // //   };

// // // //   const closeDetail = () => {
// // // //     setShowDetail(false);
// // // //     setSelectedProp(null);
// // // //   };

// // // //   const openContact = () => {
// // // //     closeDetail();
// // // //     setShowContact(true);
// // // //   };

// // // //   const handleSearch = (e) => {
// // // //     e.preventDefault();
// // // //     setCurrentPage(1);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* Inter Font + Tailwind */}
// // // //       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
// // // //       <style jsx>{`
// // // //         body { font-family: 'Inter', sans-serif; }
// // // //         .card:hover { transform: translateY(-4px); }
// // // //         .transition-transform { transition: transform .2s ease, box-shadow .2s ease; }
// // // //       `}</style>

// // // //       <div className="min-h-screen bg-[#a4ac86] text-slate-800">
// // // //         {/* Header */}
// // // //         <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-6 md:mx-10 px-4 sm:px-6 md:px-10 py-4 bg-white/80 backdrop-blur sticky top-0 z-50 shadow">
// // // //           <button onClick={() => navigate("/")} className="flex items-center gap-1 text-[#582F0E] font-semibold hover:text-[#3d1f08]">
// // // //             <ChevronLeft className="w-5 h-5" /> Back to Home
// // // //           </button>
// // // //           <h1 className="text-2xl sm:text-3xl font-bold">UrbanNest360</h1>
// // // //           <div className="flex gap-3">
// // // //             <a href="#listings" className="text-white bg-black px-4 py-2 rounded-full text-sm">Browse Homes</a>
// // // //             <button className="text-white bg-black px-4 py-2 rounded-full text-sm">How it works</button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Hero */}
// // // //         <section className="relative isolate overflow-hidden">
// // // //           <div className="absolute inset-0 -z-10">
// // // //             <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600" alt="Home" className="h-full w-full object-cover" />
// // // //             <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
// // // //           </div>
// // // //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
// // // //             <div className="relative z-10 px-4 text-center">
// // // //               <h1 className="text-5xl font-bold mb-4 drop-shadow-xl">FIND YOUR PERFECT HOME TODAY</h1>
// // // //               <p className="text-lg max-w-xl mx-auto drop-shadow-lg">
// // // //                 Search properties for sale and rent across top cities. Smart filters, instant tours, and verified listings.
// // // //               </p>
// // // //             </div>
// // // //             <div className="mt-6 bg-white/90 backdrop-blur rounded-2xl shadow-soft p-3 sm:p-4">
// // // //               <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
// // // //                 <div>
// // // //                   <label className="text-xs font-semibold text-slate-500">Location</label>
// // // //                   <input
// // // //                     type="text"
// // // //                     placeholder="City, area or landmark"
// // // //                     onChange={(e) => qLocation.current = e.target.value}
// // // //                     className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="text-xs font-semibold text-slate-500">Type</label>
// // // //                   <select
// // // //                     onChange={(e) => qType.current = e.target.value}
// // // //                     className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // // //                   >
// // // //                     <option value="">Any</option>
// // // //                     <option>Apartment</option>
// // // //                     <option>Villa</option>
// // // //                     <option>Studio</option>
// // // //                   </select>
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="text-xs font-semibold text-slate-500">Min Price</label>
// // // //                   <input
// // // //                     type="number"
// // // //                     placeholder="₹ min"
// // // //                     onChange={(e) => qMin.current = e.target.value}
// // // //                     className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="text-xs font-semibold text-slate-500">Max Price</label>
// // // //                   <input
// // // //                     type="number"
// // // //                     placeholder="₹ max"
// // // //                     onChange={(e) => qMax.current = e.target.value}
// // // //                     className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="flex items-end">
// // // //                   <button type="submit" className="w-full rounded-xl bg-[#582F0E] hover:bg-[#3d1f08] text-white font-semibold py-2.5">
// // // //                     Search
// // // //                   </button>
// // // //                 </div>
// // // //               </form>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* Listings */}
// // // //         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="listings">
// // // //           <div className="flex flex-col lg:flex-row gap-8">
// // // //             {/* Filters */}
// // // //             <aside className="lg:w-64 flex-none bg-slate-50/60 border border-slate-200 rounded-2xl p-4 h-max sticky top-24">
// // // //               <h3 className="text-base font-bold">Filters</h3>
// // // //               <div className="mt-4 space-y-4 text-sm">
// // // //                 <div className="flex items-center justify-between">
// // // //                   <label className="font-medium">For</label>
// // // //                   <div className="flex gap-2">
// // // //                     <button
// // // //                       onClick={() => setCurrentFor(prev => prev === 'buy' ? '' : 'buy')}
// // // //                       className={`px-3 py-1 rounded-lg border ${currentFor === 'buy' ? 'bg-slate-900 text-white' : 'border-slate-200'}`}
// // // //                     >
// // // //                       Buy
// // // //                     </button>
// // // //                     <button
// // // //                       onClick={() => setCurrentFor(prev => prev === 'rent' ? '' : 'rent')}
// // // //                       className={`px-3 py-1 rounded-lg border ${currentFor === 'rent' ? 'bg-slate-900 text-white' : 'border-slate-200'}`}
// // // //                     >
// // // //                       Rent
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="font-medium">Bedrooms</label>
// // // //                   <div className="mt-2 flex flex-wrap gap-2">
// // // //                     {[1,2,3,4].map(n => (
// // // //                       <button
// // // //                         key={n}
// // // //                         onClick={() => setCurrentBeds(prev => prev === n ? 0 : n)}
// // // //                         className={`px-3 py-1 rounded-lg border ${currentBeds === n ? 'bg-slate-900 text-white' : 'border-slate-200'}`}
// // // //                       >
// // // //                         {n === 4 ? '4+' : n}
// // // //                       </button>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="font-medium">Sort</label>
// // // //                   <select
// // // //                     value={sortMode}
// // // //                     onChange={(e) => { setSortMode(e.target.value); setCurrentPage(1); }}
// // // //                     className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
// // // //                   >
// // // //                     <option value="reco">Recommended</option>
// // // //                     <option value="low">Price: Low to High</option>
// // // //                     <option value="high">Price: High to Low</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>
// // // //             </aside>

// // // //             {/* Results */}
// // // //             <section className="flex-1 min-w-0">
// // // //               <div className="flex items-center justify-between mb-4">
// // // //                 <p className="text-sm text-slate-600"><span>{filtered.length}</span> places found</p>
// // // //                 <button className="text-sm underline">Show map</button>
// // // //               </div>
// // // //               <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
// // // //                 {paginated.map(p => (
// // // //                   <article
// // // //                     key={p.id}
// // // //                     className="card group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-soft transition-transform"
// // // //                   >
// // // //                     <div className="relative">
// // // //                       <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
// // // //                       <div className="absolute top-3 left-3 flex gap-2 text-xs">
// // // //                         <span className="px-2.5 py-1 rounded-full bg-white/90 border">{p.type}</span>
// // // //                         <span className="px-2.5 py-1 rounded-full bg-white/90 border">{p.beds} Beds</span>
// // // //                       </div>
// // // //                       <button
// // // //                         onClick={() => toggleFavorite(p.id)}
// // // //                         className="absolute top-3 right-3 p-1.5 bg-white/90 rounded-full"
// // // //                       >
// // // //                         <Heart className={`w-4 h-4 ${favorites.includes(p.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
// // // //                       </button>
// // // //                       <button
// // // //                         onClick={() => openDetail(p)}
// // // //                         className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#582F0E] text-white text-xs hover:bg-[#3d1f08]"
// // // //                       >
// // // //                         View
// // // //                       </button>
// // // //                     </div>
// // // //                     <div className="p-4">
// // // //                       <h3 className="font-bold text-slate-900">{p.title}</h3>
// // // //                       <p className="text-sm text-slate-600">{p.city} • {p.area} sqft</p>
// // // //                       <div className="mt-2 flex items-center justify-between">
// // // //                         <div className="text-lg font-extrabold">{formatINR(p.price)}</div>
// // // //                         <div className="text-xs text-slate-600">For {p.for}</div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </article>
// // // //                 ))}
// // // //               </div>

// // // //               {/* Pagination */}
// // // //               <div className="mt-8 flex justify-center gap-2">
// // // //                 <button
// // // //                   onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
// // // //                   disabled={currentPage === 1}
// // // //                   className="px-3 py-1.5 border rounded-lg disabled:opacity-50"
// // // //                 >
// // // //                   Prev
// // // //                 </button>
// // // //                 <div className="flex gap-1">
// // // //                   {Array.from({ length: totalPages }, (_, i) => (
// // // //                     <button
// // // //                       key={i + 1}
// // // //                       onClick={() => setCurrentPage(i + 1)}
// // // //                       className={`px-3 py-1.5 border rounded-lg ${currentPage === i + 1 ? 'bg-slate-900 text-white' : ''}`}
// // // //                     >
// // // //                       {i + 1}
// // // //                     </button>
// // // //                   ))}
// // // //                 </div>
// // // //                 <button
// // // //                   onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
// // // //                   disabled={currentPage === totalPages}
// // // //                   className="px-3 py-1.5 border rounded-lg disabled:opacity-50"
// // // //                 >
// // // //                   Next
// // // //                 </button>
// // // //               </div>
// // // //             </section>
// // // //           </div>
// // // //         </main>

// // // //         {/* Detail Modal */}
// // // //         {showDetail && selectedProp && (
// // // //           <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-4 z-50" onClick={closeDetail}>
// // // //             <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
// // // //               <div className="flex items-start justify-between p-4 border-b">
// // // //                 <h3 className="text-lg font-bold">{selectedProp.title}</h3>
// // // //                 <button onClick={closeDetail} className="text-slate-500 text-2xl">×</button>
// // // //               </div>
// // // //               <div className="grid md:grid-cols-2 gap-4 p-4">
// // // //                 <div>
// // // //                   <img src={selectedProp.img} alt="" className="w-full h-64 object-cover rounded-xl" />
// // // //                   <div className="mt-3 flex flex-wrap gap-2 text-xs">
// // // //                     {['Near metro', 'Gated security', 'Pet friendly'].map(t => (
// // // //                       <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100 border text-slate-700">{t}</span>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="space-y-3">
// // // //                   <div className="text-2xl font-extrabold">{formatINR(selectedProp.price)} • For {selectedProp.for}</div>
// // // //                   <div className="text-sm text-slate-600">{selectedProp.type} • {selectedProp.beds} Beds • {selectedProp.area} sqft • {selectedProp.city}</div>
// // // //                   <p className="text-sm">{selectedProp.desc}</p>
// // // //                   <button
// // // //                     onClick={openContact}
// // // //                     className="w-full rounded-lg bg-[#283618] text-white font-semibold py-2 hover:bg-[#1a2210]"
// // // //                   >
// // // //                     Contact Owner
// // // //                   </button>
// // // //                   <a href="#" className="inline-flex items-center justify-center w-full rounded-lg bg-[#283618] text-white font-semibold py-2 hover:bg-[#1a2210]">
// // // //                     Book a tour
// // // //                   </a>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* Reusable PropertyModal for Contact */}
// // // //         {showContact && <PropertyModal onClose={() => setShowContact(false)} />}
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }



// // // // src/pages/BuySellPage.jsx
// // // // import { useState, useRef } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { Heart, X, ChevronLeft } from "lucide-react";
// // // // import PropertyModal from '../components/PropertyModal.jsx';
// // // // import { useFavorites } from '../hooks/useFavorites';

// // // // const ITEMS_PER_PAGE = 9;

// // // // const MOCK_PROPERTIES = [
// // // //   { id: 1, title: "Luxury 3BHK in Bandra", price: 35000000, city: "Mumbai", area: 1200, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Premium apartment with sea view" },
// // // //   { id: 2, title: "Modern Villa in Koramangala", price: 85000000, city: "Bangalore", area: 3500, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Luxury villa with garden" },
// // // //   { id: 3, title: "Cozy Studio in Pune", price: 4500000, city: "Pune", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Affordable studio near IT hub" },
// // // //   { id: 4, title: "Penthouse in Delhi", price: 120000000, city: "Delhi", area: 5000, beds: 6, type: "Penthouse", for: "buy", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400", desc: "Sky-high living" },
// // // //   { id: 5, title: "Riverside Cottage in Udaipur", price: 35000, city: "Udaipur", area: 1300, beds: 2, type: "Cottage", for: "rent", img: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg", desc: "Quaint riverside stay" },
// // // //   { id: 6, title: "Beachfront Villa in Goa", price: 75000000, city: "Goa", area: 3000, beds: 4, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400", desc: "Ocean views, private pool" },
// // // //   { id: 7, title: "1BHK in Andheri", price: 18000000, city: "Mumbai", area: 650, beds: 1, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b48a3?w=400", desc: "Compact and modern" },
// // // //   { id: 8, title: "Heritage Bungalow in Jaipur", price: 65000000, city: "Jaipur", area: 4000, beds: 5, type: "Bungalow", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Royal architecture" },
// // // //   { id: 9, title: "2BHK in Indiranagar", price: 22000000, city: "Bangalore", area: 1100, beds: 2, type: "Apartment", for: "rent", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Near cafes and parks" },
// // // //   { id: 10, title: "Farmhouse in Lonavala", price: 45000000, city: "Lonavala", area: 6000, beds: 6, type: "Farmhouse", for: "buy", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400", desc: "Weekend getaway" },
// // // //   { id: 11, title: "Studio in Viman Nagar", price: 28000, city: "Pune", area: 400, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Fully furnished" },
// // // //   { id: 12, title: "4BHK in Noida", price: 95000000, city: "Noida", area: 2800, beds: 4, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Gated society" },
// // // //   { id: 13, title: "Duplex in Hyderabad", price: 70000000, city: "Hyderabad", area: 3200, beds: 5, type: "Duplex", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Modern duplex" },
// // // //   { id: 14, title: "1RK in Thane", price: 12000, city: "Thane", area: 300, beds: 1, type: "1RK", for: "rent", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b48a3?w=400", desc: "Budget friendly" },
// // // //   { id: 15, title: "Row House in Surat", price: 55000000, city: "Surat", area: 2200, beds: 4, type: "Row House", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Peaceful locality" },
// // // //   { id: 16, title: "3BHK in Chennai", price: 60000000, city: "Chennai", area: 1800, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Near beach" },
// // // //   { id: 17, title: "Villa in Coimbatore", price: 80000000, city: "Coimbatore", area: 3600, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Green surroundings" },
// // // //   { id: 18, title: "2BHK in Gurgaon", price: 35000, city: "Gurgaon", area: 1200, beds: 2, type: "Apartment", for: "rent", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b48a3?w=400", desc: "Corporate hub" },
// // // //   { id: 19, title: "Penthouse in Kolkata", price: 110000000, city: "Kolkata", area: 4800, beds: 6, type: "Penthouse", for: "buy", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400", desc: "River view" },
// // // //   { id: 20, title: "Cottage in Shimla", price: 30000, city: "Shimla", area: 1000, beds: 2, type: "Cottage", for: "rent", img: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg", desc: "Hill station retreat" },
// // // //   { id: 21, title: "Studio in Ahmedabad", price: 25000, city: "Ahmedabad", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Near university" },
// // // //   { id: 22, title: "Bungalow in Chandigarh", price: 90000000, city: "Chandigarh", area: 4000, beds: 5, type: "Bungalow", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Planned city" },
// // // //   { id: 23, title: "3BHK in Lucknow", price: 65000000, city: "Lucknow", area: 2000, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Heritage city" },
// // // //   { id: 24, title: "Villa in Mysore", price: 75000000, city: "Mysore", area: 3400, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Palace city" },
// // // //   { id: 25, title: "2BHK in Nagpur", price: 18000, city: "Nagpur", area: 1000, beds: 2, type: "Apartment", for: "rent", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b48a3?w=400", desc: "Central India" },
// // // //   { id: 26, title: "Farmhouse in Nashik", price: 50000000, city: "Nashik", area: 5500, beds: 6, type: "Farmhouse", for: "buy", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400", desc: "Vineyard nearby" },
// // // //   { id: 27, title: "1BHK in Bhopal", price: 15000000, city: "Bhopal", area: 700, beds: 1, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b48a3?w=400", desc: "Lake city" },
// // // // ];

// // // // const formatINR = (n) => {
// // // //   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
// // // // };

// // // // export default function BuySellPage() {
// // // //   const navigate = useNavigate();
// // // //   const [properties] = useState(MOCK_PROPERTIES);
// // // //   const { favorites, isFavorite, toggleFavorite } = useFavorites();

// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [currentFor, setCurrentFor] = useState('');
// // // //   const [currentBeds, setCurrentBeds] = useState(0);
// // // //   const [sortMode, setSortMode] = useState('reco');
// // // //   const [showDetail, setShowDetail] = useState(false);
// // // //   const [selectedProp, setSelectedProp] = useState(null);
// // // //   const [showContact, setShowContact] = useState(false);
// // // //   const [showFavorites, setShowFavorites] = useState(false);

// // // //   const qLocation = useRef('');
// // // //   const qType = useRef('');
// // // //   const qMin = useRef(0);
// // // //   const qMax = useRef(0);

// // // //   const matchFilters = (p) => {
// // // //     const loc = qLocation.current.toLowerCase();
// // // //     const type = qType.current;
// // // //     const min = parseInt(qMin.current || '0', 10);
// // // //     const max = parseInt(qMax.current || '0', 10);

// // // //     if (loc && !(p.city.toLowerCase().includes(loc) || p.title.toLowerCase().includes(loc))) return false;
// // // //     if (type && p.type !== type) return false;
// // // //     if (min && p.price < min) return false;
// // // //     if (max && p.price > max) return false;
// // // //     return true;
// // // //   };

// // // //   const getFiltered = () => {
// // // //     return properties.filter(p => {
// // // //       if (currentFor && p.for !== currentFor) return false;
// // // //       if (currentBeds && (currentBeds === 4 ? p.beds < 4 : p.beds !== currentBeds)) return false;
// // // //       return matchFilters(p);
// // // //     });
// // // //   };

// // // //   const sortList = (list, mode) => {
// // // //     const arr = [...list];
// // // //     if (mode === 'low') return arr.sort((a, b) => a.price - b.price);
// // // //     if (mode === 'high') return arr.sort((a, b) => b.price - a.price);
// // // //     return arr;
// // // //   };

// // // //   const filtered = sortList(getFiltered(), sortMode);
// // // //   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
// // // //   const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
// // // //   const favoriteProperties = filtered.filter(p => isFavorite(p.id));

// // // //   const openDetail = (prop) => { setSelectedProp(prop); setShowDetail(true); };
// // // //   const closeDetail = () => { setShowDetail(false); setSelectedProp(null); };
// // // //   const openContact = () => { closeDetail(); setShowContact(true); };
// // // //   const closeContact = () => setShowContact(false);
// // // //   const openFavorites = () => setShowFavorites(true);
// // // //   const closeFavorites = () => setShowFavorites(false);

// // // //   const handleSearch = (e) => { e.preventDefault(); setCurrentPage(1); };

// // // //   return (
// // // //     <>
// // // //       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
// // // //       <style jsx>{`
// // // //         body { font-family: 'Inter', sans-serif; }
// // // //         .card:hover { transform: translateY(-4px); }
// // // //       `}</style>

// // // //       <div className="min-h-screen bg-[#a4ac86] text-slate-800">
// // // //         {/* Header */}
// // // //         <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-6 md:mx-10 px-4 sm:px-6 md:px-10 py-4 bg-white/80 backdrop-blur sticky top-0 z-50 shadow">
// // // //           <button onClick={() => navigate("/")} className="flex items-center gap-1 text-[#582F0E] font-semibold hover:text-[#3d1f08]">
// // // //             <ChevronLeft className="w-5 h-5" /> Back to Home
// // // //           </button>
// // // //           <h1 className="text-2xl sm:text-3xl font-bold">UrbanNest360</h1>
// // // //           <div className="flex gap-3">
// // // //             <a href="#listings" className="text-white bg-black px-4 py-2 rounded-full text-sm">Browse Homes</a>
// // // //             <button onClick={openFavorites} className="text-white bg-black px-4 py-2 rounded-full text-sm flex items-center gap-1">
// // // //               <Heart className="w-4 h-4 fill-red-500 text-red-500" /> My Favorites ({favorites.length})
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Hero */}
// // // //         <section className="relative isolate overflow-hidden">
// // // //           <div className="absolute inset-0 -z-10">
// // // //             <img src="him.jpg" alt="Home" className="h-full w-full object-cover" />
// // // //             <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
// // // //           </div>
// // // //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
// // // //             <div className="relative z-10 px-4 text-center">
// // // //               <h1 className="text-5xl font-bold mb-4 drop-shadow-xl">FIND YOUR PERFECT HOME TODAY</h1>
// // // //               <p className="text-lg max-w-xl mx-auto drop-shadow-lg">
// // // //                 Search properties for sale and rent across top cities. Smart filters, instant tours, and verified listings.
// // // //               </p>
// // // //             </div>
// // // //             <div className="mt-6 bg-white/90 backdrop-blur rounded-2xl shadow-soft p-3 sm:p-4">
// // // //               <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
// // // //                 <div>
// // // //                   <label className="text-xs font-semibold text-slate-500">Location</label>
// // // //                   <input type="text" placeholder="City, area or landmark" onChange={(e) => qLocation.current = e.target.value} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#582F0E]" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="text-xs font-semibold text-slate-500">Type</label>
// // // //                   <select onChange={(e) => qType.current = e.target.value} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#582F0E]">
// // // //                     <option value="">Any</option>
// // // //                     <option>Apartment</option>
// // // //                     <option>Villa</option>
// // // //                     <option>Studio</option>
// // // //                     <option>Penthouse</option>
// // // //                     <option>Cottage</option>
// // // //                     <option>Farmhouse</option>
// // // //                   </select>
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="text-xs font-semibold text-slate-500">Min Price</label>
// // // //                   <input type="number" placeholder="₹ min" onChange={(e) => qMin.current = e.target.value} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#582F0E]" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="text-xs font-semibold text-slate-500">Max Price</label>
// // // //                   <input type="number" placeholder="₹ max" onChange={(e) => qMax.current = e.target.value} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#582F0E]" />
// // // //                 </div>
// // // //                 <div className="flex items-end">
// // // //                   <button type="submit" className="w-full rounded-xl bg-[#582F0E] hover:bg-[#3d1f08] text-white font-semibold py-2.5">Search</button>
// // // //                 </div>
// // // //               </form>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* Listings */}
// // // //         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="listings">
// // // //           <div className="flex flex-col lg:flex-row gap-8">
// // // //             <aside className="lg:w-64 flex-none bg-slate-50/60 border border-slate-200 rounded-2xl p-4 h-max sticky top-24">
// // // //               <h3 className="text-base font-bold">Filters</h3>
// // // //               <div className="mt-4 space-y-4 text-sm">
// // // //                 <div className="flex items-center justify-between">
// // // //                   <label className="font-medium">For</label>
// // // //                   <div className="flex gap-2">
// // // //                     <button onClick={() => setCurrentFor(prev => prev === 'buy' ? '' : 'buy')} className={`px-3 py-1 rounded-lg border ${currentFor === 'buy' ? 'bg-slate-900 text-white' : 'border-slate-200'}`}>Buy</button>
// // // //                     <button onClick={() => setCurrentFor(prev => prev === 'rent' ? '' : 'rent')} className={`px-3 py-1 rounded-lg border ${currentFor === 'rent' ? 'bg-slate-900 text-white' : 'border-slate-200'}`}>Rent</button>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="font-medium">Bedrooms</label>
// // // //                   <div className="mt-2 flex flex-wrap gap-2">
// // // //                     {[1,2,3,4].map(n => (
// // // //                       <button key={n} onClick={() => setCurrentBeds(prev => prev === n ? 0 : n)} className={`px-3 py-1 rounded-lg border ${currentBeds === n ? 'bg-slate-900 text-white' : 'border-slate-200'}`}>
// // // //                         {n === 4 ? '4+' : n}
// // // //                       </button>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="font-medium">Sort</label>
// // // //                   <select value={sortMode} onChange={(e) => { setSortMode(e.target.value); setCurrentPage(1); }} className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2">
// // // //                     <option value="reco">Recommended</option>
// // // //                     <option value="low">Price: Low to High</option>
// // // //                     <option value="high">Price: High to Low</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>
// // // //             </aside>

// // // //             <section className="flex-1 min-w-0">
// // // //               <div className="flex items-center justify-between mb-4">
// // // //                 <p className="text-sm text-slate-600"><span>{filtered.length}</span> places found</p>
// // // //                 <button className="text-sm underline">Show map</button>
// // // //               </div>
// // // //               <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
// // // //                 {paginated.map(p => (
// // // //                   <article key={p.id} className="card group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-soft transition-transform">
// // // //                     <div className="relative">
// // // //                       <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
// // // //                       <div className="absolute top-3 left-3 flex gap-2 text-xs">
// // // //                         <span className="px-2.5 py-1 rounded-full bg-white/90 border">{p.type}</span>
// // // //                         <span className="px-2.5 py-1 rounded-full bg-white/90 border">{p.beds} Beds</span>
// // // //                       </div>
// // // //                       <button onClick={() => toggleFavorite(p.id)} className="absolute top-3 right-3 p-1.5 bg-white/90 rounded-full">
// // // //                         <Heart className={`w-4 h-4 ${isFavorite(p.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
// // // //                       </button>
// // // //                       <button onClick={() => openDetail(p)} className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#582F0E] text-white text-xs hover:bg-[#3d1f08]">View</button>
// // // //                     </div>
// // // //                     <div className="p-4">
// // // //                       <h3 className="font-bold text-slate-900">{p.title}</h3>
// // // //                       <p className="text-sm text-slate-600">{p.city} • {p.area} sqft</p>
// // // //                       <div className="mt-2 flex items-center justify-between">
// // // //                         <div className="text-lg font-extrabold">{formatINR(p.price)}</div>
// // // //                         <div className="text-xs text-slate-600">For {p.for}</div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </article>
// // // //                 ))}
// // // //               </div>

// // // //               <div className="mt-8 flex justify-center gap-2">
// // // //                 <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-3 py-1.5 border rounded-lg disabled:opacity-50">Prev</button>
// // // //                 {Array.from({ length: totalPages }, (_, i) => (
// // // //                   <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1.5 border rounded-lg ${currentPage === i + 1 ? 'bg-slate-900 text-white' : ''}`}>{i + 1}</button>
// // // //                 ))}
// // // //                 <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-3 py-1.5 border rounded-lg disabled:opacity-50">Next</button>
// // // //               </div>
// // // //             </section>
// // // //           </div>
// // // //         </main>

// // // //         {/* Detail Modal */}
// // // //         {showDetail && selectedProp && (
// // // //           <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-4 z-50" onClick={closeDetail}>
// // // //             <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
// // // //               <div className="flex items-start justify-between p-4 border-b">
// // // //                 <h3 className="text-lg font-bold">{selectedProp.title}</h3>
// // // //                 <button onClick={closeDetail} className="text-slate-500 text-2xl">×</button>
// // // //               </div>
// // // //               <div className="grid md:grid-cols-2 gap-4 p-4">
// // // //                 <div>
// // // //                   <img src={selectedProp.img} alt="" className="w-full h-64 object-cover rounded-xl" />
// // // //                   <div className="mt-3 flex flex-wrap gap-2 text-xs">
// // // //                     {['Near metro', 'Gated security', 'Pet friendly'].map(t => (
// // // //                       <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100 border text-slate-700">{t}</span>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="space-y-3">
// // // //                   <div className="text-2xl font-extrabold">{formatINR(selectedProp.price)} • For {selectedProp.for}</div>
// // // //                   <div className="text-sm text-slate-600">{selectedProp.type} • {selectedProp.beds} Beds • {selectedProp.area} sqft • {selectedProp.city}</div>
// // // //                   <p className="text-sm">{selectedProp.desc}</p>
// // // //                   <button onClick={openContact} className="w-full rounded-lg bg-[#283618] text-white font-semibold py-2 hover:bg-[#1a2210]">Contact Owner</button>
// // // //                   <a href="#" className="inline-flex items-center justify-center w-full rounded-lg bg-[#283618] text-white font-semibold py-2 hover:bg-[#1a2210]">Book a tour</a>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* Favorites Modal */}
// // // //         {showFavorites && (
// // // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
// // // //             <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6">
// // // //               <div className="flex justify-between items-center mb-4">
// // // //                 <h2 className="text-2xl font-bold text-[#582F0E]">My Favorites ({favoriteProperties.length})</h2>
// // // //                 <button onClick={closeFavorites} className="text-2xl">×</button>
// // // //               </div>
// // // //               {favoriteProperties.length === 0 ? (
// // // //                 <p className="text-center text-gray-500 py-8">No favorites yet. Click hearts to save!</p>
// // // //               ) : (
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                   {favoriteProperties.map(p => (
// // // //                     <div key={p.id} className="border rounded-xl p-4 flex gap-4">
// // // //                       <img src={p.img} alt="" className="w-24 h-24 object-cover rounded-lg" />
// // // //                       <div className="flex-1">
// // // //                         <h3 className="font-semibold text-sm">{p.title}</h3>
// // // //                         <p className="text-xs text-gray-600">{p.city} • {p.area} sqft</p>
// // // //                         <p className="font-bold text-sm">{formatINR(p.price)}</p>
// // // //                         <button onClick={() => toggleFavorite(p.id)} className="text-red-500 text-xs mt-2">Remove</button>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {showContact && <PropertyModal onClose={closeContact} />}
// // // //       </div>
// // // //     </>
// // // //   );
// // // // // }
// // // // // src/pages/BuySellPage.jsx
// // // // import { useState, useRef } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { Heart } from "lucide-react";
// // // // import PropertyModal from '../components/PropertyModal.jsx';
// // // // import { useFavorites } from '../hooks/useFavorites';

// // // // const ITEMS_PER_PAGE = 9;

// // // // const MOCK_PROPERTIES = [
// // // //   { id: 1, title: "Luxury 3BHK in Bandra", price: 35000000, city: "Mumbai", area: 1200, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Premium apartment with sea view", address: "Bandra West, Mumbai, Maharashtra, India" },
// // // //   { id: 2, title: "Modern Villa in Koramangala", price: 85000000, city: "Bangalore", area: 3500, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Luxury villa with garden", address: "Koramangala, Bangalore, Karnataka, India" },
// // // //   { id: 3, title: "Cozy Studio in Pune", price: 4500000, city: "Pune", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Affordable studio near IT hub", address: "Viman Nagar, Pune, Maharashtra, India" },
// // // //   { id: 4, title: "Penthouse in Delhi", price: 120000000, city: "Delhi", area: 5000, beds: 6, type: "Penthouse", for: "buy", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400", desc: "Sky-high living", address: "Greater Kailash, Delhi, India" },
// // // //   { id: 5, title: "Riverside Cottage in Udaipur", price: 35000, city: "Udaipur", area: 1300, beds: 2, type: "Cottage", for: "rent", img: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg", desc: "Quaint riverside stay", address: "Lake Pichola, Udaipur, Rajasthan, India" },
// // // //   { id: 6, title: "Beachfront Villa in Goa", price: 75000000, city: "Goa", area: 3000, beds: 4, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400", desc: "Ocean views, private pool", address: "Calangute Beach, Goa, India" },
// // // //   { id: 7, title: "1BHK in Andheri", price: 18000000, city: "Mumbai", area: 650, beds: 1, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b48a3?w=400", desc: "Compact and modern", address: "Andheri East, Mumbai, Maharashtra, India" },
// // // //   { id: 8, title: "Heritage Bungalow in Jaipur", price: 65000000, city: "Jaipur", area: 4000, beds: 5, type: "Bungalow", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Royal architecture", address: "Civil Lines, Jaipur, Rajasthan, India" },
// // // //   { id: 9, title: "2BHK in Indiranagar", price: 22000000, city: "Bangalore", area: 1100, beds: 2, type: "Apartment", for: "rent", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Near cafes and parks", address: "Indiranagar, Bangalore, Karnataka, India" },
// // // //   { id: 10, title: "Farmhouse in Lonavala", price: 45000000, city: "Lonavala", area: 6000, beds: 6, type: "Farmhouse", for: "buy", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400", desc: "Weekend getaway", address: "Lonavala, Pune, Maharashtra, India" },
// // // //   { id: 11, title: "Studio in Viman Nagar", price: 28000, city: "Pune", area: 400, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Fully furnished", address: "Viman Nagar, Pune, Maharashtra, India" },
// // // //   { id: 12, title: "4BHK in Noida", price: 95000000, city: "Noida", area: 2800, beds: 4, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Gated society", address: "Sector 62, Noida, Uttar Pradesh, India" },
// // // //   { id: 13, title: "Duplex in Hyderabad", price: 70000000, city: "Hyderabad", area: 3200, beds: 5, type: "Duplex", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Modern duplex", address: "Banjara Hills, Hyderabad, Telangana, India" },
// // // //   { id: 14, title: "1RK in Thane", price: 12000, city: "Thane", area: 300, beds: 1, type: "1RK", for: "rent", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b48a3?w=400", desc: "Budget friendly", address: "Thane West, Mumbai, Maharashtra, India" },
// // // //   { id: 15, title: "Row House in Surat", price: 55000000, city: "Surat", area: 2200, beds: 4, type: "Row House", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Peaceful locality", address: "Vesu, Surat, Gujarat, India" },
// // // //   { id: 16, title: "3BHK in Chennai", price: 60000000, city: "Chennai", area: 1800, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Near beach", address: "Adyar, Chennai, Tamil Nadu, India" },
// // // //   { id: 17, title: "Villa in Coimbatore", price: 80000000, city: "Coimbatore", area: 3600, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Green surroundings", address: "RS Puram, Coimbatore, Tamil Nadu, India" },
// // // //   { id: 18, title: "2BHK in Gurgaon", price: 35000, city: "Gurgaon", area: 1200, beds: 2, type: "Apartment", for: "rent", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b48a3?w=400", desc: "Corporate hub", address: "Sector 56, Gurgaon, Haryana, India" },
// // // //   { id: 19, title: "Penthouse in Kolkata", price: 110000000, city: "Kolkata", area: 4800, beds: 6, type: "Penthouse", for: "buy", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400", desc: "River view", address: "Alipore, Kolkata, West Bengal, India" },
// // // //   { id: 20, title: "Cottage in Shimla", price: 30000, city: "Shimla", area: 1000, beds: 2, type: "Cottage", for: "rent", img: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg", desc: "Hill station retreat", address: "Mall Road, Shimla, Himachal Pradesh, India" },
// // // //   { id: 21, title: "Studio in Ahmedabad", price: 25000, city: "Ahmedabad", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Near university", address: "Navrangpura, Ahmedabad, Gujarat, India" },
// // // //   { id: 22, title: "Bungalow in Chandigarh", price: 90000000, city: "Chandigarh", area: 4000, beds: 5, type: "Bungalow", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Planned city", address: "Sector 8, Chandigarh, India" },
// // // //   { id: 23, title: "3BHK in Lucknow", price: 65000000, city: "Lucknow", area: 2000, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Heritage city", address: "Gomti Nagar, Lucknow, Uttar Pradesh, India" },
// // // //   { id: 24, title: "Villa in Mysore", price: 75000000, city: "Mysore", area: 3400, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Palace city", address: "Vijayanagar, Mysore, Karnataka, India" },
// // // //   { id: 25, title: "2BHK in Nagpur", price: 18000, city: "Nagpur", area: 1000, beds: 2, type: "Apartment", for: "rent", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b48a3?w=400", desc: "Central India", address: "Dharampeth, Nagpur, Maharashtra, India" },
// // // //   { id: 26, title: "Farmhouse in Nashik", price: 50000000, city: "Nashik", area: 5500, beds: 6, type: "Farmhouse", for: "buy", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400", desc: "Vineyard nearby", address: "Gangapur Road, Nashik, Maharashtra, India" },
// // // //   { id: 27, title: "1BHK in Bhopal", price: 15000000, city: "Bhopal", area: 700, beds: 1, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b48a3?w=400", desc: "Lake city", address: "MP Nagar, Bhopal, Madhya Pradesh, India" },
// // // // ];

// // // // const formatINR = (n) => {
// // // //   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
// // // // };

// // // // export default function BuySellPage() {
// // // //   const navigate = useNavigate();
// // // //   const [properties] = useState(MOCK_PROPERTIES);
// // // //   const { favorites, isFavorite, toggleFavorite } = useFavorites();

// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [currentFor, setCurrentFor] = useState('');
// // // //   const [currentBeds, setCurrentBeds] = useState(0);
// // // //   const [sortMode, setSortMode] = useState('reco');
// // // //   const [showDetail, setShowDetail] = useState(false);
// // // //   const [selectedProp, setSelectedProp] = useState(null);
// // // //   const [showContact, setShowContact] = useState(false);
// // // //   const [showFavorites, setShowFavorites] = useState(false);
// // // //   const [showMap, setShowMap] = useState(false);
// // // //   const [mapUrl, setMapUrl] = useState('');
// // // //   const [mapLoading, setMapLoading] = useState(false);

// // // //   // Filter refs
// // // //   const qLocation = useRef('');
// // // //   const qType = useRef('');
// // // //   const qBuyMin = useRef(0);
// // // //   const qBuyMax = useRef(0);
// // // //   const qRentMin = useRef(0);
// // // //   const qRentMax = useRef(0);

// // // //   const loadMap = async (address) => {
// // // //     setMapLoading(true);
// // // //     try {
// // // //       const res = await fetch(
// // // //         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`,
// // // //         { headers: { 'User-Agent': 'UrbanNest360/1.0' } }
// // // //       );
// // // //       const data = await res.json();

// // // //       if (data && data[0]) {
// // // //         const lat = Number(data[0].lat);
// // // //         const lon = Number(data[0].lon);
// // // //         if (!isNaN(lat) && !isNaN(lon)) {
// // // //           const bbox = `${lon - 0.01},${lat - 0.01},${lon + 0.01},${lat + 0.01}`;
// // // //           const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
// // // //           setMapUrl(embedUrl);
// // // //           setShowMap(true);
// // // //         } else {
// // // //           alert("Invalid coordinates.");
// // // //         }
// // // //       } else {
// // // //         alert("Location not found.");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Map Error:", error);
// // // //       alert("Failed to load map.");
// // // //     } finally {
// // // //       setMapLoading(false);
// // // //     }
// // // //   };

// // // //   const matchFilters = (p) => {
// // // //     const loc = qLocation.current.toLowerCase();
// // // //     const type = qType.current;
// // // //     const isBuy = p.for === 'buy';
// // // //     const min = isBuy ? parseInt(qBuyMin.current || '0', 10) : parseInt(qRentMin.current || '0', 10);
// // // //     const max = isBuy ? parseInt(qBuyMax.current || '0', 10) : parseInt(qRentMax.current || '0', 10);

// // // //     if (loc && !(p.city.toLowerCase().includes(loc) || p.title.toLowerCase().includes(loc))) return false;
// // // //     if (type && p.type !== type) return false;
// // // //     if (min && p.price < min) return false;
// // // //     if (max && p.price > max) return false;
// // // //     return true;
// // // //   };

// // // //   const getFiltered = () => {
// // // //     return properties.filter(p => {
// // // //       if (currentFor && p.for !== currentFor) return false;
// // // //       if (currentBeds && (currentBeds === 4 ? p.beds < 4 : p.beds !== currentBeds)) return false;
// // // //       return matchFilters(p);
// // // //     });
// // // //   };

// // // //   const sortList = (list, mode) => {
// // // //     const arr = [...list];
// // // //     if (mode === 'low') return arr.sort((a, b) => a.price - b.price);
// // // //     if (mode === 'high') return arr.sort((a, b) => b.price - a.price);
// // // //     return arr;
// // // //   };

// // // //   const filtered = sortList(getFiltered(), sortMode);
// // // //   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
// // // //   const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
// // // //   const favoriteProperties = filtered.filter(p => isFavorite(p.id));

// // // //   const openDetail = (prop) => { setSelectedProp(prop); setShowDetail(true); };
// // // //   const closeDetail = () => { setShowDetail(false); setSelectedProp(null); };
// // // //   const openContact = () => { closeDetail(); setShowContact(true); };
// // // //   const closeContact = () => setShowContact(false);
// // // //   const openFavorites = () => setShowFavorites(true);
// // // //   const closeFavorites = () => setShowFavorites(false);
// // // //   const closeMap = () => setShowMap(false);

// // // //   // Reset price filters when switching
// // // //   const handleForChange = (newFor) => {
// // // //     setCurrentFor(prev => prev === newFor ? '' : newFor);
// // // //     if (newFor === 'buy') {
// // // //       qRentMin.current = ''; qRentMax.current = '';
// // // //     } else if (newFor === 'rent') {
// // // //       qBuyMin.current = ''; qBuyMax.current = '';
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800;900&display=swap" rel="stylesheet" />
// // // //       <style jsx>{`
// // // //         body { font-family: 'Inter', sans-serif; }
// // // //         h1, h2, h3, h4, .font-playfair { font-family: 'Playfair Display', serif; }
// // // //         .card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }
// // // //       `}</style>

// // // //       <div className="min-h-screen bg-gradient-to-br from-[#f1f8e9] to-[#d4e157] text-slate-800">
// // // //         {/* NAVBAR */}
// // // //         <nav className="bg-white shadow-md sticky top-0 z-50">
// // // //           <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
// // // //             <button onClick={() => navigate("/")} className="text-[#582F0E] font-medium hover:text-[#3d1f08] transition">
// // // //               Back to Home
// // // //             </button>
// // // //             <div className="flex gap-4">
// // // //               <a href="#listings" className="bg-[#283618] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2210] transition">
// // // //                 Browse Homes
// // // //               </a>
// // // //               <button onClick={openFavorites} className="bg-[#606C38] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#4a552c] transition">
// // // //                 Favorites ({favorites.length})
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </nav>

// // // //         {/* HERO */}
// // // //         <section className="relative isolate overflow-hidden">
// // // //           <div className="absolute inset-0 -z-10">
// // // //             <img src="him.jpg" alt="Home" className="h-full w-full object-cover brightness-75" />
// // // //             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
// // // //           </div>
// // // //           <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
// // // //             <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl font-playfair">
// // // //               Find Your Perfect Home
// // // //             </h1>
// // // //             <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
// // // //               Explore verified properties for sale and rent across India's top cities.
// // // //             </p>
// // // //           </div>
// // // //         </section>

// // // //         {/* LISTINGS */}
// // // //         <main className="max-w-7xl mx-auto px-6 py-12" id="listings">
// // // //           <div className="flex flex-col lg:flex-row gap-8">
// // // //             {/* FILTERS - SEGREGATED */}
// // // //             <aside className="lg:w-72 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 h-max sticky top-28">
// // // //               <h3 className="text-xl font-bold text-slate-900 mb-5 font-playfair">Filters</h3>
// // // //               <div className="space-y-6 text-sm">

// // // //                 {/* Buy / Rent Tabs */}
// // // //                 <div>
// // // //                   <label className="font-semibold text-slate-700">Property For</label>
// // // //                   <div className="flex gap-2 mt-2">
// // // //                     <button onClick={() => handleForChange('buy')} className={`flex-1 py-2.5 rounded-lg font-medium transition ${currentFor === 'buy' ? 'bg-[#283618] text-white' : 'bg-white border border-slate-300'}`}>
// // // //                       Buy
// // // //                     </button>
// // // //                     <button onClick={() => handleForChange('rent')} className={`flex-1 py-2.5 rounded-lg font-medium transition ${currentFor === 'rent' ? 'bg-[#283618] text-white' : 'bg-white border border-slate-300'}`}>
// // // //                       Rent
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Price Range - Buy */}
// // // //                 {currentFor === 'buy' && (
// // // //                   <div className="space-y-3 p-3 bg-emerald-50 rounded-lg">
// // // //                     <p className="font-semibold text-[#283618]">Price Range (Buy)</p>
// // // //                     <div className="grid grid-cols-2 gap-2">
// // // //                       <input
// // // //                         type="number"
// // // //                         placeholder="Min (₹)"
// // // //                         onChange={(e) => qBuyMin.current = e.target.value}
// // // //                         className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#283618]"
// // // //                       />
// // // //                       <input
// // // //                         type="number"
// // // //                         placeholder="Max (₹)"
// // // //                         onChange={(e) => qBuyMax.current = e.target.value}
// // // //                         className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#283618]"
// // // //                       />
// // // //                     </div>
// // // //                     <small className="text-xs text-slate-600">e.g. 50,00,000 for 50 Lakhs</small>
// // // //                   </div>
// // // //                 )}

// // // //                 {/* Price Range - Rent */}
// // // //                 {currentFor === 'rent' && (
// // // //                   <div className="space-y-3 p-3 bg-amber-50 rounded-lg">
// // // //                     <p className="font-semibold text-[#606C38]">Monthly Rent (₹)</p>
// // // //                     <div className="grid grid-cols-2 gap-2">
// // // //                       <input
// // // //                         type="number"
// // // //                         placeholder="Min"
// // // //                         onChange={(e) => qRentMin.current = e.target.value}
// // // //                         className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#606C38]"
// // // //                       />
// // // //                       <input
// // // //                         type="number"
// // // //                         placeholder="Max"
// // // //                         onChange={(e) => qRentMax.current = e.target.value}
// // // //                         className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#606C38]"
// // // //                       />
// // // //                     </div>
// // // //                     <small className="text-xs text-slate-600">e.g. 25000 for ₹25K/month</small>
// // // //                   </div>
// // // //                 )}

// // // //                 {/* Bedrooms */}
// // // //                 <div>
// // // //                   <label className="font-semibold text-slate-700">Bedrooms</label>
// // // //                   <div className="mt-2 flex flex-wrap gap-2">
// // // //                     {[1, 2, 3, 4].map(n => (
// // // //                       <button
// // // //                         key={n}
// // // //                         onClick={() => setCurrentBeds(prev => prev === n ? 0 : n)}
// // // //                         className={`px-4 py-1.5 rounded-lg font-medium transition ${currentBeds === n ? 'bg-[#606C38] text-white' : 'bg-white border border-slate-300'}`}
// // // //                       >
// // // //                         {n === 4 ? '4+' : n}
// // // //                       </button>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Property Type */}
// // // //                 <div>
// // // //                   <label className="font-semibold text-slate-700">Property Type</label>
// // // //                   <select
// // // //                     onChange={(e) => qType.current = e.target.value}
// // // //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // // //                   >
// // // //                     <option value="">Any</option>
// // // //                     <option>Apartment</option>
// // // //                     <option>Villa</option>
// // // //                     <option>Studio</option>
// // // //                     <option>Penthouse</option>
// // // //                     <option>Cottage</option>
// // // //                     <option>Farmhouse</option>
// // // //                   </select>
// // // //                 </div>

// // // //                 {/* Sort */}
// // // //                 <div>
// // // //                   <label className="font-semibold text-slate-700">Sort By</label>
// // // //                   <select
// // // //                     value={sortMode}
// // // //                     onChange={(e) => { setSortMode(e.target.value); setCurrentPage(1); }}
// // // //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // // //                   >
// // // //                     <option value="reco">Recommended</option>
// // // //                     <option value="low">Price: Low to High</option>
// // // //                     <option value="high">Price: High to Low</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>
// // // //             </aside>

// // // //             {/* PROPERTY GRID */}
// // // //             <section className="flex-1">
// // // //               <div className="flex items-center justify-between mb-6">
// // // //                 <p className="text-sm text-slate-600 font-medium">
// // // //                   <span className="font-bold text-slate-900 font-playfair">{filtered.length}</span> properties found
// // // //                 </p>
// // // //               </div>

// // // //               <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
// // // //                 {paginated.map(p => (
// // // //                   <article key={p.id} className="card group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-slate-200">
// // // //                     <div className="relative h-48 overflow-hidden">
// // // //                       <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
// // // //                       <div className="absolute top-3 left-3 flex gap-2 text-xs font-medium">
// // // //                         <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full border">{p.type}</span>
// // // //                         <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full border">{p.beds} Bed{p.beds > 1 ? 's' : ''}</span>
// // // //                       </div>
// // // //                       <button onClick={() => toggleFavorite(p.id)} className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full shadow-md transition">
// // // //                         <Heart className={`w-4 h-4 transition ${isFavorite(p.id) ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
// // // //                       </button>
// // // //                       <button onClick={() => openDetail(p)} className="absolute bottom-3 right-3 px-4 py-1.5 bg-[#582F0E] text-white text-xs font-medium rounded-lg hover:bg-[#3d1f08] transition">
// // // //                         View Details
// // // //                       </button>
// // // //                     </div>
// // // //                     <div className="p-5">
// // // //                       <h3 className="font-bold text-lg text-slate-900 line-clamp-1 font-playfair">{p.title}</h3>
// // // //                       <p className="text-sm text-slate-600 mt-1">{p.city} • {p.area} sqft</p>
// // // //                       <div className="mt-3 flex items-center justify-between">
// // // //                         <div className="text-xl font-extrabold text-[#283618] font-playfair">{formatINR(p.price)}</div>
// // // //                         <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">For {p.for}</span>
// // // //                       </div>
// // // //                     </div>
// // // //                   </article>
// // // //                 ))}
// // // //               </div>

// // // //               {/* Pagination */}
// // // //               <div className="mt-10 flex justify-center gap-2">
// // // //                 <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">
// // // //                   Previous
// // // //                 </button>
// // // //                 {Array.from({ length: totalPages }, (_, i) => (
// // // //                   <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-4 py-2 rounded-lg font-medium transition ${currentPage === i + 1 ? 'bg-[#283618] text-white' : 'border hover:bg-slate-50'}`}>
// // // //                     {i + 1}
// // // //                   </button>
// // // //                 ))}
// // // //                 <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">
// // // //                   Next
// // // //                 </button>
// // // //               </div>
// // // //             </section>
// // // //           </div>
// // // //         </main>

// // // //         {/* MODALS */}
// // // //         {showDetail && selectedProp && (
// // // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={closeDetail}>
// // // //             <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
// // // //               <div className="flex justify-between items-center p-5 border-b">
// // // //                 <h3 className="text-2xl font-bold text-slate-900 font-playfair">{selectedProp.title}</h3>
// // // //                 <button onClick={closeDetail} className="text-3xl text-slate-500 hover:text-slate-700">&times;</button>
// // // //               </div>
// // // //               <div className="grid md:grid-cols-2 gap-5 p-5">
// // // //                 <div>
// // // //                   <img src={selectedProp.img} alt="" className="w-full h-64 object-cover rounded-xl" />
// // // //                   <div className="mt-3 flex flex-wrap gap-2 text-xs">
// // // //                     {['Near metro', 'Gated security', 'Pet friendly'].map(t => (
// // // //                       <span key={t} className="px-3 py-1.5 rounded-full bg-slate-100 border text-slate-700 font-medium">{t}</span>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="space-y-4">
// // // //                   <div className="text-3xl font-extrabold text-[#283618] font-playfair">{formatINR(selectedProp.price)}</div>
// // // //                   <p className="text-sm text-slate-600">{selectedProp.type} • {selectedProp.beds} Bed • {selectedProp.area} sqft • {selectedProp.city}</p>
// // // //                   <p className="text-sm leading-relaxed">{selectedProp.desc}</p>
// // // //                   <button onClick={openContact} className="w-full bg-[#283618] text-white py-3 rounded-lg font-semibold hover:bg-[#1a2210] transition">
// // // //                     Contact Owner
// // // //                   </button>
// // // //                   <button onClick={() => loadMap(selectedProp.address)} className="w-full bg-[#606C38] text-white py-3 rounded-lg font-semibold hover:bg-[#4a552c] transition">
// // // //                     Show on Map
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {showMap && (
// // // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={closeMap}>
// // // //             <div className="bg-white rounded-2xl w-full max-w-4xl h-[70vh] flex flex-col" onClick={e => e.stopPropagation()}>
// // // //               <div className="flex items-center justify-between p-5 border-b">
// // // //                 <h3 className="text-xl font-bold font-playfair">Property Location</h3>
// // // //                 <button onClick={closeMap} className="text-3xl">&times;</button>
// // // //               </div>
// // // //               <div className="flex-1 p-5">
// // // //                 {mapLoading ? (
// // // //                   <div className="flex items-center justify-center h-full">
// // // //                     <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#582F0E]"></div>
// // // //                   </div>
// // // //                 ) : (
// // // //                   <iframe src={mapUrl} className="w-full h-full rounded-lg border-0" allowFullScreen loading="lazy" title="Map" />
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {showFavorites && (
// // // //           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
// // // //             <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6">
// // // //               <div className="flex justify-between items-center mb-5">
// // // //                 <h2 className="text-3xl font-bold text-[#283618] font-playfair">My Favorites ({favoriteProperties.length})</h2>
// // // //                 <button onClick={closeFavorites} className="text-3xl">&times;</button>
// // // //               </div>
// // // //               {favoriteProperties.length === 0 ? (
// // // //                 <p className="text-center text-gray-500 py-12 text-lg">No favorites yet.</p>
// // // //               ) : (
// // // //                 <div className="grid md:grid-cols-2 gap-5">
// // // //                   {favoriteProperties.map(p => (
// // // //                     <div key={p.id} className="border rounded-xl p-4 flex gap-4 hover:shadow-md transition">
// // // //                       <img src={p.img} alt="" className="w-28 h-28 object-cover rounded-lg" />
// // // //                       <div className="flex-1">
// // // //                         <h3 className="font-bold text-sm font-playfair">{p.title}</h3>
// // // //                         <p className="text-xs text-gray-600 mt-1">{p.city} • {p.area} sqft</p>
// // // //                         <p className="font-extrabold text-sm mt-1 text-[#283618] font-playfair">{formatINR(p.price)}</p>
// // // //                         <button onClick={() => toggleFavorite(p.id)} className="text-red-500 text-xs mt-2 font-medium hover:underline">
// // // //                           Remove
// // // //                         </button>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {showContact && <PropertyModal onClose={closeContact} />}
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // // src/pages/BuySellPage.jsx
// // // import { useState, useRef } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Heart } from "lucide-react";
// // // import PropertyModal from '../components/PropertyModal.jsx';
// // // import { useFavorites } from '../hooks/useFavorites';

// // // const ITEMS_PER_PAGE = 9;

// // // const MOCK_PROPERTIES = [
// // //   { id: 1, title: "Luxury 3BHK in Bandra", price: 35000000, city: "Mumbai", area: 1200, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Premium apartment with sea view", address: "Bandra West, Mumbai, Maharashtra, India" },
// // //   { id: 2, title: "Modern Villa in Koramangala", price: 85000000, city: "Bangalore", area: 3500, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Luxury villa with garden", address: "Koramangala, Bangalore, Karnataka, India" },
// // //   { id: 3, title: "Cozy Studio in Pune", price: 4500000, city: "Pune", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Affordable studio near IT hub", address: "Viman Nagar, Pune, Maharashtra, India" },
// // //   { id: 4, title: "Penthouse in Delhi", price: 120000000, city: "Delhi", area: 5000, beds: 6, type: "Penthouse", for: "buy", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400", desc: "Sky-high living", address: "Greater Kailash, Delhi, India" },
// // //   { id: 5, title: "Riverside Cottage in Udaipur", price: 35000, city: "Udaipur", area: 1300, beds: 2, type: "Cottage", for: "rent", img: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg", desc: "Quaint riverside stay", address: "Lake Pichola, Udaipur, Rajasthan, India" },
// // //   { id: 6, title: "Beachfront Villa in Goa", price: 75000000, city: "Goa", area: 3000, beds: 4, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400", desc: "Ocean views, private pool", address: "Calangute Beach, Goa, India" },
// // //   { id: 7, title: "1BHK in Andheri", price: 18000000, city: "Mumbai", area: 650, beds: 1, type: "Apartment", for: "buy", img: "https://www.livehomes.in/public/image/newsletters/10890138121717133585.jpg", desc: "Compact and modern", address: "Andheri East, Mumbai, Maharashtra, India" },
// // //   { id: 8, title: "Heritage Bungalow in Jaipur", price: 65000000, city: "Jaipur", area: 4000, beds: 5, type: "Bungalow", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Royal architecture", address: "Civil Lines, Jaipur, Rajasthan, India" },
// // //   { id: 9, title: "2BHK in Indiranagar", price: 22000000, city: "Bangalore", area: 1100, beds: 2, type: "Apartment", for: "rent", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Near cafes and parks", address: "Indiranagar, Bangalore, Karnataka, India" },
// // //   { id: 10, title: "Farmhouse in Lonavala", price: 45000000, city: "Lonavala", area: 6000, beds: 6, type: "Farmhouse", for: "buy", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400", desc: "Weekend getaway", address: "Lonavala, Pune, Maharashtra, India" },
// // //   { id: 11, title: "Studio in Viman Nagar", price: 28000, city: "Pune", area: 400, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Fully furnished", address: "Viman Nagar, Pune, Maharashtra, India" },
// // //   { id: 12, title: "4BHK in Noida", price: 95000000, city: "Noida", area: 2800, beds: 4, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Gated society", address: "Sector 62, Noida, Uttar Pradesh, India" },
// // //   { id: 13, title: "Duplex in Hyderabad", price: 70000000, city: "Hyderabad", area: 3200, beds: 5, type: "Duplex", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Modern duplex", address: "Banjara Hills, Hyderabad, Telangana, India" },
// // //   { id: 14, title: "1RK in Thane", price: 12000, city: "Thane", area: 300, beds: 1, type: "1RK", for: "rent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfu3A7wxJXWxZJeJ5trNNrSnyyVycSApRCalzP1top5dv-pIXIWGnQlvz-5balSDhfh2c&usqp=CAU", desc: "Budget friendly", address: "Thane West, Mumbai, Maharashtra, India" },
// // //   { id: 15, title: "Row House in Surat", price: 55000000, city: "Surat", area: 2200, beds: 4, type: "Row House", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Peaceful locality", address: "Vesu, Surat, Gujarat, India" },
// // //   { id: 16, title: "3BHK in Chennai", price: 60000000, city: "Chennai", area: 1800, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Near beach", address: "Adyar, Chennai, Tamil Nadu, India" },
// // //   { id: 17, title: "Villa in Coimbatore", price: 80000000, city: "Coimbatore", area: 3600, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Green surroundings", address: "RS Puram, Coimbatore, Tamil Nadu, India" },
// // //   { id: 18, title: "2BHK in Gurgaon", price: 35000, city: "Gurgaon", area: 1200, beds: 2, type: "Apartment", for: "rent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhbNhdVK27x4Xh46p3-d9ckz-Iq4XRaviqw&s", desc: "Corporate hub", address: "Sector 56, Gurgaon, Haryana, India" },
// // //   { id: 19, title: "Penthouse in Kolkata", price: 110000000, city: "Kolkata", area: 4800, beds: 6, type: "Penthouse", for: "buy", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400", desc: "River view", address: "Alipore, Kolkata, West Bengal, India" },
// // //   { id: 20, title: "Cottage in Shimla", price: 30000, city: "Shimla", area: 1000, beds: 2, type: "Cottage", for: "rent", img: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg", desc: "Hill station retreat", address: "Mall Road, Shimla, Himachal Pradesh, India" },
// // //   { id: 21, title: "Studio in Ahmedabad", price: 25000, city: "Ahmedabad", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Near university", address: "Navrangpura, Ahmedabad, Gujarat, India" },
// // //   { id: 22, title: "Bungalow in Chandigarh", price: 90000000, city: "Chandigarh", area: 4000, beds: 5, type: "Bungalow", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Planned city", address: "Sector 8, Chandigarh, India" },
// // //   { id: 23, title: "3BHK in Lucknow", price: 65000000, city: "Lucknow", area: 2000, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Heritage city", address: "Gomti Nagar, Lucknow, Uttar Pradesh, India" },
// // //   { id: 24, title: "Villa in Mysore", price: 75000000, city: "Mysore", area: 3400, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Palace city", address: "Vijayanagar, Mysore, Karnataka, India" },
// // //   { id: 25, title: "2BHK in Nagpur", price: 18000, city: "Nagpur", area: 1000, beds: 2, type: "Apartment", for: "rent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYB_QPB1kNqp0wtgH-fMtgU4IoBIT-RHBrxw&s", desc: "Central India", address: "Dharampeth, Nagpur, Maharashtra, India" },
// // //   { id: 26, title: "Farmhouse in Nashik", price: 50000000, city: "Nashik", area: 5500, beds: 6, type: "Farmhouse", for: "buy", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400", desc: "Vineyard nearby", address: "Gangapur Road, Nashik, Maharashtra, India" },
// // //   { id: 27, title: "1BHK in Bhopal", price: 15000000, city: "Bhopal", area: 700, beds: 1, type: "Apartment", for: "buy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdSXiVDqMOpL1zlfp207w3b6CvpmUroMbri_jUmD5bOyyC2eVobVZRXIdMMciO1YzwQA&usqp=CAU", desc: "Lake city", address: "MP Nagar, Bhopal, Madhya Pradesh, India" },
// // // ];

// // // const formatINR = (n) => {
// // //   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
// // // };

// // // export default function BuySellPage() {
// // //   const navigate = useNavigate();
// // //   const [properties] = useState(MOCK_PROPERTIES);
// // //   const { favorites, isFavorite, toggleFavorite } = useFavorites();

// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [currentFor, setCurrentFor] = useState('');
// // //   const [currentBeds, setCurrentBeds] = useState(0);
// // //   const [sortMode, setSortMode] = useState('reco');
// // //   const [showDetail, setShowDetail] = useState(false);
// // //   const [selectedProp, setSelectedProp] = useState(null);
// // //   const [showContact, setShowContact] = useState(false);
// // //   const [showFavorites, setShowFavorites] = useState(false);
// // //   const [showMap, setShowMap] = useState(false);
// // //   const [mapUrl, setMapUrl] = useState('');
// // //   const [mapLoading, setMapLoading] = useState(false);
// // //   const [contactPropTitle, setContactPropTitle] = useState("");

  
// // //   const qLocation = useRef('');
// // //   const qType = useRef('');
// // //   const qBuyMin = useRef(0);
// // //   const qBuyMax = useRef(0);
// // //   const qRentMin = useRef(0);
// // //   const qRentMax = useRef(0);

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
// // //     const type = qType.current;
// // //     const isBuy = p.for === 'buy';
// // //     const min = isBuy ? parseInt(qBuyMin.current || '0', 10) : parseInt(qRentMin.current || '0', 10);
// // //     const max = isBuy ? parseInt(qBuyMax.current || '0', 10) : parseInt(qRentMax.current || '0', 10);

// // //     if (loc && !(p.city.toLowerCase().includes(loc) || p.title.toLowerCase().includes(loc))) return false;
// // //     if (type && p.type !== type) return false;
// // //     if (min && p.price < min) return false;
// // //     if (max && p.price > max) return false;
// // //     return true;
// // //   };

// // //   const getFiltered = () => {
// // //     return properties.filter(p => {
// // //       if (currentFor && p.for !== currentFor) return false;
// // //       if (currentBeds && (currentBeds === 4 ? p.beds < 4 : p.beds !== currentBeds)) return false;
// // //       return matchFilters(p);
// // //     });
// // //   };

// // //   const sortList = (list, mode) => {
// // //     const arr = [...list];
// // //     if (mode === 'low') return arr.sort((a, b) => a.price - b.price);
// // //     if (mode === 'high') return arr.sort((a, b) => b.price - a.price);
// // //     return arr;
// // //   };

// // //   const filtered = sortList(getFiltered(), sortMode);
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


// // //   const handleForChange = (newFor) => {
// // //     setCurrentFor(prev => prev === newFor ? '' : newFor);
// // //     if (newFor === 'buy') {
// // //       qRentMin.current = ''; qRentMax.current = '';
// // //     } else if (newFor === 'rent') {
// // //       qBuyMin.current = ''; qBuyMax.current = '';
// // //     }
// // //   };

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
// // //             <img src="/him.jpg" alt="Home" className="h-full w-full object-cover brightness-75" />
// // //             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
// // //           </div>
// // //           <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
// // //             <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl font-playfair">
// // //               Find Your Perfect Home
// // //             </h1>
// // //             <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
// // //               Explore verified properties for sale and rent across India's top cities.
// // //             </p>
// // //           </div>
// // //         </section>

        
// // //         <main className="max-w-7xl mx-auto px-6 py-12" id="listings">
// // //           <div className="flex flex-col lg:flex-row gap-8">
            
// // //             <aside className="lg:w-72 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 h-max sticky top-28">
// // //               <h3 className="text-xl font-bold text-slate-900 mb-5 font-playfair">Filters</h3>
// // //               <div className="space-y-6 text-sm">

                
// // //                 <div>
// // //                   <label className="font-semibold text-slate-700">Property For</label>
// // //                   <div className="flex gap-2 mt-2">
// // //                     <button onClick={() => handleForChange('buy')} className={`flex-1 py-2.5 rounded-lg font-medium transition ${currentFor === 'buy' ? 'bg-[#283618] text-white' : 'bg-white border border-slate-300'}`}>
// // //                       Buy
// // //                     </button>
// // //                     <button onClick={() => handleForChange('rent')} className={`flex-1 py-2.5 rounded-lg font-medium transition ${currentFor === 'rent' ? 'bg-[#283618] text-white' : 'bg-white border border-slate-300'}`}>
// // //                       Rent
// // //                     </button>
// // //                   </div>
// // //                 </div>


// // //                 {currentFor === 'buy' && (
// // //                   <div className="space-y-3 p-3 bg-emerald-50 rounded-lg">
// // //                     <p className="font-semibold text-[#283618]">Price Range (Buy)</p>
// // //                     <div className="grid grid-cols-2 gap-2">
// // //                       <input
// // //                         type="number"
// // //                         placeholder="Min (₹)"
// // //                         onChange={(e) => qBuyMin.current = e.target.value}
// // //                         className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#283618]"
// // //                       />
// // //                       <input
// // //                         type="number"
// // //                         placeholder="Max (₹)"
// // //                         onChange={(e) => qBuyMax.current = e.target.value}
// // //                         className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#283618]"
// // //                       />
// // //                     </div>
// // //                     <small className="text-xs text-slate-600">e.g. 50,00,000 for 50 Lakhs</small>
// // //                   </div>
// // //                 )}

                
// // //                 {currentFor === 'rent' && (
// // //                   <div className="space-y-3 p-3 bg-amber-50 rounded-lg">
// // //                     <p className="font-semibold text-[#606C38]">Monthly Rent (₹)</p>
// // //                     <div className="grid grid-cols-2 gap-2">
// // //                       <input
// // //                         type="number"
// // //                         placeholder="Min"
// // //                         onChange={(e) => qRentMin.current = e.target.value}
// // //                         className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#606C38]"
// // //                       />
// // //                       <input
// // //                         type="number"
// // //                         placeholder="Max"
// // //                         onChange={(e) => qRentMax.current = e.target.value}
// // //                         className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#606C38]"
// // //                       />
// // //                     </div>
// // //                     <small className="text-xs text-slate-600">e.g. 25000 for ₹25K/month</small>
// // //                   </div>
// // //                 )}

                
// // //                 <div>
// // //                   <label className="font-semibold text-slate-700">Bedrooms</label>
// // //                   <div className="mt-2 flex flex-wrap gap-2">
// // //                     {[1, 2, 3, 4].map(n => (
// // //                       <button
// // //                         key={n}
// // //                         onClick={() => setCurrentBeds(prev => prev === n ? 0 : n)}
// // //                         className={`px-4 py-1.5 rounded-lg font-medium transition ${currentBeds === n ? 'bg-[#606C38] text-white' : 'bg-white border border-slate-300'}`}
// // //                       >
// // //                         {n === 4 ? '4+' : n}
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                 </div>

                
// // //                 <div>
// // //                   <label className="font-semibold text-slate-700">Property Type</label>
// // //                   <select
// // //                     onChange={(e) => qType.current = e.target.value}
// // //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // //                   >
// // //                     <option value="">Any</option>
// // //                     <option>Apartment</option>
// // //                     <option>Villa</option>
// // //                     <option>Studio</option>
// // //                     <option>Penthouse</option>
// // //                     <option>Cottage</option>
// // //                     <option>Farmhouse</option>
// // //                   </select>
// // //                 </div>

                
// // //                 <div>
// // //                   <label className="font-semibold text-slate-700">Sort By</label>
// // //                   <select
// // //                     value={sortMode}
// // //                     onChange={(e) => { setSortMode(e.target.value); setCurrentPage(1); }}
// // //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// // //                   >
// // //                     <option value="reco">Recommended</option>
// // //                     <option value="low">Price: Low to High</option>
// // //                     <option value="high">Price: High to Low</option>
// // //                   </select>
// // //                 </div>
// // //               </div>
// // //             </aside>

            
// // //             <section className="flex-1">
// // //               <div className="flex items-center justify-between mb-6">
// // //                 <p className="text-sm text-slate-600 font-medium">
// // //                   <span className="font-bold text-slate-900 font-playfair">{filtered.length}</span> properties found
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
// // //                         <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">For {p.for}</span>
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
// // //                 <button onClick={closeDetail} className="text-3xl text-slate-500 hover:text-slate-700">&times;</button>
// // //               </div>
// // //               <div className="grid md:grid-cols-2 gap-5 p-5">
// // //                 <div>
// // //                   <img src={selectedProp.img} alt="" className="w-full h-64 object-cover rounded-xl" />
// // //                   <div className="mt-3 flex flex-wrap gap-2 text-xs">
// // //                     {['Near metro', 'Gated security', 'Pet friendly'].map(t => (
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
// // //                   <button onClick={() => loadMap(selectedProp.address)} className="w-full bg-[#606C38] text-white py-3 rounded-lg font-semibold hover:bg-[#4a552c] transition">
// // //                     Show on Map
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

// // //        {showContact && <PropertyModal onClose={closeContact} propertyTitle={contactPropTitle} />}
// // //       </div>
// // //     </>
// // //   );
// // // }


// // // src/pages/BuySellPage.jsx
// // import { useState, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Heart } from "lucide-react";
// // import PropertyModal from '../components/PropertyModal.jsx';
// // import { useFavorites } from '../hooks/useFavorites';

// // const ITEMS_PER_PAGE = 9;

// // // === 33 PROPERTIES — MAP USES CITY + STATE ONLY ===
// // const MOCK_PROPERTIES = [
// //   { id: 1, title: "Luxury 3BHK in Bandra", price: 35000000, city: "Mumbai", state: "Maharashtra", area: 1200, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Premium apartment with sea view" },
// //   { id: 2, title: "Modern Villa in Koramangala", price: 85000000, city: "Bangalore", state: "Karnataka", area: 3500, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Luxury villa with garden" },
// //   { id: 3, title: "Cozy Studio in Pune", price: 4500000, city: "Pune", state: "Maharashtra", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Affordable studio near IT hub" },
// //   { id: 4, title: "Penthouse in Delhi", price: 120000000, city: "Delhi", state: "Delhi", area: 5000, beds: 6, type: "Penthouse", for: "buy", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400", desc: "Sky-high living" },
// //   { id: 5, title: "Riverside Cottage in Udaipur", price: 35000, city: "Udaipur", state: "Rajasthan", area: 1300, beds: 2, type: "Cottage", for: "rent", img: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg", desc: "Quaint riverside stay" },
// //   { id: 6, title: "Beachfront Villa in Goa", price: 75000000, city: "Goa", state: "Goa", area: 3000, beds: 4, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400", desc: "Ocean views, private pool" },
// //   { id: 7, title: "1BHK in Andheri", price: 18000000, city: "Mumbai", state: "Maharashtra", area: 650, beds: 1, type: "Apartment", for: "buy", img: "https://www.livehomes.in/public/image/newsletters/10890138121717133585.jpg", desc: "Compact and modern" },
// //   { id: 8, title: "Heritage Bungalow in Jaipur", price: 65000000, city: "Jaipur", state: "Rajasthan", area: 4000, beds: 5, type: "Bungalow", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Royal architecture" },
// //   { id: 9, title: "2BHK in Indiranagar", price: 22000000, city: "Bangalore", state: "Karnataka", area: 1100, beds: 2, type: "Apartment", for: "rent", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Near cafes and parks" },
// //   { id: 10, title: "Farmhouse in Lonavala", price: 45000000, city: "Lonavala", state: "Maharashtra", area: 6000, beds: 6, type: "Farmhouse", for: "buy", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400", desc: "Weekend getaway" },
// //   { id: 11, title: "Studio in Viman Nagar", price: 28000, city: "Pune", state: "Maharashtra", area: 400, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Fully furnished" },
// //   { id: 12, title: "4BHK in Noida", price: 95000000, city: "Noida", state: "Uttar Pradesh", area: 2800, beds: 4, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Gated society" },
// //   { id: 13, title: "Duplex in Hyderabad", price: 70000000, city: "Hyderabad", state: "Telangana", area: 3200, beds: 5, type: "Duplex", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Modern duplex" },
// //   { id: 14, title: "1RK in Thane", price: 12000, city: "Thane", state: "Maharashtra", area: 300, beds: 1, type: "1RK", for: "rent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfu3A7wxJXWxZJeJ5trNNrSnyyVycSApRCalzP1top5dv-pIXIWGnQlvz-5balSDhfh2c&usqp=CAU", desc: "Budget friendly" },
// //   { id: 15, title: "Row House in Surat", price: 55000000, city: "Surat", state: "Gujarat", area: 2200, beds: 4, type: "Row House", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Peaceful locality" },
// //   { id: 16, title: "3BHK in Chennai", price: 60000000, city: "Chennai", state: "Tamil Nadu", area: 1800, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Near beach" },
// //   { id: 17, title: "Villa in Coimbatore", price: 80000000, city: "Coimbatore", state: "Tamil Nadu", area: 3600, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Green surroundings" },
// //   { id: 18, title: "2BHK in Gurgaon", price: 35000, city: "Gurgaon", state: "Haryana", area: 1200, beds: 2, type: "Apartment", for: "rent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhbNhdVK27x4Xh46p3-d9ckz-Iq4XRaviqw&s", desc: "Corporate hub" },
// //   { id: 19, title: "Penthouse in Kolkata", price: 110000000, city: "Kolkata", state: "West Bengal", area: 4800, beds: 6, type: "Penthouse", for: "buy", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400", desc: "River view" },
// //   { id: 20, title: "Cottage in Shimla", price: 30000, city: "Shimla", state: "Himachal Pradesh", area: 1000, beds: 2, type: "Cottage", for: "rent", img: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg", desc: "Hill station retreat" },
// //   { id: 21, title: "Studio in Ahmedabad", price: 25000, city: "Ahmedabad", state: "Gujarat", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Near university" },
// //   { id: 22, title: "Bungalow in Chandigarh", price: 90000000, city: "Chandigarh", state: "Chandigarh", area: 4000, beds: 5, type: "Bungalow", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Planned city" },
// //   { id: 23, title: "3BHK in Lucknow", price: 65000000, city: "Lucknow", state: "Uttar Pradesh", area: 2000, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Heritage city" },
// //   { id: 24, title: "Villa in Mysore", price: 75000000, city: "Mysore", state: "Karnataka", area: 3400, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Palace city" },
// //   { id: 25, title: "2BHK in Nagpur", price: 18000, city: "Nagpur", state: "Maharashtra", area: 1000, beds: 2, type: "Apartment", for: "rent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYB_QPB1kNqp0wtgH-fMtgU4IoBIT-RHBrxw&s", desc: "Central India" },
// //   { id: 26, title: "Farmhouse in Nashik", price: 50000000, city: "Nashik", state: "Maharashtra", area: 5500, beds: 6, type: "Farmhouse", for: "buy", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400", desc: "Vineyard nearby" },
// //   { id: 27, title: "1BHK in Bhopal", price: 15000000, city: "Bhopal", state: "Madhya Pradesh", area: 700, beds: 1, type: "Apartment", for: "buy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdSXiVDqMOpL1zlfp207w3b6CvpmUroMbri_jUmD5bOyyC2eVobVZRXIdMMciO1YzwQA&usqp=CAU", desc: "Lake city" },
// //   { id: 28, title: "Compact Studio", price: 20000, city: "Mumbai", state: "Maharashtra", area: 600, beds: 1, type: "Studio", for: "rent", img: "https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/05/6-0-min-scaled-e1689826682438-675x468.jpg", desc: "Compact and cozy studio in Thane" },
// //   { id: 29, title: "Premium Condo", price: 35000, city: "Gurugram", state: "Haryana", area: 1800, beds: 3, type: "Condo", for: "rent", img: "https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/10/10-0-min-scaled-e1689826767983-675x468.jpg", desc: "Luxury condo in DLF Phase 5" },
// //   { id: 30, title: "Urban Loft", price: 25000, city: "Pune", state: "Maharashtra", area: 1000, beds: 2, type: "Loft", for: "rent", img: "https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/12/14-scaled-e1689836098242-675x468.jpg", desc: "Modern loft in Koregaon Park" },
// //   { id: 31, title: "Urban Oasis", price: 13000000, city: "Bengaluru", state: "Karnataka", area: 1600, beds: 3, type: "Apartment", for: "rent", img: "https://i.pinimg.com/1200x/a6/0d/c1/a60dc117916d6a4b06d815b40384ffd7.jpg", desc: "Modern 3BHK in Thanisandra" },
// //   { id: 32, title: "Lakeside Villa", price: 25000000, city: "Bengaluru", state: "Karnataka", area: 2800, beds: 4, type: "Villa", for: "rent", img: "https://i.pinimg.com/1200x/46/9a/f7/469af73674363bdd1c5431f02254ab39.jpg", desc: "Premium villa with lake view" },
// //   { id: 33, title: "Serenity Towers", price: 18000000, city: "Delhi", state: "Delhi", area: 1900, beds: 3, type: "Apartment", for: "rent", img: "https://i.pinimg.com/1200x/eb/19/1d/eb191d41a2de076767dedf903a632045.jpg", desc: "Luxury flat with private balcony" },
// // ];

// // const formatINR = (n) => {
// //   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
// // };

// // export default function BuySellPage() {
// //   const navigate = useNavigate();
// //   const [properties] = useState(MOCK_PROPERTIES);
// //   const { favorites, isFavorite, toggleFavorite } = useFavorites();

// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [currentFor, setCurrentFor] = useState('');
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

// //   // MAP LOADS USING CITY + STATE ONLY
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

// //   const matchFilters = (p) => {
// //     const loc = qLocation.current.trim().toLowerCase();
// //     if (!loc) return true;
// //     return (
// //       p.city.toLowerCase().includes(loc) ||
// //       p.title.toLowerCase().includes(loc) ||
// //       p.state.toLowerCase().includes(loc)
// //     );
// //   };

// //   const getFiltered = () => {
// //     return properties.filter(p => {
// //       if (currentFor && p.for !== currentFor) return false;
// //       if (currentBeds && (currentBeds === 4 ? p.beds >= 4 : p.beds !== currentBeds)) return false;
// //       return matchFilters(p);
// //     });
// //   };

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

// //   const handleForChange = (newFor) => {
// //     setCurrentFor(prev => prev === newFor ? '' : newFor);
// //   };

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
// //             <img src="/him.jpg" alt="Home" className="h-full w-full object-cover brightness-75" />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
// //           </div>
// //           <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
// //             <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl font-playfair">
// //               Find Your Perfect Home
// //             </h1>
// //             <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
// //               Explore verified properties for sale and rent across India's top cities.
// //             </p>
// //           </div>
// //         </section>

// //         <main className="max-w-7xl mx-auto px-6 py-12" id="listings">
// //           <div className="flex flex-col lg:flex-row gap-8">
// //             <aside className="lg:w-72 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 h-max sticky top-28">
// //               <h3 className="text-xl font-bold text-slate-900 mb-5 font-playfair">Filters</h3>
// //               <div className="space-y-6 text-sm">

// //                 <div>
// //                   <label className="font-semibold text-slate-700">Property For</label>
// //                   <div className="flex gap-2 mt-2">
// //                     <button onClick={() => handleForChange('buy')} className={`flex-1 py-2.5 rounded-lg font-medium transition ${currentFor === 'buy' ? 'bg-[#283618] text-white' : 'bg-white border border-slate-300'}`}>
// //                       Buy
// //                     </button>
// //                     <button onClick={() => handleForChange('rent')} className={`flex-1 py-2.5 rounded-lg font-medium transition ${currentFor === 'rent' ? 'bg-[#283618] text-white' : 'bg-white border border-slate-300'}`}>
// //                       Rent
// //                     </button>
// //                   </div>
// //                 </div>

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
// //                     onChange={(e) => { setSortMode(e.target.value); setCurrentPage(1); }}
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
// //                     onChange={(e) => { qLocation.current = e.target.value; setCurrentPage(1); }}
// //                     className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]"
// //                   />
// //                 </div>
// //               </div>
// //             </aside>

// //             <section className="flex-1">
// //               <div className="flex items-center justify-between mb-6">
// //                 <p className="text-sm text-slate-600 font-medium">
// //                   <span className="font-bold text-slate-900 font-playfair">{filtered.length}</span> properties found
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
// //                         <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">For {p.for}</span>
// //                       </div>
// //                     </div>
// //                   </article>
// //                 ))}
// //               </div>

// //               <div className="mt-10 flex justify-center gap-2">
// //                 <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">
// //                   Previous
// //                 </button>
// //                 {Array.from({ length: totalPages }, (_, i) => (
// //                   <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-4 py-2 rounded-lg font-medium transition ${currentPage === i + 1 ? 'bg-[#283618] text-white' : 'border hover:bg-slate-50'}`}>
// //                     {i + 1}
// //                   </button>
// //                 ))}
// //                 <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="px-4 py-2 border rounded-lg font-medium disabled:opacity-50 hover:bg-slate-50 transition">
// //                   Next
// //                 </button>
// //               </div>
// //             </section>
// //           </div>
// //         </main>

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
// //                     {['Near metro', 'Gated security', 'Pet friendly'].map(t => (
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

// // src/pages/BuySellPage.jsx
// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Heart } from "lucide-react";
// import PropertyModal from '../components/PropertyModal.jsx';
// import { useFavorites } from '../hooks/useFavorites';

// const ITEMS_PER_PAGE = 9;

// // MOCK PROPERTIES (33 total - mixed buy/rent)
// const MOCK_PROPERTIES = [
//   { id: 1, title: "Luxury 3BHK in Bandra", price: 35000000, city: "Mumbai", state: "Maharashtra", area: 1200, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Premium apartment with sea view" },
//   { id: 2, title: "Modern Villa in Koramangala", price: 85000000, city: "Bangalore", state: "Karnataka", area: 3500, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Luxury villa with garden" },
//   { id: 3, title: "Cozy Studio in Pune", price: 4500000, city: "Pune", state: "Maharashtra", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Affordable studio near IT hub" },
//   { id: 4, title: "Penthouse in Delhi", price: 120000000, city: "Delhi", state: "Delhi", area: 5000, beds: 6, type: "Penthouse", for: "buy", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400", desc: "Sky-high living" },
//   { id: 5, title: "Riverside Cottage in Udaipur", price: 35000, city: "Udaipur", state: "Rajasthan", area: 1300, beds: 2, type: "Cottage", for: "rent", img: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg", desc: "Quaint riverside stay" },
//   { id: 6, title: "Beachfront Villa in Goa", price: 75000000, city: "Goa", state: "Goa", area: 3000, beds: 4, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400", desc: "Ocean views, private pool" },
//   { id: 7, title: "1BHK in Andheri", price: 18000000, city: "Mumbai", state: "Maharashtra", area: 650, beds: 1, type: "Apartment", for: "buy", img: "https://www.livehomes.in/public/image/newsletters/10890138121717133585.jpg", desc: "Compact and modern" },
//   { id: 8, title: "Heritage Bungalow in Jaipur", price: 65000000, city: "Jaipur", state: "Rajasthan", area: 4000, beds: 5, type: "Bungalow", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Royal architecture" },
//   { id: 9, title: "2BHK in Indiranagar", price: 22000000, city: "Bangalore", state: "Karnataka", area: 1100, beds: 2, type: "Apartment", for: "rent", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Near cafes and parks" },
//   { id: 10, title: "Farmhouse in Lonavala", price: 45000000, city: "Lonavala", state: "Maharashtra", area: 6000, beds: 6, type: "Farmhouse", for: "buy", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400", desc: "Weekend getaway" },
//   { id: 11, title: "Studio in Viman Nagar", price: 28000, city: "Pune", state: "Maharashtra", area: 400, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Fully furnished" },
//   { id: 12, title: "4BHK in Noida", price: 95000000, city: "Noida", state: "Uttar Pradesh", area: 2800, beds: 4, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Gated society" },
//   { id: 13, title: "Duplex in Hyderabad", price: 70000000, city: "Hyderabad", state: "Telangana", area: 3200, beds: 5, type: "Duplex", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Modern duplex" },
//   { id: 14, title: "1RK in Thane", price: 12000, city: "Thane", state: "Maharashtra", area: 300, beds: 1, type: "1RK", for: "rent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfu3A7wxJXWxZJeJ5trNNrSnyyVycSApRCalzP1top5dv-pIXIWGnQlvz-5balSDhfh2c&usqp=CAU", desc: "Budget friendly" },
//   { id: 15, title: "Row House in Surat", price: 55000000, city: "Surat", state: "Gujarat", area: 2200, beds: 4, type: "Row House", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Peaceful locality" },
//   { id: 16, title: "3BHK in Chennai", price: 60000000, city: "Chennai", state: "Tamil Nadu", area: 1800, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Near beach" },
//   { id: 17, title: "Villa in Coimbatore", price: 80000000, city: "Coimbatore", state: "Tamil Nadu", area: 3600, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Green surroundings" },
//   { id: 18, title: "2BHK in Gurgaon", price: 35000, city: "Gurgaon", state: "Haryana", area: 1200, beds: 2, type: "Apartment", for: "rent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhbNhdVK27x4Xh46p3-d9ckz-Iq4XRaviqw&s", desc: "Corporate hub" },
//   { id: 19, title: "Penthouse in Kolkata", price: 110000000, city: "Kolkata", state: "West Bengal", area: 4800, beds: 6, type: "Penthouse", for: "buy", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400", desc: "River view" },
//   { id: 20, title: "Cottage in Shimla", price: 30000, city: "Shimla", state: "Himachal Pradesh", area: 1000, beds: 2, type: "Cottage", for: "rent", img: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg", desc: "Hill station retreat" },
//   { id: 21, title: "Studio in Ahmedabad", price: 25000, city: "Ahmedabad", state: "Gujarat", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Near university" },
//   { id: 22, title: "Bungalow in Chandigarh", price: 90000000, city: "Chandigarh", state: "Chandigarh", area: 4000, beds: 5, type: "Bungalow", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Planned city" },
//   { id: 23, title: "3BHK in Lucknow", price: 65000000, city: "Lucknow", state: "Uttar Pradesh", area: 2000, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Heritage city" },
//   { id: 24, title: "Villa in Mysore", price: 75000000, city: "Mysore", state: "Karnataka", area: 3400, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Palace city" },
//   { id: 25, title: "2BHK in Nagpur", price: 18000, city: "Nagpur", state: "Maharashtra", area: 1000, beds: 2, type: "Apartment", for: "rent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYB_QPB1kNqp0wtgH-fMtgU4IoBIT-RHBrxw&s", desc: "Central India" },
//   { id: 26, title: "Farmhouse in Nashik", price: 50000000, city: "Nashik", state: "Maharashtra", area: 5500, beds: 6, type: "Farmhouse", for: "buy", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400", desc: "Vineyard nearby" },
//   { id: 27, title: "1BHK in Bhopal", price: 15000000, city: "Bhopal", state: "Madhya Pradesh", area: 700, beds: 1, type: "Apartment", for: "buy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdSXiVDqMOpL1zlfp207w3b6CvpmUroMbri_jUmD5bOyyC2eVobVZRXIdMMciO1YzwQA&usqp=CAU", desc: "Lake city" },
//   { id: 28, title: "Compact Studio", price: 20000, city: "Mumbai", state: "Maharashtra", area: 600, beds: 1, type: "Studio", for: "rent", img: "https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/05/6-0-min-scaled-e1689826682438-675x468.jpg", desc: "Compact and cozy studio in Thane" },
//   { id: 29, title: "Premium Condo", price: 35000, city: "Gurugram", state: "Haryana", area: 1800, beds: 3, type: "Condo", for: "rent", img: "https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/10/10-0-min-scaled-e1689826767983-675x468.jpg", desc: "Luxury condo in DLF Phase 5" },
//   { id: 30, title: "Urban Loft", price: 25000, city: "Pune", state: "Maharashtra", area: 1000, beds: 2, type: "Loft", for: "rent", img: "https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/12/14-scaled-e1689836098242-675x468.jpg", desc: "Modern loft in Koregaon Park" },
//   { id: 31, title: "Urban Oasis", price: 13000000, city: "Bengaluru", state: "Karnataka", area: 1600, beds: 3, type: "Apartment", for: "rent", img: "https://i.pinimg.com/1200x/a6/0d/c1/a60dc117916d6a4b06d815b40384ffd7.jpg", desc: "Modern 3BHK in Thanisandra" },
//   { id: 32, title: "Lakeside Villa", price: 25000000, city: "Bengaluru", state: "Karnataka", area: 2800, beds: 4, type: "Villa", for: "rent", img: "https://i.pinimg.com/1200x/46/9a/f7/469af73674363bdd1c5431f02254ab39.jpg", desc: "Premium villa with lake view" },
//   { id: 33, title: "Serenity Towers", price: 18000000, city: "Delhi", state: "Delhi", area: 1900, beds: 3, type: "Apartment", for: "rent", img: "https://i.pinimg.com/1200x/eb/19/1d/eb191d41a2de076767dedf903a632045.jpg", desc: "Luxury flat with private balcony" },
// ];

// const formatINR = (n) => {
//   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
// };

// export default function BuySellPage() {
//   const navigate = useNavigate();
//   const { favorites, isFavorite, toggleFavorite } = useFavorites();

//   const [userProperties, setUserProperties] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentFor, setCurrentFor] = useState('');
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

//   // Load user-posted properties from localStorage
//   useEffect(() => {
//     const stored = localStorage.getItem("properties");
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       const userProps = parsed.map((p, i) => {
//         const isRent = p.category === 'rent';
//         const price = isRent 
//           ? Math.floor(parseInt(p.price.replace(/,/g, '')) / 30) // Rent: monthly
//           : parseInt(p.price.replace(/,/g, '')); // Buy: full price

//         return {
//           id: `user-${Date.now()}-${i}`,
//           title: p.title,
//           price,
//           city: p.location.split(',')[0]?.trim() || 'Unknown',
//           state: p.location.split(',')[1]?.trim() || 'Unknown',
//           area: Math.floor(Math.random() * 3000) + 500,
//           beds: Math.floor(Math.random() * 5) + 1,
//           type: p.amenities?.includes('Villa') ? 'Villa' : p.amenities?.includes('Apartment') ? 'Apartment' : 'House',
//           for: p.category,
//           img: p.imagesCount[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
//           desc: p.amenities || `User posted property for ${p.category === 'rent' ? 'rent' : 'sale'}.`
//         };
//       });
//       setUserProperties(userProps);
//     }
//   }, []);

//   const properties = [...MOCK_PROPERTIES, ...userProperties];

//   // Map loading
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

//   // Filtering logic
//   const getFiltered = () => {
//     return properties.filter(p => {
//       if (currentFor && p.for !== currentFor) return false;
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

//   // Sorting
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

//   // Modal handlers
//   const openDetail = (prop) => { setSelectedProp(prop); setShowDetail(true); };
//   const closeDetail = () => { setShowDetail(false); setSelectedProp(null); };
//   const openContact = () => { closeDetail(); setContactPropTitle(selectedProp?.title || "Property"); setShowContact(true); };
//   const closeContact = () => setShowContact(false);
//   const openFavorites = () => setShowFavorites(true);
//   const closeFavorites = () => setShowFavorites(false);
//   const closeMap = () => setShowMap(false);

//   const handleForChange = (newFor) => {
//     setCurrentFor(prev => prev === newFor ? '' : newFor);
//     setCurrentPage(1);
//   };

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
//             <img src="/him.jpg" alt="Home" className="h-full w-full object-cover brightness-75" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
//           </div>
//           <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
//             <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl font-playfair">
//               Find Your Perfect Home
//             </h1>
//             <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
//               Explore verified properties for sale and rent across India's top cities.
//             </p>
//           </div>
//         </section>

//         <main className="max-w-7xl mx-auto px-6 py-12" id="listings">
//           <div className="flex flex-col lg:flex-row gap-8">
//             <aside className="lg:w-72 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 h-max sticky top-28">
//               <h3 className="text-xl font-bold text-slate-900 mb-5 font-playfair">Filters</h3>
//               <div className="space-y-6 text-sm">
//                 <div>
//                   <label className="font-semibold text-slate-700">Property For</label>
//                   <div className="flex gap-2 mt-2">
//                     <button onClick={() => handleForChange('buy')} className={`flex-1 py-2.5 rounded-lg font-medium transition ${currentFor === 'buy' ? 'bg-[#283618] text-white' : 'bg-white border border-slate-300'}`}>Buy</button>
//                     <button onClick={() => handleForChange('rent')} className={`flex-1 py-2.5 rounded-lg font-medium transition ${currentFor === 'rent' ? 'bg-[#283618] text-white' : 'bg-white border border-slate-300'}`}>Rent</button>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="font-semibold text-slate-700">Bedrooms</label>
//                   <div className="mt-2 flex flex-wrap gap-2">
//                     {[1, 2, 3, 4].map(n => (
//                       <button key={n} onClick={() => { setCurrentBeds(prev => prev === n ? 0 : n); setCurrentPage(1); }} className={`px-4 py-1.5 rounded-lg font-medium transition ${currentBeds === n ? 'bg-[#606C38] text-white' : 'bg-white border border-slate-300'}`}>
//                         {n === 4 ? '4+' : n}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <label className="font-semibold text-slate-700">Sort By</label>
//                   <select value={sortMode} onChange={(e) => { setSortMode(e.target.value); setCurrentPage(1); }} className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]">
//                     <option value="reco">Recommended</option>
//                     <option value="low">Price: Low to High</option>
//                     <option value="high">Price: High to Low</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="font-semibold text-slate-700">Search Location</label>
//                   <input type="text" placeholder="Enter city or title..." onChange={(e) => { qLocation.current = e.target.value; setCurrentPage(1); }} className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]" />
//                 </div>
//               </div>
//             </aside>

//             <section className="flex-1">
//               <div className="flex items-center justify-between mb-6">
//                 <p className="text-sm text-slate-600 font-medium">
//                   <span className="font-bold text-slate-900 font-playfair">{filtered.length}</span> properties found
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
//                         <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">For {p.for}</span>
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
//                     {['Near metro', 'Gated security', 'Pet friendly'].map(t => (
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

// src/pages/BuyRentPage.jsx
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import PropertyModal from '../components/PropertyModal.jsx';
import { useFavorites } from '../hooks/useFavorites.js';

const ITEMS_PER_PAGE = 9;

// MOCK PROPERTIES (33 total - mixed buy/rent)
const MOCK_PROPERTIES = [
  { id: 1, title: "Luxury 3BHK in Bandra", price: 35000000, city: "Mumbai", state: "Maharashtra", area: 1200, beds: 3, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Premium apartment with sea view" },
  { id: 2, title: "Modern Villa in Koramangala", price: 85000000, city: "Bangalore", state: "Karnataka", area: 3500, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Luxury villa with garden" },
  { id: 3, title: "Cozy Studio in Pune", price: 4500000, city: "Pune", state: "Maharashtra", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://i.pinimg.com/736x/b0/14/51/b014514a9cb0f39535bf23ed7a0b6bf4.jpg", desc: "Affordable studio near IT hub" },
  { id: 4, title: "Penthouse in Delhi", price: 120000000, city: "Delhi", state: "Delhi", area: 5000, beds: 6, type: "Penthouse", for: "buy", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400", desc: "Sky-high living" },
  { id: 5, title: "Riverside Cottage in Udaipur", price: 35000, city: "Udaipur", state: "Rajasthan", area: 1300, beds: 2, type: "Cottage", for: "rent", img: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg", desc: "Quaint riverside stay" },
  { id: 6, title: "Beachfront Villa in Goa", price: 75000000, city: "Goa", state: "Goa", area: 3000, beds: 4, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400", desc: "Ocean views, private pool" },
  { id: 7, title: "1BHK in Andheri", price: 18000000, city: "Mumbai", state: "Maharashtra", area: 650, beds: 1, type: "Apartment", for: "buy", img: "https://www.livehomes.in/public/image/newsletters/10890138121717133585.jpg", desc: "Compact and modern" },
  { id: 8, title: "Heritage Bungalow in Jaipur", price: 65000000, city: "Jaipur", state: "Rajasthan", area: 4000, beds: 5, type: "Bungalow", for: "buy", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400", desc: "Royal architecture" },
  { id: 9, title: "2BHK in Indiranagar", price: 22000000, city: "Bangalore", state: "Karnataka", area: 1100, beds: 2, type: "Apartment", for: "rent", img: "https://i.pinimg.com/1200x/dc/6a/4c/dc6a4c38653df6aa2e24871022e076cb.jpg", desc: "Near cafes and parks" },
  { id: 10, title: "Farmhouse in Lonavala", price: 45000000, city: "Lonavala", state: "Maharashtra", area: 6000, beds: 6, type: "Farmhouse", for: "buy", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400", desc: "Weekend getaway" },
  { id: 11, title: "Studio in Viman Nagar", price: 28000, city: "Pune", state: "Maharashtra", area: 400, beds: 1, type: "Studio", for: "rent", img: "https://i.pinimg.com/736x/97/a9/ed/97a9ed7b27bb5f2a13369be1e0f9f0ef.jpg", desc: "Fully furnished" },
  { id: 12, title: "4BHK in Noida", price: 95000000, city: "Noida", state: "Uttar Pradesh", area: 2800, beds: 4, type: "Apartment", for: "buy", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", desc: "Gated society" },
  { id: 13, title: "Duplex in Hyderabad", price: 70000000, city: "Hyderabad", state: "Telangana", area: 3200, beds: 5, type: "Duplex", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Modern duplex" },
  { id: 14, title: "1RK in Thane", price: 12000, city: "Thane", state: "Maharashtra", area: 300, beds: 1, type: "1RK", for: "rent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfu3A7wxJXWxZJeJ5trNNrSnyyVycSApRCalzP1top5dv-pIXIWGnQlvz-5balSDhfh2c&usqp=CAU", desc: "Budget friendly" },
  { id: 15, title: "Row House in Surat", price: 55000000, city: "Surat", state: "Gujarat", area: 2200, beds: 4, type: "Row House", for: "buy", img: "https://i.pinimg.com/736x/da/9e/f0/da9ef0a17ed69da3491221e785242d6f.jpg", desc: "Peaceful locality" },
  { id: 16, title: "3BHK in Chennai", price: 60000000, city: "Chennai", state: "Tamil Nadu", area: 1800, beds: 3, type: "Apartment", for: "buy", img: "https://i.pinimg.com/736x/1b/fd/80/1bfd805171fc98224dc9b852dd9607a3.jpg", desc: "Near beach" },
  { id: 17, title: "Villa in Coimbatore", price: 80000000, city: "Coimbatore", state: "Tamil Nadu", area: 3600, beds: 5, type: "Villa", for: "buy", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", desc: "Green surroundings" },
  { id: 18, title: "2BHK in Gurgaon", price: 35000, city: "Gurgaon", state: "Haryana", area: 1200, beds: 2, type: "Apartment", for: "rent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhbNhdVK27x4Xh46p3-d9ckz-Iq4XRaviqw&s", desc: "Corporate hub" },
  { id: 19, title: "Penthouse in Kolkata", price: 110000000, city: "Kolkata", state: "West Bengal", area: 4800, beds: 6, type: "Penthouse", for: "buy", img: "https://i.pinimg.com/1200x/89/24/dc/8924dc179ab70013f049fd07ca4ddd7f.jpg", desc: "River view" },
  { id: 20, title: "Cottage in Shimla", price: 30000, city: "Shimla", state: "Himachal Pradesh", area: 1000, beds: 2, type: "Cottage", for: "rent", img: "https://i.pinimg.com/1200x/f5/9a/fe/f59afec929bf15ff2518d4b440e23bd7.jpg", desc: "Hill station retreat" },
  { id: 21, title: "Studio in Ahmedabad", price: 25000, city: "Ahmedabad", state: "Gujarat", area: 450, beds: 1, type: "Studio", for: "rent", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", desc: "Near university" },
  { id: 22, title: "Bungalow in Chandigarh", price: 90000000, city: "Chandigarh", state: "Chandigarh", area: 4000, beds: 5, type: "Bungalow", for: "buy", img: "https://i.pinimg.com/736x/42/3d/be/423dbe428c86816494ca28642e234ab5.jpg", desc: "Planned city" },
  { id: 23, title: "3BHK in Lucknow", price: 65000000, city: "Lucknow", state: "Uttar Pradesh", area: 2000, beds: 3, type: "Apartment", for: "buy", img: "https://i.pinimg.com/1200x/11/1d/f2/111df2df477e366136febe90de348622.jpg", desc: "Heritage city" },
  { id: 24, title: "Villa in Mysore", price: 75000000, city: "Mysore", state: "Karnataka", area: 3400, beds: 5, type: "Villa", for: "buy", img: "https://i.pinimg.com/1200x/08/2f/55/082f5576aadc91b04de2a61dadb78df9.jpg", desc: "Palace city" },
  { id: 25, title: "2BHK in Nagpur", price: 18000, city: "Nagpur", state: "Maharashtra", area: 1000, beds: 2, type: "Apartment", for: "rent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYB_QPB1kNqp0wtgH-fMtgU4IoBIT-RHBrxw&s", desc: "Central India" },
  { id: 26, title: "Farmhouse in Nashik", price: 50000000, city: "Nashik", state: "Maharashtra", area: 5500, beds: 6, type: "Farmhouse", for: "buy", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=400", desc: "Vineyard nearby" },
  { id: 27, title: "1BHK in Bhopal", price: 15000000, city: "Bhopal", state: "Madhya Pradesh", area: 700, beds: 1, type: "Apartment", for: "buy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdSXiVDqMOpL1zlfp207w3b6CvpmUroMbri_jUmD5bOyyC2eVobVZRXIdMMciO1YzwQA&usqp=CAU", desc: "Lake city" },
  { id: 28, title: "Compact Studio", price: 20000, city: "Mumbai", state: "Maharashtra", area: 600, beds: 1, type: "Studio", for: "rent", img: "https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/05/6-0-min-scaled-e1689826682438-675x468.jpg", desc: "Compact and cozy studio in Thane" },
  { id: 29, title: "Premium Condo", price: 35000, city: "Gurugram", state: "Haryana", area: 1800, beds: 3, type: "Condo", for: "rent", img: "https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/10/10-0-min-scaled-e1689826767983-675x468.jpg", desc: "Luxury condo in DLF Phase 5" },
  { id: 30, title: "Urban Loft", price: 25000, city: "Pune", state: "Maharashtra", area: 1000, beds: 2, type: "Loft", for: "rent", img: "https://realpress.thimpress.com/demo-main/wp-content/uploads/sites/19/2022/12/14-scaled-e1689836098242-675x468.jpg", desc: "Modern loft in Koregaon Park" },
  { id: 31, title: "Urban Oasis", price: 13000000, city: "Bengaluru", state: "Karnataka", area: 1600, beds: 3, type: "Apartment", for: "rent", img: "https://i.pinimg.com/1200x/a6/0d/c1/a60dc117916d6a4b06d815b40384ffd7.jpg", desc: "Modern 3BHK in Thanisandra" },
  { id: 32, title: "Lakeside Villa", price: 25000000, city: "Bengaluru", state: "Karnataka", area: 2800, beds: 4, type: "Villa", for: "rent", img: "https://i.pinimg.com/1200x/46/9a/f7/469af73674363bdd1c5431f02254ab39.jpg", desc: "Premium villa with lake view" },
  { id: 33, title: "Serenity Towers", price: 18000000, city: "Delhi", state: "Delhi", area: 1900, beds: 3, type: "Apartment", for: "rent", img: "https://i.pinimg.com/1200x/eb/19/1d/eb191d41a2de076767dedf903a632045.jpg", desc: "Luxury flat with private balcony" },
];

const formatINR = (n) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
};

export default function BuyRentPage() {
  const navigate = useNavigate();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const [userProperties, setUserProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFor, setCurrentFor] = useState('');
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

  // Load user-posted properties from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("properties");
    if (stored) {
      const parsed = JSON.parse(stored);
      const userProps = parsed.map((p, i) => {
        const isRent = p.category === 'rent';
        const price = isRent 
          ? Math.floor(parseInt(p.price.replace(/,/g, '')) / 30) // Rent: monthly
          : parseInt(p.price.replace(/,/g, '')); // Buy: full price

        return {
          id: `user-${Date.now()}-${i}`,
          title: p.title,
          price,
          city: p.location.split(',')[0]?.trim() || 'Unknown',
          state: p.location.split(',')[1]?.trim() || 'Unknown',
          area: Math.floor(Math.random() * 3000) + 500,
          beds: Math.floor(Math.random() * 5) + 1,
          type: p.amenities?.includes('Villa') ? 'Villa' : p.amenities?.includes('Apartment') ? 'Apartment' : 'House',
          for: p.category,
          img: p.imagesCount[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
          desc: p.amenities || `User posted property for ${p.category === 'rent' ? 'rent' : 'sale'}.`
        };
      });
      setUserProperties(userProps);
    }
  }, []);

  const properties = [...MOCK_PROPERTIES, ...userProperties];

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, currentFor, currentBeds, sortMode]);

  // Sync ref with state
  useEffect(() => {
    qLocation.current = searchQuery;
  }, [searchQuery]);

  // Map loading
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

  // Filtering logic
  const getFiltered = () => {
    return properties.filter(p => {
      if (currentFor && p.for !== currentFor) return false;
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

  // Sorting
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

  // Modal handlers
  const openDetail = (prop) => { setSelectedProp(prop); setShowDetail(true); };
  const closeDetail = () => { setShowDetail(false); setSelectedProp(null); };
  const openContact = () => { closeDetail(); setContactPropTitle(selectedProp?.title || "Property"); setShowContact(true); };

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

  const handleForChange = (newFor) => {
    setCurrentFor(prev => prev === newFor ? '' : newFor);
    setCurrentPage(1);
  };

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
            <img src="him.jpg" alt="Home" className="h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl font-playfair">
              Find Your Perfect Home
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Explore verified properties for sale and rent across India's top cities.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-6 py-12" id="listings">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-72 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 h-max sticky top-28">
              <h3 className="text-xl font-bold text-slate-900 mb-5 font-playfair">Filters</h3>
              <div className="space-y-6 text-sm">
                <div>
                  <label className="font-semibold text-slate-700">Property For</label>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => handleForChange('buy')} className={`flex-1 py-2.5 rounded-lg font-medium transition ${currentFor === 'buy' ? 'bg-[#283618] text-white' : 'bg-white border border-slate-300'}`}>Buy</button>
                    <button onClick={() => handleForChange('rent')} className={`flex-1 py-2.5 rounded-lg font-medium transition ${currentFor === 'rent' ? 'bg-[#283618] text-white' : 'bg-white border border-slate-300'}`}>Rent</button>
                  </div>
                </div>
                <div>
                  <label className="font-semibold text-slate-700">Bedrooms</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map(n => (
                      <button key={n} onClick={() => { setCurrentBeds(prev => prev === n ? 0 : n); setCurrentPage(1); }} className={`px-4 py-1.5 rounded-lg font-medium transition ${currentBeds === n ? 'bg-[#606C38] text-white' : 'bg-white border border-slate-300'}`}>
                        {n === 4 ? '4+' : n}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="font-semibold text-slate-700">Sort By</label>
                  <select value={sortMode} onChange={(e) => { setSortMode(e.target.value); setCurrentPage(1); }} className="mt-2 w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#582F0E]">
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
                  <span className="font-bold text-slate-900 font-playfair">{filtered.length}</span> properties found
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
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">For {p.for}</span>
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
                    {['Near metro', 'Gated security', 'Pet friendly'].map(t => (
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