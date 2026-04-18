import { LocationRepository } from "../repositories/location.repository.js";
import type {
  LocationSearchItem,
  SearchLocationsParams,
} from "../types/location.js";

export class LocationService {
  constructor(private readonly locationRepository: LocationRepository) {}

  async searchLocations({
    query,
    limit = 7,
  }: SearchLocationsParams): Promise<LocationSearchItem[]> {
    const normalizedLimit = Number.isNaN(limit) ? 7 : Math.min(Math.max(limit, 1), 10);
    const trimmedQuery = query?.trim() ?? "";
    const results = trimmedQuery
      ? await this.locationRepository.search(trimmedQuery, normalizedLimit)
      : await this.locationRepository.findFeatured(normalizedLimit);

    return results.map(({ id, title, subtitle, iconKey }) => ({
      id,
      title,
      subtitle,
      iconKey,
    }));
  }
}
