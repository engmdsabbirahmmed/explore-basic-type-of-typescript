{
    //type alias

    // type alias in object:
    type Student = {
        id: number;
        name: string;
        age: number;
        gender: string;
        contact?: string;
        address: string
    }



    const student1: Student = {
        id: 12,
        name: 'sabbir',
        age: 17,
        gender: 'Male',
        contact: '01712345678',
        address: 'CUM'
    }

    const student2: Student = {
        id: 13,
        name: 'Alia bhatt',
        age: 17,
        gender: 'Female',
        address: 'CUM'
    }

    const student3: Student = {
        id: 11,
        name: 'Katrina',
        age: 19,
        gender: 'Female',
        address: 'Nepal'
    }

    const student4: Student = {
        id: 10,
        name: 'Barun',
        age: 23,
        gender: 'Male',
        address: 'INDIA',
        contact: '01224545'
    }

    // type alias in variable:
    type Name = string;
    const name: Name = 'sabbir';
    type Phone = number;
    const phone: Phone = 123456432;
    type IsReady = boolean;
    const isReady: IsReady = true;



    // type alias in function:
    type Sum = (num1: number, num2: number) => number;
    const sum: Sum = (num1, num2) => num1 + num2;

    type AddTwoName = (firstName: string, lastName: string) => string
    const addTwoName: AddTwoName = (firstName, lastName) => firstName + lastName;
}