import criaHashESalSenha from "../utils/criaHashESalSenha.js ";
import { usuariosColecao } from "./dbConnect.js";

function obterUsuarios() {
  return usuariosColecao.find().toArray();
}

function encontrarUsuario(nome) {
  return usuariosColecao.findOne({ nome });
}

function cadastrarUsuario({ usuario, senha }) {
  const { hashSenha, salSenha } = criaHashESalSenha(senha);
  return usuariosColecao.insertOne({ nome: usuario, hashSenha, salSenha });
}

export {
  cadastrarUsuario,
  encontrarUsuario,
  obterUsuarios,
};
