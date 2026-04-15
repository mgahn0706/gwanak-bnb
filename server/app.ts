import cors from "cors";
import express from "express";

import { errorHandler } from "./middlewares/error-handler.js";
import { locationRouter } from "./routes/location.routes.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.use("/api/locations", locationRouter);

app.use(errorHandler);
