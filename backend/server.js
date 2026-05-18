
// //server.js

// const express = require('express');
// const cors = require('cors');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const http = require('http');
// const { Server } = require('socket.io');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const Property = require('./models/Property');
// const User = require('./models/User');
// const connectDB = require('./config/db');

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] }
// });

// const PORT = 5000;


// const uploadsDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, uploadsDir),
//   filename: (req, file, cb) => {
//     const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//     cb(null, unique + path.extname(file.originalname));
//   }
// });
// const upload = multer({
//   storage,
//   limits: { fileSize: 10 * 1024 * 1024 }, 
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) cb(null, true);
//     else cb(new Error('Only image files allowed'));
//   }
// });

// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));
// app.use(cors());


// app.use('/uploads', express.static(uploadsDir));

// app.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });

// app.use(session({
//   secret: 'urban-nest-360-secret-key-2026',
//   resave: false,
//   saveUninitialized: false,
//   store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/UrbanNest360' }),
//   cookie: { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true, secure: false }
// }));


// app.post('/api/auth/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ error: 'User already exists' });
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await User.create({ name, email, password: hashedPassword });
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Registration failed' });
//   }
// });

// app.post('/api/auth/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: 'Invalid credentials' });
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });
//     const token = jwt.sign(
//       { userId: user._id.toString(), email: user.email },
//       'jwt-secret-key-2026-urban-nest',
//       { expiresIn: '7d' }
//     );
//     req.session.userId = user._id.toString();
//     req.session.email = user.email;
//     req.session.loggedIn = true;
//     res.json({
//       message: 'Login successful',
//       token,
//       user: { id: user._id.toString(), name: user.name, email: user.email }
//     });
//   } catch (err) {
//     res.status(500).json({ error: 'Login failed' });
//   }
// });

// app.post('/api/auth/logout', (req, res) => {
//   req.session.destroy((err) => {
//     if (err) return res.status(500).json({ error: 'Logout failed' });
//     res.clearCookie('connect.sid');
//     res.json({ message: 'Logged out successfully' });
//   });
// });

// const authMiddleware = (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');
//   if (!token) return res.status(401).json({ error: 'No token' });
//   try {
//     const decoded = jwt.verify(token, 'jwt-secret-key-2026-urban-nest');
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ error: 'Token invalid' });
//   }
// };


// app.get('/api/user-properties', authMiddleware, async (req, res) => {
//   try {
//     const userEmail = req.user.email;
//     console.log(' Fetching properties for email:', userEmail);
//     const properties = await Property.find({ postedByEmail: userEmail }).sort({ createdAt: -1 });
//     console.log(`Found ${properties.length} properties for ${userEmail}`);
//     res.json(properties);
//   } catch (err) {
//     console.error('Fetch error:', err);
//     res.status(500).json({ error: 'Failed to fetch user properties' });
//   }
// });


// app.post('/api/user-properties', authMiddleware, upload.array('images', 8), async (req, res) => {
//   try {
//     const { title, category, type, beds, area, price, location, description, desc, amenities } = req.body;

//     console.log(' Files received:', req.files?.length || 0);
//     console.log(' title:', title, '| price:', price);

//     if (!req.files || req.files.length === 0) {
//       return res.status(400).json({ error: 'Please upload at least one image.' });
//     }

//     const imageUrls = req.files.map(f => `http://localhost:5000/uploads/${f.filename}`);

//     const listingType = (category === 'sell' || category === 'buy') ? 'buy' : 'rent';
//     const locationParts = (location || '').split(',');
//     const city = locationParts[0]?.trim() || 'Unknown';
//     const state = locationParts[1]?.trim() || 'Unknown';


//     let parsedAmenities = [];
//     if (amenities) {
//       try { parsedAmenities = JSON.parse(amenities); }
//       catch { parsedAmenities = Array.isArray(amenities) ? amenities : [amenities]; }
//     }

//     const propertyData = new Property({
//       title: String(title || ''),
//       price: Number(price) || 0,
//       type: String(type || ''),
//       beds: Number(beds) || 0,
//       area: Number(area) || 0,
//       location: String(location || ''),
//       city,
//       state,
//       desc: String(desc || description || 'No description available.'),
//       amenities: parsedAmenities,
//       images: imageUrls,
//       img: imageUrls[0], // first image = cover
//       postedByEmail: req.user.email,
//       postedBy: req.user.userId,
//       category: String(category || ''),
//       createdAt: new Date(),
//     });

//     propertyData['for'] = listingType;

//     const saved = await propertyData.save();
//     console.log(`Posted "${saved.title}" with ${imageUrls.length} images | by: ${req.user.email}`);
//     io.emit('new-property', saved);
//     res.status(201).json(saved);
//   } catch (err) {
//     console.error(' Post error:', err.message);
//     res.status(500).json({ error: 'Failed to post property', detail: err.message });
//   }
// });

// app.delete('/api/user-properties/:id', authMiddleware, async (req, res) => {
//   try {
//     const userEmail = req.user.email;
//     console.log(`🗑️ Delete request for id: ${req.params.id} by ${userEmail}`);
//     const deleted = await Property.findOneAndDelete({ _id: req.params.id, postedByEmail: userEmail });
//     if (!deleted) return res.status(404).json({ error: 'Property not found or unauthorized' });

    
//     if (deleted.images && deleted.images.length > 0) {
//       deleted.images.forEach(url => {
//         const filename = url.split('/uploads/')[1];
//         if (filename) {
//           const filePath = path.join(uploadsDir, filename);
//           if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
//         }
//       });
//     }

//     console.log(` Deleted property ${req.params.id}`);
//     res.status(204).send();
//   } catch (err) {
//     console.error('Delete error:', err);
//     res.status(500).json({ error: 'Delete failed' });
//   }
// });

// app.get('/api/favorites', authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId);
//     if (!user) return res.status(404).json({ error: 'User not found' });
//     res.json({ favorites: (user.favorites || []).map(id => String(id)) });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch favorites' });
//   }
// });

// app.post('/api/favorites/toggle', authMiddleware, async (req, res) => {
//   try {
//     const { propertyId } = req.body;
//     const id = String(propertyId);
//     const user = await User.findById(req.user.userId);
//     if (!user) return res.status(404).json({ error: 'User not found' });
//     const idx = user.favorites.map(f => String(f)).indexOf(id);
//     if (idx === -1) { user.favorites.push(id); } else { user.favorites.splice(idx, 1); }
//     await user.save();
//     res.json({ favorites: user.favorites.map(f => String(f)) });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to toggle favorite' });
//   }
// });

// const InterestedBuyer = require('./models/InterestedBuyer');

// app.post('/api/interested-buyers', async (req, res) => {
  
//   try {
//     const { propertyId, name, email, whatsapp, message, service } = req.body;
//     if (!propertyId || !name || !email) return res.status(400).json({ error: 'propertyId, name and email are required' });
//     const buyer = await InterestedBuyer.create({ propertyId, name, email, whatsapp, message, service });
//     console.log(`✅ Interested buyer saved: ${email} for property ${propertyId}`);
    
//     res.status(201).json(buyer);
//   } catch (err) {
//     console.error('InterestedBuyer save error:', err);
//     res.status(500).json({ error: 'Failed to save interested buyer' });
//   }
// });

// app.get('/api/interested-buyers/:propertyId', authMiddleware, async (req, res) => {
//   try {
//     const propertyId = req.params.propertyId;
//     console.log(` Looking for buyers with propertyId: "${propertyId}"`);
//     const allBuyers = await InterestedBuyer.find({});
//     console.log(` All buyers in DB:`, allBuyers.map(b => ({ propertyId: b.propertyId, name: b.name })));
//     const buyers = await InterestedBuyer.find({ propertyId }).sort({ createdAt: -1 });
//     console.log(` Matched buyers: ${buyers.length}`);
//     res.json(buyers);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to fetch interested buyers' });
//   }
// });

// app.get('/api/buy-properties', async (req, res) => {
//   try {
//     const properties = await Property.find({ for: 'buy' }).sort({ createdAt: -1 });
//     console.log(`Buy: ${properties.length} properties`);
//     res.json(properties);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch buy properties' });
//   }
// });

// app.get('/api/rent-properties', async (req, res) => {
//   try {
//     const properties = await Property.find({ for: 'rent' }).sort({ createdAt: -1 });
//     console.log(`Rent: ${properties.length} properties`);
//     res.json(properties);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch rent properties' });
//   }
// });

// app.get('/api/buy-properties/:id', async (req, res) => {
//   try {
//     const property = await Property.findOne({ id: parseInt(req.params.id) });
//     property ? res.json(property) : res.status(404).json({ error: 'Not found' });
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// app.get('/api/rent-properties/:id', async (req, res) => {
//   try {
//     const property = await Property.findOne({ id: parseInt(req.params.id) });
//     property ? res.json(property) : res.status(404).json({ error: 'Not found' });
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });




// //SSR
// const getFirstImage = (property) => {
  
//   if (property.images && property.images.length > 0) {
//     return property.images[0];
//   }
  
//   if (property.img) {
//     return property.img;
//   }
 
//   return 'https://via.placeholder.com/300x200?text=No+Image';
// };


// app.get('/ssr/buy', async (req, res) => {
//   try {
//     const properties = await Property.find({ for: 'buy' })
//       .sort({ createdAt: -1 })
//       .limit(12);

//     let html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Buy Properties - SSR | UrbanNest360</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             padding: 20px;
//             background: #f9fafb;
//         }
//         h1 { color: #1f2937; }
//         .grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//             gap: 20px;
//             margin-top: 20px;
//         }
//         .property {
//             border: 1px solid #ddd;
//             padding: 15px;
//             border-radius: 8px;
//             background: white;
//             box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//         }
//         .property h3 {
//             margin: 0 0 10px 0;
//             color: #1f2937;
//         }
//         .price {
//             font-size: 1.3rem;
//             font-weight: bold;
//             color: #ea580c;
//         }
//         img {
//             width: 100%;
//             height: 200px;
//             object-fit: cover;
//             border-radius: 6px;
//         }
//     </style>
// </head>
// <body>
//     <h1>Buy Properties - Server Side Rendered</h1>
//     <p><strong>Total Buy Properties:</strong> ${properties.length}</p>
//     <div class="grid">`;

//     properties.forEach(p => {
//       const imageUrl = getFirstImage(p);

//       html += `
//         <div class="property">
//             <img src="${imageUrl}" alt="${p.title || 'Property'}">
//             <h3>${p.title || 'No Title'}</h3>
//             <p class="price">₹${Number(p.price || 0).toLocaleString()}</p>
//             <p><strong>Location:</strong> ${p.location || p.city || 'N/A'}</p>
//             <p><strong>Beds:</strong> ${p.beds || 'N/A'} | Area: ${p.area || 'N/A'} sqft</p>
//             ${p.type ? `<p><strong>Type:</strong> ${p.type}</p>` : ''}
//         </div>`;
//     });

//     html += `</div>
//     <p style="margin-top:30px; color:gray; font-size:0.9rem;">
//         Right click → View Page Source to verify SSR.<br>
//         Showing real images from both 'images' array and 'img' field.
//     </p>
// </body>
// </html>`;

//     res.send(html);
//   } catch (err) {
//     console.error('SSR Buy Error:', err);
//     res.send('<h1>Error loading buy properties</h1>');
//   }
// });


// app.get('/ssr/rent', async (req, res) => {
//   try {
//     const properties = await Property.find({ for: 'rent' })
//       .sort({ createdAt: -1 })
//       .limit(12);

//     let html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Rent Properties - SSR | UrbanNest360</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             padding: 20px;
//             background: #f9fafb;
//         }
//         h1 { color: #1f2937; }
//         .grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//             gap: 20px;
//             margin-top: 20px;
//         }
//         .property {
//             border: 1px solid #ddd;
//             padding: 15px;
//             border-radius: 8px;
//             background: white;
//             box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//         }
//         .property h3 {
//             margin: 0 0 10px 0;
//             color: #1f2937;
//         }
//         .price {
//             font-size: 1.3rem;
//             font-weight: bold;
//             color: #16a34a;
//         }
//         img {
//             width: 100%;
//             height: 200px;
//             object-fit: cover;
//             border-radius: 6px;
//         }
//     </style>
// </head>
// <body>
//     <h1>Rent Properties - Server Side Rendered</h1>
//     <p><strong>Total Rent Properties:</strong> ${properties.length}</p>
//     <div class="grid">`;

//     properties.forEach(p => {
//       const imageUrl = getFirstImage(p);

//       html += `
//         <div class="property">
//             <img src="${imageUrl}" alt="${p.title || 'Property'}">
//             <h3>${p.title || 'No Title'}</h3>
//             <p class="price">₹${Number(p.price || 0).toLocaleString()} / month</p>
//             <p><strong>Location:</strong> ${p.location || p.city || 'N/A'}</p>
//             <p><strong>Beds:</strong> ${p.beds || 'N/A'} | Area: ${p.area || 'N/A'} sqft</p>
//             ${p.type ? `<p><strong>Type:</strong> ${p.type}</p>` : ''}
//         </div>`;
//     });

//     html += `</div>
//     <p style="margin-top:30px; color:gray; font-size:0.9rem;">
//         Right click → View Page Source to verify SSR.<br>
//         Showing real images from both 'images' array and 'img' field.
//     </p>
// </body>
// </html>`;

//     res.send(html);
//   } catch (err) {
//     console.error('SSR Rent Error:', err);
//     res.send('<h1>Error loading rent properties</h1>');
//   }
// });

// // SOCKET.IO 
// io.on('connection', (socket) => {
//   console.log('Socket.io connected');
//   socket.on('disconnect', () => console.log('Socket disconnected'));
// });


// server.listen(PORT, () => {
//   console.log(`Server on http://localhost:${PORT}`);
//   connectDB();
// });






//server.js

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const Property = require('./models/Property');
const User = require('./models/User');
const connectDB = require('./config/db');


const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: process.env.CLIENT_URL || "http://localhost:5173", methods: ["GET", "POST"] }
});

const PORT = process.env.PORT || 5000;


const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, unique + path.extname(file.originalname));
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files allowed'));
  }
});

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());


app.use('/uploads', express.static(uploadsDir));

app.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });

app.use(session({
  secret: process.env.SESSION_SECRET || 'fallback-secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true, secure: false }
}));


app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'User already exists' });
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });
    const token = jwt.sign(
      { userId: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    req.session.userId = user._id.toString();
    req.session.email = user.email;
    req.session.loggedIn = true;
    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id.toString(), name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: 'Logout failed' });
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out successfully' });
  });
});

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token invalid' });
  }
};


app.get('/api/user-properties', authMiddleware, async (req, res) => {
  try {
    const userEmail = req.user.email;
    console.log(' Fetching properties for email:', userEmail);
    const properties = await Property.find({ postedByEmail: userEmail }).sort({ createdAt: -1 });
    console.log(`Found ${properties.length} properties for ${userEmail}`);
    res.json(properties);
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch user properties' });
  }
});


app.post('/api/user-properties', authMiddleware, upload.array('images', 8), async (req, res) => {
  try {
    const { title, category, type, beds, area, price, location, description, desc, amenities } = req.body;

    console.log(' Files received:', req.files?.length || 0);
    console.log(' title:', title, '| price:', price);

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'Please upload at least one image.' });
    }

    const imageUrls = req.files.map(f => `${process.env.BACKEND_URL || 'http://localhost:5000'}/uploads/${f.filename}`);

    const listingType = (category === 'sell' || category === 'buy') ? 'buy' : 'rent';
    const locationParts = (location || '').split(',');
    const city = locationParts[0]?.trim() || 'Unknown';
    const state = locationParts[1]?.trim() || 'Unknown';


    let parsedAmenities = [];
    if (amenities) {
      try { parsedAmenities = JSON.parse(amenities); }
      catch { parsedAmenities = Array.isArray(amenities) ? amenities : [amenities]; }
    }

    const propertyData = new Property({
      title: String(title || ''),
      price: Number(price) || 0,
      type: String(type || ''),
      beds: Number(beds) || 0,
      area: Number(area) || 0,
      location: String(location || ''),
      city,
      state,
      desc: String(desc || description || 'No description available.'),
      amenities: parsedAmenities,
      images: imageUrls,
      img: imageUrls[0], // first image = cover
      postedByEmail: req.user.email,
      postedBy: req.user.userId,
      category: String(category || ''),
      createdAt: new Date(),
    });

    propertyData['for'] = listingType;

    const saved = await propertyData.save();
    console.log(`Posted "${saved.title}" with ${imageUrls.length} images | by: ${req.user.email}`);
    io.emit('new-property', saved);
    res.status(201).json(saved);
  } catch (err) {
    console.error(' Post error:', err.message);
    res.status(500).json({ error: 'Failed to post property', detail: err.message });
  }
});

app.delete('/api/user-properties/:id', authMiddleware, async (req, res) => {
  try {
    const userEmail = req.user.email;
    console.log(`🗑️ Delete request for id: ${req.params.id} by ${userEmail}`);
    const deleted = await Property.findOneAndDelete({ _id: req.params.id, postedByEmail: userEmail });
    if (!deleted) return res.status(404).json({ error: 'Property not found or unauthorized' });

    
    if (deleted.images && deleted.images.length > 0) {
      deleted.images.forEach(url => {
        const filename = url.split('/uploads/')[1];
        if (filename) {
          const filePath = path.join(uploadsDir, filename);
          if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        }
      });
    }

    console.log(` Deleted property ${req.params.id}`);
    res.status(204).send();
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: 'Delete failed' });
  }
});

app.get('/api/favorites', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ favorites: (user.favorites || []).map(id => String(id)) });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch favorites' });
  }
});

app.post('/api/favorites/toggle', authMiddleware, async (req, res) => {
  try {
    const { propertyId } = req.body;
    const id = String(propertyId);
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    const idx = user.favorites.map(f => String(f)).indexOf(id);
    if (idx === -1) { user.favorites.push(id); } else { user.favorites.splice(idx, 1); }
    await user.save();
    res.json({ favorites: user.favorites.map(f => String(f)) });
  } catch (err) {
    res.status(500).json({ error: 'Failed to toggle favorite' });
  }
});

const InterestedBuyer = require('./models/InterestedBuyer');

app.post('/api/interested-buyers', async (req, res) => {
  
  try {
    const { propertyId, name, email, whatsapp, message, service } = req.body;
    if (!propertyId || !name || !email) return res.status(400).json({ error: 'propertyId, name and email are required' });
    const buyer = await InterestedBuyer.create({ propertyId, name, email, whatsapp, message, service });
    console.log(`✅ Interested buyer saved: ${email} for property ${propertyId}`);
    
    res.status(201).json(buyer);
  } catch (err) {
    console.error('InterestedBuyer save error:', err);
    res.status(500).json({ error: 'Failed to save interested buyer' });
  }
});

app.get('/api/interested-buyers/:propertyId', authMiddleware, async (req, res) => {
  try {
    const propertyId = req.params.propertyId;
    console.log(` Looking for buyers with propertyId: "${propertyId}"`);
    const allBuyers = await InterestedBuyer.find({});
    console.log(` All buyers in DB:`, allBuyers.map(b => ({ propertyId: b.propertyId, name: b.name })));
    const buyers = await InterestedBuyer.find({ propertyId }).sort({ createdAt: -1 });
    console.log(` Matched buyers: ${buyers.length}`);
    res.json(buyers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch interested buyers' });
  }
});

app.get('/api/buy-properties', async (req, res) => {
  try {
    const properties = await Property.find({ for: 'buy' }).sort({ createdAt: -1 });
    console.log(`Buy: ${properties.length} properties`);
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch buy properties' });
  }
});

app.get('/api/rent-properties', async (req, res) => {
  try {
    const properties = await Property.find({ for: 'rent' }).sort({ createdAt: -1 });
    console.log(`Rent: ${properties.length} properties`);
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rent properties' });
  }
});

app.get('/api/buy-properties/:id', async (req, res) => {
  try {
    const property = await Property.findOne({ id: parseInt(req.params.id) });
    property ? res.json(property) : res.status(404).json({ error: 'Not found' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/rent-properties/:id', async (req, res) => {
  try {
    const property = await Property.findOne({ id: parseInt(req.params.id) });
    property ? res.json(property) : res.status(404).json({ error: 'Not found' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});




//SSR
const getFirstImage = (property) => {
  
  if (property.images && property.images.length > 0) {
    return property.images[0];
  }
  
  if (property.img) {
    return property.img;
  }
 
  return 'https://via.placeholder.com/300x200?text=No+Image';
};


app.get('/ssr/buy', async (req, res) => {
  try {
    const properties = await Property.find({ for: 'buy' })
      .sort({ createdAt: -1 })
      .limit(12);

    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buy Properties - SSR | UrbanNest360</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background: #f9fafb;
        }
        h1 { color: #1f2937; }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .property {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 8px;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .property h3 {
            margin: 0 0 10px 0;
            color: #1f2937;
        }
        .price {
            font-size: 1.3rem;
            font-weight: bold;
            color: #ea580c;
        }
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 6px;
        }
    </style>
</head>
<body>
    <h1>Buy Properties - Server Side Rendered</h1>
    <p><strong>Total Buy Properties:</strong> ${properties.length}</p>
    <div class="grid">`;

    properties.forEach(p => {
      const imageUrl = getFirstImage(p);

      html += `
        <div class="property">
            <img src="${imageUrl}" alt="${p.title || 'Property'}">
            <h3>${p.title || 'No Title'}</h3>
            <p class="price">₹${Number(p.price || 0).toLocaleString()}</p>
            <p><strong>Location:</strong> ${p.location || p.city || 'N/A'}</p>
            <p><strong>Beds:</strong> ${p.beds || 'N/A'} | Area: ${p.area || 'N/A'} sqft</p>
            ${p.type ? `<p><strong>Type:</strong> ${p.type}</p>` : ''}
        </div>`;
    });

    html += `</div>
    <p style="margin-top:30px; color:gray; font-size:0.9rem;">
        Right click → View Page Source to verify SSR.<br>
        Showing real images from both 'images' array and 'img' field.
    </p>
</body>
</html>`;

    res.send(html);
  } catch (err) {
    console.error('SSR Buy Error:', err);
    res.send('<h1>Error loading buy properties</h1>');
  }
});


app.get('/ssr/rent', async (req, res) => {
  try {
    const properties = await Property.find({ for: 'rent' })
      .sort({ createdAt: -1 })
      .limit(12);

    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rent Properties - SSR | UrbanNest360</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background: #f9fafb;
        }
        h1 { color: #1f2937; }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .property {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 8px;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .property h3 {
            margin: 0 0 10px 0;
            color: #1f2937;
        }
        .price {
            font-size: 1.3rem;
            font-weight: bold;
            color: #16a34a;
        }
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 6px;
        }
    </style>
</head>
<body>
    <h1>Rent Properties - Server Side Rendered</h1>
    <p><strong>Total Rent Properties:</strong> ${properties.length}</p>
    <div class="grid">`;

    properties.forEach(p => {
      const imageUrl = getFirstImage(p);

      html += `
        <div class="property">
            <img src="${imageUrl}" alt="${p.title || 'Property'}">
            <h3>${p.title || 'No Title'}</h3>
            <p class="price">₹${Number(p.price || 0).toLocaleString()} / month</p>
            <p><strong>Location:</strong> ${p.location || p.city || 'N/A'}</p>
            <p><strong>Beds:</strong> ${p.beds || 'N/A'} | Area: ${p.area || 'N/A'} sqft</p>
            ${p.type ? `<p><strong>Type:</strong> ${p.type}</p>` : ''}
        </div>`;
    });

    html += `</div>
    <p style="margin-top:30px; color:gray; font-size:0.9rem;">
        Right click → View Page Source to verify SSR.<br>
        Showing real images from both 'images' array and 'img' field.
    </p>
</body>
</html>`;

    res.send(html);
  } catch (err) {
    console.error('SSR Rent Error:', err);
    res.send('<h1>Error loading rent properties</h1>');
  }
});

// SOCKET.IO 
io.on('connection', (socket) => {
  console.log('Socket.io connected');
  socket.on('disconnect', () => console.log('Socket disconnected'));
});


server.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
  connectDB();
});