let lunches = [];

function addLunchToEnd(arr, lunch) {
    arr.push(lunch);
    console.log(`${lunch} added to the end of the lunch menu.`);

    return arr;
}

function addLunchToStart(arr, lunch) {
    arr.unshift(lunch);
    console.log(`${lunch} added to the start of the lunch menu.`);

    return arr;
}

function removeLastLunch(arr) {
    if (arr.length > 0) {
        let removedLunch = arr.pop();
        console.log(`${removedLunch} removed from the end of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }

    return arr;
}

function removeFirstLunch(arr) {
    if (arr.length > 0) {
        let removedLunch = arr.shift();
        console.log(`${removedLunch} removed from the start of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }

    return arr;
}

function getRandomLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches available.")
    } else {
        let randomIndex = Math.floor(Math.random() * arr.length);
        let randomLunch = arr[randomIndex];
        console.log(`Randomly selected lunch: ${randomLunch}`);
    }

    return arr;
}

function showLunchMenu(arr) {
    if (arr.length === 0) {
        console.log("The menu is empty.")
    } else {
        console.log(`Menu items: ${arr.join(", ")}`);
    }

    return arr;
}

showLunchMenu(["Greens", "Corns", "Beans"])
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);