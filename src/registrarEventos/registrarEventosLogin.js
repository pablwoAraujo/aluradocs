import {} from "../database/documentosDb.js";
import { encontrarUsuario } from "../database/usuariosDb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";

function registrarEventosLogin(socket, io) {
  socket.on("autenticar_usuario", async ({ usuario, senha }) => {
    const usuarioRecuperado = await encontrarUsuario(usuario);

    if (usuarioRecuperado) {
      const autenticado = autenticarUsuario(usuarioRecuperado, senha);

      if (autenticado) socket.emit("autenticacao_sucesso");
      else socket.emit("autenticacao_erro");
    } else {
      socket.emit("usuario_nao_encontrado");
    }
  });
}

export default registrarEventosLogin;
