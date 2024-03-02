const express = require('express');
const app = express();



// middleware
app.use(express.json());
// import router
const blog = require('./routes/blog');

// mount
// mount mean extra url add kar sakte haa it is a type of middleware
app.use('/api/v1',blog);

// call db
const connectWithDb = require('./config/database');
connectWithDb();

// server start

require('dotenv').config();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//default app
app.get('/',(req,res)=>{
    res.send('<h1>This is my Home Page </h1>')
})


