const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles = numbers.map(n => n * 2);
console.log(doubles);

const odds = numbers.filter(isOdd);
console.log(odds);

const sum = numbers.reduce((acc, val) => acc + val, 0)
console.log(sum);
