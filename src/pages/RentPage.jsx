
// // src/pages/RentPage.jsx
// import BASE_URL from '../config';
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Heart, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
// import PropertyModal from '../components/PropertyModal.jsx';
// import { useFavorites } from '../hooks/useFavorites.js';
// import io from 'socket.io-client';
// import Toast from '../components/Toast.jsx';

// const socket = io('http://localhost:5000');
// const ITEMS_PER_PAGE = 9;
// const formatINR = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

// export default function RentPage() {
//   const navigate = useNavigate();
//   const { favorites, isFavorite, toggleFavorite } = useFavorites();

//   const [properties, setProperties] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentBeds, setCurrentBeds] = useState(0);
//   const [currentType, setCurrentType] = useState('');
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [selectedAmenities, setSelectedAmenities] = useState([]);
//   const [searchInput, setSearchInput] = useState('');
//   const [appliedSearch, setAppliedSearch] = useState('');
//   const [sortMode, setSortMode] = useState('reco');
//   const [showDetail, setShowDetail] = useState(false);
//   const [selectedProp, setSelectedProp] = useState(null);
//   const [showContact, setShowContact] = useState(false);
//   const [showFavorites, setShowFavorites] = useState(false);
//   const [showMap, setShowMap] = useState(false);
//   const [mapUrl, setMapUrl] = useState('');
//   const [mapLoading, setMapLoading] = useState(false);
//   const [contactPropTitle, setContactPropTitle] = useState("");
//   const [contactPropId, setContactPropId] = useState(""); // ✅ ADDED
//   const [showToast, setShowToast] = useState(null);

//   const amenitiesList = [
//     "Parking","Gym","Swimming Pool","Security","Garden","Lift","Power Backup",
//     "Club House","Indoor Games Room","Children's Play Area","Jogging Track",
//     "Yoga/Meditation Area","Multipurpose Hall","CCTV Surveillance","Fire Fighting System",
//     "Rain Water Harvesting","Sewage Treatment Plant","24x7 Water Supply","Intercom Facility",
//     "Vaastu Compliant","Solar Water Heater","Laundry Service","Library","Tennis Court",
//     "Badminton Court","Basketball Court","Amphitheater"
//   ];

//   useEffect(() => {
//     fetch('http://localhost:5000/api/rent-properties')
//       .then(res => { if (!res.ok) throw new Error(`Status ${res.status}`); return res.json(); })
//       .then(raw => {
//         let list = Array.isArray(raw) ? raw : [];
//         if (list.length < 5) {
//           return fetch('http://localhost:5000/api/buy-properties')
//             .then(r => r.json())
//             .then(data => Array.isArray(data) ? data : []);
//         }
//         return list;
//       })
//       .then(list => {
//         setProperties(list.map(p => ({
//           ...p,
//           img: p.img || (p.images?.length > 0 ? p.images[0] : '/default-property.jpg'),
//           city: p.city || p.location?.split(',')[0]?.trim() || 'Unknown',
//           state: p.state || p.location?.split(',')[1]?.trim() || 'Unknown',
//           amenities: Array.isArray(p.amenities) ? p.amenities : (p.amenities ? [p.amenities] : []),
//           desc: p.desc || p.description || 'No description available.',
//         })));
//       })
//       .catch(err => alert(`Could not load rent properties.\nError: ${err.message}`));
//   }, []);

//   useEffect(() => {
//     socket.on('new-property', (newProp) => {
//       const standardized = {
//         ...newProp,
//         img: newProp.img || (newProp.images?.length > 0 ? newProp.images[0] : '/default-property.jpg'),
//         city: newProp.city || newProp.location?.split(',')[0]?.trim() || 'Unknown',
//         state: newProp.state || newProp.location?.split(',')[1]?.trim() || 'Unknown',
//         amenities: Array.isArray(newProp.amenities) ? newProp.amenities : [],
//         desc: newProp.desc || newProp.description || 'No description available.',
//       };
//       setProperties(prev => [standardized, ...prev]);
//       setShowToast(`New listing: "${newProp.title}" just posted!`);
//     });
//     return () => socket.off('new-property');
//   }, []);

//   const applyFilters = () => { setAppliedSearch(searchInput.trim()); setCurrentPage(1); };

//   const getFiltered = () => {
//     return properties.filter(p => {
//       if (currentBeds > 0) {
//         if (currentBeds === 4) { if (p.beds < 4) return false; }
//         else { if (p.beds !== currentBeds) return false; }
//       }
//       if (currentType && p.type !== currentType) return false;
//       const min = minPrice ? parseInt(minPrice) : 0;
//       const max = maxPrice ? parseInt(maxPrice) : Infinity;
//       if (p.price < min || p.price > max) return false;
//       if (selectedAmenities.length > 0) {
//         if (!Array.isArray(p.amenities)) return false;
//         if (!selectedAmenities.every(am => p.amenities.includes(am))) return false;
//       }
//       const q = appliedSearch.toLowerCase();
//       if (q) return (
//         (p.city?.toLowerCase().includes(q)) ||
//         (p.title?.toLowerCase().includes(q)) ||
//         (p.state?.toLowerCase().includes(q))
//       );
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
//   const favoriteProperties = properties.filter(p => isFavorite(p.id));

//   const loadMap = async (city, state) => {
//     setMapLoading(true);
//     try {
//       const res = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(`${city}, ${state}, India`)}&limit=1`,
//         { headers: { 'User-Agent': 'UrbanNest360/1.0' } }
//       );
//       const data = await res.json();
//       if (data?.[0]) {
//         const { lat, lon } = data[0];
//         const bbox = `${parseFloat(lon)-0.05},${parseFloat(lat)-0.05},${parseFloat(lon)+0.05},${parseFloat(lat)+0.05}`;
//         setMapUrl(`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`);
//         setShowMap(true);
//       } else alert("Location not found.");
//     } catch { alert("Failed to load map."); }
//     finally { setMapLoading(false); }
//   };

//   const openDetail = (prop) => { setSelectedProp(prop); setShowDetail(true); };
//   const closeDetail = () => { setShowDetail(false); setSelectedProp(null); };

//   // ✅ FIXED: now saves both title and _id
//   const openContact = () => {
//     closeDetail();
//     setContactPropTitle(selectedProp?.title || "Property");
//     setContactPropId(selectedProp?._id || selectedProp?.id || "");
//     setShowContact(true);
//   };

//   const closeContact = () => setShowContact(false);
//   const openFavorites = () => setShowFavorites(true);
//   const closeFavorites = () => setShowFavorites(false);
//   const closeMap = () => setShowMap(false);

//   const activeFiltersCount = [
//     currentBeds > 0, currentType, minPrice, maxPrice,
//     selectedAmenities.length > 0, appliedSearch
//   ].filter(Boolean).length;

//   return (
//     <>
//       <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
//       <style>{`
//         * { box-sizing: border-box; }
//         body { font-family: 'DM Sans', sans-serif; margin: 0; }
//         .font-display { font-family: 'Cormorant Garamond', serif; }
//         :root {
//           --forest: #1C2B1A;
//           --moss: #4A5E3A;
//           --sage: #7A9468;
//           --sand: #C8B89A;
//           --cream: #F7F4EF;
//           --warm-white: #FDFCFA;
//           --bark: #6B4C2A;
//           --charcoal: #2C2C2C;
//           --muted: #8A8A8A;
//           --border: #E8E2D9;
//         }
//         .btn-primary { background: var(--forest); color: white; border: none; cursor: pointer; transition: all 0.2s ease; }
//         .btn-primary:hover { background: var(--moss); transform: translateY(-1px); }
//         .card-prop { background: white; border-radius: 16px; overflow: hidden; border: 1px solid var(--border); transition: all 0.3s ease; }
//         .card-prop:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(28,43,26,0.12); border-color: var(--sage); }
//         .heart-btn { position: absolute; top: 12px; right: 12px; width: 36px; height: 36px; border-radius: 50%; background: white; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: all 0.2s ease; z-index: 2; }
//         .heart-btn:hover { transform: scale(1.1); }
//         .heart-btn svg { transition: all 0.2s ease; }
//         .heart-btn.active svg { fill: #e53935; color: #e53935; }
//         .heart-btn:not(.active) svg { fill: none; color: #555; }
//         .filter-chip { padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; cursor: pointer; border: 1.5px solid var(--border); background: white; color: var(--charcoal); transition: all 0.18s; }
//         .filter-chip:hover { border-color: var(--moss); color: var(--moss); }
//         .filter-chip.active { background: var(--forest); color: white; border-color: var(--forest); }
//         .input-field { width: 100%; padding: 10px 14px; border: 1.5px solid var(--border); border-radius: 10px; font-size: 14px; font-family: 'DM Sans', sans-serif; background: var(--warm-white); color: var(--charcoal); outline: none; transition: border-color 0.2s; }
//         .input-field:focus { border-color: var(--moss); }
//         .badge { display: inline-flex; align-items: center; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
//         .page-btn { width: 36px; height: 36px; border-radius: 8px; border: 1.5px solid var(--border); background: white; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.15s; display: flex; align-items: center; justify-content: center; }
//         .page-btn:hover:not(:disabled) { border-color: var(--moss); color: var(--moss); }
//         .page-btn.active { background: var(--forest); color: white; border-color: var(--forest); }
//         .page-btn:disabled { opacity: 0.35; cursor: not-allowed; }
//         .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; padding: 16px; z-index: 50; overflow-y: auto; }
//         .amenity-check { display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer; padding: 4px 0; color: var(--charcoal); }
//         .amenity-check input[type="checkbox"] { accent-color: var(--forest); width: 14px; height: 14px; }
//         .section-label { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin-bottom: 10px; display: block; }
//         @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         .card-prop { animation: fadeUp 0.4s ease both; }
//         .card-prop:nth-child(2) { animation-delay: 0.05s; }
//         .card-prop:nth-child(3) { animation-delay: 0.10s; }
//         .card-prop:nth-child(4) { animation-delay: 0.15s; }
//         .card-prop:nth-child(5) { animation-delay: 0.20s; }
//         .card-prop:nth-child(6) { animation-delay: 0.25s; }
//       `}</style>

//       <div style={{ minHeight: '100vh', background: 'var(--cream)', color: 'var(--charcoal)' }}>

//         {/* NAV */}
//         <nav style={{
//           background: 'var(--forest)', color: 'white',
//           position: 'sticky', top: 0, zIndex: 50,
//           padding: '0 24px',
//           display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//           height: '60px', boxShadow: '0 2px 20px rgba(0,0,0,0.2)'
//         }}>
//           <button onClick={() => navigate("/")} style={{
//             background: 'none', border: 'none', color: 'rgba(255,255,255,0.75)',
//             cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s'
//           }}
//             onMouseOver={e => e.currentTarget.style.color = 'white'}
//             onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
//           >← Home</button>

//           <span className="font-display" style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '0.02em' }}>
//             UrbanNest<span style={{ color: 'var(--sand)' }}>360</span>
//           </span>

//           <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//             <a href="#listings" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>Browse</a>
//             <button onClick={openFavorites} style={{
//               background: 'var(--sand)', color: 'var(--forest)',
//               border: 'none', borderRadius: '20px', padding: '7px 16px',
//               fontSize: '13px', fontWeight: 600, cursor: 'pointer',
//               display: 'flex', alignItems: 'center', gap: '6px'
//             }}>
//               <Heart size={14} style={{ fill: favorites.length > 0 ? 'var(--forest)' : 'none' }} />
//               Saved {favorites.length > 0 && `(${favorites.length})`}
//             </button>
//           </div>
//         </nav>

//         {/* HERO */}
//         <section style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
//           <img src="/him.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55)' }} />
//           <div style={{
//             position: 'absolute', inset: 0,
//             background: 'linear-gradient(to bottom, transparent 40%, rgba(28,43,26,0.6))',
//             display: 'flex', flexDirection: 'column',
//             alignItems: 'center', justifyContent: 'center',
//             color: 'white', textAlign: 'center', padding: '24px'
//           }}>
//             <div className="font-display" style={{ fontSize: '13px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--sand)', marginBottom: '12px', fontWeight: 500 }}>
//               Rental Properties
//             </div>
//             <h1 className="font-display" style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, margin: '0 0 12px', lineHeight: 1.1 }}>
//               Find Your Perfect Rental
//             </h1>
//             <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', margin: 0, fontWeight: 300 }}>
//               Curated rentals across India's finest cities
//             </p>
//           </div>
//         </section>

//         {/* LAYOUT */}
//         <div id="listings" style={{ display: 'flex', minHeight: 'calc(100vh - 380px)' }}>

//           {/* SIDEBAR */}
//           <aside style={{
//             width: '280px', flexShrink: 0,
//             background: 'white', borderRight: '1px solid var(--border)',
//             position: 'sticky', top: '60px',
//             height: 'calc(100vh - 60px)', overflowY: 'auto',
//             padding: '28px 20px',
//           }}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
//               <span className="font-display" style={{ fontSize: '22px', fontWeight: 600 }}>Filters</span>
//               {activeFiltersCount > 0 && (
//                 <button onClick={() => {
//                   setCurrentBeds(0); setCurrentType(''); setMinPrice(''); setMaxPrice('');
//                   setSelectedAmenities([]); setSearchInput(''); setAppliedSearch(''); setCurrentPage(1);
//                 }} style={{ background: 'none', border: 'none', color: 'var(--bark)', fontSize: '12px', cursor: 'pointer', fontWeight: 500, textDecoration: 'underline' }}>
//                   Clear all
//                 </button>
//               )}
//             </div>

//             <div style={{ marginBottom: '24px' }}>
//               <span className="section-label">Search</span>
//               <div style={{ position: 'relative' }}>
//                 <input type="text" placeholder="City, title, location..."
//                   value={searchInput}
//                   onChange={e => setSearchInput(e.target.value)}
//                   onKeyDown={e => e.key === 'Enter' && applyFilters()}
//                   className="input-field" style={{ paddingRight: '40px' }}
//                 />
//                 <button onClick={applyFilters} style={{
//                   position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
//                   background: 'none', border: 'none', cursor: 'pointer', color: 'var(--moss)', display: 'flex', alignItems: 'center'
//                 }}><Search size={16} /></button>
//               </div>
//             </div>

//             <div style={{ marginBottom: '24px' }}>
//               <span className="section-label">BHK</span>
//               <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
//                 {[1, 2, 3, 4].map(n => (
//                   <button key={n}
//                     onClick={() => { setCurrentBeds(prev => prev === n ? 0 : n); setCurrentPage(1); }}
//                     className={`filter-chip ${currentBeds === n ? 'active' : ''}`}
//                   >{n === 4 ? '4+' : n} BHK</button>
//                 ))}
//               </div>
//             </div>

//             <div style={{ marginBottom: '24px' }}>
//               <span className="section-label">Property Type</span>
//               <select value={currentType}
//                 onChange={e => { setCurrentType(e.target.value); setCurrentPage(1); }}
//                 className="input-field"
//               >
//                 <option value="">All Types</option>
//                 {["Apartment","Villa","Penthouse","Bungalow","Farmhouse","Duplex","Row House"].map(t => (
//                   <option key={t} value={t}>{t}</option>
//                 ))}
//               </select>
//             </div>

//             <div style={{ marginBottom: '24px' }}>
//               <span className="section-label">Price Range (₹/month)</span>
//               <div style={{ display: 'flex', gap: '8px' }}>
//                 <input type="number" placeholder="Min" value={minPrice}
//                   onChange={e => setMinPrice(e.target.value)}
//                   className="input-field" style={{ width: '50%' }} />
//                 <input type="number" placeholder="Max" value={maxPrice}
//                   onChange={e => setMaxPrice(e.target.value)}
//                   className="input-field" style={{ width: '50%' }} />
//               </div>
//             </div>

//             <div style={{ marginBottom: '24px' }}>
//               <span className="section-label">Sort By</span>
//               <select value={sortMode}
//                 onChange={e => { setSortMode(e.target.value); setCurrentPage(1); }}
//                 className="input-field"
//               >
//                 <option value="reco">Recommended</option>
//                 <option value="low">Price: Low → High</option>
//                 <option value="high">Price: High → Low</option>
//               </select>
//             </div>

//             <div>
//               <span className="section-label">Amenities</span>
//               <div style={{ maxHeight: '220px', overflowY: 'auto', paddingRight: '4px' }}>
//                 {amenitiesList.map(am => (
//                   <label key={am} className="amenity-check">
//                     <input type="checkbox"
//                       checked={selectedAmenities.includes(am)}
//                       onChange={() => {
//                         setSelectedAmenities(prev =>
//                           prev.includes(am) ? prev.filter(a => a !== am) : [...prev, am]
//                         );
//                         setCurrentPage(1);
//                       }}
//                     />{am}
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </aside>

//           {/* MAIN */}
//           <main style={{ flex: 1, padding: '28px 24px', minWidth: 0 }}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
//               <div>
//                 <span className="font-display" style={{ fontSize: '28px', fontWeight: 600, color: 'var(--forest)' }}>{filtered.length}</span>
//                 <span style={{ fontSize: '14px', color: 'var(--muted)', marginLeft: '6px' }}>rentals found</span>
//               </div>
//               {activeFiltersCount > 0 && (
//                 <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
//                   {currentBeds > 0 && (
//                     <span className="badge" style={{ background: '#EEF2E8', color: 'var(--forest)' }}>
//                       {currentBeds === 4 ? '4+ BHK' : `${currentBeds} BHK`}
//                       <button onClick={() => setCurrentBeds(0)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px', padding: 0, color: 'inherit' }}>×</button>
//                     </span>
//                   )}
//                   {currentType && (
//                     <span className="badge" style={{ background: '#EEF2E8', color: 'var(--forest)' }}>
//                       {currentType}
//                       <button onClick={() => setCurrentType('')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px', padding: 0, color: 'inherit' }}>×</button>
//                     </span>
//                   )}
//                   {appliedSearch && (
//                     <span className="badge" style={{ background: '#EEF2E8', color: 'var(--forest)' }}>
//                       "{appliedSearch}"
//                       <button onClick={() => { setAppliedSearch(''); setSearchInput(''); }} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px', padding: 0, color: 'inherit' }}>×</button>
//                     </span>
//                   )}
//                 </div>
//               )}
//             </div>

//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
//               {paginated.map(p => (
//                 <article key={p.id} className="card-prop">
//                   <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
//                     <img src={p.img} alt={p.title}
//                       style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
//                       onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
//                       onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
//                     />
//                     <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
//                       <span style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '6px', padding: '3px 10px', fontSize: '11px', fontWeight: 600, color: 'var(--forest)', letterSpacing: '0.04em' }}>{p.type}</span>
//                       <span style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '6px', padding: '3px 10px', fontSize: '11px', fontWeight: 600, color: 'var(--charcoal)' }}>{p.beds} BHK</span>
//                     </div>

//                     <button
//                       className={`heart-btn ${isFavorite(p.id) ? 'active' : ''}`}
//                       onClick={(e) => { e.stopPropagation(); toggleFavorite(p.id); }}
//                     >
//                       <Heart size={16} />
//                     </button>

//                     <button onClick={() => openDetail(p)} style={{
//                       position: 'absolute', bottom: '12px', right: '12px',
//                       background: 'var(--forest)', color: 'white', border: 'none',
//                       borderRadius: '8px', padding: '7px 14px', fontSize: '12px',
//                       fontWeight: 600, cursor: 'pointer'
//                     }}>View Details</button>
//                   </div>

//                   <div style={{ padding: '16px' }}>
//                     <h3 className="font-display" style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'var(--charcoal)' }}>{p.title}</h3>
//                     <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '0 0 14px' }}>{p.city}, {p.state} · {p.area} sqft</p>
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                       <span className="font-display" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--forest)' }}>
//                         {formatINR(p.price)}<span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--muted)' }}> /mo</span>
//                       </span>
//                       <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', background: '#EEF2E8', padding: '3px 8px', borderRadius: '4px' }}>For Rent</span>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>

//             {paginated.length === 0 && (
//               <div style={{ textAlign: 'center', padding: '80px 24px', color: 'var(--muted)' }}>
//                 <div className="font-display" style={{ fontSize: '48px', marginBottom: '12px' }}>∅</div>
//                 <p style={{ fontSize: '16px' }}>No rentals match your filters.</p>
//               </div>
//             )}

//             {totalPages > 1 && (
//               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', marginTop: '48px' }}>
//                 <button className="page-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(p => Math.max(1, p - 1))}>
//                   <ChevronLeft size={15} />
//                 </button>
//                 {Array.from({ length: totalPages }, (_, i) => (
//                   <button key={i + 1} className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
//                     onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
//                 ))}
//                 <button className="page-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}>
//                   <ChevronRight size={15} />
//                 </button>
//               </div>
//             )}
//           </main>
//         </div>

//         {/* DETAIL MODAL */}
//         {showDetail && selectedProp && (
//           <div className="modal-overlay" onClick={closeDetail}>
//             <div style={{ background: 'white', borderRadius: '20px', width: '100%', maxWidth: '720px', margin: '16px' }} onClick={e => e.stopPropagation()}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
//                 <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 600, margin: 0 }}>{selectedProp.title}</h3>
//                 <button onClick={closeDetail} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', fontSize: '22px', lineHeight: 1 }}>×</button>
//               </div>
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '24px' }}>
//                 <div>
//                   <img src={selectedProp.img} alt="" style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px' }} />
//                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
//                     {selectedProp.amenities?.slice(0, 4).map(t => (
//                       <span key={t} style={{ padding: '4px 10px', borderRadius: '6px', background: '#EEF2E8', color: 'var(--forest)', fontSize: '11px', fontWeight: 500 }}>{t}</span>
//                     ))}
//                   </div>
//                 </div>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
//                   <div className="font-display" style={{ fontSize: '26px', fontWeight: 700, color: 'var(--forest)' }}>
//                     {formatINR(selectedProp.price)}<span style={{ fontSize: '14px', fontWeight: 400, color: 'var(--muted)' }}> /month</span>
//                   </div>
//                   <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
//                     {selectedProp.type} · {selectedProp.beds} BHK · {selectedProp.area} sqft<br />{selectedProp.city}, {selectedProp.state}
//                   </p>
//                   <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--charcoal)', margin: 0 }}>{selectedProp.desc}</p>
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
//                     <button onClick={openContact} className="btn-primary" style={{ padding: '12px', borderRadius: '10px', fontWeight: 600, fontSize: '14px' }}>Contact Owner</button>
//                     <button onClick={() => loadMap(selectedProp.city, selectedProp.state)} style={{ padding: '12px', borderRadius: '10px', fontWeight: 600, fontSize: '14px', background: '#EEF2E8', color: 'var(--forest)', border: 'none', cursor: 'pointer' }}>Show on Map</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* MAP MODAL */}
//         {showMap && (
//           <div className="modal-overlay" onClick={closeMap}>
//             <div style={{ background: 'white', borderRadius: '20px', width: '100%', maxWidth: '900px', height: '75vh', display: 'flex', flexDirection: 'column', margin: '16px' }} onClick={e => e.stopPropagation()}>
//               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: '1px solid var(--border)' }}>
//                 <h3 className="font-display" style={{ fontSize: '20px', fontWeight: 600, margin: 0 }}>Property Location</h3>
//                 <button onClick={closeMap} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', color: 'var(--muted)' }}>×</button>
//               </div>
//               <div style={{ flex: 1, padding: '16px' }}>
//                 {mapLoading ? (
//                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
//                     <div style={{ width: '40px', height: '40px', border: '3px solid var(--border)', borderTopColor: 'var(--forest)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
//                   </div>
//                 ) : (
//                   <iframe src={mapUrl} style={{ width: '100%', height: '100%', border: 'none', borderRadius: '12px' }} allowFullScreen loading="lazy" title="Map" />
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* FAVORITES MODAL */}
//         {showFavorites && (
//           <div className="modal-overlay" onClick={closeFavorites}>
//             <div style={{ background: 'white', borderRadius: '20px', width: '100%', maxWidth: '780px', maxHeight: '85vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', margin: '16px' }} onClick={e => e.stopPropagation()}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
//                 <h2 className="font-display" style={{ fontSize: '24px', fontWeight: 600, margin: 0, color: 'var(--forest)' }}>
//                   Saved Properties {favoriteProperties.length > 0 && `(${favoriteProperties.length})`}
//                 </h2>
//                 <button onClick={closeFavorites} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', color: 'var(--muted)' }}>×</button>
//               </div>
//               <div style={{ overflowY: 'auto', padding: '20px 24px' }}>
//                 {favoriteProperties.length === 0 ? (
//                   <div style={{ textAlign: 'center', padding: '60px', color: 'var(--muted)' }}>
//                     <Heart size={40} style={{ marginBottom: '12px', opacity: 0.3 }} />
//                     <p style={{ fontSize: '15px', margin: 0 }}>No saved properties yet.</p>
//                   </div>
//                 ) : (
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//                     {favoriteProperties.map(p => (
//                       <div key={p.id} style={{ display: 'flex', gap: '16px', padding: '14px', border: '1px solid var(--border)', borderRadius: '12px' }}>
//                         <img src={p.img} alt="" style={{ width: '90px', height: '80px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
//                         <div style={{ flex: 1, minWidth: 0 }}>
//                           <h4 className="font-display" style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 3px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</h4>
//                           <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '0 0 4px' }}>{p.city}, {p.state} · {p.area} sqft</p>
//                           <p className="font-display" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--forest)', margin: '0 0 8px' }}>{formatINR(p.price)} /mo</p>
//                           <button onClick={() => toggleFavorite(p.id)} style={{ background: 'none', border: 'none', color: '#e53935', fontSize: '12px', cursor: 'pointer', fontWeight: 500, padding: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
//                             <X size={12} /> Remove
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* ✅ FIXED: passes both propertyTitle and propertyId */}
//         {showContact && (
//           <PropertyModal
//             onClose={closeContact}
//             propertyTitle={contactPropTitle}
//             propertyId={contactPropId}
//           />
//         )}
//         {showToast && <Toast message={showToast} onClose={() => setShowToast(null)} />}
//       </div>
//     </>
//   );
// }





// src/pages/RentPage.jsx
import BASE_URL from '../config';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import PropertyModal from '../components/PropertyModal.jsx';
import { useFavorites } from '../hooks/useFavorites.js';
import io from 'socket.io-client';
import Toast from '../components/Toast.jsx';

const socket = io(BASE_URL);
const ITEMS_PER_PAGE = 9;
const formatINR = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

export default function RentPage() {
  const navigate = useNavigate();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBeds, setCurrentBeds] = useState(0);
  const [currentType, setCurrentType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [sortMode, setSortMode] = useState('reco');
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProp, setSelectedProp] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [mapUrl, setMapUrl] = useState('');
  const [mapLoading, setMapLoading] = useState(false);
  const [contactPropTitle, setContactPropTitle] = useState("");
  const [contactPropId, setContactPropId] = useState(""); // ✅ ADDED
  const [showToast, setShowToast] = useState(null);

  const amenitiesList = [
    "Parking","Gym","Swimming Pool","Security","Garden","Lift","Power Backup",
    "Club House","Indoor Games Room","Children's Play Area","Jogging Track",
    "Yoga/Meditation Area","Multipurpose Hall","CCTV Surveillance","Fire Fighting System",
    "Rain Water Harvesting","Sewage Treatment Plant","24x7 Water Supply","Intercom Facility",
    "Vaastu Compliant","Solar Water Heater","Laundry Service","Library","Tennis Court",
    "Badminton Court","Basketball Court","Amphitheater"
  ];

  useEffect(() => {
    fetch(`${BASE_URL}/api/rent-properties`)
      .then(res => { if (!res.ok) throw new Error(`Status ${res.status}`); return res.json(); })
      .then(raw => {
        let list = Array.isArray(raw) ? raw : [];
        if (list.length < 5) {
          return fetch(`${BASE_URL}/api/buy-properties`)
            .then(r => r.json())
            .then(data => Array.isArray(data) ? data : []);
        }
        return list;
      })
      .then(list => {
        setProperties(list.map(p => ({
          ...p,
          img: p.img || (p.images?.length > 0 ? p.images[0] : '/default-property.jpg'),
          city: p.city || p.location?.split(',')[0]?.trim() || 'Unknown',
          state: p.state || p.location?.split(',')[1]?.trim() || 'Unknown',
          amenities: Array.isArray(p.amenities) ? p.amenities : (p.amenities ? [p.amenities] : []),
          desc: p.desc || p.description || 'No description available.',
        })));
      })
      .catch(err => alert(`Could not load rent properties.\nError: ${err.message}`));
  }, []);

  useEffect(() => {
    socket.on('new-property', (newProp) => {
      const standardized = {
        ...newProp,
        img: newProp.img || (newProp.images?.length > 0 ? newProp.images[0] : '/default-property.jpg'),
        city: newProp.city || newProp.location?.split(',')[0]?.trim() || 'Unknown',
        state: newProp.state || newProp.location?.split(',')[1]?.trim() || 'Unknown',
        amenities: Array.isArray(newProp.amenities) ? newProp.amenities : [],
        desc: newProp.desc || newProp.description || 'No description available.',
      };
      setProperties(prev => [standardized, ...prev]);
      setShowToast(`New listing: "${newProp.title}" just posted!`);
    });
    return () => socket.off('new-property');
  }, []);

  const applyFilters = () => { setAppliedSearch(searchInput.trim()); setCurrentPage(1); };

  const getFiltered = () => {
    return properties.filter(p => {
      if (currentBeds > 0) {
        if (currentBeds === 4) { if (p.beds < 4) return false; }
        else { if (p.beds !== currentBeds) return false; }
      }
      if (currentType && p.type !== currentType) return false;
      const min = minPrice ? parseInt(minPrice) : 0;
      const max = maxPrice ? parseInt(maxPrice) : Infinity;
      if (p.price < min || p.price > max) return false;
      if (selectedAmenities.length > 0) {
        if (!Array.isArray(p.amenities)) return false;
        if (!selectedAmenities.every(am => p.amenities.includes(am))) return false;
      }
      const q = appliedSearch.toLowerCase();
      if (q) return (
        (p.city?.toLowerCase().includes(q)) ||
        (p.title?.toLowerCase().includes(q)) ||
        (p.state?.toLowerCase().includes(q))
      );
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
  const favoriteProperties = properties.filter(p => isFavorite(p.id));

  const loadMap = async (city, state) => {
    setMapLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(`${city}, ${state}, India`)}&limit=1`,
        { headers: { 'User-Agent': 'UrbanNest360/1.0' } }
      );
      const data = await res.json();
      if (data?.[0]) {
        const { lat, lon } = data[0];
        const bbox = `${parseFloat(lon)-0.05},${parseFloat(lat)-0.05},${parseFloat(lon)+0.05},${parseFloat(lat)+0.05}`;
        setMapUrl(`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`);
        setShowMap(true);
      } else alert("Location not found.");
    } catch { alert("Failed to load map."); }
    finally { setMapLoading(false); }
  };

  const openDetail = (prop) => { setSelectedProp(prop); setShowDetail(true); };
  const closeDetail = () => { setShowDetail(false); setSelectedProp(null); };

  // ✅ FIXED: now saves both title and _id
  const openContact = () => {
    closeDetail();
    setContactPropTitle(selectedProp?.title || "Property");
    setContactPropId(selectedProp?._id || selectedProp?.id || "");
    setShowContact(true);
  };

  const closeContact = () => setShowContact(false);
  const openFavorites = () => setShowFavorites(true);
  const closeFavorites = () => setShowFavorites(false);
  const closeMap = () => setShowMap(false);

  const activeFiltersCount = [
    currentBeds > 0, currentType, minPrice, maxPrice,
    selectedAmenities.length > 0, appliedSearch
  ].filter(Boolean).length;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; margin: 0; }
        .font-display { font-family: 'Cormorant Garamond', serif; }
        :root {
          --forest: #1C2B1A;
          --moss: #4A5E3A;
          --sage: #7A9468;
          --sand: #C8B89A;
          --cream: #F7F4EF;
          --warm-white: #FDFCFA;
          --bark: #6B4C2A;
          --charcoal: #2C2C2C;
          --muted: #8A8A8A;
          --border: #E8E2D9;
        }
        .btn-primary { background: var(--forest); color: white; border: none; cursor: pointer; transition: all 0.2s ease; }
        .btn-primary:hover { background: var(--moss); transform: translateY(-1px); }
        .card-prop { background: white; border-radius: 16px; overflow: hidden; border: 1px solid var(--border); transition: all 0.3s ease; }
        .card-prop:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(28,43,26,0.12); border-color: var(--sage); }
        .heart-btn { position: absolute; top: 12px; right: 12px; width: 36px; height: 36px; border-radius: 50%; background: white; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: all 0.2s ease; z-index: 2; }
        .heart-btn:hover { transform: scale(1.1); }
        .heart-btn svg { transition: all 0.2s ease; }
        .heart-btn.active svg { fill: #e53935; color: #e53935; }
        .heart-btn:not(.active) svg { fill: none; color: #555; }
        .filter-chip { padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; cursor: pointer; border: 1.5px solid var(--border); background: white; color: var(--charcoal); transition: all 0.18s; }
        .filter-chip:hover { border-color: var(--moss); color: var(--moss); }
        .filter-chip.active { background: var(--forest); color: white; border-color: var(--forest); }
        .input-field { width: 100%; padding: 10px 14px; border: 1.5px solid var(--border); border-radius: 10px; font-size: 14px; font-family: 'DM Sans', sans-serif; background: var(--warm-white); color: var(--charcoal); outline: none; transition: border-color 0.2s; }
        .input-field:focus { border-color: var(--moss); }
        .badge { display: inline-flex; align-items: center; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
        .page-btn { width: 36px; height: 36px; border-radius: 8px; border: 1.5px solid var(--border); background: white; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.15s; display: flex; align-items: center; justify-content: center; }
        .page-btn:hover:not(:disabled) { border-color: var(--moss); color: var(--moss); }
        .page-btn.active { background: var(--forest); color: white; border-color: var(--forest); }
        .page-btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; padding: 16px; z-index: 50; overflow-y: auto; }
        .amenity-check { display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer; padding: 4px 0; color: var(--charcoal); }
        .amenity-check input[type="checkbox"] { accent-color: var(--forest); width: 14px; height: 14px; }
        .section-label { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin-bottom: 10px; display: block; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        .card-prop { animation: fadeUp 0.4s ease both; }
        .card-prop:nth-child(2) { animation-delay: 0.05s; }
        .card-prop:nth-child(3) { animation-delay: 0.10s; }
        .card-prop:nth-child(4) { animation-delay: 0.15s; }
        .card-prop:nth-child(5) { animation-delay: 0.20s; }
        .card-prop:nth-child(6) { animation-delay: 0.25s; }
      `}</style>

      <div style={{ minHeight: '100vh', background: 'var(--cream)', color: 'var(--charcoal)' }}>

        {/* NAV */}
        <nav style={{
          background: 'var(--forest)', color: 'white',
          position: 'sticky', top: 0, zIndex: 50,
          padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '60px', boxShadow: '0 2px 20px rgba(0,0,0,0.2)'
        }}>
          <button onClick={() => navigate("/")} style={{
            background: 'none', border: 'none', color: 'rgba(255,255,255,0.75)',
            cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s'
          }}
            onMouseOver={e => e.currentTarget.style.color = 'white'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
          >← Home</button>

          <span className="font-display" style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '0.02em' }}>
            UrbanNest<span style={{ color: 'var(--sand)' }}>360</span>
          </span>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a href="#listings" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>Browse</a>
            <button onClick={openFavorites} style={{
              background: 'var(--sand)', color: 'var(--forest)',
              border: 'none', borderRadius: '20px', padding: '7px 16px',
              fontSize: '13px', fontWeight: 600, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <Heart size={14} style={{ fill: favorites.length > 0 ? 'var(--forest)' : 'none' }} />
              Saved {favorites.length > 0 && `(${favorites.length})`}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
          <img src="/him.jpg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55)' }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 40%, rgba(28,43,26,0.6))',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            color: 'white', textAlign: 'center', padding: '24px'
          }}>
            <div className="font-display" style={{ fontSize: '13px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--sand)', marginBottom: '12px', fontWeight: 500 }}>
              Rental Properties
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, margin: '0 0 12px', lineHeight: 1.1 }}>
              Find Your Perfect Rental
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', margin: 0, fontWeight: 300 }}>
              Curated rentals across India's finest cities
            </p>
          </div>
        </section>

        {/* LAYOUT */}
        <div id="listings" style={{ display: 'flex', minHeight: 'calc(100vh - 380px)' }}>

          {/* SIDEBAR */}
          <aside style={{
            width: '280px', flexShrink: 0,
            background: 'white', borderRight: '1px solid var(--border)',
            position: 'sticky', top: '60px',
            height: 'calc(100vh - 60px)', overflowY: 'auto',
            padding: '28px 20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <span className="font-display" style={{ fontSize: '22px', fontWeight: 600 }}>Filters</span>
              {activeFiltersCount > 0 && (
                <button onClick={() => {
                  setCurrentBeds(0); setCurrentType(''); setMinPrice(''); setMaxPrice('');
                  setSelectedAmenities([]); setSearchInput(''); setAppliedSearch(''); setCurrentPage(1);
                }} style={{ background: 'none', border: 'none', color: 'var(--bark)', fontSize: '12px', cursor: 'pointer', fontWeight: 500, textDecoration: 'underline' }}>
                  Clear all
                </button>
              )}
            </div>

            <div style={{ marginBottom: '24px' }}>
              <span className="section-label">Search</span>
              <div style={{ position: 'relative' }}>
                <input type="text" placeholder="City, title, location..."
                  value={searchInput}
                  onChange={e => setSearchInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && applyFilters()}
                  className="input-field" style={{ paddingRight: '40px' }}
                />
                <button onClick={applyFilters} style={{
                  position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', color: 'var(--moss)', display: 'flex', alignItems: 'center'
                }}><Search size={16} /></button>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <span className="section-label">BHK</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[1, 2, 3, 4].map(n => (
                  <button key={n}
                    onClick={() => { setCurrentBeds(prev => prev === n ? 0 : n); setCurrentPage(1); }}
                    className={`filter-chip ${currentBeds === n ? 'active' : ''}`}
                  >{n === 4 ? '4+' : n} BHK</button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <span className="section-label">Property Type</span>
              <select value={currentType}
                onChange={e => { setCurrentType(e.target.value); setCurrentPage(1); }}
                className="input-field"
              >
                <option value="">All Types</option>
                {["Apartment","Villa","Penthouse","Bungalow","Farmhouse","Duplex","Row House"].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <span className="section-label">Price Range (₹/month)</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input type="number" placeholder="Min" value={minPrice}
                  onChange={e => setMinPrice(e.target.value)}
                  className="input-field" style={{ width: '50%' }} />
                <input type="number" placeholder="Max" value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                  className="input-field" style={{ width: '50%' }} />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <span className="section-label">Sort By</span>
              <select value={sortMode}
                onChange={e => { setSortMode(e.target.value); setCurrentPage(1); }}
                className="input-field"
              >
                <option value="reco">Recommended</option>
                <option value="low">Price: Low → High</option>
                <option value="high">Price: High → Low</option>
              </select>
            </div>

            <div>
              <span className="section-label">Amenities</span>
              <div style={{ maxHeight: '220px', overflowY: 'auto', paddingRight: '4px' }}>
                {amenitiesList.map(am => (
                  <label key={am} className="amenity-check">
                    <input type="checkbox"
                      checked={selectedAmenities.includes(am)}
                      onChange={() => {
                        setSelectedAmenities(prev =>
                          prev.includes(am) ? prev.filter(a => a !== am) : [...prev, am]
                        );
                        setCurrentPage(1);
                      }}
                    />{am}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN */}
          <main style={{ flex: 1, padding: '28px 24px', minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="font-display" style={{ fontSize: '28px', fontWeight: 600, color: 'var(--forest)' }}>{filtered.length}</span>
                <span style={{ fontSize: '14px', color: 'var(--muted)', marginLeft: '6px' }}>rentals found</span>
              </div>
              {activeFiltersCount > 0 && (
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {currentBeds > 0 && (
                    <span className="badge" style={{ background: '#EEF2E8', color: 'var(--forest)' }}>
                      {currentBeds === 4 ? '4+ BHK' : `${currentBeds} BHK`}
                      <button onClick={() => setCurrentBeds(0)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px', padding: 0, color: 'inherit' }}>×</button>
                    </span>
                  )}
                  {currentType && (
                    <span className="badge" style={{ background: '#EEF2E8', color: 'var(--forest)' }}>
                      {currentType}
                      <button onClick={() => setCurrentType('')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px', padding: 0, color: 'inherit' }}>×</button>
                    </span>
                  )}
                  {appliedSearch && (
                    <span className="badge" style={{ background: '#EEF2E8', color: 'var(--forest)' }}>
                      "{appliedSearch}"
                      <button onClick={() => { setAppliedSearch(''); setSearchInput(''); }} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px', padding: 0, color: 'inherit' }}>×</button>
                    </span>
                  )}
                </div>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {paginated.map(p => (
                <article key={p.id} className="card-prop">
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img src={p.img} alt={p.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
                      <span style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '6px', padding: '3px 10px', fontSize: '11px', fontWeight: 600, color: 'var(--forest)', letterSpacing: '0.04em' }}>{p.type}</span>
                      <span style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '6px', padding: '3px 10px', fontSize: '11px', fontWeight: 600, color: 'var(--charcoal)' }}>{p.beds} BHK</span>
                    </div>

                    <button
                      className={`heart-btn ${isFavorite(p.id) ? 'active' : ''}`}
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(p.id); }}
                    >
                      <Heart size={16} />
                    </button>

                    <button onClick={() => openDetail(p)} style={{
                      position: 'absolute', bottom: '12px', right: '12px',
                      background: 'var(--forest)', color: 'white', border: 'none',
                      borderRadius: '8px', padding: '7px 14px', fontSize: '12px',
                      fontWeight: 600, cursor: 'pointer'
                    }}>View Details</button>
                  </div>

                  <div style={{ padding: '16px' }}>
                    <h3 className="font-display" style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'var(--charcoal)' }}>{p.title}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '0 0 14px' }}>{p.city}, {p.state} · {p.area} sqft</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span className="font-display" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--forest)' }}>
                        {formatINR(p.price)}<span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--muted)' }}> /mo</span>
                      </span>
                      <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', background: '#EEF2E8', padding: '3px 8px', borderRadius: '4px' }}>For Rent</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {paginated.length === 0 && (
              <div style={{ textAlign: 'center', padding: '80px 24px', color: 'var(--muted)' }}>
                <div className="font-display" style={{ fontSize: '48px', marginBottom: '12px' }}>∅</div>
                <p style={{ fontSize: '16px' }}>No rentals match your filters.</p>
              </div>
            )}

            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', marginTop: '48px' }}>
                <button className="page-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(p => Math.max(1, p - 1))}>
                  <ChevronLeft size={15} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button key={i + 1} className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                    onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                ))}
                <button className="page-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}>
                  <ChevronRight size={15} />
                </button>
              </div>
            )}
          </main>
        </div>

        {/* DETAIL MODAL */}
        {showDetail && selectedProp && (
          <div className="modal-overlay" onClick={closeDetail}>
            <div style={{ background: 'white', borderRadius: '20px', width: '100%', maxWidth: '720px', margin: '16px' }} onClick={e => e.stopPropagation()}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
                <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 600, margin: 0 }}>{selectedProp.title}</h3>
                <button onClick={closeDetail} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', fontSize: '22px', lineHeight: 1 }}>×</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '24px' }}>
                <div>
                  <img src={selectedProp.img} alt="" style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px' }} />
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                    {selectedProp.amenities?.slice(0, 4).map(t => (
                      <span key={t} style={{ padding: '4px 10px', borderRadius: '6px', background: '#EEF2E8', color: 'var(--forest)', fontSize: '11px', fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div className="font-display" style={{ fontSize: '26px', fontWeight: 700, color: 'var(--forest)' }}>
                    {formatINR(selectedProp.price)}<span style={{ fontSize: '14px', fontWeight: 400, color: 'var(--muted)' }}> /month</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
                    {selectedProp.type} · {selectedProp.beds} BHK · {selectedProp.area} sqft<br />{selectedProp.city}, {selectedProp.state}
                  </p>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--charcoal)', margin: 0 }}>{selectedProp.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
                    <button onClick={openContact} className="btn-primary" style={{ padding: '12px', borderRadius: '10px', fontWeight: 600, fontSize: '14px' }}>Contact Owner</button>
                    <button onClick={() => loadMap(selectedProp.city, selectedProp.state)} style={{ padding: '12px', borderRadius: '10px', fontWeight: 600, fontSize: '14px', background: '#EEF2E8', color: 'var(--forest)', border: 'none', cursor: 'pointer' }}>Show on Map</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MAP MODAL */}
        {showMap && (
          <div className="modal-overlay" onClick={closeMap}>
            <div style={{ background: 'white', borderRadius: '20px', width: '100%', maxWidth: '900px', height: '75vh', display: 'flex', flexDirection: 'column', margin: '16px' }} onClick={e => e.stopPropagation()}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: '1px solid var(--border)' }}>
                <h3 className="font-display" style={{ fontSize: '20px', fontWeight: 600, margin: 0 }}>Property Location</h3>
                <button onClick={closeMap} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', color: 'var(--muted)' }}>×</button>
              </div>
              <div style={{ flex: 1, padding: '16px' }}>
                {mapLoading ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <div style={{ width: '40px', height: '40px', border: '3px solid var(--border)', borderTopColor: 'var(--forest)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                  </div>
                ) : (
                  <iframe src={mapUrl} style={{ width: '100%', height: '100%', border: 'none', borderRadius: '12px' }} allowFullScreen loading="lazy" title="Map" />
                )}
              </div>
            </div>
          </div>
        )}

        {/* FAVORITES MODAL */}
        {showFavorites && (
          <div className="modal-overlay" onClick={closeFavorites}>
            <div style={{ background: 'white', borderRadius: '20px', width: '100%', maxWidth: '780px', maxHeight: '85vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', margin: '16px' }} onClick={e => e.stopPropagation()}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
                <h2 className="font-display" style={{ fontSize: '24px', fontWeight: 600, margin: 0, color: 'var(--forest)' }}>
                  Saved Properties {favoriteProperties.length > 0 && `(${favoriteProperties.length})`}
                </h2>
                <button onClick={closeFavorites} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', color: 'var(--muted)' }}>×</button>
              </div>
              <div style={{ overflowY: 'auto', padding: '20px 24px' }}>
                {favoriteProperties.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '60px', color: 'var(--muted)' }}>
                    <Heart size={40} style={{ marginBottom: '12px', opacity: 0.3 }} />
                    <p style={{ fontSize: '15px', margin: 0 }}>No saved properties yet.</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {favoriteProperties.map(p => (
                      <div key={p.id} style={{ display: 'flex', gap: '16px', padding: '14px', border: '1px solid var(--border)', borderRadius: '12px' }}>
                        <img src={p.img} alt="" style={{ width: '90px', height: '80px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h4 className="font-display" style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 3px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</h4>
                          <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '0 0 4px' }}>{p.city}, {p.state} · {p.area} sqft</p>
                          <p className="font-display" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--forest)', margin: '0 0 8px' }}>{formatINR(p.price)} /mo</p>
                          <button onClick={() => toggleFavorite(p.id)} style={{ background: 'none', border: 'none', color: '#e53935', fontSize: '12px', cursor: 'pointer', fontWeight: 500, padding: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <X size={12} /> Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ✅ FIXED: passes both propertyTitle and propertyId */}
        {showContact && (
          <PropertyModal
            onClose={closeContact}
            propertyTitle={contactPropTitle}
            propertyId={contactPropId}
          />
        )}
        {showToast && <Toast message={showToast} onClose={() => setShowToast(null)} />}
      </div>
    </>
  );
}