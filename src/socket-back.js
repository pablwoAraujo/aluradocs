import { encontrarDocumento, atualizaDocumento } from "./documentosDb.js";
import io from "./server.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID: " + socket.id);

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
});
