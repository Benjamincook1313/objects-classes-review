
let person = {
    name: "Sean",
    age: 23,
    favorites: {
        food: "steak",
        game: "Zelda",
        color: "Red",
        number: 13
    },
    shoppingList: ["Banans", "Apples", "TP", "Milk", "cheese"]
};

// how to access values 

// destructuring
const { name, age } = person;
// dot notation
person.name;
person.age;
//bracket notation
person["age"];
person["name"];

for(let key in person){
    console.log(key, person[key]);
}

// add key value pair to the object 
person.isMarried = true;
person.isMarried = false;

// remove key value pair
delete person.age;

console.log(person);
// console.log(person.shoppingList[3]);
