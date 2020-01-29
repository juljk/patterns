// 1. Global value (Antipattern)
let instance;

class CounterViaGlobalValue {
    constructor() {
        if (!instance) instance = this;
        instance.count = 0;
        return instance;
    }

    getCount() {
        return instance.count;
    }

    increaseCount() {
        return instance.count++;
    }
};

// 2. Static value (ES6)
class CounterViaStaticValue {
    constructor() {
        if (typeof CounterViaStaticValue.instance === 'object') {
            return CounterViaStaticValue.instance;
        }

        this.count = 0;
        CounterViaStaticValue.instance = this;
        return this;
    }

    getCount() {
        return this.count;
    }

    increaseCount() {
        return this.count++;
    }
};

// helpers
function showResult(singelton) {
    const count1 = new singelton();
    const count2 = new singelton();

    count1.increaseCount();
    count1.increaseCount();
    count2.increaseCount();
    count2.increaseCount();

    console.log(count1.getCount());
    console.log(count2.getCount());
}

// RUN
// showResult(CounterViaGlobalValue);
showResult(CounterViaStaticValue);