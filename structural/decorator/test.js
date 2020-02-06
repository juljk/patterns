class Product {
    getName() {
        return 'Something!';
    }
}

class Decorator {
    constructor(product) {
        this.product = product;
    }

    getName() {
        return this.product.getName();
    }
}

class DecoratorA extends Decorator {
    getName() {
        return `Decorator A: ${super.getName()}`;
    }
}

class DecoratorB extends Decorator {
    getName() {
        return `Decorator B: ${super.getName()}`;
    }
}

let product = new Product();
console.log(product.getName());

let productA = new DecoratorA(product);
console.log(productA.getName());

let productB = new DecoratorB(productA);
console.log(productB.getName());