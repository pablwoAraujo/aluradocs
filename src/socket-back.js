import "dotenv/config";

import autorizarUsuario from "./middlewares/autorizarUsuario.js";
import registrarEventosCadastro from "./registrarEventos/registrarEventosCadastro.js";
import registrarEventosDocumento from "./registrarEventos/registrarEventosDocumento.js";
import registrarEventosHome from "./registrarEventos/registrarEventosHome.js";
import registrarEventosLogin from "./registrarEventos/registrarEventosLogin.js";
import io from "./server.js";

const nameSpaceUsuario = io.of("/usuarios");

nameSpaceUsuario.use(autorizarUsuario);

nameSpaceUsuario.on("connection", (socket) => {
  registrarEventosDocumento(socket, nameSpaceUsuario);
  registrarEventosHome(socket, nameSpaceUsuario);
});

io.of("/").on("connection", (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
