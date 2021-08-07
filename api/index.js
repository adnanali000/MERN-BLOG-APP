const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//auth route
const authRoute = require('./routes/auth');

//for update/delete user
const userRoute = require("./routes/users");

//post route
const postRoute = require("./routes/post");

//category route
const categoryRoute = require("./routes/categories");

//images storage
const multer = require("multer");

dotenv.config();
app.use(express.json());

//mongoose connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true,
}).then(console.log("connected to mongoDB")).catch(err => console.log(err));

//storage for images
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename(req,file,cb){
        // cb(null,"logo.png")
        cb(null,req.body.name)
    }
})


//upload file
const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded");
})


//indicate router for authentication / login
app.use("/api/auth",authRoute);

//indicate router for update delete
app.use("/api/users",userRoute);

//indicate route for post
app.use("/api/posts",postRoute);

//indicate route for post
app.use("/api/categories",categoryRoute);

//app listen on port 5000
app.listen("5000",()=>{
    console.log("backend work started");
})