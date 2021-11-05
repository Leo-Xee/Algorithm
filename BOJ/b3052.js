/*
 boj.kr/3052
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

const numbers = [];

input.forEach((item) => {
  const num = item % 42;

  if (numbers.indexOf(num) === -1) {
    numbers.push(num);
  }
});

console.log(numbers.length);
