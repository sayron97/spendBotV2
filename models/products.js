const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let employee = new Schema(
    {
        name: {
            type: String
        },
        date: {
            type: Date
        }
    },
    { collection: "Products" }
);

module.exports = mongoose.model("products", employee);