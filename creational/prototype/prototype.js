// Example 2
class Car {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    produce() {
        return new Car(this.model, this.price, this.interior, this.autopilot);
    }
}

const prototypeCar = new Car('S', 1500, 'orange', false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car1.interior = 'white';
car1.autopilot = true;

showInfo(car1);
showInfo(car2);
showInfo(car3);

function showInfo(car) {
    console.log('Car params:');

    for (key in car) {
        console.log(`${key}: ${car[key]}`);
    }

    console.log('----------');
}