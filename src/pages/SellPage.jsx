// //SellPage.jsx

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { LogOut, History, User, ArrowLeft, Plus, TrendingUp, Home, Users } from "lucide-react";
// import { useAuth } from "../hooks/useAuth";

// export default function SellPage() {
//   const navigate = useNavigate();
//   const { user, token, logout } = useAuth();
//   const [properties, setProperties] = useState([]);
//   const [interestedBuyers, setInterestedBuyers] = useState({});
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user || !token) return;
//     fetch("http://localhost:5000/api/user-properties", {
//       headers: { "Authorization": `Bearer ${token}` }
//     })
//       .then(res => res.json())
//       .then(data => setProperties(Array.isArray(data) ? data : []))
//       .catch(err => { console.error(err); setProperties([]); })
//       .finally(() => setLoading(false));
//   }, [user, token]);

//   useEffect(() => {
//     if (!properties.length || !token) return;
//     properties.forEach(async (property) => {
//       const propId = String(property._id);
//       try {
//         const res = await fetch(`http://localhost:5000/api/interested-buyers/${propId}`, {
//           headers: { "Authorization": `Bearer ${token}` }
//         });
//         if (res.ok) {
//           const data = await res.json();
//           setInterestedBuyers(prev => ({ ...prev, [property._id]: data }));
//         }
//       } catch (err) { console.error(`Error fetching buyers for ${propId}`, err); }
//     });
//   }, [properties, token]);

//   const handleLogout = () => { logout(); navigate("/"); };

//   const getListingLabel = (p) => {
//     if (p.category === "sell" || p.for === "buy") return "For Sale";
//     if (p.category === "rent" || p.for === "rent") return "For Rent";
//     return "Listed";
//   };

//   const totalBuyers = Object.values(interestedBuyers).reduce((a, b) => a + b.length, 0);

//   if (!user) return (
//     <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Jost,sans-serif',fontSize:18,color:'#555'}}>
//       Please login to access Sell Dashboard
//     </div>
//   );

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Jost:wght@300;400;500;600;700&display=swap');
//         * { box-sizing: border-box; }
//         .sell-page { font-family: 'Jost', sans-serif; min-height: 100vh; background: #faf8f5; }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
//         .prop-card {
//           background: white; border-radius: 16px;
//           border: 1px solid #ede5da;
//           box-shadow: 0 2px 16px rgba(0,0,0,0.06);
//           overflow: hidden; transition: all 0.3s ease;
//           animation: fadeUp 0.4s ease both;
//         }
//         .prop-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
//         .buyer-card {
//           background: white; border-radius: 16px;
//           border: 1px solid #ede5da;
//           box-shadow: 0 2px 16px rgba(0,0,0,0.06);
//           overflow: hidden;
//         }
//         .stat-card {
//           background: white; border-radius: 14px;
//           border: 1px solid #ede5da;
//           padding: 24px 28px;
//           box-shadow: 0 2px 12px rgba(0,0,0,0.05);
//         }
//         @media (max-width: 640px) {
//           .sell-stats { grid-template-columns: 1fr 1fr !important; }
//           .sell-inner { padding: 0 16px !important; }
//           .sell-nav { padding: 12px 16px !important; }
//         }
//       `}</style>

//       <div className="sell-page">

//         {/* Navbar */}
//         <nav className="sell-nav" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 32px',background:'white',borderBottom:'1px solid #ede5da',position:'sticky',top:0,zIndex:50,boxShadow:'0 2px 12px rgba(0,0,0,0.05)'}}>
//           <button onClick={() => navigate("/")} style={{display:'flex',alignItems:'center',gap:8,color:'#6b4f3a',fontWeight:600,fontSize:14,background:'none',border:'none',cursor:'pointer',padding:'8px 0'}}>
//             <ArrowLeft size={17}/> Back to Home
//           </button>

//           <span style={{fontFamily:'Cormorant Garamond,serif',fontSize:22,fontWeight:700,color:'#1a0e05'}}>
//             Urban<span style={{color:'#BC6C25'}}>Nest360</span>
//           </span>

//           <div style={{display:'flex',alignItems:'center',gap:12}}>
//             <button onClick={() => navigate("/post-property")} style={{
//               display:'flex',alignItems:'center',gap:8,
//               background:'#BC6C25',color:'white',
//               padding:'10px 20px',borderRadius:10,border:'none',
//               fontWeight:700,fontSize:14,cursor:'pointer',
//               fontFamily:'Jost,sans-serif',transition:'all 0.2s',
//             }}
//               onMouseOver={e=>e.currentTarget.style.background='#a55a1b'}
//               onMouseOut={e=>e.currentTarget.style.background='#BC6C25'}
//             ><Plus size={16}/> Post Property</button>

//             <div style={{position:'relative'}}>
//               <button onClick={() => setShowDropdown(!showDropdown)} style={{
//                 display:'flex',alignItems:'center',gap:10,
//                 background:'#1a0e05',color:'white',
//                 padding:'8px 16px 8px 10px',borderRadius:10,border:'none',cursor:'pointer',
//                 fontFamily:'Jost,sans-serif',transition:'background 0.2s',
//               }}>
//                 <div style={{width:34,height:34,background:'#BC6C25',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:15,textTransform:'uppercase'}}>
//                   {user?.name?.[0] || user?.email?.[0] || "U"}
//                 </div>
//                 <User size={16}/>
//               </button>

//               {showDropdown && (
//                 <div style={{position:'absolute',right:0,marginTop:8,width:280,background:'white',borderRadius:14,boxShadow:'0 12px 40px rgba(0,0,0,0.15)',border:'1px solid #ede5da',zIndex:100,overflow:'hidden'}}>
//                   <div style={{padding:'18px 20px',borderBottom:'1px solid #f5efe8'}}>
//                     <p style={{fontWeight:700,fontSize:16,color:'#1a0e05',marginBottom:3}}>{user?.name || "My Account"}</p>
//                     <p style={{color:'#9a7a64',fontSize:13,fontWeight:400}}>{user?.email}</p>
//                   </div>
//                   <button onClick={() => { setShowDropdown(false); navigate("/history"); }} style={{display:'flex',alignItems:'center',gap:10,width:'100%',padding:'14px 20px',background:'none',border:'none',cursor:'pointer',color:'#2563eb',fontWeight:600,fontSize:14,fontFamily:'Jost,sans-serif',transition:'background 0.15s'}}
//                     onMouseOver={e=>e.currentTarget.style.background='#f8f8f8'}
//                     onMouseOut={e=>e.currentTarget.style.background='none'}>
//                     <History size={17}/> Post History
//                   </button>
//                   <button onClick={handleLogout} style={{display:'flex',alignItems:'center',gap:10,width:'100%',padding:'14px 20px',background:'none',border:'none',borderTop:'1px solid #f5efe8',cursor:'pointer',color:'#ef4444',fontWeight:600,fontSize:14,fontFamily:'Jost,sans-serif',transition:'background 0.15s'}}
//                     onMouseOver={e=>e.currentTarget.style.background='#fff8f8'}
//                     onMouseOut={e=>e.currentTarget.style.background='none'}>
//                     <LogOut size={17}/> Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </nav>

//         {/* Hero */}
//         <div style={{position:'relative',height:280,overflow:'hidden'}}>
//           <img src="https://images.pexels.com/photos/14801252/pexels-photo-14801252.jpeg" alt="Seller Hero"
//             style={{width:'100%',height:'100%',objectFit:'cover',filter:'brightness(0.5)'}}/>
//           <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(26,14,5,0.3),rgba(26,14,5,0.7))',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'0 24px'}}>
//             <p style={{color:'#DDA15E',fontWeight:700,fontSize:12,letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:12}}>Seller Dashboard</p>
//             <h1 style={{fontFamily:'Cormorant Garamond,serif',color:'white',fontSize:'clamp(28px,5vw,48px)',fontWeight:700,marginBottom:12,lineHeight:1.15}}>Sell Your Property Effortlessly</h1>
//             <p style={{color:'rgba(255,255,255,0.7)',fontSize:16,fontWeight:400,maxWidth:480}}>Reach thousands of verified buyers and close deals faster.</p>
//           </div>
//         </div>

//         {/* Stats Strip */}
//         <div style={{background:'white',borderBottom:'1px solid #ede5da'}}>
//           <div className="sell-inner" style={{maxWidth:1200,margin:'0 auto',padding:'0 32px'}}>
//             <div className="sell-stats" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:0}}>
//               {[
//                 { icon: <Home size={20}/>, label: 'My Listings', value: properties.length },
//                 { icon: <Users size={20}/>, label: 'Total Inquiries', value: totalBuyers },
//                 { icon: <TrendingUp size={20}/>, label: 'Active Listings', value: properties.length },
//               ].map((s,i) => (
//                 <div key={i} style={{padding:'20px 24px',borderRight:i<2?'1px solid #f0e6dc':'none',display:'flex',alignItems:'center',gap:16}}>
//                   <div style={{width:44,height:44,borderRadius:10,background:'rgba(188,108,37,0.1)',color:'#BC6C25',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
//                     {s.icon}
//                   </div>
//                   <div>
//                     <p style={{fontFamily:'Cormorant Garamond,serif',fontSize:28,fontWeight:700,color:'#1a0e05',lineHeight:1}}>{s.value}</p>
//                     <p style={{fontSize:13,color:'#9a7a64',fontWeight:500,marginTop:2}}>{s.label}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="sell-inner" style={{maxWidth:1200,margin:'0 auto',padding:'40px 32px 80px'}}>

//           {/* My Properties */}
//           <div style={{marginBottom:64}}>
//             <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:28,flexWrap:'wrap',gap:12}}>
//               <div>
//                 <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:34,fontWeight:700,color:'#1a0e05',marginBottom:4}}>My Properties</h2>
//                 <p style={{fontSize:14,color:'#9a7a64',fontWeight:400}}>{properties.length} listing{properties.length!==1?'s':''} posted</p>
//               </div>
//               <button onClick={() => navigate("/history")} style={{color:'#BC6C25',fontWeight:700,fontSize:14,background:'none',border:'1.5px solid #e8d5c0',padding:'9px 18px',borderRadius:8,cursor:'pointer',transition:'all 0.2s',fontFamily:'Jost,sans-serif'}}
//                 onMouseOver={e=>{e.currentTarget.style.background='#fff8f2';e.currentTarget.style.borderColor='#BC6C25';}}
//                 onMouseOut={e=>{e.currentTarget.style.background='none';e.currentTarget.style.borderColor='#e8d5c0';}}>
//                 View All →
//               </button>
//             </div>

//             {loading ? (
//               <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'80px 0'}}>
//                 <div style={{width:40,height:40,border:'4px solid #f0e6dc',borderTopColor:'#BC6C25',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/>
//               </div>
//             ) : properties.length > 0 ? (
//               <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:20}}>
//                 {properties.map((p, idx) => {
//                   const id = p._id;
//                   const buyers = interestedBuyers[id] || [];
//                   const isRent = p.category==="rent" || p.for==="rent";
//                   return (
//                     <div key={id} className="prop-card" style={{animationDelay:`${idx*0.05}s`}}>
//                       {p.images?.[0] ? (
//                         <img src={p.images[0]} alt={p.title} style={{height:180,width:'100%',objectFit:'cover',display:'block'}}
//                           onError={e=>e.target.style.display='none'}/>
//                       ) : (
//                         <div style={{height:180,background:'linear-gradient(135deg,#f5ece0,#e8d5c0)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:40}}>🏠</div>
//                       )}
//                       <div style={{padding:18}}>
//                         <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:8,marginBottom:8}}>
//                           <h3 style={{fontWeight:700,fontSize:15,color:'#1a0e05',lineHeight:1.35,flex:1}}>{p.title}</h3>
//                           <span style={{
//                             fontSize:11,fontWeight:700,padding:'4px 10px',borderRadius:20,flexShrink:0,
//                             background:isRent?'#eff6ff':'#f0fdf4',
//                             color:isRent?'#2563eb':'#16a34a',
//                             border:`1px solid ${isRent?'#bfdbfe':'#bbf7d0'}`,
//                           }}>{getListingLabel(p)}</span>
//                         </div>
//                         {p.location && <p style={{fontSize:13,color:'#9a7a64',fontWeight:400,marginBottom:10}}>📍 {p.location}</p>}
//                         <p style={{fontFamily:'Cormorant Garamond,serif',fontSize:22,fontWeight:700,color:'#BC6C25',marginBottom:12}}>
//                           ₹{Number(p.price).toLocaleString("en-IN")}{isRent?<span style={{fontSize:14,fontWeight:400,color:'#9a7a64'}}>/mo</span>:''}
//                         </p>
//                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:12,borderTop:'1px solid #f5efe8'}}>
//                           <span style={{fontSize:13,color:'#9a7a64',fontWeight:500}}>Inquiries</span>
//                           <span style={{
//                             fontWeight:700,fontSize:14,
//                             color:buyers.length>0?'#BC6C25':'#c4a882',
//                             background:buyers.length>0?'rgba(188,108,37,0.1)':'#f5efe8',
//                             padding:'3px 10px',borderRadius:20,
//                           }}>{buyers.length}</span>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div style={{textAlign:'center',padding:'60px 20px',background:'white',borderRadius:16,border:'1px solid #ede5da'}}>
//                 <div style={{fontSize:48,marginBottom:16}}>🏠</div>
//                 <h3 style={{fontFamily:'Cormorant Garamond,serif',fontSize:24,fontWeight:700,color:'#1a0e05',marginBottom:8}}>No listings yet</h3>
//                 <p style={{color:'#9a7a64',fontSize:15,marginBottom:24}}>Post your first property and it will appear here.</p>
//                 <button onClick={() => navigate("/post-property")} style={{background:'#BC6C25',color:'white',padding:'12px 28px',borderRadius:10,border:'none',fontWeight:700,fontSize:15,cursor:'pointer',fontFamily:'Jost,sans-serif'}}>
//                   + Post Your First Property
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Interested Buyers */}
//           <div>
//             <div style={{marginBottom:28}}>
//               <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:34,fontWeight:700,color:'#1a0e05',marginBottom:4}}>Interested Buyers</h2>
//               <p style={{fontSize:14,color:'#9a7a64',fontWeight:400}}>{totalBuyers} total {totalBuyers===1?'inquiry':'inquiries'} across all listings</p>
//             </div>

//             {properties.some(p => (interestedBuyers[p._id]||[]).length > 0) ? (
//               <div style={{display:'flex',flexDirection:'column',gap:16}}>
//                 {properties.map(p => {
//                   const id = p._id;
//                   const buyers = interestedBuyers[id] || [];
//                   if (buyers.length === 0) return null;
//                   return (
//                     <div key={id} className="buyer-card">
//                       <div style={{padding:'18px 24px',background:'linear-gradient(135deg,#faf8f5,#f5ece0)',borderBottom:'1px solid #ede5da',display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
//                         <h3 style={{fontWeight:700,fontSize:17,color:'#1a0e05',flex:1}}>{p.title}</h3>
//                         <span style={{background:'rgba(188,108,37,0.12)',color:'#BC6C25',fontWeight:700,fontSize:12,padding:'5px 12px',borderRadius:20}}>
//                           {buyers.length} {buyers.length===1?"inquiry":"inquiries"}
//                         </span>
//                       </div>
//                       <div style={{padding:'0 24px'}}>
//                         {buyers.map((buyer,i) => (
//                           <div key={buyer._id} style={{
//                             display:'flex',justifyContent:'space-between',alignItems:'flex-start',
//                             padding:'18px 0',gap:16,flexWrap:'wrap',
//                             borderBottom:i<buyers.length-1?'1px solid #f5efe8':'none',
//                           }}>
//                             <div style={{display:'flex',alignItems:'flex-start',gap:14}}>
//                               <div style={{width:42,height:42,borderRadius:10,background:'linear-gradient(135deg,#BC6C25,#DDA15E)',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:700,fontSize:16,flexShrink:0,textTransform:'uppercase'}}>
//                                 {buyer.name?.[0] || '?'}
//                               </div>
//                               <div>
//                                 <p style={{fontWeight:700,fontSize:15,color:'#1a0e05',marginBottom:3}}>{buyer.name}</p>
//                                 <p style={{fontSize:13,color:'#6b7280',fontWeight:400,marginBottom:buyer.whatsapp?2:0}}>{buyer.email}</p>
//                                 {buyer.whatsapp && <p style={{fontSize:13,color:'#6b7280',fontWeight:400}}>📱 {buyer.whatsapp}</p>}
//                                 {buyer.message && <p style={{fontSize:13,color:'#9a7a64',fontStyle:'italic',marginTop:6,background:'#faf8f5',padding:'8px 12px',borderRadius:8,border:'1px solid #f0e6dc'}}>"{buyer.message}"</p>}
//                               </div>
//                             </div>
//                             <span style={{fontSize:12,color:'#b59a85',fontWeight:500,flexShrink:0,background:'#f5efe8',padding:'4px 10px',borderRadius:6}}>
//                               {new Date(buyer.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div style={{textAlign:'center',padding:'60px 20px',background:'white',borderRadius:16,border:'1px solid #ede5da'}}>
//                 <div style={{fontSize:48,marginBottom:16}}>📭</div>
//                 <h3 style={{fontFamily:'Cormorant Garamond,serif',fontSize:24,fontWeight:700,color:'#1a0e05',marginBottom:8}}>No inquiries yet</h3>
//                 <p style={{color:'#9a7a64',fontSize:15}}>Share your listings to attract buyers!</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



//SellPage.jsx

import BASE_URL from '../config';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, History, User, ArrowLeft, Plus, TrendingUp, Home, Users } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function SellPage() {
  const navigate = useNavigate();
  const { user, token, logout } = useAuth();
  const [properties, setProperties] = useState([]);
  const [interestedBuyers, setInterestedBuyers] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !token) return;
    fetch(`${BASE_URL}/api/user-properties`, {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setProperties(Array.isArray(data) ? data : []))
      .catch(err => { console.error(err); setProperties([]); })
      .finally(() => setLoading(false));
  }, [user, token]);

  useEffect(() => {
    if (!properties.length || !token) return;
    properties.forEach(async (property) => {
      const propId = String(property._id);
      try {
        const res = await fetch(`${BASE_URL}/api/interested-buyers/${propId}`, {
          headers: { "Authorization": `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setInterestedBuyers(prev => ({ ...prev, [property._id]: data }));
        }
      } catch (err) { console.error(`Error fetching buyers for ${propId}`, err); }
    });
  }, [properties, token]);

  const handleLogout = () => { logout(); navigate("/"); };

  const getListingLabel = (p) => {
    if (p.category === "sell" || p.for === "buy") return "For Sale";
    if (p.category === "rent" || p.for === "rent") return "For Rent";
    return "Listed";
  };

  const totalBuyers = Object.values(interestedBuyers).reduce((a, b) => a + b.length, 0);

  if (!user) return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Jost,sans-serif',fontSize:18,color:'#555'}}>
      Please login to access Sell Dashboard
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Jost:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .sell-page { font-family: 'Jost', sans-serif; min-height: 100vh; background: #faf8f5; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .prop-card {
          background: white; border-radius: 16px;
          border: 1px solid #ede5da;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          overflow: hidden; transition: all 0.3s ease;
          animation: fadeUp 0.4s ease both;
        }
        .prop-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
        .buyer-card {
          background: white; border-radius: 16px;
          border: 1px solid #ede5da;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          overflow: hidden;
        }
        .stat-card {
          background: white; border-radius: 14px;
          border: 1px solid #ede5da;
          padding: 24px 28px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        @media (max-width: 640px) {
          .sell-stats { grid-template-columns: 1fr 1fr !important; }
          .sell-inner { padding: 0 16px !important; }
          .sell-nav { padding: 12px 16px !important; }
        }
      `}</style>

      <div className="sell-page">

        {/* Navbar */}
        <nav className="sell-nav" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 32px',background:'white',borderBottom:'1px solid #ede5da',position:'sticky',top:0,zIndex:50,boxShadow:'0 2px 12px rgba(0,0,0,0.05)'}}>
          <button onClick={() => navigate("/")} style={{display:'flex',alignItems:'center',gap:8,color:'#6b4f3a',fontWeight:600,fontSize:14,background:'none',border:'none',cursor:'pointer',padding:'8px 0'}}>
            <ArrowLeft size={17}/> Back to Home
          </button>

          <span style={{fontFamily:'Cormorant Garamond,serif',fontSize:22,fontWeight:700,color:'#1a0e05'}}>
            Urban<span style={{color:'#BC6C25'}}>Nest360</span>
          </span>

          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <button onClick={() => navigate("/post-property")} style={{
              display:'flex',alignItems:'center',gap:8,
              background:'#BC6C25',color:'white',
              padding:'10px 20px',borderRadius:10,border:'none',
              fontWeight:700,fontSize:14,cursor:'pointer',
              fontFamily:'Jost,sans-serif',transition:'all 0.2s',
            }}
              onMouseOver={e=>e.currentTarget.style.background='#a55a1b'}
              onMouseOut={e=>e.currentTarget.style.background='#BC6C25'}
            ><Plus size={16}/> Post Property</button>

            <div style={{position:'relative'}}>
              <button onClick={() => setShowDropdown(!showDropdown)} style={{
                display:'flex',alignItems:'center',gap:10,
                background:'#1a0e05',color:'white',
                padding:'8px 16px 8px 10px',borderRadius:10,border:'none',cursor:'pointer',
                fontFamily:'Jost,sans-serif',transition:'background 0.2s',
              }}>
                <div style={{width:34,height:34,background:'#BC6C25',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:15,textTransform:'uppercase'}}>
                  {user?.name?.[0] || user?.email?.[0] || "U"}
                </div>
                <User size={16}/>
              </button>

              {showDropdown && (
                <div style={{position:'absolute',right:0,marginTop:8,width:280,background:'white',borderRadius:14,boxShadow:'0 12px 40px rgba(0,0,0,0.15)',border:'1px solid #ede5da',zIndex:100,overflow:'hidden'}}>
                  <div style={{padding:'18px 20px',borderBottom:'1px solid #f5efe8'}}>
                    <p style={{fontWeight:700,fontSize:16,color:'#1a0e05',marginBottom:3}}>{user?.name || "My Account"}</p>
                    <p style={{color:'#9a7a64',fontSize:13,fontWeight:400}}>{user?.email}</p>
                  </div>
                  <button onClick={() => { setShowDropdown(false); navigate("/history"); }} style={{display:'flex',alignItems:'center',gap:10,width:'100%',padding:'14px 20px',background:'none',border:'none',cursor:'pointer',color:'#2563eb',fontWeight:600,fontSize:14,fontFamily:'Jost,sans-serif',transition:'background 0.15s'}}
                    onMouseOver={e=>e.currentTarget.style.background='#f8f8f8'}
                    onMouseOut={e=>e.currentTarget.style.background='none'}>
                    <History size={17}/> Post History
                  </button>
                  <button onClick={handleLogout} style={{display:'flex',alignItems:'center',gap:10,width:'100%',padding:'14px 20px',background:'none',border:'none',borderTop:'1px solid #f5efe8',cursor:'pointer',color:'#ef4444',fontWeight:600,fontSize:14,fontFamily:'Jost,sans-serif',transition:'background 0.15s'}}
                    onMouseOver={e=>e.currentTarget.style.background='#fff8f8'}
                    onMouseOut={e=>e.currentTarget.style.background='none'}>
                    <LogOut size={17}/> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Hero */}
        <div style={{position:'relative',height:280,overflow:'hidden'}}>
          <img src="https://images.pexels.com/photos/14801252/pexels-photo-14801252.jpeg" alt="Seller Hero"
            style={{width:'100%',height:'100%',objectFit:'cover',filter:'brightness(0.5)'}}/>
          <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(26,14,5,0.3),rgba(26,14,5,0.7))',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'0 24px'}}>
            <p style={{color:'#DDA15E',fontWeight:700,fontSize:12,letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:12}}>Seller Dashboard</p>
            <h1 style={{fontFamily:'Cormorant Garamond,serif',color:'white',fontSize:'clamp(28px,5vw,48px)',fontWeight:700,marginBottom:12,lineHeight:1.15}}>Sell Your Property Effortlessly</h1>
            <p style={{color:'rgba(255,255,255,0.7)',fontSize:16,fontWeight:400,maxWidth:480}}>Reach thousands of verified buyers and close deals faster.</p>
          </div>
        </div>

        {/* Stats Strip */}
        <div style={{background:'white',borderBottom:'1px solid #ede5da'}}>
          <div className="sell-inner" style={{maxWidth:1200,margin:'0 auto',padding:'0 32px'}}>
            <div className="sell-stats" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:0}}>
              {[
                { icon: <Home size={20}/>, label: 'My Listings', value: properties.length },
                { icon: <Users size={20}/>, label: 'Total Inquiries', value: totalBuyers },
                { icon: <TrendingUp size={20}/>, label: 'Active Listings', value: properties.length },
              ].map((s,i) => (
                <div key={i} style={{padding:'20px 24px',borderRight:i<2?'1px solid #f0e6dc':'none',display:'flex',alignItems:'center',gap:16}}>
                  <div style={{width:44,height:44,borderRadius:10,background:'rgba(188,108,37,0.1)',color:'#BC6C25',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    {s.icon}
                  </div>
                  <div>
                    <p style={{fontFamily:'Cormorant Garamond,serif',fontSize:28,fontWeight:700,color:'#1a0e05',lineHeight:1}}>{s.value}</p>
                    <p style={{fontSize:13,color:'#9a7a64',fontWeight:500,marginTop:2}}>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="sell-inner" style={{maxWidth:1200,margin:'0 auto',padding:'40px 32px 80px'}}>

          {/* My Properties */}
          <div style={{marginBottom:64}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:28,flexWrap:'wrap',gap:12}}>
              <div>
                <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:34,fontWeight:700,color:'#1a0e05',marginBottom:4}}>My Properties</h2>
                <p style={{fontSize:14,color:'#9a7a64',fontWeight:400}}>{properties.length} listing{properties.length!==1?'s':''} posted</p>
              </div>
              <button onClick={() => navigate("/history")} style={{color:'#BC6C25',fontWeight:700,fontSize:14,background:'none',border:'1.5px solid #e8d5c0',padding:'9px 18px',borderRadius:8,cursor:'pointer',transition:'all 0.2s',fontFamily:'Jost,sans-serif'}}
                onMouseOver={e=>{e.currentTarget.style.background='#fff8f2';e.currentTarget.style.borderColor='#BC6C25';}}
                onMouseOut={e=>{e.currentTarget.style.background='none';e.currentTarget.style.borderColor='#e8d5c0';}}>
                View All →
              </button>
            </div>

            {loading ? (
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'80px 0'}}>
                <div style={{width:40,height:40,border:'4px solid #f0e6dc',borderTopColor:'#BC6C25',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/>
              </div>
            ) : properties.length > 0 ? (
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:20}}>
                {properties.map((p, idx) => {
                  const id = p._id;
                  const buyers = interestedBuyers[id] || [];
                  const isRent = p.category==="rent" || p.for==="rent";
                  return (
                    <div key={id} className="prop-card" style={{animationDelay:`${idx*0.05}s`}}>
                      {p.images?.[0] ? (
                        <img src={p.images[0]} alt={p.title} style={{height:180,width:'100%',objectFit:'cover',display:'block'}}
                          onError={e=>e.target.style.display='none'}/>
                      ) : (
                        <div style={{height:180,background:'linear-gradient(135deg,#f5ece0,#e8d5c0)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:40}}>🏠</div>
                      )}
                      <div style={{padding:18}}>
                        <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:8,marginBottom:8}}>
                          <h3 style={{fontWeight:700,fontSize:15,color:'#1a0e05',lineHeight:1.35,flex:1}}>{p.title}</h3>
                          <span style={{
                            fontSize:11,fontWeight:700,padding:'4px 10px',borderRadius:20,flexShrink:0,
                            background:isRent?'#eff6ff':'#f0fdf4',
                            color:isRent?'#2563eb':'#16a34a',
                            border:`1px solid ${isRent?'#bfdbfe':'#bbf7d0'}`,
                          }}>{getListingLabel(p)}</span>
                        </div>
                        {p.location && <p style={{fontSize:13,color:'#9a7a64',fontWeight:400,marginBottom:10}}>📍 {p.location}</p>}
                        <p style={{fontFamily:'Cormorant Garamond,serif',fontSize:22,fontWeight:700,color:'#BC6C25',marginBottom:12}}>
                          ₹{Number(p.price).toLocaleString("en-IN")}{isRent?<span style={{fontSize:14,fontWeight:400,color:'#9a7a64'}}>/mo</span>:''}
                        </p>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:12,borderTop:'1px solid #f5efe8'}}>
                          <span style={{fontSize:13,color:'#9a7a64',fontWeight:500}}>Inquiries</span>
                          <span style={{
                            fontWeight:700,fontSize:14,
                            color:buyers.length>0?'#BC6C25':'#c4a882',
                            background:buyers.length>0?'rgba(188,108,37,0.1)':'#f5efe8',
                            padding:'3px 10px',borderRadius:20,
                          }}>{buyers.length}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{textAlign:'center',padding:'60px 20px',background:'white',borderRadius:16,border:'1px solid #ede5da'}}>
                <div style={{fontSize:48,marginBottom:16}}>🏠</div>
                <h3 style={{fontFamily:'Cormorant Garamond,serif',fontSize:24,fontWeight:700,color:'#1a0e05',marginBottom:8}}>No listings yet</h3>
                <p style={{color:'#9a7a64',fontSize:15,marginBottom:24}}>Post your first property and it will appear here.</p>
                <button onClick={() => navigate("/post-property")} style={{background:'#BC6C25',color:'white',padding:'12px 28px',borderRadius:10,border:'none',fontWeight:700,fontSize:15,cursor:'pointer',fontFamily:'Jost,sans-serif'}}>
                  + Post Your First Property
                </button>
              </div>
            )}
          </div>

          {/* Interested Buyers */}
          <div>
            <div style={{marginBottom:28}}>
              <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:34,fontWeight:700,color:'#1a0e05',marginBottom:4}}>Interested Buyers</h2>
              <p style={{fontSize:14,color:'#9a7a64',fontWeight:400}}>{totalBuyers} total {totalBuyers===1?'inquiry':'inquiries'} across all listings</p>
            </div>

            {properties.some(p => (interestedBuyers[p._id]||[]).length > 0) ? (
              <div style={{display:'flex',flexDirection:'column',gap:16}}>
                {properties.map(p => {
                  const id = p._id;
                  const buyers = interestedBuyers[id] || [];
                  if (buyers.length === 0) return null;
                  return (
                    <div key={id} className="buyer-card">
                      <div style={{padding:'18px 24px',background:'linear-gradient(135deg,#faf8f5,#f5ece0)',borderBottom:'1px solid #ede5da',display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
                        <h3 style={{fontWeight:700,fontSize:17,color:'#1a0e05',flex:1}}>{p.title}</h3>
                        <span style={{background:'rgba(188,108,37,0.12)',color:'#BC6C25',fontWeight:700,fontSize:12,padding:'5px 12px',borderRadius:20}}>
                          {buyers.length} {buyers.length===1?"inquiry":"inquiries"}
                        </span>
                      </div>
                      <div style={{padding:'0 24px'}}>
                        {buyers.map((buyer,i) => (
                          <div key={buyer._id} style={{
                            display:'flex',justifyContent:'space-between',alignItems:'flex-start',
                            padding:'18px 0',gap:16,flexWrap:'wrap',
                            borderBottom:i<buyers.length-1?'1px solid #f5efe8':'none',
                          }}>
                            <div style={{display:'flex',alignItems:'flex-start',gap:14}}>
                              <div style={{width:42,height:42,borderRadius:10,background:'linear-gradient(135deg,#BC6C25,#DDA15E)',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:700,fontSize:16,flexShrink:0,textTransform:'uppercase'}}>
                                {buyer.name?.[0] || '?'}
                              </div>
                              <div>
                                <p style={{fontWeight:700,fontSize:15,color:'#1a0e05',marginBottom:3}}>{buyer.name}</p>
                                <p style={{fontSize:13,color:'#6b7280',fontWeight:400,marginBottom:buyer.whatsapp?2:0}}>{buyer.email}</p>
                                {buyer.whatsapp && <p style={{fontSize:13,color:'#6b7280',fontWeight:400}}>📱 {buyer.whatsapp}</p>}
                                {buyer.message && <p style={{fontSize:13,color:'#9a7a64',fontStyle:'italic',marginTop:6,background:'#faf8f5',padding:'8px 12px',borderRadius:8,border:'1px solid #f0e6dc'}}>"{buyer.message}"</p>}
                              </div>
                            </div>
                            <span style={{fontSize:12,color:'#b59a85',fontWeight:500,flexShrink:0,background:'#f5efe8',padding:'4px 10px',borderRadius:6}}>
                              {new Date(buyer.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{textAlign:'center',padding:'60px 20px',background:'white',borderRadius:16,border:'1px solid #ede5da'}}>
                <div style={{fontSize:48,marginBottom:16}}>📭</div>
                <h3 style={{fontFamily:'Cormorant Garamond,serif',fontSize:24,fontWeight:700,color:'#1a0e05',marginBottom:8}}>No inquiries yet</h3>
                <p style={{color:'#9a7a64',fontSize:15}}>Share your listings to attract buyers!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}