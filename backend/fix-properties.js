// fix-properties.js
const Property = require('./models/Property');
const connectDB = require('./config/db');

const fixProperties = async () => {
  await connectDB();
  console.log("Connected to MongoDB...");

  const properties = await Property.find({});
  console.log(`Found ${properties.length} properties to fix.`);

  let updated = 0;

  for (const p of properties) {
    let forType = 'buy'; // default

    // Guess based on price or existing fields
    if (p.price < 100000 || p.for === 'rent' || p.category === 'rent' || p.title?.toLowerCase().includes('rent')) {
      forType = 'rent';
    }

    if (p.for !== forType) {
      await Property.updateOne({ _id: p._id }, { $set: { for: forType } });
      updated++;
      console.log(`Updated ${p.title} -> for: ${forType}`);
    }
  }

  console.log(`✅ Done! Updated ${updated} properties.`);
  process.exit(0);
};

fixProperties().catch(err => {
  console.error(err);
  process.exit(1);
});