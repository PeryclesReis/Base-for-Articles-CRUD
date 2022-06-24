# Desafio Técnico Squad de TI

O principal objetivo do projeto é criar um web app onde o usuário possa cadastrar categorias e, posteriormente cadastrar, artigos vinculados a essas categorias.

---
## Sumário

- Desafio Técnico Squad de TI
- Tecnologias utilizadas
- Features
- Como rodar o projeto
- Contribuição

---

### Tecnologias utilizadas:

- Front-end: ReactJS
- Back-end: NodeJS + ExpressJS + Sequelize + MySQL
- (Extra): React Bootstrap + Bootstrap + fortawesome

---

### Features:

> 1. Criar funcionalidade CRUD (Criar, Ler, Alterar, Deletar) de categorias:
- Descrição (Obrigatório)

> 2. Criar funcionalidade CRUD (Criar, Ler, Alterar, Deletar) de artigos:
- Título (Obrigatório)
- Descrição (Obrigatório)
- Categoria vinculada (Obrigatório)

---

### Como rodar o projeto:

> Etapa 1:
- Abra o arquivo database.js dentro da pasta `/FullStack-BIUD/Back-End/config/database.js` e configure-o para estabelecer a conexão com o bando de dados.

```js script
module.exports = {
  development: {
    username: 'root',
    password: 'seuPassword',
    database: 'back-end-biud',
    host: 'seuHostname',
    dialect: 'mysql',
  },
}
```
> Etapa 2:
- A partir da pasta raiz `/FullStack-BIUD`, abra o terminal e entre na pasta `../FullStack-BIUD/Back-End` e rode os comandos `npm install` e `npm start` para instalar as dependencias e rodar a api que da acesso aos dados.

> Etapa 3:
- Abra uma nova janela do seu terminal e a partir da pasta raiz `/FullStack-BIUD`, navegue até a pasta do Front-End `../FullStack-BIUD/Front-End/my-app` e rode os comandos `npm install` e `npm start` para instalar as dependencias e começar a renderizar o Front-End na web.

### Autor:

Perycles dos Reis Floriano Brito