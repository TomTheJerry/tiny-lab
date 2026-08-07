function uniteUnique(...arr) {
    const sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!sortedArr.includes(arr[i][j])) {
                sortedArr.push(arr[i][j]);
            }
        }
    }
    return sortedArr;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));