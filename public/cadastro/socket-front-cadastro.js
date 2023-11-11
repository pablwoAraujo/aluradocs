const socket = io();

function emitirCadastroDeUsuario(dados) {
  socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso!"));
socket.on("cadastro_erro", () => alert("Erro no cadastro, tente novamente!"));
socket.on("usuario_ja_existe", () => alert("Usuário já existe!"));

export default emitirCadastroDeUsuario;
