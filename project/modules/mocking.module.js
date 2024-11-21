const bcrypt = require("bcrypt");
const faker = require("faker"); //utilizando faker para generar datos falsos

//funcion para generar usuarios falsos
const generateMockUsers = (numUsers) => {
    const users = [];
    
    for (let i = 0; i < numUsers; i++) {
        const hashedPassword = bcrypt.hashSync("coder123", 10); //encriptar la contraseña
        
        users.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: hashedPassword,
            role: Math.random() > 0.5 ? "admin" : "user", //asignar aleatoriamente "admin" o "user"
            pets: [] //inicialmente sin mascotas
        });
    }

    return users;
};

module.exports = { generateMockUsers };
