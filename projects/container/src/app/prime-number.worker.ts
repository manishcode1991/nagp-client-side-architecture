/// <reference lib="webworker" />

import { PrimeNumberCalculator } from "./app.prime";

addEventListener('message', ({ data }) => {
  const response = PrimeNumberCalculator.generatePrimes(data)
  return postMessage(response);
});
