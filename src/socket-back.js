import {
  adicionarDocumento,
  atualizaDocumento,
  encontrarDocumento,
  excluirDocumento,
  obterDocumentos,
} from "./documentosDb.js";
import io from "./server.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID: " + socket.id);

  socket.on("obter_documentos", async (callback) => {
    const documentos = await obterDocumentos();

    callback(documentos);
  });

  socket.on("adicionar_documento", async (nome) => {
    const documentoExiste = (await encontrarDocumento(nome)) !== null;

    if (documentoExiste) {
      socket.emit("documento_existente", nome);
    } else {
      const resultado = await adicionarDocumento(nome);

      if (resultado.acknowledged) {
        io.emit("adicionar_documento_interface", nome);
      }
    }
  });

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
    console.log("excluir_documento", nome)
    const resultado = await excluirDocumento(nome);
    console.log(resultado)
    if (resultado.deletedCount) {
      io.emit("excluir_documento_sucesso", nome);
    }
  });
});
