const express = require("express");
const healthCheck = require('express-healthcheck')
const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res, next) => {
    console.log(req.connection.remoteAddress,
      req.connection.remotePort,
      req.connection.localAddress,
    )
    res.send(`<h1> Host address : ${req.headers.host}</h1>
              
              <h1> Remote port : ${req.connection.remotePort}</h1>

              <h1> Local address : ${req.connection.localAddress}</h1>
              `);
  });

  app.use('/health', require('express-healthcheck')({
    healthy: function () {
        return 'healthy';
    }
}));


  app.listen(5000, () => {
    console.log("Server is now running!");
  });