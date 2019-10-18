// Create Mixins
let mixin = {
    madeIn(){
        console.log(`This Car was made in Year 2019`);
    }
}
// add created mixin to a proto types
let carMixin = {
    __proto__: mixin,
    madeIn(){
        super.madeIn();
    }
}

//function can be hoisted
sayHi();

class Car {
    constructor(doors,engine,color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    // Create method 
    carStats() {
        return `This Car has ${this.doors} doors, and ${this.engine} engineand a beautiful ${this.color} color! `;
    }

    // Static methods need to define inside the class
    // static methods are utility functions
    static totalDoors(car1,car2){
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 +  doors2;
    }
}


// Create Instance
const cx5 = new Car(4, 'V6', 'grey');
const civic = new Car(3, 'Best', 'red');
const renault = new Car(5, 'New', 'blue');

console.log(cx5);
console.log(cx5.carStats());

// Log Static methods
console.log(Car.totalDoors(cx5 , civic));
console.log(Car.totalDoors(renault , civic))


function sayHi(){
    console.log('This is beautiful');
}

//function can be hoisted
sayHi();


// extend constructor form Car class
class SUV extends Car {
    constructor(doors,engine,color,brand,carStats){
        // super method will create new objects and pull constructor from Car class
        super(doors,engine,color,carStats);
        //create objects only for this class
        this.brand = brand;
        //create new valuse when the new object SUV is created
        this.wheels = 4;
        this.ac = true;

        //assign mixin, here not a inheritance it's a composition
        Object.assign(this, carMixin);
    }

    mybrand(){
        return console.log(`This SUV is ${this.brand}`);
    }
}

const cx6 = new SUV(4, 'V6', 'grey','mazda');
const cx7 = new SUV(6, 'V6', 'grey','suzuki');

console.log(cx6);
console.log(cx6.mybrand());
console.log(cx6.madeIn());
