import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function emitirTextoEditor(text) {
  socket.emit("texto_editor", text);
}

socket.on("texto_editor_clientes", (text) => {
  atualizaTextoEditor(text);
});

export { emitirTextoEditor };
