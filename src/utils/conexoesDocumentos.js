const conexoesDocumentos = [];

function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
}

function obterUsuariosDocumento(nomeDocumento) {
  return conexoesDocumentos
    .filter((conexao) => conexao.documentName === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}

function removerConexao(documentName, nomeUsuario) {
  const indice = conexoesDocumentos.findIndex((conexao) => {
    return (
      conexao.documentName === documentName &&
      conexao.nomeUsuario === nomeUsuario
    );
  });

  if (indice !== -1) {
    conexoesDocumentos.splice(indice, 1);
  }
}

function encontrarConexao(documentName, nomeUsuario) {
  return conexoesDocumentos.find((conexao) => {
    return (
      conexao.documentName === documentName &&
      conexao.nomeUsuario === nomeUsuario
    );
  });
}

export {
  adicionarConexao,
  obterUsuariosDocumento,
  removerConexao,
  encontrarConexao,
};
