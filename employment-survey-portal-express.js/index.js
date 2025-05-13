const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const app = express()
const mongoose = require('mongoose');
const employee = require('./models/employee');
const port = process.env.PORT || 8800;
const employeeRoute=require("./routes/employeeRoute.js")
const sectorRoute=require("./routes/sectorRoute.js")


//mongoose connection
const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoose employment survey");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected !")
  })
  
  mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected !")
  })

//middleWires
app.use(cors())
app.use(express.json())
const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use("/employee",employeeRoute);
app.use("/sector",sectorRoute);


app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
    const errorMessage=err.message || "Something went wrong"
    return res.status(errorStatus).json({
      success:false,
      status: errorStatus,
      message:errorMessage,
      stack:err.stack,
    })
  })
  
  
  app.get("/",(req,res)=>{
    res.send("Hello From Survey Portal")
  })
  
  
  app.listen(port, () => {
    connect();
    console.log("Connected to backend 8800.");
  });