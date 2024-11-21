const pets = []; //simular base de datos en memoria

const insertPets = async (newPets) => {
    pets.push(...newPets);
};

const getPets = async () => {
    return pets;
};

module.exports = { insertPets, getPets };
