// Basic data types 

// primitive data type =>
// number:
let money: number = 800;
money = 2121;

let roll: number = 21;

// string:
let myName: string = "Md. Sabbir Ahmmed";
let institute: string = 'IBN TAIMIYA SCHOOL AND COLLEGE';

// boolean:
const isSick: boolean = true;
const exploringTS: true = true;


//null:
const isActive: null = null;
const isHeSays: null = null;

//undefined:
let haveAns: undefined;


// non primitive data type=>
// Array
const friend: string[] = ['salam', 'kalam'];
const mixArray: [number, string, string, boolean] = [12, 'saxon', 'david', true];

let indicator: number[] = [1, 6];
indicator.push(32)
// indicator.push('abcd'); it is not working, cause we declare it for number of Array, but we push it to variable

//tuple:
let numString: [number, string] = [420, 'james'];

//object:

const product: {
    isBuyable: 'yes';
    readonly name: 'TITAN Watch'; //when this is readonly, that is literal type
    isStock?: boolean; //optional, that means sometime it exist , sometime not.
    price: number;
    availability: boolean;
    storedAt: string
} = {
    isBuyable: 'yes',
    name: 'TITAN Watch',
    price: 12500,
    availability: true,
    storedAt: 'NYC'
}
product.price = 17500;
