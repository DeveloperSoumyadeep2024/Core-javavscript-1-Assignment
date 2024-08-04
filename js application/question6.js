const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get processing fee based on payment method
function getProcessingFee(paymentMethod) {
    let fee;
    switch (paymentMethod.toLowerCase()) {
        case 'credit':
            fee = '2%';
            break;
        case 'debit':
            fee = '1.5%';
            break;
        case 'paypal':
            fee = '3%';
            break;
        default:
            fee = 'Invalid payment method';
            break;
    }
    return fee;
}

// Prompt the user for payment method
rl.question('Enter the payment method (credit, debit, or paypal): ', (paymentMethod) => {
    // Get the processing fee
    const processingFee = getProcessingFee(paymentMethod);
    
    // Print the processing fee
    console.log(`Processing fee for ${paymentMethod}: ${processingFee}`);
    
    // Close the readline interface
    rl.close();
});
