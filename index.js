// import { Express } from 'express'
const express = require("express");

const mongoose = require('mongoose')
const app = express();

app.listen(3000, () => {
  console.log("Server corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
  res.send("Hola desde Node API en curso desde vs studio");
});

mongoose.connect("mongodb+srv://maicolcoralbravo:eWG9Wc0q2mmtys8n@cluster0.y3h8j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("OK Conexión exitosa")
  })
  .catch(() => {
    console.log("fallo")
  })
