// CARA INIT APLIKASI
// npm init
// npm install express --s

// CARA MEJALANKAN APLIKASI
// node <nama aplikasinya.js>
// contoh "node app.js"

// inisiasi
const express = require("express")

// konfigurasi
const app = express()

// kita buka akses PC kita jadi server
app.listen(3000,function(){
    console.log("Server berjalan")
})

app.get("/",function(req,res){
    res.send("Selamat Datang di Homepage")
})

app.get("/about",function(req,res){
    res.send("Selamat Datang di About Page")
})