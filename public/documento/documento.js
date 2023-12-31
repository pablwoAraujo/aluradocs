import {
  emitirExcluirDocumento,
  emitirTextoEditor,
  selecionarDocumento,
} from "./socket-front-documento.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get("nome");

const textoEditor = document.getElementById("editor-texto");
const title = document.getElementById("titulo-documento");
const botaoExcluir = document.getElementById("excluir-documento");
const usuariosConectados = document.getElementById("usuarios-conectados");

title.textContent = documentName || "Documento sem título";
//selecionarDocumento(documentName);

textoEditor.addEventListener("keyup", () => {
  emitirTextoEditor({
    text: textoEditor.value,
    documentName,
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

function tratarAutorizacaoSucesso(payloadToken) {
  selecionarDocumento({ documentName, nomeUsuario: payloadToken.usuario });
}

function atualizarInterfaceUsuarios(usuarios) {
  usuariosConectados.innerHTML = "";

  usuarios.forEach((usuario) => {
    usuariosConectados.innerHTML += `<li class="list-group-item">${usuario}</li>`;
  });
}

export {
  atualizaTextoEditor,
  alertarERedirecionar,
  tratarAutorizacaoSucesso,
  atualizarInterfaceUsuarios,
};
