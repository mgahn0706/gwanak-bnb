import { MongoClient, type Collection } from "mongodb";

import type { LocationRecord } from "../types/location.js";
import type { StayRecord } from "../types/stay.js";

const mongoUri = process.env.MONGODB_URI?.trim();
const databaseName = process.env.MONGODB_DB_NAME?.trim();

if (!mongoUri) {
  throw new Error("MONGODB_URI is required.");
}

if (!databaseName) {
  throw new Error("MONGODB_DB_NAME is required.");
}

const client = new MongoClient(mongoUri);

export interface DatabaseCollections {
  locations: Collection<LocationRecord>;
  stays: Collection<StayRecord>;
}

export const connectToMongo = async (): Promise<DatabaseCollections> => {
  await client.connect();

  const database = client.db(databaseName);

  return {
    locations: database.collection<LocationRecord>("locations"),
    stays: database.collection<StayRecord>("stays"),
  };
};

export const closeMongoConnection = async () => {
  await client.close();
};
