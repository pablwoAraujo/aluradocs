import {
  atualizaDocumento,
  encontrarDocumento,
  excluirDocumento,
} from "../database/documentosDb.js";

function registrarEventosDocumento(socket, io) {
  socket.on("selecionar_documento", async (documentName, callback) => {
    socket.join(documentName);

    const documento = await encontrarDocumento(documentName);

    if (documento) callback(documento.texto);
  });

  socket.on("texto_editor", async ({ text, documentName }) => {
    const atualizacao = await atualizaDocumento(documentName, text);

    if (atualizacao.modifiedCount)
      socket.to(documentName).emit("texto_editor_clientes", text);
  });

  socket.on("excluir_documento", async (nome) => {
    console.log("excluir_documento", nome);
    const resultado = await excluirDocumento(nome);
    console.log(resultado);
    if (resultado.deletedCount) {
      io.emit("excluir_documento_sucesso", nome);
    }
  });
}

export default registrarEventosDocumento;
