// Function to check if a number is prime
function isPrime(n) {
  if (n < 2) return false;
  // Check factors up to the square root of n
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

// Measure the execution time using the performance API
const startTime = performance.now();
const primeCount = countPrimeNumbers();
const endTime = performance.now();
const executionTime = endTime - startTime;

console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
// Optionally, you can log the count of prime numbers if needed
// console.log("Number of prime numbers between 2 and 100:", primeCount);
