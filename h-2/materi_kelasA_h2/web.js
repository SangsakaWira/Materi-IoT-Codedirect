const express = require("express");
const app = express()

app.use(express.static(__dirname+"/"))

// Kodingan ini buat open server
app.listen(3000,function(){
    console.log("Server is Running")
})

app.get("/suhu/:suhu/level/:lvl",function(req,res){
    res.sendFile("index.html")
})
