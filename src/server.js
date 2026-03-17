require("dotenv").config();
const express = require("express");
const cors = require("cors");

const PORT=process.env.PORT;
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");  

const app = express();
    
app.use(cors());
app.use(express.json());
  
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);      

app.listen(PORT ,(err)=>{
  if(err){
    console.log("Server is Not Started...",err);
    return false;
  }
  console.log("Server is Started....");
  
});