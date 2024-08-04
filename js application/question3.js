const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for a number
rl.question('Enter a number: ', (input) => {
    // Convert input to a number
    const number = parseFloat(input);

    // Check if the input is a valid number
    if (isNaN(number)) {
        console.log('Please enter a valid number.');
    } else {
        // Use nested ternary operators to determine if the number is positive, negative, or zero
        const result = number > 0 ? 'positive' : (number < 0 ? 'negative' : 'zero');
        console.log(`The number is ${result}.`);
    }

    // Close the readline interface
    rl.close();
});
