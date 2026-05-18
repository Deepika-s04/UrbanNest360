// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // These options help with Atlas + Render stability
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4,                    // Use IPv4
    });

    console.log(`✅ MongoDB Connected Successfully to ${conn.connection.db.databaseName} database`);
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    // Don't exit immediately in production — let Render restart
    console.error('Server will try to reconnect...');
    // process.exit(1);   ← Comment this out or remove
  }
};

module.exports = connectDB;