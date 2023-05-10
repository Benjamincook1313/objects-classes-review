
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.favorites = {};
        this.shoppingList = [];
        this.isMarried = false;
    }

    gotMarried = (spouse) => {
        if(this.age >= 18){
            this.isMarried = true;
            this.spouse = spouse;
            console.log(`Happily ever after ${this.name} & ${spouse}`);
        }else{
            console.log("Your not old enouhg for that")
        }
    };

    birthday = () => {
        this.age++;
        console.log("Happy Cake Day");
    };

    addToList = (item) => {
        this.shoppingList.push(item);
    }

    addFav = (key, value) => {
        this.favorites[`${key}`] = value;
    };
}

class Baby extends Person {
    constructor(name, age, naptime) {
        super(name, age)
        this.toys = [];
        this.naptime = naptime;
    }

    changeNaptime = (time) => {
        this.naptime = time;
        console.log(`${this.name} new nap time is now ${time}`);
    }

    newToy = (toy) => {
        this.toys.push(toy);
        console.log(this.toys);
    }
    
}


const benjamin = new Person("Benjamin", 30);

const baby1 = new Baby("Tim", 0, 1);

baby1.changeNaptime(2);
baby1.birthday();
baby1.newToy("carosel");
baby1.age = 20;
baby1.gotMarried("Jenni");


// console.log(benjamin);