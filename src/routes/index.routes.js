import recetasRoutes from "./recetas.routes.js";
import usuariosRoutes from "./usuario.routes.js"
import { Router } from "express";

const router = Router()
router.use('/recetas', recetasRoutes)
router.use('/usuarios', usuariosRoutes)

export default router