"use strict";
// function:
//normal function:
//arrow function:
function sum(number1, number2) {
    return number1 + number2;
}
sum(10, 21);
const addTwoNumber = (num1, num2) => {
    const total = num1 + num2;
    return total;
};
const addFullName = (firstName, lastName) => firstName + lastName;
const poorUser = {
    name: 'Donald Trump',
    balance: 0,
    addBalance(balance) {
        return `My total balance is ${this.balance + balance}`;
    }
};
const array = [1, 6, 7, 4, 9, 13, 20];
const newArray = array.map((element) => element * element);
