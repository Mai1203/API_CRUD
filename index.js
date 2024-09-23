// import { Express } from 'express'
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productsmodel");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola desde Node API en curso desde vs studio");
});

app.get("/api/products", async (req, res) => { 
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ mesage: err.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ mesage: err.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ mesage: err.message });
  }
});

app.put("/api/products/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body)
    if (!product) {
      return res.status(404).json({ message: "No se encontro el producto" });
    }
    const updatedProduct = await Product.findById(id);

    res.status(200).json(updatedProduct);
  }catch (err) {
    res.status(500).json({ mesage: err.message });
  }
})


mongoose
  .connect(
    "mongodb+srv://maicolcoralbravo:eWG9Wc0q2mmtys8n@cluster0.y3h8j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("OK Conexión exitosa");
    app.listen(3000, () => {
      console.log("Server corriendo en el puerto 3000");
    });
  })
  .catch(() => {
    console.log("fallo");
  });
