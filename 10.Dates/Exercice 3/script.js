document.getElementById('hours').addEventListener('keyup', function() {
    calculateFutureDateTime();
});

function calculateFutureDateTime() {
    const hoursInput = document.getElementById('hours');
    const resultElement = document.getElementById('result');
    const hours = parseFloat(hoursInput.value);

    if (!isNaN(hours)) {
        const currentTimestamp = Date.now();
        const futureTimestamp = currentTimestamp + (hours * 3600000); // Convert hours to milliseconds
        const futureDate = new Date(futureTimestamp);
        const formattedDate = futureDate.toLocaleString();
        resultElement.textContent = `Future Date and Time: ${formattedDate}`;
    } else {
        resultElement.textContent = 'Please enter a valid number of hours.';
    }
}