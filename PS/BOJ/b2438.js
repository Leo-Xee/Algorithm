/**
 * boj.kr/2438
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let result = '';
for (let i = 0; i < +input[0]; ++i) {
  for (let j = 0; j <= i; ++j) {
    result += '*';
  }
  result += '\n';
}

console.log(result);
