import { Router } from "express";
import { borrarUsuario, crearUsuario, editarUsuario, leerUsuarioPorId, leerUsuarios } from "../controllers/usuario.controllers.js";
import validacionUsuario from "../middlewares/validarUsuario.js";

const router = Router();

router.route("/").get(leerUsuarios).post(validacionUsuario, crearUsuario);
router
  .route("/:id")
  .get(leerUsuarioPorId)
  .delete(borrarUsuario)
  .put(validacionUsuario, editarUsuario);

export default router;
