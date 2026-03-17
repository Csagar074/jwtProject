const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("MongoDB is Conncted Successfully..");
  
}).catch((err)=>{
  console.log("MongoDB is Failed...",err);
  
});
