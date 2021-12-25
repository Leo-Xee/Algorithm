/*
  boj.kr/10951
  
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
for (let i = 0; i < input.length; ++i) {
  if (input[i] === '') {
    break;
  }
  const temp = input[i].split(' ').map((item) => +item);
  testCaseArray.push({ A: temp[0], B: temp[1] });
}

solution(testCaseArray);
function solution(arr) {
  let count = 0;
  while (arr.length > count) {
    console.log(arr[count].A + arr[count].B);
    count++;
  }
}
