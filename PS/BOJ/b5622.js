/**
 * boj.kr/5622
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let sum = 0;
const alpabets = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

// input을 더해서 출력
for (let i = 0; i < input.length; ++i) {
  for (key in alpabets) {
    if (key.includes(input[i])) {
      sum += alpabets[key];
    }
  }
}

console.log(sum);
