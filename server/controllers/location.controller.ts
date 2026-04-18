import type { Request, Response } from "express";

import { LocationService } from "../services/location.service.js";

export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  search = async (request: Request, response: Response) => {
    const query =
      typeof request.query.q === "string" ? request.query.q : undefined;
    const limit =
      typeof request.query.limit === "string"
        ? Number.parseInt(request.query.limit, 10)
        : undefined;

    const locations = await this.locationService.searchLocations({ query, limit });

    response.status(200).json({
      data: locations,
      meta: {
        query: query ?? "",
        count: locations.length,
      },
    });
  };
}
