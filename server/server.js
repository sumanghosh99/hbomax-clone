const dotenv=require('dotenv');

const express=require('express');

const app= express();
dotenv.config({path: './config.env'});

require('./db/conn')

const port=process.env.PORT;
app.use(express.json())
app.use(require('./router/auth'))
// const User=require('./models/user.model');




// app.get("/", (req, res) =>{
    // res.send(`hello /`)
// console.log("hello dilip")
// })

// app.get("/contact", (req, res) =>{
//     res.cookie('test','dilip')
//     res.send(`contact /`)
// // console.log("hello dilip")
// })

// app.get("/home", (req, res) =>{
    // res.send(`hello home server.js`)
// console.log("hello dilip")
// })
// const middleware=(req, res,next) =>{
//     console.log("hellow middleware")
//     next()
// }
// app.get("/about",middleware, (req, res) =>{
//     res.send(`hello dilip about`)
// // console.log("hello dilip")
// })
// middleware()

app.listen(port,(req,res)=>{
    console.log("porst is connected",port)
});