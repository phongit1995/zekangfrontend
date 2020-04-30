require("dotenv").config();
let express = require("express");
const next  = require("next");
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const bodyParser = require('body-parser');
const cors = require('cors');
const handle = app.getRequestHandler();
app.prepare().then(()=>{
    const server  = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.listen(process.env.PORT || 3000,()=>{
        console.log("App running On Port... : "+ process.env.PORT )
    })
    server.use("/static", express.static(__dirname + "/static"));
    server.use("/_/static", express.static(__dirname + "/static/bridge/static"));
    server.get("/",(req,res)=>{
        return app.render(req,res,"/",req.query);
    })
    server.get("/gioi-thieu",(req,res)=>{
        return app.render(req,res,"/Introduces",req.query);
    })
    server.get("*", (req, res) => {
        return handle(req, res);
    });
})