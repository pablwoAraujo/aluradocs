
import registrarEventosDocumento from "./registrarEventos/registrarEventosDocumento.js";
import registrarEventosHome from "./registrarEventos/registrarEventosHome.js";
import io from "./server.js";

io.on("connection", (socket) => {
  registrarEventosHome(socket, io);
  registrarEventosDocumento(socket, io);
});
