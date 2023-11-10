import { obterCookie } from "../utils/cookies.js";
import {
  alertarERedirecionar,
  atualizaTextoEditor,
  atualizarInterfaceUsuarios,
  tratarAutorizacaoSucesso,
} from "./documento.js";

const socket = io("/usuarios", {
  auth: {
    token: obterCookie("tokenJwt"),
  },
});

socket.on("usuarios_online", atualizarInterfaceUsuarios);

socket.on("autorizacao_sucesso", tratarAutorizacaoSucesso);

socket.on("connect_error", (erro) => {
  alert(erro);
  window.location.href = "/login/index.html";
});

function selecionarDocumento(dadosEntrada) {
  socket.emit("selecionar_documento", dadosEntrada, (texto) => {
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
