import { Router } from "express";
import { borrarUsuario, crearUsuario, editarUsuario, leerUsuarioPorId, leerUsuarios, login } from "../controllers/usuario.controllers.js";
import validacionUsuario from "../middlewares/validarUsuario.js";

const router = Router();

router.route("/").get(leerUsuarios).post(validacionUsuario, crearUsuario);
router
  .route("/:id")
  .get(leerUsuarioPorId)
  .delete(borrarUsuario)
  .put(validacionUsuario, editarUsuario);
  router.route('/login').post(login)

export default router;
