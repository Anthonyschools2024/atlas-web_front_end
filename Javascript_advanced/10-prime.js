// Helper function to check if a number is prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Function that returns the number of prime numbers from 2 to 100
function countPrimeNumbers() {
  let count = 0;
  for (let num = 2; num <= 100; num++) {
    if (isPrime(num)) {
      count++;
    }
  }
  return count;
}

// Measure the execution time for executing countPrimeNumbers 100 times
const startTime = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
const endTime = performance.now();
const executionTime = endTime - startTime;

console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
