import { Router } from "express";

import { LocationController } from "../controllers/location.controller.js";
import { LocationRepository } from "../repositories/location.repository.js";
import { LocationService } from "../services/location.service.js";

const locationRepository = new LocationRepository();
const locationService = new LocationService(locationRepository);
const locationController = new LocationController(locationService);

export const locationRouter = Router();

locationRouter.get("/search", locationController.search);
