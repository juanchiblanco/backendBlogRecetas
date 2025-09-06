import recetasRoutes from "./recetas.routes";
import { Router } from "express";

const router = Router()
router.use('/recetas', recetasRoutes)

export default router