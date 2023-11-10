import jwt from "jsonwebtoken";

function autorizarUsuario(socket, next) {
  const tokenJwt = socket.handshake.auth.token;

  try {
    jwt.verify(tokenJwt, process.env.SECRET_JWT);
    next();
  } catch (error) {
    next(error);
  }
}

export default autorizarUsuario;
