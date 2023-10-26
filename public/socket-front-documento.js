import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(documentName) {
  socket.emit("selecionar_documento", documentName, (texto) => {
    atualizaTextoEditor(texto);
  });
}

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (text) => {
  atualizaTextoEditor(text);
});

export { emitirTextoEditor, selecionarDocumento };
