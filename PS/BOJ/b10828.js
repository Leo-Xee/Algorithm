/**
 * boj.kr/10828
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();

function solution(N, input) {
  console.log(N, input);
}

solution(N, input);
