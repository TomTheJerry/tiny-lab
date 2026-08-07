function pyramid(str, repeat, reverse) {
    const whiteSpace = ' ';
    let result = '\n';

    if (!reverse) {
        for (let i = 0; i < repeat; i++) {
            const chars = str.repeat(2 * i + 1);
            const padding = whiteSpace.repeat(repeat - i - 1);
            result += padding + chars + '\n';
        }
    } else {
        for (let i = 0; i < repeat; i++) {
            const chars = str.repeat(2 * (repeat - i) - 1);
            const padding = whiteSpace.repeat(i);
            result += padding + chars + '\n';
        }
    }
    return result
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));