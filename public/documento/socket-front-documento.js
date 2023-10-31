import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

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

function emitirExcluirDocumento(documentName) {
  socket.emit("excluir_documento", documentName);
}

socket.on("excluir_documento_sucesso", (documentName) => {
  alertarERedirecionar(documentName);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
