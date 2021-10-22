/**
 boj.kr/15552

  5
  1 1
  12 34
  5 500
  40 60
  1000 1000
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
let result = '';
for (let i = 1; i <= +input[0]; ++i) {
  const tempValue = input[i].split(' ').map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

solution(+input[0], testCaseArray);

function solution(T, testCaseArray) {
  for (let i = 0; i < T; ++i) {
    const A = testCaseArray[i].A;
    const B = testCaseArray[i].B;
    result += A + B + '\n';
  }
  console.log(result);
}
