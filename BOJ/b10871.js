/**
  boj.kr/10871

  10 5
  1 10 4 9 2 3 8 5 7 6
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let result = '';
const N = input[0].split(' ').map((item) => +item)[0];
const X = input[0].split(' ').map((item) => +item)[1];
const testCaseArray = input[1].split(' ').map((item) => +item);

solution(N, X, testCaseArray);

function solution(N, X, arr) {
  for (let i = 0; i < N; ++i) {
    if (arr[i] < X) {
      result += arr[i] + ' ';
    }
  }
  console.log(result);
}
