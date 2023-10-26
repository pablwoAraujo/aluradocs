import io from "./server.js";

const documentos = [
  {
    nome: "JavaScript",
    texto: "Teste",
  },
  {
    nome: "Node",
    texto: "",
  },
  {
    nome: "Socket.io",
    texto: "",
  },
];

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID: " + socket.id);

  socket.on("selecionar_documento", (documentName, callback) => {
    socket.join(documentName);
    const documento = encontrarDocumento(documentName);

    if (documento) {
      callback(documento.texto);
    }
  });

  socket.on("texto_editor", ({ text, documentName }) => {
    const documento = encontrarDocumento(documentName);

    if (documento) {
      documento.texto = text;
      socket.to(documentName).emit("texto_editor_clientes", text);
    }
  });
});

function encontrarDocumento(documentName) {
  return documentos.find((document) => document.nome === documentName);
}
