/**
 * boj.kr/2741
 *
 * 5
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let result = '';
for (let i = 1; i <= +input[0]; ++i) {
  result += i + '\n';
}

console.log(result);
