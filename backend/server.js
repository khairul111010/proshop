const express = require("express");
const app = express();
const products = require("./Data/products");

app.get("/", (req, res) => {
  res.send("API running");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.filter((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, console.log("Server runing..."));
