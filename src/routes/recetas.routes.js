import { Router } from "express";
import {
  crearReceta,
  leerRecetas,
} from "../controllers/recetas.controllers.js";

const router = Router();

router.route("/").get(leerRecetas).post(crearReceta);

export default router;
