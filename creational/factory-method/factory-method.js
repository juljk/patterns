// New object have the same structure but another params

const BMW_MODEL = {
    X5: 'X5',
    X6: 'X6'
};

class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
};

class BmwFactory {
    create(type) {
        switch(type) {
            case BMW_MODEL.X5:
                return new Bmw(type, 108000, 280);
            case BMW_MODEL.X6:
                return new Bmw(type, 120000, 330);
            default:
                return 'Error type';
        }
    }
};

const factory = new BmwFactory();

const x5 = factory.create(BMW_MODEL.X5);
const x6 = factory.create(BMW_MODEL.X6);

console.log(x5);
console.log(x6);