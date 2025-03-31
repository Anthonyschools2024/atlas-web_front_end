// Log the start message
console.log("Start of the execution queue");

// Schedule the final code block using setTimeout with a 0ms delay.
// Although scheduled immediately, it will be executed only after all the synchronous code completes.
setTimeout(function() {
  console.log("Final code block to be executed");
}, 0);

// Loop that logs numbers 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Log the end message after the loop
console.log("End of the loop printing");
