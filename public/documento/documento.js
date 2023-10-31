import { emitirExcluirDocumento, emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get("nome");

const textoEditor = document.getElementById("editor-texto");
const title = document.getElementById("titulo-documento");
const botaoExcluir = document.getElementById("excluir-documento");

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

botaoExcluir.addEventListener("click", () => {
  emitirExcluirDocumento(documentName);
});

function alertarERedirecionar(nome) {
  if (nome === documentName) {

    alert(`Documento ${nome} excluído!`);
    window.location.href = "/";
  }
}


export { atualizaTextoEditor, alertarERedirecionar };
