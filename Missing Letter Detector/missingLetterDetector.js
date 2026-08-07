function fearNotLetter(str) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const firstIndex = letters.indexOf(str.slice(0, 1));
    const targetStr = letters.split("").splice(firstIndex, str.length);

    let i = 0;
    for (; i < str.length; i++) {
        if (str[i] !== targetStr[i]) {
            return targetStr[i];
        }
    }
    return undefined;

}

console.log(fearNotLetter("stuvwx"));