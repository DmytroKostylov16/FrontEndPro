'use strict';

class Coach {
    constructor(name, specialization, rate) {
        this.name = name;
        this.specialization = specialization;
        this.rate = rate;
    };
    displayInfo() {
        console.log(`${this.name}: ${this.specialization} (${this.rate})`);
    };
};

const firstCoach = new Coach("Alex Smith", "Fitness", "4.8");
firstCoach.displayInfo();