const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let doubles = [];
for (var i = 0; i < numbers.length; i++) {
  doubles.push(2 * numbers[i]);
}
console.log(doubles);

let odds = [];
for (var i = 0; i < numbers.length; i++) {
  if (isOdd(numbers[i])) {
    odds.push(numbers[i]);
  }
}
console.log(odds);

let sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
