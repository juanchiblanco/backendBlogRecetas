import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
  formPlato: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 100,
  },
  formDuracion: {
    type: Number,
    required: true,
    min: 5,
    max: 480,
  },
  formPorciones: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  formImagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|webp)/.test(
          valor
        );
      },
    },
  },
  formDificultad: {
    type: String,
    required: true,
    enum: ["Baja", "Media", "Alta"],
  },
  ingredientes: {
    type: [String],
    required: true,
    minLength: 1,
    maxLength: 80,
  },
  pasos: {
    type: [String],
    required: true,
    minLength: 1,
    maxLength: 150,
  },
  formTip: {},
  formDescripcionBreve: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100
  },
  formDescripcionAmplia: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 300
  },
  destacada: {
    type: Boolean,
  },
});

const Receta = mongoose.model("receta", recetaSchema);

export default Receta