const express = require("express");

const categoriaController = require("./controller/CategoriaController");

const produtoController = require("./controller/ProdutoController");


const app = express();


app.use(express.json());

app.use("/", categoriaController);

app.use("/", produtoController);

app.listen(3000, ()=>{
  console.log('Servidor Rodando')
});

module.exports = app;