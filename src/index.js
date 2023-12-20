const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();

const app = express ();
const port = process.env.port || 2700;
const path = require("path")
//routes
app.get("/",(req,res)=>{
res.send("welcome to my api");
});

//mongo db connection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log("connected to mongodb atlas"))
.catch((error)=>console.error(error))


app.listen(port, () => console.log("server listening on port",port));