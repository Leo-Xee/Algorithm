/**
boj.kr/11021
 
5
1 1
2 3
3 4
9 8
5 2
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
  const temp = input[i].split(' ').map((item) => +item);
  testCaseArray.push({ A: temp[0], B: temp[1] });
}

solution(+input[0], testCaseArray);

function solution(T, testCaseArray) {
  for (let i = 0; i < T; ++i) {
    console.log(`Case #${i + 1}: ${testCaseArray[i].A + testCaseArray[i].B}`);
  }
}
