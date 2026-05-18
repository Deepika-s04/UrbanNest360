// //PostPropertyPage.jsx

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// export default function PostPropertyPage() {
//   const navigate = useNavigate();
//   const { user, loading } = useAuth();
//   const [submitting, setSubmitting] = useState(false);
//   const [previewImages, setPreviewImages] = useState([]);
//   const [step, setStep] = useState(1);
//   const MAX_IMAGES = 8;

//   useEffect(() => {
//     if (!loading && !user) {
//       alert("Please login to post a property");
//       navigate("/login");
//     }
//   }, [user, loading, navigate]);

//   const [formData, setFormData] = useState({
//     title: "", category: "sell", type: "", beds: "", area: "",
//     price: "", location: "", description: "", amenities: [], images: [],
//   });

//   const amenitiesList = [
//     "Parking","Gym","Swimming Pool","Security","Garden","Lift","Power Backup",
//     "Club House","Indoor Games Room","Children's Play Area","Jogging Track",
//     "Yoga/Meditation Area","Multipurpose Hall","CCTV Surveillance","Fire Fighting System",
//     "Rain Water Harvesting","Sewage Treatment Plant","24x7 Water Supply","Intercom Facility",
//     "Vaastu Compliant","Solar Water Heater","Laundry Service","Library","Tennis Court",
//     "Badminton Court","Basketball Court","Amphitheater"
//   ];

//   const handleChange = (e) => {
//     const { name, value, files, type: inputType, checked } = e.target;
//     if (name === "images") {
//       const fileArr = Array.from(files);
//       if (fileArr.length > MAX_IMAGES) {
//         alert(`Maximum ${MAX_IMAGES} images allowed. You selected ${fileArr.length}.`);
//         return;
//       }
//       setFormData({ ...formData, images: files });
//       setPreviewImages(fileArr.map(f => URL.createObjectURL(f)));
//     } else if (inputType === "checkbox") {
//       setFormData(prev => ({
//         ...prev,
//         amenities: checked ? [...prev.amenities, value] : prev.amenities.filter(i => i !== value),
//       }));
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // ✅ FIXED: uses FormData + real files instead of base64
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     if (!token) { alert("Please login to post property"); navigate("/login"); return; }
//     const { title, category, type, beds, area, price, location, images } = formData;
//     if (!title || !category || !type || !beds || !area || !price || !location) {
//       alert("Please fill all required fields.");
//       return;
//     }
//     if (!images || images.length === 0) {
//       alert("Please upload at least one image.");
//       return;
//     }
//     setSubmitting(true);
//     try {
//       const fd = new FormData();
//       fd.append('title', title);
//       fd.append('category', category);
//       fd.append('type', type);
//       fd.append('beds', beds);
//       fd.append('area', area);
//       fd.append('price', price);
//       fd.append('location', location);
//       fd.append('description', formData.description || '');
//       fd.append('amenities', JSON.stringify(formData.amenities));

//       // Append each image file under key 'images'
//       Array.from(images).forEach(file => fd.append('images', file));

//       const response = await fetch("http://localhost:5000/api/user-properties", {
//         method: "POST",
//         // ⚠️ Do NOT set Content-Type header — browser sets it automatically with multipart boundary
//         headers: { "Authorization": `Bearer ${token}` },
//         body: fd,
//       });

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.detail || errorData.error || `Status ${response.status}`);
//       }

//       alert("✅ Property posted successfully!");
//       setFormData({ title: "", category: "sell", type: "", beds: "", area: "", price: "", location: "", description: "", amenities: [], images: [] });
//       setPreviewImages([]);
//       if (document.getElementById("images")) document.getElementById("images").value = null;
//       navigate(category === "sell" ? "/buy" : "/rent");
//     } catch (error) {
//       alert(`Failed to post property: ${error.message}`);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) return (
//     <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#faf8f5'}}>
//       <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:16}}>
//         <div style={{width:52,height:52,border:'4px solid #e8d5c0',borderTopColor:'#BC6C25',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/>
//         <p style={{color:'#BC6C25',fontWeight:600,fontSize:17,fontFamily:'Jost,sans-serif'}}>Loading...</p>
//         <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
//       </div>
//     </div>
//   );
//   if (!user) return null;

//   const steps = [{ num: 1, label: "Basic Info" }, { num: 2, label: "Details" }, { num: 3, label: "Amenities & Photos" }];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=Jost:wght@300;400;500;600;700&display=swap');
//         * { box-sizing: border-box; }
//         .pp-page { font-family: 'Jost', sans-serif; min-height: 100vh; background: #faf8f5; }
//         .pp-input {
//           width: 100%; padding: 14px 18px;
//           border: 1.5px solid #e0d5c8; border-radius: 10px;
//           font-size: 15px; color: #2d1f0e; background: #fff;
//           outline: none; transition: all 0.2s;
//           font-family: 'Jost', sans-serif;
//         }
//         .pp-input:focus { border-color: #BC6C25; box-shadow: 0 0 0 3px rgba(188,108,37,0.1); }
//         .pp-input::placeholder { color: #b59a85; }
//         .pp-label { display: block; font-weight: 600; font-size: 14px; color: #3d2b1f; margin-bottom: 8px; letter-spacing: 0.02em; }
//         .pp-btn-primary {
//           padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px;
//           background: #BC6C25; color: white; border: none; cursor: pointer;
//           transition: all 0.2s; font-family: 'Jost', sans-serif; letter-spacing: 0.02em;
//         }
//         .pp-btn-primary:hover:not(:disabled) { background: #a55a1b; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(188,108,37,0.3); }
//         .pp-btn-primary:disabled { opacity: 0.55; cursor: not-allowed; }
//         .pp-btn-secondary {
//           padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px;
//           background: white; color: #BC6C25; border: 2px solid #e0d5c8; cursor: pointer;
//           transition: all 0.2s; font-family: 'Jost', sans-serif;
//         }
//         .pp-btn-secondary:hover { border-color: #BC6C25; background: #fff8f2; }
//         .pp-amenity input { display: none; }
//         .pp-amenity label {
//           display: block; padding: 9px 12px; border-radius: 8px;
//           border: 1.5px solid #e0d5c8; cursor: pointer; font-size: 13px;
//           font-weight: 500; color: #5c3d1e; background: #faf8f5;
//           transition: all 0.15s; text-align: center;
//         }
//         .pp-amenity input:checked + label {
//           background: #BC6C25; color: white; border-color: #BC6C25;
//           box-shadow: 0 3px 10px rgba(188,108,37,0.25);
//         }
//         .pp-amenity label:hover { border-color: #BC6C25; color: #BC6C25; background: #fff8f0; }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
//         .step-anim { animation: fadeUp 0.35s ease both; }
//       `}</style>

//       <div className="pp-page">

//         {/* Hero Header */}
//         <div style={{background:'linear-gradient(135deg,#1a0e05 0%,#3d1f08 50%,#6b3410 100%)',padding:'52px 24px 100px',position:'relative',overflow:'hidden'}}>
//           <div style={{position:'absolute',top:-80,right:-80,width:360,height:360,borderRadius:'50%',background:'rgba(188,108,37,0.08)',pointerEvents:'none'}}/>
//           <div style={{position:'absolute',bottom:-100,left:-60,width:300,height:300,borderRadius:'50%',background:'rgba(255,255,255,0.03)',pointerEvents:'none'}}/>
//           <div style={{maxWidth:680,margin:'0 auto',textAlign:'center',position:'relative',zIndex:1}}>
//             <button onClick={() => navigate('/')} style={{
//               background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',
//               color:'rgba(255,255,255,0.7)',padding:'8px 20px',borderRadius:20,
//               fontSize:13,fontWeight:500,cursor:'pointer',marginBottom:28,
//               fontFamily:'Jost,sans-serif',transition:'all 0.2s',
//             }}
//               onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.15)'}
//               onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.08)'}
//             >← Back to Home</button>
//             <p style={{color:'#DDA15E',fontWeight:700,fontSize:12,letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:14}}>UrbanNest360</p>
//             <h1 style={{fontFamily:'Cormorant Garamond,serif',color:'white',fontSize:'clamp(32px,5vw,52px)',fontWeight:800,marginBottom:14,lineHeight:1.15}}>
//               List Your Property
//             </h1>
//             <p style={{color:'rgba(255,255,255,0.6)',fontSize:16,fontWeight:400,maxWidth:400,margin:'0 auto'}}>Reach thousands of buyers and renters across India</p>
//           </div>
//         </div>

//         {/* Step Indicator */}
//         <div style={{maxWidth:680,margin:'-36px auto 0',padding:'0 24px',position:'relative',zIndex:10}}>
//           <div style={{background:'white',borderRadius:16,padding:'20px 28px',boxShadow:'0 8px 40px rgba(0,0,0,0.12)',display:'flex',alignItems:'center',justifyContent:'center'}}>
//             {steps.map((s, i) => (
//               <div key={s.num} style={{display:'flex',alignItems:'center',flex: i < steps.length-1 ? 1 : 'none'}}>
//                 <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6}}>
//                   <div onClick={() => step > s.num && setStep(s.num)} style={{
//                     width:40,height:40,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',
//                     fontWeight:700,fontSize:15,cursor:step>s.num?'pointer':'default',transition:'all 0.3s',
//                     background:step>=s.num?'#BC6C25':'#f0e6dc',
//                     color:step>=s.num?'white':'#c4a882',
//                     boxShadow:step===s.num?'0 4px 16px rgba(188,108,37,0.4)':'none',
//                   }}>{step>s.num?'✓':s.num}</div>
//                   <span style={{fontSize:12,fontWeight:600,color:step>=s.num?'#BC6C25':'#c4a882',whiteSpace:'nowrap'}}>{s.label}</span>
//                 </div>
//                 {i < steps.length-1 && (
//                   <div style={{flex:1,height:2,background:step>s.num?'#BC6C25':'#f0e6dc',margin:'0 10px',marginBottom:22,borderRadius:4,transition:'all 0.3s'}}/>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Form */}
//         <div style={{maxWidth:680,margin:'24px auto 80px',padding:'0 24px'}}>
//           <form onSubmit={handleSubmit}>
//             <div style={{background:'white',borderRadius:20,padding:'clamp(24px,5vw,48px)',boxShadow:'0 4px 32px rgba(0,0,0,0.07)',border:'1px solid #f0e6dc'}}>

//               {/* STEP 1 */}
//               {step===1 && (
//                 <div className="step-anim" style={{display:'flex',flexDirection:'column',gap:24}}>
//                   <div style={{borderBottom:'1px solid #f0e6dc',paddingBottom:20,marginBottom:4}}>
//                     <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:28,fontWeight:700,color:'#1a0e05',marginBottom:4}}>Basic Information</h2>
//                     <p style={{color:'#9a7a64',fontSize:15,fontWeight:400}}>Tell us about your property listing</p>
//                   </div>

//                   <div>
//                     <label className="pp-label">Property Title *</label>
//                     <input className="pp-input" type="text" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. 3BHK Luxury Sea View Apartment in Mumbai"/>
//                   </div>

//                   <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:16}}>
//                     <div>
//                       <label className="pp-label">Listing Type *</label>
//                       <select className="pp-input" name="category" value={formData.category} onChange={handleChange}>
//                         <option value="sell">🏷️ For Sale (Buy Page)</option>
//                         <option value="rent">🔑 For Rent (Rent Page)</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="pp-label">Property Type *</label>
//                       <select className="pp-input" name="type" value={formData.type} onChange={handleChange}>
//                         <option value="">Select Type</option>
//                         {["Apartment","Villa","Penthouse","Bungalow","Farmhouse","Duplex","Row House"].map(t=>(
//                           <option key={t} value={t}>{t}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="pp-label">Location *</label>
//                     <input className="pp-input" type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Bandra, Mumbai, Maharashtra"/>
//                     <p style={{fontSize:13,color:'#b59a85',marginTop:6,fontWeight:400}}>Format: Area, City, State for best results</p>
//                   </div>

//                   <div style={{display:'flex',justifyContent:'flex-end',paddingTop:8}}>
//                     <button type="button" className="pp-btn-primary" style={{minWidth:160}}
//                       onClick={() => {
//                         if (!formData.title || !formData.type || !formData.location) { alert('Please fill Title, Property Type and Location'); return; }
//                         setStep(2);
//                       }}>Next: Details →</button>
//                   </div>
//                 </div>
//               )}

//               {/* STEP 2 */}
//               {step===2 && (
//                 <div className="step-anim" style={{display:'flex',flexDirection:'column',gap:24}}>
//                   <div style={{borderBottom:'1px solid #f0e6dc',paddingBottom:20,marginBottom:4}}>
//                     <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:28,fontWeight:700,color:'#1a0e05',marginBottom:4}}>Property Details</h2>
//                     <p style={{color:'#9a7a64',fontSize:15,fontWeight:400}}>Specifications and pricing</p>
//                   </div>

//                   <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:16}}>
//                     <div>
//                       <label className="pp-label">Bedrooms (BHK) *</label>
//                       <input className="pp-input" type="number" name="beds" value={formData.beds} onChange={handleChange} placeholder="e.g. 3" min="1"/>
//                     </div>
//                     <div>
//                       <label className="pp-label">Area (sqft) *</label>
//                       <input className="pp-input" type="number" name="area" value={formData.area} onChange={handleChange} placeholder="e.g. 1500" min="100"/>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="pp-label">Price (₹) — {formData.category==="sell"?"Sale Price (one-time)":"Monthly Rent"} *</label>
//                     <div style={{position:'relative'}}>
//                       <span style={{position:'absolute',left:16,top:'50%',transform:'translateY(-50%)',fontSize:17,fontWeight:700,color:'#BC6C25'}}>₹</span>
//                       <input className="pp-input" style={{paddingLeft:36}} type="number" name="price" value={formData.price} onChange={handleChange}
//                         placeholder={formData.category==="sell"?"e.g. 7500000":"e.g. 35000"} min="1000"/>
//                     </div>
//                     {formData.price && (
//                       <p style={{fontSize:14,color:'#BC6C25',fontWeight:600,marginTop:8}}>
//                         = ₹{parseInt(formData.price||0).toLocaleString('en-IN')}{formData.category==='rent'?' / month':' (sale price)'}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="pp-label">Description</label>
//                     <textarea className="pp-input" name="description" value={formData.description} onChange={handleChange}
//                       placeholder="Describe your property – highlights, condition, nearby landmarks, special features..."
//                       rows="5" style={{resize:'vertical',lineHeight:1.7}}/>
//                   </div>

//                   <div style={{display:'flex',gap:12,justifyContent:'space-between',flexWrap:'wrap',paddingTop:8}}>
//                     <button type="button" className="pp-btn-secondary" onClick={() => setStep(1)}>← Back</button>
//                     <button type="button" className="pp-btn-primary" style={{minWidth:180}}
//                       onClick={() => {
//                         if (!formData.beds||!formData.area||!formData.price) { alert('Please fill Bedrooms, Area and Price'); return; }
//                         setStep(3);
//                       }}>Next: Amenities →</button>
//                   </div>
//                 </div>
//               )}

//               {/* STEP 3 */}
//               {step===3 && (
//                 <div className="step-anim" style={{display:'flex',flexDirection:'column',gap:28}}>
//                   <div style={{borderBottom:'1px solid #f0e6dc',paddingBottom:20,marginBottom:4}}>
//                     <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:28,fontWeight:700,color:'#1a0e05',marginBottom:4}}>Amenities & Photos</h2>
//                     <p style={{color:'#9a7a64',fontSize:15,fontWeight:400}}>Highlight what makes your property special</p>
//                   </div>

//                   <div>
//                     <label className="pp-label">Amenities <span style={{color:'#BC6C25',fontWeight:700}}>({formData.amenities.length} selected)</span></label>
//                     <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(128px,1fr))',gap:8,maxHeight:260,overflowY:'auto',padding:'4px 2px'}}>
//                       {amenitiesList.map(amenity => (
//                         <div key={amenity} className="pp-amenity">
//                           <input type="checkbox" id={`am-${amenity}`} name="amenities" value={amenity}
//                             checked={formData.amenities.includes(amenity)} onChange={handleChange}/>
//                           <label htmlFor={`am-${amenity}`}>{amenity}</label>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <label className="pp-label">Property Photos * <span style={{color:'#e11d48',fontWeight:500,fontSize:13}}>(Max {MAX_IMAGES} images)</span></label>
//                     <div style={{border:'2px dashed #e0d5c8',borderRadius:14,padding:'32px 20px',textAlign:'center',background:'#faf8f5',position:'relative',cursor:'pointer',transition:'border-color 0.2s'}}
//                       onMouseOver={e=>e.currentTarget.style.borderColor='#BC6C25'}
//                       onMouseOut={e=>e.currentTarget.style.borderColor='#e0d5c8'}>
//                       <input type="file" id="images" name="images" multiple accept="image/*" onChange={handleChange}
//                         style={{position:'absolute',inset:0,opacity:0,cursor:'pointer',width:'100%',height:'100%'}}/>
//                       <div style={{fontSize:36,marginBottom:10}}>📸</div>
//                       <p style={{fontWeight:700,fontSize:16,color:'#3d2b1f',marginBottom:4}}>Drop photos here or click to browse</p>
//                       <p style={{fontSize:13,color:'#b59a85',fontWeight:400}}>JPG, PNG supported · First image becomes the cover</p>
//                     </div>
//                     {previewImages.length > 0 && (
//                       <div style={{display:'flex',flexWrap:'wrap',gap:10,marginTop:14}}>
//                         {previewImages.map((src,i) => (
//                           <div key={i} style={{position:'relative'}}>
//                             <img src={src} style={{width:96,height:76,objectFit:'cover',borderRadius:10,border:'2px solid #e0d5c8',display:'block'}} alt={`preview ${i}`}/>
//                             {i===0 && <span style={{position:'absolute',bottom:4,left:4,background:'#BC6C25',color:'white',fontSize:10,fontWeight:700,padding:'2px 7px',borderRadius:5,letterSpacing:'0.05em'}}>COVER</span>}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   {/* Summary */}
//                   <div style={{background:'#faf8f5',border:'1.5px solid #e8d5c0',borderRadius:14,padding:'22px 26px'}}>
//                     <h3 style={{fontWeight:700,fontSize:15,color:'#1a0e05',marginBottom:16,letterSpacing:'0.02em'}}>📋 Listing Summary</h3>
//                     <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(170px,1fr))',gap:'12px 24px'}}>
//                       {[
//                         ['Title', formData.title||'—'],
//                         ['Listing', formData.category==='sell'?'🏷️ For Sale → Buy Page':'🔑 For Rent → Rent Page'],
//                         ['Property Type', formData.type||'—'],
//                         ['Location', formData.location||'—'],
//                         ['Size', formData.beds?`${formData.beds} BHK · ${formData.area} sqft`:'—'],
//                         ['Price', formData.price?`₹${parseInt(formData.price).toLocaleString('en-IN')}${formData.category==='rent'?'/mo':''}`:'—'],
//                         ['Amenities', formData.amenities.length>0?`${formData.amenities.length} selected`:'None'],
//                         ['Photos', previewImages.length>0?`${previewImages.length} uploaded`:'None'],
//                       ].map(([k,v]) => (
//                         <div key={k}>
//                           <span style={{color:'#b59a85',fontWeight:600,fontSize:12,textTransform:'uppercase',letterSpacing:'0.08em'}}>{k}</span>
//                           <p style={{color:'#1a0e05',fontWeight:600,marginTop:4,fontSize:14}}>{v}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div style={{display:'flex',gap:12,justifyContent:'space-between',flexWrap:'wrap',paddingTop:8}}>
//                     <button type="button" className="pp-btn-secondary" onClick={() => setStep(2)}>← Back</button>
//                     <button type="submit" className="pp-btn-primary" disabled={submitting}
//                       style={{minWidth:200,display:'flex',alignItems:'center',justifyContent:'center',gap:10}}>
//                       {submitting ? (
//                         <><div style={{width:18,height:18,border:'3px solid rgba(255,255,255,0.4)',borderTopColor:'white',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/> Posting...</>
//                       ) : `🚀 Post to ${formData.category==='sell'?'Buy':'Rent'} Page`}
//                     </button>
//                   </div>
//                 </div>
//               )}

//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }



//PostPropertyPage.jsx
import BASE_URL from '../config';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PostPropertyPage() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
  const [step, setStep] = useState(1);
  const MAX_IMAGES = 8;

  useEffect(() => {
    if (!loading && !user) {
      alert("Please login to post a property");
      navigate("/login");
    }
  }, [user, loading, navigate]);

  const [formData, setFormData] = useState({
    title: "", category: "sell", type: "", beds: "", area: "",
    price: "", location: "", description: "", amenities: [], images: [],
  });

  const amenitiesList = [
    "Parking","Gym","Swimming Pool","Security","Garden","Lift","Power Backup",
    "Club House","Indoor Games Room","Children's Play Area","Jogging Track",
    "Yoga/Meditation Area","Multipurpose Hall","CCTV Surveillance","Fire Fighting System",
    "Rain Water Harvesting","Sewage Treatment Plant","24x7 Water Supply","Intercom Facility",
    "Vaastu Compliant","Solar Water Heater","Laundry Service","Library","Tennis Court",
    "Badminton Court","Basketball Court","Amphitheater"
  ];

  const handleChange = (e) => {
    const { name, value, files, type: inputType, checked } = e.target;
    if (name === "images") {
      const fileArr = Array.from(files);
      if (fileArr.length > MAX_IMAGES) {
        alert(`Maximum ${MAX_IMAGES} images allowed. You selected ${fileArr.length}.`);
        return;
      }
      setFormData({ ...formData, images: files });
      setPreviewImages(fileArr.map(f => URL.createObjectURL(f)));
    } else if (inputType === "checkbox") {
      setFormData(prev => ({
        ...prev,
        amenities: checked ? [...prev.amenities, value] : prev.amenities.filter(i => i !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ FIXED: uses FormData + real files instead of base64
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) { alert("Please login to post property"); navigate("/login"); return; }
    const { title, category, type, beds, area, price, location, images } = formData;
    if (!title || !category || !type || !beds || !area || !price || !location) {
      alert("Please fill all required fields.");
      return;
    }
    if (!images || images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('category', category);
      fd.append('type', type);
      fd.append('beds', beds);
      fd.append('area', area);
      fd.append('price', price);
      fd.append('location', location);
      fd.append('description', formData.description || '');
      fd.append('amenities', JSON.stringify(formData.amenities));

      // Append each image file under key 'images'
      Array.from(images).forEach(file => fd.append('images', file));

      const response = await fetch(`${BASE_URL}/api/user-properties`, {
        method: "POST",
        // ⚠️ Do NOT set Content-Type header — browser sets it automatically with multipart boundary
        headers: { "Authorization": `Bearer ${token}` },
        body: fd,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || errorData.error || `Status ${response.status}`);
      }

      alert("✅ Property posted successfully!");
      setFormData({ title: "", category: "sell", type: "", beds: "", area: "", price: "", location: "", description: "", amenities: [], images: [] });
      setPreviewImages([]);
      if (document.getElementById("images")) document.getElementById("images").value = null;
      navigate(category === "sell" ? "/buy" : "/rent");
    } catch (error) {
      alert(`Failed to post property: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#faf8f5'}}>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:16}}>
        <div style={{width:52,height:52,border:'4px solid #e8d5c0',borderTopColor:'#BC6C25',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/>
        <p style={{color:'#BC6C25',fontWeight:600,fontSize:17,fontFamily:'Jost,sans-serif'}}>Loading...</p>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    </div>
  );
  if (!user) return null;

  const steps = [{ num: 1, label: "Basic Info" }, { num: 2, label: "Details" }, { num: 3, label: "Amenities & Photos" }];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=Jost:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .pp-page { font-family: 'Jost', sans-serif; min-height: 100vh; background: #faf8f5; }
        .pp-input {
          width: 100%; padding: 14px 18px;
          border: 1.5px solid #e0d5c8; border-radius: 10px;
          font-size: 15px; color: #2d1f0e; background: #fff;
          outline: none; transition: all 0.2s;
          font-family: 'Jost', sans-serif;
        }
        .pp-input:focus { border-color: #BC6C25; box-shadow: 0 0 0 3px rgba(188,108,37,0.1); }
        .pp-input::placeholder { color: #b59a85; }
        .pp-label { display: block; font-weight: 600; font-size: 14px; color: #3d2b1f; margin-bottom: 8px; letter-spacing: 0.02em; }
        .pp-btn-primary {
          padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px;
          background: #BC6C25; color: white; border: none; cursor: pointer;
          transition: all 0.2s; font-family: 'Jost', sans-serif; letter-spacing: 0.02em;
        }
        .pp-btn-primary:hover:not(:disabled) { background: #a55a1b; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(188,108,37,0.3); }
        .pp-btn-primary:disabled { opacity: 0.55; cursor: not-allowed; }
        .pp-btn-secondary {
          padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px;
          background: white; color: #BC6C25; border: 2px solid #e0d5c8; cursor: pointer;
          transition: all 0.2s; font-family: 'Jost', sans-serif;
        }
        .pp-btn-secondary:hover { border-color: #BC6C25; background: #fff8f2; }
        .pp-amenity input { display: none; }
        .pp-amenity label {
          display: block; padding: 9px 12px; border-radius: 8px;
          border: 1.5px solid #e0d5c8; cursor: pointer; font-size: 13px;
          font-weight: 500; color: #5c3d1e; background: #faf8f5;
          transition: all 0.15s; text-align: center;
        }
        .pp-amenity input:checked + label {
          background: #BC6C25; color: white; border-color: #BC6C25;
          box-shadow: 0 3px 10px rgba(188,108,37,0.25);
        }
        .pp-amenity label:hover { border-color: #BC6C25; color: #BC6C25; background: #fff8f0; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .step-anim { animation: fadeUp 0.35s ease both; }
      `}</style>

      <div className="pp-page">

        {/* Hero Header */}
        <div style={{background:'linear-gradient(135deg,#1a0e05 0%,#3d1f08 50%,#6b3410 100%)',padding:'52px 24px 100px',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:-80,right:-80,width:360,height:360,borderRadius:'50%',background:'rgba(188,108,37,0.08)',pointerEvents:'none'}}/>
          <div style={{position:'absolute',bottom:-100,left:-60,width:300,height:300,borderRadius:'50%',background:'rgba(255,255,255,0.03)',pointerEvents:'none'}}/>
          <div style={{maxWidth:680,margin:'0 auto',textAlign:'center',position:'relative',zIndex:1}}>
            <button onClick={() => navigate('/')} style={{
              background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',
              color:'rgba(255,255,255,0.7)',padding:'8px 20px',borderRadius:20,
              fontSize:13,fontWeight:500,cursor:'pointer',marginBottom:28,
              fontFamily:'Jost,sans-serif',transition:'all 0.2s',
            }}
              onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.15)'}
              onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.08)'}
            >← Back to Home</button>
            <p style={{color:'#DDA15E',fontWeight:700,fontSize:12,letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:14}}>UrbanNest360</p>
            <h1 style={{fontFamily:'Cormorant Garamond,serif',color:'white',fontSize:'clamp(32px,5vw,52px)',fontWeight:800,marginBottom:14,lineHeight:1.15}}>
              List Your Property
            </h1>
            <p style={{color:'rgba(255,255,255,0.6)',fontSize:16,fontWeight:400,maxWidth:400,margin:'0 auto'}}>Reach thousands of buyers and renters across India</p>
          </div>
        </div>

        {/* Step Indicator */}
        <div style={{maxWidth:680,margin:'-36px auto 0',padding:'0 24px',position:'relative',zIndex:10}}>
          <div style={{background:'white',borderRadius:16,padding:'20px 28px',boxShadow:'0 8px 40px rgba(0,0,0,0.12)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            {steps.map((s, i) => (
              <div key={s.num} style={{display:'flex',alignItems:'center',flex: i < steps.length-1 ? 1 : 'none'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6}}>
                  <div onClick={() => step > s.num && setStep(s.num)} style={{
                    width:40,height:40,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',
                    fontWeight:700,fontSize:15,cursor:step>s.num?'pointer':'default',transition:'all 0.3s',
                    background:step>=s.num?'#BC6C25':'#f0e6dc',
                    color:step>=s.num?'white':'#c4a882',
                    boxShadow:step===s.num?'0 4px 16px rgba(188,108,37,0.4)':'none',
                  }}>{step>s.num?'✓':s.num}</div>
                  <span style={{fontSize:12,fontWeight:600,color:step>=s.num?'#BC6C25':'#c4a882',whiteSpace:'nowrap'}}>{s.label}</span>
                </div>
                {i < steps.length-1 && (
                  <div style={{flex:1,height:2,background:step>s.num?'#BC6C25':'#f0e6dc',margin:'0 10px',marginBottom:22,borderRadius:4,transition:'all 0.3s'}}/>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={{maxWidth:680,margin:'24px auto 80px',padding:'0 24px'}}>
          <form onSubmit={handleSubmit}>
            <div style={{background:'white',borderRadius:20,padding:'clamp(24px,5vw,48px)',boxShadow:'0 4px 32px rgba(0,0,0,0.07)',border:'1px solid #f0e6dc'}}>

              {/* STEP 1 */}
              {step===1 && (
                <div className="step-anim" style={{display:'flex',flexDirection:'column',gap:24}}>
                  <div style={{borderBottom:'1px solid #f0e6dc',paddingBottom:20,marginBottom:4}}>
                    <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:28,fontWeight:700,color:'#1a0e05',marginBottom:4}}>Basic Information</h2>
                    <p style={{color:'#9a7a64',fontSize:15,fontWeight:400}}>Tell us about your property listing</p>
                  </div>

                  <div>
                    <label className="pp-label">Property Title *</label>
                    <input className="pp-input" type="text" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. 3BHK Luxury Sea View Apartment in Mumbai"/>
                  </div>

                  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:16}}>
                    <div>
                      <label className="pp-label">Listing Type *</label>
                      <select className="pp-input" name="category" value={formData.category} onChange={handleChange}>
                        <option value="sell">🏷️ For Sale (Buy Page)</option>
                        <option value="rent">🔑 For Rent (Rent Page)</option>
                      </select>
                    </div>
                    <div>
                      <label className="pp-label">Property Type *</label>
                      <select className="pp-input" name="type" value={formData.type} onChange={handleChange}>
                        <option value="">Select Type</option>
                        {["Apartment","Villa","Penthouse","Bungalow","Farmhouse","Duplex","Row House"].map(t=>(
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="pp-label">Location *</label>
                    <input className="pp-input" type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Bandra, Mumbai, Maharashtra"/>
                    <p style={{fontSize:13,color:'#b59a85',marginTop:6,fontWeight:400}}>Format: Area, City, State for best results</p>
                  </div>

                  <div style={{display:'flex',justifyContent:'flex-end',paddingTop:8}}>
                    <button type="button" className="pp-btn-primary" style={{minWidth:160}}
                      onClick={() => {
                        if (!formData.title || !formData.type || !formData.location) { alert('Please fill Title, Property Type and Location'); return; }
                        setStep(2);
                      }}>Next: Details →</button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step===2 && (
                <div className="step-anim" style={{display:'flex',flexDirection:'column',gap:24}}>
                  <div style={{borderBottom:'1px solid #f0e6dc',paddingBottom:20,marginBottom:4}}>
                    <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:28,fontWeight:700,color:'#1a0e05',marginBottom:4}}>Property Details</h2>
                    <p style={{color:'#9a7a64',fontSize:15,fontWeight:400}}>Specifications and pricing</p>
                  </div>

                  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:16}}>
                    <div>
                      <label className="pp-label">Bedrooms (BHK) *</label>
                      <input className="pp-input" type="number" name="beds" value={formData.beds} onChange={handleChange} placeholder="e.g. 3" min="1"/>
                    </div>
                    <div>
                      <label className="pp-label">Area (sqft) *</label>
                      <input className="pp-input" type="number" name="area" value={formData.area} onChange={handleChange} placeholder="e.g. 1500" min="100"/>
                    </div>
                  </div>

                  <div>
                    <label className="pp-label">Price (₹) — {formData.category==="sell"?"Sale Price (one-time)":"Monthly Rent"} *</label>
                    <div style={{position:'relative'}}>
                      <span style={{position:'absolute',left:16,top:'50%',transform:'translateY(-50%)',fontSize:17,fontWeight:700,color:'#BC6C25'}}>₹</span>
                      <input className="pp-input" style={{paddingLeft:36}} type="number" name="price" value={formData.price} onChange={handleChange}
                        placeholder={formData.category==="sell"?"e.g. 7500000":"e.g. 35000"} min="1000"/>
                    </div>
                    {formData.price && (
                      <p style={{fontSize:14,color:'#BC6C25',fontWeight:600,marginTop:8}}>
                        = ₹{parseInt(formData.price||0).toLocaleString('en-IN')}{formData.category==='rent'?' / month':' (sale price)'}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="pp-label">Description</label>
                    <textarea className="pp-input" name="description" value={formData.description} onChange={handleChange}
                      placeholder="Describe your property – highlights, condition, nearby landmarks, special features..."
                      rows="5" style={{resize:'vertical',lineHeight:1.7}}/>
                  </div>

                  <div style={{display:'flex',gap:12,justifyContent:'space-between',flexWrap:'wrap',paddingTop:8}}>
                    <button type="button" className="pp-btn-secondary" onClick={() => setStep(1)}>← Back</button>
                    <button type="button" className="pp-btn-primary" style={{minWidth:180}}
                      onClick={() => {
                        if (!formData.beds||!formData.area||!formData.price) { alert('Please fill Bedrooms, Area and Price'); return; }
                        setStep(3);
                      }}>Next: Amenities →</button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step===3 && (
                <div className="step-anim" style={{display:'flex',flexDirection:'column',gap:28}}>
                  <div style={{borderBottom:'1px solid #f0e6dc',paddingBottom:20,marginBottom:4}}>
                    <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:28,fontWeight:700,color:'#1a0e05',marginBottom:4}}>Amenities & Photos</h2>
                    <p style={{color:'#9a7a64',fontSize:15,fontWeight:400}}>Highlight what makes your property special</p>
                  </div>

                  <div>
                    <label className="pp-label">Amenities <span style={{color:'#BC6C25',fontWeight:700}}>({formData.amenities.length} selected)</span></label>
                    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(128px,1fr))',gap:8,maxHeight:260,overflowY:'auto',padding:'4px 2px'}}>
                      {amenitiesList.map(amenity => (
                        <div key={amenity} className="pp-amenity">
                          <input type="checkbox" id={`am-${amenity}`} name="amenities" value={amenity}
                            checked={formData.amenities.includes(amenity)} onChange={handleChange}/>
                          <label htmlFor={`am-${amenity}`}>{amenity}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="pp-label">Property Photos * <span style={{color:'#e11d48',fontWeight:500,fontSize:13}}>(Max {MAX_IMAGES} images)</span></label>
                    <div style={{border:'2px dashed #e0d5c8',borderRadius:14,padding:'32px 20px',textAlign:'center',background:'#faf8f5',position:'relative',cursor:'pointer',transition:'border-color 0.2s'}}
                      onMouseOver={e=>e.currentTarget.style.borderColor='#BC6C25'}
                      onMouseOut={e=>e.currentTarget.style.borderColor='#e0d5c8'}>
                      <input type="file" id="images" name="images" multiple accept="image/*" onChange={handleChange}
                        style={{position:'absolute',inset:0,opacity:0,cursor:'pointer',width:'100%',height:'100%'}}/>
                      <div style={{fontSize:36,marginBottom:10}}>📸</div>
                      <p style={{fontWeight:700,fontSize:16,color:'#3d2b1f',marginBottom:4}}>Drop photos here or click to browse</p>
                      <p style={{fontSize:13,color:'#b59a85',fontWeight:400}}>JPG, PNG supported · First image becomes the cover</p>
                    </div>
                    {previewImages.length > 0 && (
                      <div style={{display:'flex',flexWrap:'wrap',gap:10,marginTop:14}}>
                        {previewImages.map((src,i) => (
                          <div key={i} style={{position:'relative'}}>
                            <img src={src} style={{width:96,height:76,objectFit:'cover',borderRadius:10,border:'2px solid #e0d5c8',display:'block'}} alt={`preview ${i}`}/>
                            {i===0 && <span style={{position:'absolute',bottom:4,left:4,background:'#BC6C25',color:'white',fontSize:10,fontWeight:700,padding:'2px 7px',borderRadius:5,letterSpacing:'0.05em'}}>COVER</span>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Summary */}
                  <div style={{background:'#faf8f5',border:'1.5px solid #e8d5c0',borderRadius:14,padding:'22px 26px'}}>
                    <h3 style={{fontWeight:700,fontSize:15,color:'#1a0e05',marginBottom:16,letterSpacing:'0.02em'}}>📋 Listing Summary</h3>
                    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(170px,1fr))',gap:'12px 24px'}}>
                      {[
                        ['Title', formData.title||'—'],
                        ['Listing', formData.category==='sell'?'🏷️ For Sale → Buy Page':'🔑 For Rent → Rent Page'],
                        ['Property Type', formData.type||'—'],
                        ['Location', formData.location||'—'],
                        ['Size', formData.beds?`${formData.beds} BHK · ${formData.area} sqft`:'—'],
                        ['Price', formData.price?`₹${parseInt(formData.price).toLocaleString('en-IN')}${formData.category==='rent'?'/mo':''}`:'—'],
                        ['Amenities', formData.amenities.length>0?`${formData.amenities.length} selected`:'None'],
                        ['Photos', previewImages.length>0?`${previewImages.length} uploaded`:'None'],
                      ].map(([k,v]) => (
                        <div key={k}>
                          <span style={{color:'#b59a85',fontWeight:600,fontSize:12,textTransform:'uppercase',letterSpacing:'0.08em'}}>{k}</span>
                          <p style={{color:'#1a0e05',fontWeight:600,marginTop:4,fontSize:14}}>{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{display:'flex',gap:12,justifyContent:'space-between',flexWrap:'wrap',paddingTop:8}}>
                    <button type="button" className="pp-btn-secondary" onClick={() => setStep(2)}>← Back</button>
                    <button type="submit" className="pp-btn-primary" disabled={submitting}
                      style={{minWidth:200,display:'flex',alignItems:'center',justifyContent:'center',gap:10}}>
                      {submitting ? (
                        <><div style={{width:18,height:18,border:'3px solid rgba(255,255,255,0.4)',borderTopColor:'white',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/> Posting...</>
                      ) : `🚀 Post to ${formData.category==='sell'?'Buy':'Rent'} Page`}
                    </button>
                  </div>
                </div>
              )}

            </div>
          </form>
        </div>
      </div>
    </>
  );
}