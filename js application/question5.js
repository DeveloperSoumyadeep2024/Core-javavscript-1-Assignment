const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to handle login
function login(username, password) {
    const correctUsername = 'admin';
    const correctPassword = '12345';

    if (username === correctUsername && password === correctPassword) {
        console.log('Login successful');
    } else {
        console.log('Invalid credentials');
    }
}

// Prompt the user for username and password
rl.question('Enter your username: ', (username) => {
    rl.question('Enter your password: ', (password) => {
        // Call the login function with the provided username and password
        login(username, password);

        // Close the readline interface
        rl.close();
    });
});
