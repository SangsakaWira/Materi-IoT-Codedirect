// npm init
// npm install exress --s

// inisiasi express
const express = require("express")

// konfigurasi aplikasi
const app = express()

// membuka PC menjadi server di port 3000
app.listen(3000,function(){
    console.log("Server is Running")
})

app.get("/lampu1/:lampu1",function(req,res){
    res.send({
        lampu:req.params.lampu1
    })
})

app.get("/sh/:suhu/pr/:tekanan/lvl/:level",function(req,res){
    res.send({
        suhu:req.params.suhu,
        pressure:req.params.tekanan,
        level:req.params.level
    })
})