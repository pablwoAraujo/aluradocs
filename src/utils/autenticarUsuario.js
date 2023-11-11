import { scryptSync, timingSafeEqual } from "crypto";

export default function autenticarUsuario(usuario, senha) {
  const hashTeste = scryptSync(senha, usuario.salSenha, 64);
  const hashUsuario = Buffer.from(usuario.hashSenha, "hex");

  return timingSafeEqual(hashTeste, hashUsuario); // compara os hash
}
