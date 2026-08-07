function repeatStringNumTimes(str, num) {
    let repeatedString = "";

    if (num > 0) {
        let i = 0;
        for (; i < num; i++) {
            repeatedString += str;
        }
    }
    return repeatedString;
}

console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));
console.log(repeatStringNumTimes("abc", 0));