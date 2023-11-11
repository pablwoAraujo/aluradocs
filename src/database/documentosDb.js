import { documentosColecao } from "./dbConnect.js";

function obterDocumentos() {
  const documentos = documentosColecao.find().toArray();
  return documentos;
}

function encontrarDocumento(documentName) {
  const documento = documentosColecao.findOne({ nome: documentName });
  return documento;
}

function atualizaDocumento(documentName, text) {
  const atualizacao = documentosColecao.updateOne(
    { nome: documentName },
    { $set: { texto: text } }
  );

  return atualizacao;
}

function adicionarDocumento(documentName) {
  const resultado = documentosColecao.insertOne({
    nome: documentName,
    texto: "",
  });

  return resultado;
}

function excluirDocumento(documentName) {
  console.log(documentName)
  const resultado = documentosColecao.deleteOne({
    nome: documentName,
  });

  return resultado;
}

export {
  adicionarDocumento,
  atualizaDocumento,
  encontrarDocumento,
  excluirDocumento,
  obterDocumentos,
};
