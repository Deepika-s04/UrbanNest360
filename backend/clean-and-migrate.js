const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Property = require('./models/Property');

const dataDir = path.join(__dirname, 'data');
const buyDataPath = path.join(dataDir, 'buy-properties.json');
const rentDataPath = path.join(dataDir, 'rent-properties.json');
const userDataPath = path.join(dataDir, 'user-properties.json');

const cleanAndMigrate = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/UrbanNest360');
    console.log('Connected to MongoDB...');

    // 🔥 Delete ALL existing properties (removes duplicates)
    await Property.deleteMany({});
    console.log('✅ All old properties cleared (duplicates removed)');

    let allProperties = [];

    // Load fresh data from your JSON files
    const buyData = JSON.parse(fs.readFileSync(buyDataPath, 'utf8'));
    if (buyData.properties) allProperties.push(...buyData.properties);

    const rentData = JSON.parse(fs.readFileSync(rentDataPath, 'utf8'));
    if (rentData.properties) allProperties.push(...rentData.properties);

    const userData = JSON.parse(fs.readFileSync(userDataPath, 'utf8'));
    if (userData.properties) allProperties.push(...userData.properties);

    if (allProperties.length === 0) {
      console.log('No data found in JSON files.');
      return;
    }

    // Remove any duplicate IDs just in case
    const uniqueProperties = allProperties.filter((prop, index, self) =>
      index === self.findIndex(p => p.id === prop.id)
    );

    await Property.insertMany(uniqueProperties);
    console.log(`✅ Successfully migrated ${uniqueProperties.length} unique properties!`);

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('Migration finished. You can close this window now.');
  }
};

cleanAndMigrate();