const express = require("express");
const { generateMockUsers } = require("../modules/mocking.module");
const { insertUsers, getUsers } = require("../services/users.service");
const router = express.Router();

//rndpoint para generar 50 usuarios con el formato mongo
router.get("/mockingusers", async (req, res) => {
    try {
        //generar 50 usuarios ficticios
        const mockUsers = generateMockUsers(50);

        //guardar los usuarios en la base de datos(mongodb)
        await insertUsers(mockUsers);

        //obtener los usuarios desde la base de datos(con _id generado por mongodb)
        const usersFromDb = await getUsers();

        //devolver los usuarios generados y almacenados en mongodb
        res.json({ status: "success", users: usersFromDb });
    } catch (error) {
        //manejo de errores en caso de fallo
        res.status(500).json({ error: "Error al generar usuarios", details: error.message });
    }
});

module.exports = router;
