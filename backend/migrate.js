const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Property = require('./models/Property');

const dataDir = path.join(__dirname, 'data');
const buyDataPath = path.join(dataDir, 'buy-properties.json');
const rentDataPath = path.join(dataDir, 'rent-properties.json');
const userDataPath = path.join(dataDir, 'user-properties.json');

const migrateData = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/UrbanNest360');
    console.log('Connected to MongoDB for migration...');

    // Clear existing data first (so we don't get duplicates)
    await Property.deleteMany({});
    console.log('Cleared old properties...');

    let allProperties = [];

    // Read buy properties
    const buyData = JSON.parse(fs.readFileSync(buyDataPath, 'utf8'));
    if (buyData.properties && buyData.properties.length > 0) {
      allProperties = [...allProperties, ...buyData.properties];
      console.log(`Loaded ${buyData.properties.length} buy properties`);
    }

    // Read rent properties
    const rentData = JSON.parse(fs.readFileSync(rentDataPath, 'utf8'));
    if (rentData.properties && rentData.properties.length > 0) {
      allProperties = [...allProperties, ...rentData.properties];
      console.log(`Loaded ${rentData.properties.length} rent properties`);
    }

    // Read user posted properties
    const userData = JSON.parse(fs.readFileSync(userDataPath, 'utf8'));
    if (userData.properties && userData.properties.length > 0) {
      allProperties = [...allProperties, ...userData.properties];
      console.log(`Loaded ${userData.properties.length} user properties`);
    }

    if (allProperties.length === 0) {
      console.log('No properties found to migrate.');
      return;
    }

    // Insert all properties into MongoDB
    await Property.insertMany(allProperties);
    console.log(`✅ Successfully migrated ${allProperties.length} properties to MongoDB!`);

  } catch (error) {
    console.error('Migration Error:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('Migration completed. You can close this now.');
  }
};

migrateData();