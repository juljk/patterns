class CarAccess {
    open() {
        console.log('The door is opened!');
    }

    close() {
        console.log('The door is closed!');
    }
}

class ProxyCarAccess {
    constructor(car) {
        this.car = car;
    }

    open(pass) {
        if (this.checkPass(pass)) {
            this.car.open();
        } else {
            console.log('Access denied!');
        }
    }

    checkPass(pass) {
        return pass === 'Bob';
    }

    close() {
        this.car.close();
    }
}

const c1 = new ProxyCarAccess(new CarAccess());

c1.open();
c1.close();
c1.open('Hey!');
c1.open('Bob');
c1.close();