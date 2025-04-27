class BankAccount {
    #balance = 0;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    showBalance() {
        console.log(`Ваш баланс: ${this.#balance}`);
    };

    deposit(amount) {
        if (amount >= 0) {
            this.#balance += amount;
        }
        this.showBalance();
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            return console.log("На вашому рахунку не достатньо коштів. Будь ласка поповність сопчатку ваш рахунок.");
        }
        this.showBalance();
    }
}

const account1 = new BankAccount(2000);
const account2 = new BankAccount();

account1.showBalance();
account1.withdraw(1000);
account1.withdraw(1000);
account1.deposit(500);

account2.showBalance();











