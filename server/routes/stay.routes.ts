import { Router } from "express";

import { StayController } from "../controllers/stay.controller.js";
import { StayRepository } from "../repositories/stay.repository.js";
import { StayService } from "../services/stay.service.js";

const stayRepository = new StayRepository();
const stayService = new StayService(stayRepository);
const stayController = new StayController(stayService);

export const stayRouter = Router();

stayRouter.get("/search", stayController.search);
