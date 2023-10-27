import { documentosColecao } from "./dbConnect.js";

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

export { encontrarDocumento, atualizaDocumento };
