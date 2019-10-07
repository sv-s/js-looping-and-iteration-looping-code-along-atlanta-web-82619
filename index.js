// Code your solutions in this file
function writeCards(arr, event) {
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
        ret.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    return ret;
}

function countdown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}