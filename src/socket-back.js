import registrarEventosCadastro from "./registrarEventos/registrarEventosCadastro.js";
import registrarEventosDocumento from "./registrarEventos/registrarEventosDocumento.js";
import registrarEventosHome from "./registrarEventos/registrarEventosHome.js";
import io from "./server.js";

io.on("connection", (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosDocumento(socket, io);
  registrarEventosHome(socket, io);
});
