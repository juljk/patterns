// EXAMPLE #1
class Component {
    getName() {
        return 'Component';
    }
}

class Decorator {
    constructor(object) {
        this.object = object;
    }

    getName() {
        return this.object.getName();
    }
}

class DecoratorA extends Decorator {
    getName() {
        return `Decorator A(${super.getName()})`;
    }
}

class DecoratorB extends Decorator {
    getName() {
        return `Decorator B(${super.getName()})`;
    }
}

function run(component) {
    console.log(component.getName());
}

const simple = new Component();
run(simple);

const decoratorA = new DecoratorA(simple);
const decoratorB = new DecoratorB(decoratorA);

console.log(`${decoratorA.getName()}`);
console.log(`${decoratorB.getName()}`);

// EXAMPLE #2
class Car {
    constructor() {
        this.price = 10000;
        this.model = 'Car';
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.model;
    }
}

class Tesla extends Car {
    constructor() {
        super();
        
        this.price = 25000;
        this.model = 'Tesla';
    }
}

class Audi extends Car {
    constructor() {
        super();
        this.price = 21000;
        this.model = 'Audi';
    }
}

/**
 * Decorator
 */
class Autopilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 5000;
    }

    getDescription() {
        return `${this.car.getDescription()} with autopilot`;
    }
}

/**
 * Decorator
 */
class Parktronic {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 3000;
    }

    getDescription() {
        return `${this.car.getDescription()} with parktronic`;
    }
}

let tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);

showInfo(tesla);

let audi = new Audi();
audi = new Autopilot(audi);

showInfo(audi);

/**
 * Helpers
 * @param {Object} car 
 */
function showInfo(car) {
    console.log(`
        -------
        ${car.getPrice()}
        ${car.getDescription()}
    `);
}