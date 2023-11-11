function primeNumber(number: number): boolean {
  let i: number = 0;
  let r: number = 0;

  for (i; i <= number; i++) {
    if (number % i == 0) {
      r += 1;
    }
  }

  if (r == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(primeNumber(11)); // true
console.log(primeNumber(13)); // true
console.log(primeNumber(17)); // true
console.log(primeNumber(20)); // false
console.log(primeNumber(35)); // false
