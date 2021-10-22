/**
 * boj.kr/2439
 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let num = +input[0];
let result = '';
for (let i = 0; i < num; ++i) {
  for (let j = 0; j < num - i - 1; ++j) {
    result += ' ';
  }
  for (let k = 0; k <= i; k++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);
