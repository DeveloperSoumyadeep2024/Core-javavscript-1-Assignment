const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Prompt the user for the range
rl.question('Enter the minimum number: ', (minInput) => {
    rl.question('Enter the maximum number: ', (maxInput) => {
        // Convert inputs to numbers
        const min = parseFloat(minInput);
        const max = parseFloat(maxInput);

        // Validate the inputs
        if (isNaN(min) || isNaN(max) || min > max) {
            console.log('Please enter valid numbers where the minimum is less than or equal to the maximum.');
        } else {
            // Generate and display the random number
            const randomNumber = getRandomNumber(min, max);
            console.log(`Random number between ${min} and ${max}: ${randomNumber}`);
        }

        // Close the readline interface
        rl.close();
    });
});