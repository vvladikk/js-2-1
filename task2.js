let numbers = [23, 1, 45, 87, 4, 55, 6];
let max = numbers[0];

for (let num of numbers) {
  if (num > max) {
    max = num;
  }
}

console.log("Найбільше число в масиві: " + max);
