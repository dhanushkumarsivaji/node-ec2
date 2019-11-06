const express = require("express");
const healthCheck = require('express-healthcheck')
const app = express();
var request = require('request')

app.use(express.json({ extended: false }));

app.get("/", async (req, res, next) => {

    const locations = await request('http://169.254.169.254/latest/meta-data/placement/availability-zone',function(error,response,body){
        return response.body
    })

    console.log(locations)
    
    res.send(`<h1> Host address : ${req.headers.host}</h1>
              
              <h1> Remote port : ${req.connection.remotePort}</h1>

              <h1> Local address : ${req.connection.localAddress}</h1>

              <h1> Region : ${locations}</h1>
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