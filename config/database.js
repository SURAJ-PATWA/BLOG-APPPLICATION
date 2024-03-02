const mongoose =require('mongoose');
require('dotenv').config();   // load .env to proceess.env file

const connectWithDb =()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("connection Successful");  
    })
    .catch((error)=>{
        console.error("Connection failed:", error); 
    })

}
module.exports=connectWithDb;





  
    




