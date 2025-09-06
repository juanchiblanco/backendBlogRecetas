import { Router } from "express";
import {
    borrarReceta,
  crearReceta,
  editarReceta,
  leerRecetaPorId,
  leerRecetas,
} from "../controllers/recetas.controllers.js";

const router = Router();

router.route("/").get(leerRecetas).post(crearReceta);
router.route('/:id').get(leerRecetaPorId).delete(borrarReceta).put(editarReceta)

export default router;
