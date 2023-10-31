import {} from "../database/documentosDb.js";

function registrarEventosCadastro(socket, io) {
  socket.on("cadastrar_usuario", (dados) => {
    console.log(dados);
  });
}

export default registrarEventosCadastro;
