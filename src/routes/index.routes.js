import recetasRoutes from "./recetas.routes.js";
import { Router } from "express";

const router = Router()
router.use('/recetas', recetasRoutes)

export default router