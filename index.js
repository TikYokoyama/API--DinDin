//npm init -y
//npm i express cors
//npm i nodemon -d

const express = require('express'); //importar express
const cors = require('cors');       //importar cors
const routes = require('./ROUTES')  //importar routes

const app = express();  //usar o express no nosso servidor

app.use(cors());    //usar o cors no nosso servidor para todas as rotas
app.use(routes);    //usar as rotas criadas no nosso servidor

app.listen(4000, () => console.log("servidor rodando na porta 4000")); //configurar o servidor
