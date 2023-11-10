import {
  atualizaDocumento,
  encontrarDocumento,
  excluirDocumento,
} from "../database/documentosDb.js";
import { adicionarConexao, obterUsuariosDocumento } from "../utils/conexoesDocumentos.js";

function registrarEventosDocumento(socket, io) {
  socket.on(
    "selecionar_documento",
    async ({ documentName, nomeUsuario }, callback) => {
      const documento = await encontrarDocumento(documentName);

      if (documento) {
        socket.join(documentName);

        adicionarConexao({ documentName, nomeUsuario });
        const usuariosOnline = obterUsuariosDocumento(documentName);
        
        io.to(documentName).emit("usuarios_online", usuariosOnline);

        callback(documento.texto);
      }
    }
  );

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
