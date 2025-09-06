import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";

export const leerUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find();
    res.status(200).json(listaUsuarios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al leer los usuarios" });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const {password} = req.body
    const saltos = bcrypt.genSaltSync(10)
      const passwordHash = bcrypt.hashSync(password,saltos)
    const nuevoUsuario = new Usuario({email:req.body.email, password:passwordHash});
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: "El usuario fue creado exitosamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear el usuario" });
  }
};

export const leerUsuarioPorId = async (req, res) => {
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id);
    if (!usuarioBuscado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.status(200).json(usuarioBuscado);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el usuario" });
  }
};

export const borrarUsuario = async (req, res) => {
  try {
    const usuarioBorrado = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioBorrado) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro el usuario y no pudimos borrarlo" });
    }
    res.status(200).json({ mensaje: "Usuario eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al borrar el usuario" });
  }
};

export const editarUsuario = async (req, res) => {
  try {
    const usuarioEditado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!usuarioEditado) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro el usuario y no pudimos editarlo" });
    }
    res.status(200).json({ mensaje: "Usuario editado exitosamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al editar el usuario" });
  }
};
