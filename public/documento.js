import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get("nome");

const textoEditor = document.getElementById("editor-texto");
const title = document.getElementById("titulo-documento");

title.textContent = documentName || "Documento sem título";
selecionarDocumento(documentName);

textoEditor.addEventListener("keyup", () => {
  emitirTextoEditor({
    text: textoEditor.value, 
    documentName
  });
});

function atualizaTextoEditor(text) {
  textoEditor.value = text;
}

export { atualizaTextoEditor };
