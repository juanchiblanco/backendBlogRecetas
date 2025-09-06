import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  leerRecetaPorId,
  leerRecetas,
} from "../controllers/recetas.controllers.js";
import validacionReceta from "../middlewares/validarReceta.js";

const router = Router();

router.route("/").get(leerRecetas).post(validacionReceta, crearReceta);
router
  .route("/:id")
  .get(leerRecetaPorId)
  .delete(borrarReceta)
  .put(validacionReceta, editarReceta);

export default router;
