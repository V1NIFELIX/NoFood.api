//configuração express

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //importando api de conexão node x mongo
const variables = require('../bin/configuration/variables'); // importando variaveis globais

const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');

//criando/invocando server web do express
const app = express();

//config de parse do JSon
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//config BD
mongoose.connect(variables.Database.connection, { useNewUrlParser: true});

//config as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/usuario', usuarioRouter);

//exportando o app
module.exports = app;


//api -> middelewares -> rotas -> controller -> repository -> banco