// destructuring
// object destructuring
const user = {
    id: 420,
    name: {
        firstName: 'Md.',
        middleName: 'Sabbir',
        lastName: 'Ahmmed'
    },
    education: {
        diploma: '2022',
        bsc: 2026
    },
    hobby: 'Exploring new things',
    contactNo: '01512345678',
    address: 'Germany'
}

const { contactNo, name: { middleName } } = user


// array destructuring

const numbers = [12, 43, 23, 65, 71, 81, 90, 57, 39];
const [, second, ...rest] = numbers;