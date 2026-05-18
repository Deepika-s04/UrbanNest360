// const mongoose = require('mongoose');

// const propertySchema = new mongoose.Schema({
//   id: { type: Number },
//   title: { type: String, required: true },
//   price: { type: Number, required: true },
//   city: { type: String },           // Made optional for now
//   state: { type: String },          // Made optional for now
//   area: { type: Number },
//   beds: { type: Number },
//   type: { type: String },
//   for: { type: String },            // "buy", "sell", "rent"
//   category: { type: String },       // "sell", "buy", "rent"
//   img: { type: String },
//   desc: { type: String },
//   amenities: { type: [String] },
//   createdAt: { type: Date, default: Date.now }
// });

// const Property = mongoose.model('Property', propertySchema);

// module.exports = Property;

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  city: { type: String },
  state: { type: String },
  location: { type: String },
  area: { type: Number },
  beds: { type: Number },
  type: { type: String },
  for: { type: String },
  category: { type: String },
  img: { type: String },
  images: { type: [String] },
  desc: { type: String },
  amenities: { type: [String] },
  postedByEmail: { type: String },   // ← THIS was missing = nothing worked
  postedBy: { type: String },        // ← THIS was missing
  createdAt: { type: Date, default: Date.now }
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;