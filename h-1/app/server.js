// npm init
// npm install express --s

// konfigurasi library/package
const express = require("express")
const app = express()

// kita buat pc kita sebagai server dengan port 3000
// 192.168.1.6:5000
// 3000,5000,80,8000,27010
app.listen(5000,function(){
    console.log("Server is running")
})


// setting endpoint

// 192.168.1.6:5000/home
app.get("/lampu",function(req,res){
    res.send({
        lampu:"on"
    })
})

// 192.168.1.6:5000/about
app.get("/about",function(req,res){
    res.send("<h1>Welcome to About Page</h1>")
})

// node server.js

// 192.168.1.6:5000/about
// localhost:5000/about