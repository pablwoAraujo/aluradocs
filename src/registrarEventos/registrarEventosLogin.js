import { encontrarUsuario } from "../database/usuariosDb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";
import gerarJwt from "../utils/gerarJwt.js";

function registrarEventosLogin(socket, io) {
  socket.on("autenticar_usuario", async ({ usuario, senha }) => {
    const usuarioRecuperado = await encontrarUsuario(usuario);

    if (usuarioRecuperado) {
      const autenticado = autenticarUsuario(usuarioRecuperado, senha);

      if (autenticado) {
        const tokenJwt = gerarJwt({ usuario });

        socket.emit("autenticacao_sucesso", tokenJwt);
      } else socket.emit("autenticacao_erro");
    } else {
      socket.emit("usuario_nao_encontrado");
    }
  });
}

export default registrarEventosLogin;
