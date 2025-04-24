"use strict"

function Student(firstName, secondName, yearOfBirth, marksArray) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.yearOfBirth = yearOfBirth;
    this.marksArray = marksArray;
    this.avgMark = 0;
    this.presence = [];

    this.getAge = function() {
        const currentYear =  new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    };
    this.averageMark = function() {
        if (this.marksArray.length === 0) return 0;
        let sum = 0;
        for (let i = 0; i < this.marksArray.length; i++) {
            sum += this.marksArray[i];
        }
        this.avgMark = Math.floor(sum / this.marksArray.length);
        return this.avgMark;
    };
    this.present = function() {
        if (this.presence.length < 25) {
            this.presence.push(true);
            return 'Присутній';
        } else {
            return `Максимальна кількість відвідувань - 25.`;
        }
    };
    this.absent = function() {
        if (this.presence.length < 25) {
            this.presence.push(false);
            return 'Відсутній'
        } else {
            return `Максимальна кількість відвідувань - 25.`;
        }
    };
    this.summary = function() {
        const visited = this.presence.filter(p => p === true).length;
        const total = this.presence.filter(p => p !== null).length;
        const attendance = total > 0 ? visited / total : 0;

        if (this.avgMark > 90 && attendance > 0.9) {
            return "Молодець!";
        } else if (this.avgMark > 90 || attendance > 0.9) {
            return "Добре, але можна краще";
        } else if (this.avgMark < 90 && attendance < 0.9 ) {
            return "Редиска!";
        }
    };
}

let student1 = new Student("Anna", "Smith", "1999", [100, 91, 93, 88, 100, 85]);
let student2 = new Student("John", "Brown", "1997", [96, 94, 83, 87, 90, 88]);
let student3 = new Student("Olivia", "Davis", "1998", [100, 86, 100, 88, 91, 92]);

console.log(student1.firstName + " " + student1.secondName);
console.log(student1.averageMark());
console.log(student1.getAge());
console.log(student1.present());
console.log(student1.present());
console.log(student1.present());
console.log(student1.summary());

console.log(student2.firstName + " " + student2.secondName);
console.log(student2.averageMark());
console.log(student2.getAge());
console.log(student2.present());
console.log(student2.present());
console.log(student2.absent());
console.log(student2.summary());

console.log(student3.firstName + " " + student3.secondName);
console.log(student3.averageMark());
console.log(student3.getAge());
console.log(student3.present());
console.log(student3.present());
console.log(student3.absent());
console.log(student3.summary());
