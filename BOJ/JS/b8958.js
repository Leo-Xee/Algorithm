/**
 * boj.kr/8958
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
console.log(input);

const N = +input[0];

for (let i = 1; i <= N; ++i) {
  let sum = 0;
  let count = 0;

  for (let j = 0; j < input[i].length; ++j) {
    const target = input[i][j];
    if (target === 'O') {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}
