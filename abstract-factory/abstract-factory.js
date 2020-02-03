class BMWFamily {
    getType() {
        return 'BMW - Family';
    }
};

class BMWSport {
    getType() {
        return 'BMW - Sport';
    }
};

class AudiFamily {
    getType() {
        return 'Audi - Family';
    }
};

class AudiSport {
    getType() {
        return 'Audi - Sport';
    }
};

class BMWFactory {
    createFamilyCar() {
        return new BMWFamily();
    }

    createSportCar() {
        return new BMWSport();
    }
};

class AudiFactory {
    createFamilyCar() {
        return new AudiFamily();
    }

    createSportCar() {
        return new AudiSport();
    }
};

class Abstract {
    constructor(factory) {
        this.factory = factory;
        this.car;
    }

    createFamilyCar() {
        this.car = this.factory.createFamilyCar();
    }

    createSportCar() {
        this.car = this.factory.createSportCar();
    }

    showCarType() {
        return this.car.getType();
    }
}

function run(factoryType) {
    const factory = factoryType === 'audi' ? new AudiFactory() : new BMWFactory();

    let car = new Abstract(factory);

    car.createFamilyCar();
    console.log(car.showCarType());

    car.createSportCar();
    console.log(car.showCarType());
}

run('audi');