// your_script.js

const fs = require('fs');

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateRandomDocument(numStrings, stringLength) {
    let documentContent = '';
    for (let i = 0; i < numStrings; i++) {
        documentContent += generateRandomString(stringLength) + '\n';
    }
    return documentContent;
}

// Example usage
const numStrings = 10; // Adjust based on your preference
const stringLength = 20; // Adjust based on your preference

const randomDocument = generateRandomDocument(numStrings, stringLength);

// Save the document to a file
fs.writeFileSync('random_document.txt', randomDocument);

console.log("Random document saved to random_document.txt");

// Example tests
// Replace this with your actual test logic
if (numStrings === 10 && stringLength === 20) {
    console.log("Tests passed!");
} else {
    console.error("Tests failed!");
    process.exit(1); // Exit with an error code to indicate test failure
}
