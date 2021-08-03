const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();


//mongoose connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true,
}).then(console.log("connected to mongoDB")).catch(err => console.log(err));


//app listen on port 5000
app.listen("5000",()=>{
    console.log("backend work begin")
})