import Receta from "../models/receta.js";

export const leerRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.status(200).json(recetas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al leer las recetas" });
  }
};

export const crearReceta = async (req, res) => {
  try {
    const nuevaReceta = new Receta(req.body);
    await nuevaReceta.save();
    res.status(201).json({ mensaje: "La receta fue creada exitosamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear la receta" });
  }
};

export const leerRecetaPorId = async (req, res) => {
  try {
    const recetaBuscada = await Receta.findById(req.params.id);
    if (!recetaBuscada) {
      return res.status(404).json({ mensaje: "Receta no encontrada" });
    }
    res.status(200).json(recetaBuscada);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener la receta solicitada" });
  }
};

export const borrarReceta = async (req, res) => {
  try {
    const recetaBorrada = await Receta.findByIdAndDelete(req.params.id);
    if (!recetaBorrada) {
      return res
        .status(404)
        .json({ mensaje: "No encontramos la receta y no pudo ser borrada" });
    }
    res.status(200).json({ mensaje: "Receta eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al borrar la receta" });
  }
};

export const editarReceta = async (req,res) => {
  try {
    const recetaEditada = await Receta.findByIdAndUpdate(req.params.id, req.body);
    if (!recetaEditada) {
      return res.status(404).json({ mensaje: "No encontramos la receta y no pudo ser actualizada" });
    }
    res.status(200).json({mensaje: 'Receta editada exitosamente'});
  } catch (error) {
    res.status(500).json({ mensaje: "Error al editar la receta" });
  }
}
