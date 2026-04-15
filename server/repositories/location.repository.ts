import { locationSeedData } from "../data/location.data.js";
import type { LocationRecord } from "../types/location.js";
import { searchIncludes } from "../utils/search.js";

export class LocationRepository {
  findFeatured(limit: number): LocationRecord[] {
    return locationSeedData.filter((location) => location.featured).slice(0, limit);
  }

  search(query: string, limit: number): LocationRecord[] {
    return locationSeedData
      .filter((location) => {
        const searchableText = [location.title, location.subtitle, ...location.keywords];

        return searchableText.some((field) => searchIncludes(field, query));
      })
      .slice(0, limit);
  }
}
