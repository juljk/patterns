// EXAMPLE #2
class Conveyer {
    setBody() { console.log('Body set!'); };
    getEngine() { console.log('Dismantle Engine!'); };
    setEngine() { console.log('Engine set!'); };
    getInterior() { console.log('Update interior!'); };
    setInterior() { console.log('Exterior added!'); };
    setExterior() { console.log('Added exterior!'); };
    setWheels() { console.log('Wheels!'); };
    addElectronics() { console.log('Added electronics!'); };
    paint() { console.log('Car printed!'); };
};

class ConveyerFacade {
    constructor(car) {
        this.car = car;
    }

    assembleCar() {
        this.car.setBody();
        this.car.getEngine();
        this.car.setEngine();
        this.car.getInterior();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.addElectronics();
        this.car.paint();
    }

    changeEngine() {
        this.car.getEngine();
        this.car.setEngine();
    }

    changeInterior() {
        this.car.getInterior();
        this.car.setInterior();
    }
};

const conveyer = new ConveyerFacade(new Conveyer());

let car = conveyer.assembleCar();
car = conveyer.changeEngine();
car = conveyer.changeInterior();

console.log(car);