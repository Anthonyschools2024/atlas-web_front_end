
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

const iterations = 1000;
const startTime = performance.now();
for (let i = 0; i < iterations; i++) {
    countPrimeNumbers();
}
const endTime = performance.now();
const averageTime = (endTime - startTime) / iterations;

console.log(`Execution time of printing countPrimeNumbers was ${averageTime} milliseconds.`);
