import express from "express";

import CarRoutes from "./api/car.routes";
import BrandsRoutes from "./api/brands.routes";

const routes = express();

routes.use("/car", CarRoutes);
routes.use("/brands", BrandsRoutes);

export default routes;
