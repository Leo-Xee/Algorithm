/**
 boj.kr/1110

 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath).toString());

let num = input;
let sum;
let cnt = 0;

while (true) {
  cnt++;
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (input === num) {
    break;
  }
}

console.log(cnt);
