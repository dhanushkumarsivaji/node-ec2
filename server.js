const express = require("express");
const healthCheck = require('express-healthcheck')
const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res, next) => {
    res.send(`<h1>welcome ${req.headers.host}</h1>`);
  });

  app.use('/health', require('express-healthcheck')({
    healthy: function () {
        return 'healthy';
    }
}));


  app.listen(5000, () => {
    console.log("Server is now running!");
  });