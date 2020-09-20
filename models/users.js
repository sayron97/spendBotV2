const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let employee = new Schema(
    {
        name: {
            type: String
        },
        tgId: {
            type: Number
        }
    },
    { collection: "Users" }
);

module.exports = mongoose.model("users", employee);