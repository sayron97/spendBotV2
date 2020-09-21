const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let spends = new Schema(
    {
        product_id: {
            type: String
        },
        user_id: {
            type: String
        },
        spend: {
            type: String
        },
        date: {
            type: Date
        }
    },
    { collection: "Spends" }
);

module.exports = mongoose.model("spends", spends);