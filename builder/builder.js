// Example #1
class Product1 {
    constructor() {
        this.parts = [];
    }

    showPartsList() {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}

class Builder1 {
    constructor() {
        this.product;

        this.reset();
    }

    reset() {
        this.product = new Product1();
    }

    producePart1() {
        this.product.parts.push('Part1');
    }

    producePart2() {
        this.product.parts.push('Part2');
    }

    producePart3() {
        this.product.parts.push('Part3');
    }

    getProduct() {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Director {
    constructor() {
        this.builder;
    }

    setBuilder(builder) {
        this.builder = builder;
    }

    buildWithMinimalConfiguration() {
        this.builder.producePart1();
    }

    buildWithMaximalConfiguration() {
        this.builder.producePart1();
        this.builder.producePart2();
        this.builder.producePart3();
    }
}

function run(director) {
    const builder = new Builder1();
    director.setBuilder(builder);

    console.log('Minimal configuration!');
    director.buildWithMinimalConfiguration();
    builder.getProduct().showPartsList();

    console.log('Max configuration!');
    director.buildWithMaximalConfiguration();
    builder.getProduct().showPartsList();

    console.log('Custom case!');
    builder.producePart2();
    builder.producePart3();
    builder.getProduct().showPartsList();
}

const director = new Director();
run(director);

// Example 2
class Car {
    constructor() {
        this.autoPilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addAutoPilot(autoPilot) {
        this.car.autoPilot = autoPilot;
        return this;
    }

    addParktronic(parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }

    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }

    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }
}

const car1 = new CarBuilder()
                .addAutoPilot(true)
                .addParktronic(true)
                .addSignaling(false)
                .updateEngine('Node')
                .build();

const car2 = new CarBuilder()
                .updateEngine('Rails')
                .build();

showCarResult(car1);
showCarResult(car2);

function showCarResult(car) {
    console.log('Car params:');

    for (key in car) {
        console.log(`${key}: ${car[key]}`);
    }

    console.log('----------');
}