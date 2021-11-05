/*
boj.kr/1546

*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const testCaseArray = input[1].split(' ').map((x) => +x);
const max = Math.max(...testCaseArray);
const newArray = testCaseArray.map((x) => (x / max) * 100);

let sum = 0;
for (let i of newArray) {
  sum += i;
}
console.log(sum / N);
