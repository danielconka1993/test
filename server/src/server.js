const express = require("express");// 1 server 
const app = express();// 1 server
const PORT = process.env.PORT || 5000; // 1 server

const db = require("./connectDB"); // 2 connectDB

const getNabidka = require("./routes/GET/getNabidka"); // 3 get - výpis
const saveNabidka = require("./routes/POST/saveNabidka"); // 4 POST - save

const cors = require("cors"); // 5 Pro front-end část

app.get("/",(req,res) => {  // 1 server
    res.send("Jsi na hlavni strance");
})
    
app.listen(PORT, (err) => { // 1 server
    console.log(`Server běží na portu ${PORT}!`)
})

// -----------------

db.connect(); // 2 connectDB

app.use(express.json({extended:false})); // 2,5 - Midlewere POSTMAN (pro praci s json)

app.use("/", cors(), getNabidka); // 5 - pro frone-End část

app.use("/",getNabidka); // 3 get - výpis

app.use("/",saveNabidka); // 4 POST - save