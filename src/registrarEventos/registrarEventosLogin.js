import {} from "../database/documentosDb.js";
import { encontrarUsuario } from "../database/usuariosDb.js";

function registrarEventosLogin(socket, io) {
  socket.on("autenticar_usuario", async (dados) => {
    const usuario = await encontrarUsuario(dados.usuario);
    console.log(usuario);
  });
}

export default registrarEventosLogin;
