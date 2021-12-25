/**
 * boj.kr/2742
 *
 * 5
 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let result = '';
for (let i = +input[0]; i > 0; --i) {
  result += i + '\n';
}

console.log(result);
