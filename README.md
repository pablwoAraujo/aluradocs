# aluradocs

## 📋 Índice
- [📖 Sobre](#-Sobre)
- [🚀 Tecnologias utilizadas](#-Tecnologias-utilizadas)
- [📌 Como executar o projeto](#-Como-executar-o-projeto)
- [🖥 Preview](#-Preview)
- [🎓 Certificados](#-Certificados)

## 📖 Sobre
A ideia do projeto é simular um editor de texto colaborativo, onde toda alteração feita por um usuário é compartilhada com todos os outros em tempo real, utilizando WebSockets. O projeto foi desenvolvido durante os cursos de [WebSockets: implemente comunicações em tempo real com Socket.IO e MongoDB](https://cursos.alura.com.br/course/websockets-comunicacoes-tempo-real-socket-io-mongodb) e [WebSockets: implemente autenticação e avance no Socket.IO](https://cursos.alura.com.br/course/websockets-implemente-autenticacao-avance-socket-io) da Alura.

## 🚀 Tecnologias utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en)
- [Socket.IO](https://socket.io/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Docker](https://www.docker.com/)
- [JWT](https://jwt.io/)

## 📌 Como executar o projeto

Primeiro é preciso subir uma instância do mongodb:

```bash
docker pull mongo

docker run
  --name aluradocs
  -p 27017:27017
  -e MONGO_INITDB_ROOT_USERNAME=admin
  -e MONGO_INITDB_ROOT_PASSWORD=password
  -d mongo

docker start aluradocs
```
Crie um arquivo **.env** na raiz do projeto e adicione uma chave secreta
```env
SECRET_JWT=SUA_CHAVE_AQUI
```

Depois execute o projeto node:
```bash
npm run dev
```

## 🖥 Preview:
<p align="center">
  <img src="screenshot03.png" title="screenshot" alt="screenshot do jogo">
  <img src="screenshot04.png" title="screenshot" alt="screenshot do jogo">
</p>

## 🎓 Certificados
### [Curso de WebSockets: implemente comunicações em tempo real com Socket.IO e MongoDB](https://cursos.alura.com.br/certificate/6ce6e460-246e-4dd0-b8b1-44171de391cb?lang=pt_BR)
### [Curso de WebSockets: implemente autenticação e avance no Socket.IO](https://cursos.alura.com.br/certificate/7264471b-76c3-456b-ab91-316771b66deb?lang=pt_BR)
