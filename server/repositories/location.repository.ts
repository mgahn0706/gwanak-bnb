import type { Collection } from "mongodb";

import type { LocationRecord } from "../types/location.js";
import { searchIncludes } from "../utils/search.js";

export class LocationRepository {
  constructor(private readonly locationCollection: Collection<LocationRecord>) {}

  async findFeatured(limit: number): Promise<LocationRecord[]> {
    return this.locationCollection
      .find({ featured: true })
      .sort({ id: 1 })
      .limit(limit)
      .toArray();
  }

  async search(query: string, limit: number): Promise<LocationRecord[]> {
    const locations = await this.locationCollection.find().toArray();

    return locations
      .filter((location) => {
        const searchableText = [location.title, location.subtitle, ...location.keywords];

        return searchableText.some((field) => searchIncludes(field, query));
      })
      .slice(0, limit);
  }
}
