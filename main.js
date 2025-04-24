'use strict';

class Calculator {
    constructor(a, b) {
    this.a = a;
    this.b = b;
    }
    add() {
        return this.a + this.b;
    };
    subtract() {
        return this.a - this.b;
    };
    multiply() {
        return this.a * this.b;
    };
    divide() {
        return this.a / this.b;
    }
}

const calculator = new Calculator(29, 7);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());