// function:
//normal function:
//arrow function:

function sum(number1: number, number2: number): number {
    return number1 + number2;
}
sum(10, 21);

const addTwoNumber = (num1: number, num2: number): number => {
    const total = num1 + num2;
    return total;
}

const addFullName = (firstName: string, lastName: string) => firstName + lastName;

const poorUser = {
    name: 'Donald Trump',
    balance: 0,
    addBalance(balance: number): string {
        return `My total balance is ${this.balance + balance}`;
    }
}

const array: number[] = [1, 6, 7, 4, 9, 13, 20];
const newArray = array.map((element: number): number => element * element);