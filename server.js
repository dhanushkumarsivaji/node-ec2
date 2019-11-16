const express = require("express");

const app = express();



app.use(express.json({ extended: false }));

app.get("/", async (req, res, next) => {

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


  app.listen(process.env.PORT || 8081, () => {
    console.log("Server is now running!");
  });