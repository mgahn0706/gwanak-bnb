import { Router } from "express";

import type { DatabaseCollections } from "../database/mongo.js";
import { LocationController } from "../controllers/location.controller.js";
import { LocationRepository } from "../repositories/location.repository.js";
import { LocationService } from "../services/location.service.js";

export const createLocationRouter = ({
  locations,
}: DatabaseCollections) => {
  const locationRepository = new LocationRepository(locations);
  const locationService = new LocationService(locationRepository);
  const locationController = new LocationController(locationService);
  const locationRouter = Router();

  locationRouter.get("/search", locationController.search);

  return locationRouter;
};
