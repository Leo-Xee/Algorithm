/*
  boj.kr/2562

  3
  29
  38
  12
  57
  74
  40
  85
  61
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item);

let max = input[0];
let maxIdx = 0;

for (let i = 1; i < 9; ++i) {
  if (max < input[i]) {
    max = input[i];
    maxIdx = i;
  }
}

console.log(max);
console.log(maxIdx + 1);
