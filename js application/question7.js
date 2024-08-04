const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to determine weather condition based on temperature
function getWeatherCondition(temperature) {
    return temperature > 30 ? 'Hot' : 'Moderate';
}

// Prompt the user for the current temperature
rl.question('Enter the current temperature in °C: ', (input) => {
    // Convert input to a number
    const temperature = parseFloat(input);

    // Check if input is a valid number
    if (isNaN(temperature)) {
        console.log('Please enter a valid number.');
    } else {
        // Determine and print the weather condition
        const weatherCondition = getWeatherCondition(temperature);
        console.log(`The weather condition is: ${weatherCondition}`);
    }

    // Close the readline interface
    rl.close();
});
