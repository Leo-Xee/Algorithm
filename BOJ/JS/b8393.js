/*

boj.kr/8393

3
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let sum = 0;
for (let i = 1; i <= +input[0]; ++i) {
  sum += i;
}
console.log(sum);
