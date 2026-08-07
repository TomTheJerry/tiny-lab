function frankenSplice(arr1, arr2, idx) {
    let newArr1 = arr1.slice(); 
    let newArr2 = arr2.slice();

    newArr2.splice(idx, 0, ...newArr1);
    return newArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));