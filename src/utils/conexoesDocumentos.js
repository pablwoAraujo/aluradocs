const conexoesDocumentos = [];

function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
}

function obterUsuariosDocumento(nomeDocumento) {
  return conexoesDocumentos
    .filter((conexao) => conexao.documentName === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}

export { adicionarConexao, obterUsuariosDocumento };
