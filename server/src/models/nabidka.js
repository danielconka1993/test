const mongoose = require("mongoose");

const nabidkaModel = new mongoose.Schema({
    nemovitost: {
        type: String,
        required: true,
    },
    kraj: {
        type: String,
        required: true,
    },
    okres: {
        type: String,
        required: true,
    },
    jmeno: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
        required: true,
    },
    date: {
        type: String, // nebo Date, pokud je to datum
        required: true,
    }
});

module.exports = mongoose.model("Nabidka", nabidkaModel);