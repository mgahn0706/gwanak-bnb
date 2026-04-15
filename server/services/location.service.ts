import { LocationRepository } from "../repositories/location.repository.js";
import type {
  LocationSearchItem,
  SearchLocationsParams,
} from "../types/location.js";

export class LocationService {
  constructor(private readonly locationRepository: LocationRepository) {}

  searchLocations({
    query,
    limit = 7,
  }: SearchLocationsParams): LocationSearchItem[] {
    const normalizedLimit = Number.isNaN(limit) ? 7 : Math.min(Math.max(limit, 1), 10);
    const trimmedQuery = query?.trim() ?? "";
    const results = trimmedQuery
      ? this.locationRepository.search(trimmedQuery, normalizedLimit)
      : this.locationRepository.findFeatured(normalizedLimit);

    return results.map(({ id, title, subtitle, iconKey }) => ({
      id,
      title,
      subtitle,
      iconKey,
    }));
  }
}
