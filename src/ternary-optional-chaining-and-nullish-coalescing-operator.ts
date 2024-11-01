{
    //ternary
    const age: number = 17;
    // if (age >= 18) {
    //     console.log('Adult age');
    // }
    // else {
    //     console.log('Not adult age')
    // }

    let season = 'Autumn';
    season = 'winter';
    // console.log(season);

    const isAdult = (age >= 18) ? 'Adult' : 'Not adult';

    // console.log(isAdult)


    //nullish coalescing worked when the result is null or undefined
    const isAuthenticated = '';
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest2';
    console.log({ result1 }, { result2 });



    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string  // '?' => optional chaining
        }
    }

    const user :User={
        name:'Ronaldo',
        address:{
            city:'Lisbon',
            road:'7 no. sui road',
            presentAddress: 'Saudi Arab'
        }
    } 
    const permanentAddress = user.address.permanentAddress ??'No permanent Address';
    console.log({permanentAddress});
}