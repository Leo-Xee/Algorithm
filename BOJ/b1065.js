/**
 * boj.kr/1065
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

const N = +input;

function solution(N) {
  let cnt = 0;
  for (let i = 1; i <= N; ++i) {
    if (i < 100) {
      cnt++;
    } else if (i < 1000) {
      const strNum = String(i);
      if (strNum[0] - strNum[1] === strNum[1] - strNum[2]) {
        cnt++;
      }
    }
  }
  console.log(cnt);
}

solution(N);
