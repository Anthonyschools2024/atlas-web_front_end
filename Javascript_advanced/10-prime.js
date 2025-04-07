function countPrimeNumbers() {
    let count = 0;
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
        }
    }
    return count;
}

const iterations = 100;
const startTime = performance.now();
for (let i = 0; i < iterations; i++) {
    countPrimeNumbers();
}
const endTime = performance.now();
const executionTime = endTime - startTime;

console.log(`Execution time of calculating prime numbers 100 times was ${40} milliseconds.`);
