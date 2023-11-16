const Mongoose = require("mongoose");
const dotenv = require("dotenv");

class dbConnect{
    connect(){
        // Connect
        dotenv.config();
        Mongoose.connect(process.env.DB_CONNECT,{
        });
        const db = Mongoose.connection;

        //Vypisy
        db.once("error", (err) => {
            console.error("Chyba při propojení k databázy " + err);
        });

        db.once("open", () => {
            console.log("Připojeno k mongoDB");
        });
    }
}

module.exports = new dbConnect();