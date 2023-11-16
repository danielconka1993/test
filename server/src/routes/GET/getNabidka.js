const getNabidka = require("express").Router();
const modelNabidka = require("../../models/nabidka");

// getNabidka.get("/get-nabidka", (req,res) => {
//     res.json({
//         msg: "Upsešné získání surovin",
//         serznamNabídek:[
//             {nemovitost:"dum",kraj:"Karlovy Vary",okres:"Karlovy Vary", jmeno:"Pepa Vomáčka", email:"asdasd@gmail.com", tel:"773590989", date:"10.10.2022"},
//             {nemovitost:"dum",kraj:"Karlovy Vary",okres:"Karlovy Vary", jmeno:"Pepa Vomáčka", email:"asdasd@gmail.com", tel:"773590989", date:"10.10.2022"},
//             {nemovitost:"dum",kraj:"Karlovy Vary",okres:"Karlovy Vary", jmeno:"Pepa Vomáčka", email:"asdasd@gmail.com", tel:"773590989", date:"10.10.2022"},
//         ]
//     })
// })

getNabidka.get("/get-nabidka",(req,res)=> {
    modelNabidka.find({}) // pro všechny
        .then((docs) => {
            return res.json({
                msg:`POvedlo se načíst Getem hodnoty `,
                documents:docs
            });
        })
        .catch((err) => {
            return res.json({
                msg: `Nedošlo k načtení`,
                documents:[]
            })
        })
})

module.exports = getNabidka;