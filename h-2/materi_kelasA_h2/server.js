const express = require("express");
const app = express()

app.use(express.static(__dirname+"/"))

let data_pengukuran = {
    suhu:50,
    tekanan:100,
    lvl:80,
    load:90,
    flow:10
}

// Kodingan ini buat open server
app.listen(3000,function(){
    console.log("Server is Running")
})

app.get("/suhu/:suhu/level/:lvl",function(req,res){
    res.send({
        lampu:req.params.suhu,
        lvl:req.params.lvl
    })
})

// localhost:3000/statusLampu/1

