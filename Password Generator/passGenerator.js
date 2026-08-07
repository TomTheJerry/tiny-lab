function generatePassword(passwordLength) {
    const chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()`;  
    let generatedPass = '';  

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        generatedPass += chars[randomIndex];
    }
    return generatedPass;
}

let password = generatePassword(12);
console.log("Generated password: " + password);