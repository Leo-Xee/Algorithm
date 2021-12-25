/**
 * boj.kr/11720
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];
const num = input[1].split('');
let sum = 0;

for (let i = 0; i < N; ++i) {
  sum += +num[i];
}
console.log(sum);
