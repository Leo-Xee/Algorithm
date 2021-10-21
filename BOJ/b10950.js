/**
 boj.kr/10950

  5
  1 1
  2 3
  3 4
  9 8
  5 2
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
  const tempValue = input[i].split(' ').map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

solution(+input[0], testCaseArray);

function solution(T, testCaseArray) {
  for (let i = 0; i < T; ++i) {
    const A = testCaseArray[i].A;
    const B = testCaseArray[i].B;
    console.log(A + B);
  }
}
