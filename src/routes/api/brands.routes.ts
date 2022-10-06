import { Router } from "express";

import { fetchBrandsController } from "@usecases/fetch-brands";

const BrandsRoutes = Router();

BrandsRoutes.get("/", (request, response) =>
	fetchBrandsController.handle(request, response),
);

export default BrandsRoutes;
