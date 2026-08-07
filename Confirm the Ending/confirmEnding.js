function confirmEnding (str, matchStr) {
  let endsWith = str.slice(-matchStr.length);

  if(endsWith === matchStr) {
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "off")); // false