const User = require("../models/user.model"); //modelo de usuario de mongodb

//funcion para insertar usuarios en la base de datos mongodb
const insertUsers = async (newUsers) => {
    await User.insertMany(newUsers); //insertar multiples usuarios a la vez
};

//funcion para obtener todos los usuarios desde la base de datos
const getUsers = async () => {
    return await User.find(); //obtener todos los usuarios de la base de datos
};

module.exports = { insertUsers, getUsers };
