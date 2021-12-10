/**
 * boj.kr/5622
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();
console.log(input);

const alpabets = {};
let cnt = 0;
let num = 3;
let sum = 0;

// 알파벳별 소요시간 세팅(A ~ Z)
for (let i = 65; i <= 90; ++i) {
  if (cnt === 3 && num < 10) {
    cnt = 0;
    num++;
  }
  alpabets[String.fromCharCode(i)] = num;
  cnt++;
}

// input을 더해서 출력
for (let i = 0; i < input.length; ++i) {
  sum += alpabets[input[i]];
}

console.log(sum);
