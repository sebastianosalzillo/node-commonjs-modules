const createName = require('./names'); 
const createHobbies = require('./hobbies'); 

function createPerson() {
    const fullName = createName('Mario', 'Rossi'); 
    const hobbies = createHobbies('Calcio', 'Lettura', 'Viaggi'); 
    return {
        fullName,
        hobbies,
    };
}

const person = createPerson();
console.log(person);
