const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//auth route
const authRoute = require('./routes/auth');

dotenv.config();
app.use(express.json());

//mongoose connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true,
}).then(console.log("connected to mongoDB")).catch(err => console.log(err));

//indicate router for authentication / login
app.use("/api/auth",authRoute);


//app listen on port 5000
app.listen("5000",()=>{
    console.log("backend work begin")
})