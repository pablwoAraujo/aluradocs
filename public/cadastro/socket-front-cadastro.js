const socket = io();

function emitirCadastroDeUsuario(dados) {
  socket.emit("cadastrar_usuario", dados);
}

export default emitirCadastroDeUsuario;
