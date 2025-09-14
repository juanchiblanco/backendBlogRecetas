import jwt from "jsonwebtoken";

const generarJWT = async (email) => {
  try {
    const payload = { email };
    const token = await jwt.sign(payload, process.env.SECRET_JWT, {
      expiresIn: "2h",
    });
    return token;
  } catch (error) {
    throw new Error("No se pudo generar el token");
  }
};

export default generarJWT;
