class BankAccount {
    constructor(balance) {
        this.balance = balance;
        this.transactions = [];
        this.timer = null;
    }

    deposit(amount) {
        try {
            if (amount <= 0 || typeof amount !== 'number')  {
                throw new Error('Invalid deposit amount');
            }
            this.balance += amount;
            this.transactions.push({ date: new Date(), amount: amount, type: 'deposit', total: this.balance });
            return this.balance;
        } catch (error) {
            console.error('Error during deposit:', error.message);
            return this.balance;
        }
    }

    withdraw(amount) {
        try {
            if (amount <= 0 || amount > this.balance || typeof amount !== 'number') {
                throw new Error('Invalid withdrawal amount');
            }
            this.balance -= amount;
            this.transactions.push({ date: new Date(), amount: amount, type: 'withdraw', total: this.balance });
            return this.balance;
        } catch (error) {
            console.error('Error during withdrawal:', error.message);
            return this.balance;
        }
    }

    getBalance() {
        return this.balance;
    }

    startInterest(interval, rate) {
        this.timer = setInterval(() => {
            this.balance += this.balance * (rate / 100);
            console.log(`New balance after interest: ${this.balance}`);
        }, interval);
    }

    stopInterest() {
        clearInterval(this.timer);
        // setTimeout(() => {
        //     clearInterval(this.timer);
        //     console.log('Interest stopped');
        // }, a);
    }

    scheduleTransaction(type, amount, delay) {
        setTimeout(() => {
            if (type === 'deposit') {
                this.deposit(amount);
                console.log(`Balance after scheduled deposit: ${this.balance}`);
            } else if (type === 'withdraw') {
                this.withdraw(amount);
                console.log(`Balance after scheduled withdrawal: ${this.balance}`);
            }
        }, delay);
    }

    getTransactionHistory() {
        console.table(this.transactions)
    }

    getBalanceOnDate(date) {
        const ObjectiveDate = new Date(date).toDateString();
        let dateBalance;

        this.transactions.forEach((transaction) => {
            if (transaction.date.toDateString() === ObjectiveDate) {
                dateBalance = transaction.total;
            }
        });

        if (dateBalance === undefined) {
            console.log(`No transactions found for the specified date: ${ObjectiveDate}`);
            return;
        }
        return `Balance as of ${ObjectiveDate}: ${dateBalance}`;
    }
}

// Пример использования

const account1 = new BankAccount(2000);

console.log(account1.deposit(-654654)); //ошибка
console.log(account1.deposit(500));

console.log(account1.withdraw(800));
console.log(account1.withdraw(-65456)); //ошибка


account1.startInterest(1000, 5);
account1.stopInterest();

//account1.scheduleTransaction('withdraw', 50, 3000);
//account1.scheduleTransaction('deposit', 40, 3000);

account1.getTransactionHistory();

console.log(account1.getBalanceOnDate('Mar 31 2025'));
account1.getBalanceOnDate('Mar 30 2025');