import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema(
  {
    password: {
      type: String,
      required: true,
      min: 8,
      max: 100,
      trim: true,
      validate: {
        validator: (valor) => {
          return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,100}$/.test(
            valor
          );
        },
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 5,
      max: 100,
      trim: true,
      validate: {
        validator: (valor) => {
          return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
            valor
          );
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
