let num = 5;

function factorialCalculator(num) {
    let result = 1;

    if (num === 0 || num > 20) { return undefined; }

    while (num >= 1) {
        result *= num;
        num--;
    }
    return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);