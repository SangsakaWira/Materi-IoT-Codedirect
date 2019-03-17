// ketik "npm init" di terminal
// ketik "npm install express --s" di terminal

// cara run "node app.js" di terminal

// ini cara panggil express
const express = require("express")
// konfigurasi
const app = express()

let data_pengukuran = {
    suhu:50,
    pressure:60,
    lvl:70,
    flow:100,
    suhu1:50,
    pressure1:60,
    lvl1:70,
    flow1:100
}

// buka pc kita jadi server
app.listen(5000,function(){
    console.log("Server berjalan")
})

// setting endpoint
app.get("/home",function(req,res){
    res.send(data_pengukuran)
})

app.get("/about",function(req,res){
    res.send("<h1>Selamat Datang di About</h1>")
})

app.get("/contact",function(req,res){
    res.send("<h1>Selamat Datang di contact</h1>")
})

// localhost:5000/home
// 192.168.1.29:5000/about
// 192.168.1.29:5000/contact