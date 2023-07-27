const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 8080;


app.listen(port,() => {
  console.log("Website berjalan di http://localhost:"+port);
});

const messEror = `<center>
                    <h1>Error code 404</h1>
                    <hr color="black">
                    <p>Forbidden</p>
                  </center>`;
                  
                  
app.get("/", async (req,res) => {
  fs.readFile("./view/index.html",(err,data) => {
    if(err) return res.send(messEror);
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/home", async (req,res) => {
  fs.readFile("./view/home.html",(err,data) => {
    if(err) return res.send(messEror);
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

app.get("/js/main.js", async (req,res) => {
  fs.readFile("./view/main.js",(err,data) => {
    if(err) return res.send(messEror);
    res.writeHead(200,{"Content-Type" : "text/javascript"});
    res.write(data);
    res.end();
  });
});

app.get("/css/style.css", async (req,res) => {
  fs.readFile("./view/style.css",(err,data) => {
    if(err) return res.send(messEror);
    res.writeHead(200,{"Content-Type" : "text/css"});
    res.write(data);
    res.end();
  });
});