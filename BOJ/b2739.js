/*
  boj.kr/2739

  2
  */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input[0]);

function solution(N) {
  for (let i = 1; i < 10; i++) {
    console.log(N + ' * ' + i + ' = ' + N * i);
  }
}
