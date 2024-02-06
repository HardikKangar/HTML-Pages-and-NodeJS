// Require the 'fs' module to work with the file system
const fs = require('fs');

// Read the contents of the 'file.txt' file using utf8 encoding
fs.readFile('file.txt', 'utf8', (err, data) => {
    // Check if an error occurred while reading the file
    if (err) {
        // Log the error to the console
        console.error(err);
        // Return from the function to stop further execution
        return;
    }
    // If no error occurred, log the data (file contents) to the console
    console.log(data);
});
