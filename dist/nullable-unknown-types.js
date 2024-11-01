"use strict";
{
    // nullable type 
    const searchName = (value) => {
        if (value) {
            console.log('printing value');
        }
        else {
            console.log('There are nothing for print');
        }
    };
    searchName(null);
    //unknown type
    const getTimeInWatch = (second) => {
        if (typeof second === 'number') {
            const convertedSecondToMinute = second / 60;
            console.log(`The time is ${convertedSecondToMinute} minute`);
        }
        else if (typeof second === 'string') {
            const [time] = second.split(' ');
            const convertedSecondToMinute = (parseInt(time) / 60).toFixed(2);
            console.log(`The time is ${convertedSecondToMinute} minute`);
        }
        else {
            console.log('unknown input');
        }
    };
    getTimeInWatch('234556 huyyuiu');
    //never
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError('This is wrong man');
}
