export class PrimeNumberCalculator {
  number: any;
  primes: number[] = [];

  static generatePrimes(num: number) {
    if (num && num > 1) {
      return  this.calculatePrimes(num);
    } else {
      return []
      // alert('Please enter a number greater than 1.');
    }
  }

  static calculatePrimes(n: number): number[] {
    const primes: number[] = [];
    for (let i = 2; i <= n; i++) {
      if (this.isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

  static isPrime(num: number): boolean {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
}