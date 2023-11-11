function studentScore(number: number): string {
  if (number >= 80 && number <= 100) {
    return "Nilai A";
  } else if (number >= 65 && number <= 79) {
    return "Nilai B+";
  } else if (number >= 50 && number <= 64) {
    return "Nilai B";
  } else if (number >= 35 && number <= 49) {
    return "Nilai C";
  } else if (number >= 0 && number <= 34) {
    return "Nilai D";
  } else {
    return "invalid";
  }
}

// input
let score: number = 80;
console.log(studentScore(score)); // Nilai A
console.log(studentScore(70));
console.log(studentScore(55));
console.log(studentScore(30));
console.log(studentScore(40));
console.log(studentScore(101));
