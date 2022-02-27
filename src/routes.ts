import express from "express";
import BrandController from "./database/Controllers/BrandController";
import ProductController from "./database/Controllers/ProductController";

const brand = new BrandController();
const product = new ProductController();
const routes = express.Router();

routes.get("/brand/", brand.getList);
routes.get("/brand/:id_brand", brand.get);
routes.post("/brand/", brand.create);
routes.delete("/brand/:id_brand", brand.delete);
routes.put("/brand/:id_brand", brand.update);

routes.get("/product/", product.getList);
routes.get("/product/:id_brand", product.get);
routes.post("/product/", product.create);
routes.delete("/product/:id_brand", product.delete);
routes.put("/product/:id_brand", product.update);

export default routes;
