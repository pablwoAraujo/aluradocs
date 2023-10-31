const socket = io();

function emitirLogin(dados) {
  socket.emit("autenticar_usuario", dados);
}

socket.on("usuario_autenticado", () => alert("Usuário autenticado com sucesso!"));
socket.on("erro_na_autenticacao", () => alert("Erro na autenticação do usuario!"));

export default emitirLogin;
