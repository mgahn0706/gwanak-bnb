import "dotenv/config";

import { connectToMongo, closeMongoConnection } from "./database/mongo.js";
import { locationSeedData } from "./data/location.data.js";
import { staySeedData } from "./data/stay.data.js";

const seed = async () => {
  const collections = await connectToMongo();

  await collections.locations.deleteMany({});
  await collections.stays.deleteMany({});

  if (locationSeedData.length > 0) {
    await collections.locations.insertMany([...locationSeedData]);
  }

  if (staySeedData.length > 0) {
    await collections.stays.insertMany([...staySeedData]);
  }

  console.log("MongoDB seed completed.");
};

seed()
  .catch((error) => {
    console.error("MongoDB seed failed.", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await closeMongoConnection();
  });
