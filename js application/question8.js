const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate the sum of numbers from 1 to the given integer
function calculateSum(n) {
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    return sum;
}

// Prompt the user for a positive integer
rl.question('Enter a positive integer: ', (input) => {
    // Convert input to a number
    const number = parseInt(input, 10);

    // Check if input is a valid positive integer
    if (isNaN(number) || number <= 0) {
        console.log('Please enter a valid positive integer.');
    } else {
        // Calculate the sum and print it
        const sum = calculateSum(number);
        console.log(`The sum of all numbers from 1 to ${number} is: ${sum}`);
    }

    // Close the readline interface
    rl.close();
});
