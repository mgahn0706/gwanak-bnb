import { staySeedData } from "../data/stay.data.js";
import type { StayRecord } from "../types/stay.js";
import { searchIncludes } from "../utils/search.js";

export class StayRepository {
  search(location: string): StayRecord[] {
    const trimmedLocation = location.trim();

    if (!trimmedLocation) {
      return [...staySeedData];
    }

    return staySeedData.filter((stay) => {
      const searchableText = [stay.location, ...stay.keywords];

      return searchableText.some((field) => searchIncludes(field, trimmedLocation));
    });
  }
}
