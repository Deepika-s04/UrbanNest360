const mongoose = require('mongoose');

const interestedBuyerSchema = new mongoose.Schema({
  propertyId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  whatsapp: { type: String, default: '' },
  message: { type: String, default: '' },
  service: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('InterestedBuyer', interestedBuyerSchema);