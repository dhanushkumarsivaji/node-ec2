const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res, next) => {
    res.send(`<h1>welcome ${req.headers.host}</h1>`);
  });


  app.listen(5000, () => {
    console.log("Server is now running!");
  });