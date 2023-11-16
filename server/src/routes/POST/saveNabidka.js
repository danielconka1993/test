const saveNabidka = require("express").Router();
const modelNabidka = require("../../models/nabidka");

saveNabidka.post("/save-nabidka",(req,res) => {
    console.log(req.body);
    const {nemovitost,kraj,okres,jmeno,email,tel,date} = req.body;

    const nabidka = new modelNabidka({
        nemovitost,
        kraj,
        okres,
        jmeno,
        email,
        tel,
        date
    });
    nabidka.save()
    .then((document) => {
        res.json({
            msg: `Došlo k uložení nabídky ${JSON.stringify(document)}`
        });
    })
    .catch((err) => {
        console.error("Chyba při ukládání nabídky:", err);
        res.status(500).json({
            msg: "Nedošlo k uložení nabídky"
        });
    });
})

// pro GET 
saveNabidka.get("/save-nabidka", (req,res) => {
    res.send("ano Navstivil jsi /save-nabidka - GETEM");
})



module.exports = saveNabidka;