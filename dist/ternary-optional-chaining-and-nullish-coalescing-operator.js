"use strict";
var _a;
{
    //ternary
    const age = 17;
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
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest2';
    console.log({ result1 }, { result2 });
    const user = {
        name: 'Ronaldo',
        address: {
            city: 'Lisbon',
            road: '7 no. sui road',
            presentAddress: 'Saudi Arab'
        }
    };
    const permanentAddress = (_a = user.address.permanentAddress) !== null && _a !== void 0 ? _a : 'No permanent Address';
    console.log({ permanentAddress });
}
