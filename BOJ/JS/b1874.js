/**
 * boj.kr/1874
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((x) => +x);
const N = +input.shift();

function solution(N, arr) {
  const stack = [];
  const result = [];
  let cnt = 0;
  console.log(N, arr);

  for (let i = 1; i <= N; ++i) {
    if (i === arr[cnt]) {
      stack.push(i);
      result.push('+');
    } else {
      stack.pop();
      result.push('-');
    }
  }

  console.log(stack, result);
}

solution(N, input);
