const inventory = [];

function findProductIndex(str) {
    return inventory.findIndex(item => item.name.toLowerCase() === str.toLowerCase());
}

function addProduct(obj) {
    const product = { ...obj, name: obj.name.toLowerCase() };
    let availability = findProductIndex(product.name);

    if (availability === -1) {
        inventory.push(product);
        const msg = `${product.name} added to inventory`;
        console.log(msg);
        return msg;
    } else {
        inventory[availability].quantity += obj.quantity;
        const msg = `${product.name} quantity updated`;
        console.log(msg);
        return msg;
    }
}

function removeProduct(pName, qty) {
    let availability = findProductIndex(pName);
    pName = pName.toLowerCase();

    if (availability !== -1) {
        if (inventory[availability].quantity > qty) {
            inventory[availability].quantity -= qty;
            const msg = `Remaining ${pName} pieces: ${inventory[availability].quantity}`;
            console.log(msg);
            return msg;
        } else if (inventory[availability].quantity === qty) {
            inventory.splice(availability, 1);
            const msg = `${pName} completely removed from inventory`;
            console.log(msg);
            return msg;
        } else {
            const msg = `Not enough ${pName} available, remaining pieces: ${inventory[availability].quantity}`;
            console.log(msg);
            return msg;
        }
    } else {
        const msg = `${pName} not found`;
        console.log(msg);
        return msg;
    }
}



console.log(findProductIndex("flour"));
console.log(findProductIndex("FloUr"));
console.log(findProductIndex("Flour"));
console.log(addProduct({ name: "FLOUR", quantity: 5 }));
console.log(addProduct({ name: "FLOUR", quantity: 5 }));
console.log(addProduct({ name: "FLOUR", quantity: 5 }));
console.log(addProduct({ name: "FLOUR", quantity: 5 }));
console.log(removeProduct("FLOUR", 5));
console.log(removeProduct("FLOUR", 5));
console.log(removeProduct("FLOUR", 5));
console.log(removeProduct("FLOUR", 5));
console.log(inventory);