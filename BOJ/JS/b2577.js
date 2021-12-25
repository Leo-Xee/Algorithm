/**
  boj.kr/2577

  150
  266
  427
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item);

const A = input[0];
const B = input[1];
const C = input[2];
const result = String(A * B * C);

for (let i = 0; i <= 9; ++i) {
  let cnt = 0;

  for (let j = 0; j < result.length; ++j) {
    if (Number(result[j]) === i) {
      cnt++;
    }
  }
  console.log(cnt);
}
