import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  leerRecetaPorId,
  leerRecetas,
  recetasPaginadas,
} from "../controllers/recetas.controllers.js";
import validacionReceta from "../middlewares/validarReceta.js";
import verificarToken from "../middlewares/verificarToken.js";

const router = Router();

router.route("/").get(leerRecetas).post([verificarToken,validacionReceta], crearReceta);
router.route("/paginacion").get(recetasPaginadas)
router
  .route("/:id")
  .get(leerRecetaPorId)
  .delete(borrarReceta)
  .put([verificarToken,validacionReceta], editarReceta);

export default router;
