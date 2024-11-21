const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ["user", "admin"], default: "user" },
    pets: { type: Array, default: [] },
});

const User = mongoose.model("User", userSchema); //crear el modelo de usuario

module.exports = User;
