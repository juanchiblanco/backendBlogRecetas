import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidaciones.js";
import Receta from "../models/receta.js";

const validacionReceta = [
  body("formPlato")
    .notEmpty()
    .withMessage("El nombre del plato es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del plato debe tener entre 2 y 100 caracteres")
    .custom(async (valor, { req }) => {
      const platoExistente = await Receta.findOne({ formPlato: valor });
      if (!platoExistente) {
        return true;
      }
      if (req.params?.id && platoExistente._id.toString() === req.params.id) {
        return true;
      }
      throw new Error("Ya existe un plato con este nombre");
    }),
  body("formDuracion")
    .notEmpty()
    .withMessage("La duración del plato es obligatorio")
    .isNumeric()
    .withMessage("La duración del plato debe ser un numero")
    .custom((valor) => {
      if (valor >= 5 && valor <= 480) {
        return true;
      } else {
        throw new Error(
          "La duración del plato debe ser entre 5 y 480 minutos (8 hrs)"
        );
      }
    }),
  body("formPorciones")
    .notEmpty()
    .withMessage("La cantidad de porciones es obligatorio")
    .isNumeric()
    .withMessage("La cantidad de porciones debe ser un numero")
    .custom((valor) => {
      if (valor >= 1 && valor <= 10) {
        return true;
      } else {
        throw new Error("La cantidad de porciones debe ser entre 1 y 10");
      }
    }),
  body("formImagen")
    .notEmpty()
    .withMessage("La imagen del plato es un dato obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|webp)/)
    .withMessage(
      "La imagen debe ser una URL valida y debe terminar en .jpg, .jpeg, .png, .webp"
    ),
  body("formDificultad")
    .notEmpty()
    .withMessage("La dificultad del plato es un dato obligatorio")
    .isIn(["Baja", "Media", "Alta"])
    .withMessage(
      "La dificultad del plato debe ser una de las siguientes opciones: Infusiones, Batidos, Dulce, Salado"
    ),
  body("formDescripcionBreve")
    .notEmpty()
    .withMessage("La descripcion breve es un dato obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("La descripcion breve debe tener entre 2 y 100 caracteres"),
  body("formDescripcionAmplia")
    .notEmpty()
    .withMessage("La descripcion amplia es un dato obligatorio")
    .isLength({ min: 2, max: 300 })
    .withMessage("La descripcion amplia debe tener entre 2 y 300 caracteres"),
  body("ingredientes")
    .notEmpty()
    .withMessage("Los ingredientes son un dato obligatorio")
    .isArray(),
  body("pasos")
    .notEmpty()
    .withMessage("Los ingredientes son un dato obligatorio")
    .isArray(),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionReceta;
