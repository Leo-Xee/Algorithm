/**
 * boj.kr/2908
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const nums = input[0]
  .split(' ')
  .map((item) => +Array.from(item).reverse().join(''));

console.log(Math.max(...nums));

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
// const [a, b] = input.map(v => [...v].reverse().join(''));
// console.log(a > b ? a : b);
