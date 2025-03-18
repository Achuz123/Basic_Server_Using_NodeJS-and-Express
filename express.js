const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("default page");
});
app.get("/product", (req, res) => {
  return res.send("product " + req.query.shoes);
});
app.get("/contact", (req, res) => {
  return res.send("contact");
});

app.listen(8003);
