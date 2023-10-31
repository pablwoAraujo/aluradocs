import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb://admin:password@localhost:27017/aluradocs?retryWrites=true&authSource=admin"
);

let documentosColecao;

try {
  await client.connect();

  const db = client.db("aluradocs");
  documentosColecao = db.collection("Documentos");

  console.log("connection established");
} catch (err) {
  console.log(err);
}

export { documentosColecao };
