const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get the grade based on marks
function getGrade(marks) {
    if (marks > 90) {
        return 'A';
    } else if (marks >= 70 && marks <= 90) {
        return 'B';
    } else if (marks >= 50 && marks < 70) {
        return 'C';
    } else {
        return 'F';
    }
}

// Prompt the user for marks
rl.question('Enter the student\'s marks: ', (input) => {
    // Convert input to a floating-point number
    const marks = parseFloat(input);

    // Check if input is a valid number
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('Please enter a valid number between 0 and 100.');
    } else {
        // Get the grade and display it
        const grade = getGrade(marks);
        console.log(`The grade is: ${grade}`);
    }

    // Close the readline interface
    rl.close();
});
