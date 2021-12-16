/**
 * boj.kr/9012
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const T = +input.shift();

function solution(T, arr) {
  const result = [];

  for (let i = 0; i < T; ++i) {
    const string = arr[i];
    let cnt = 0;

    for (let j = 0; j < string.length; ++j) {
      if (string[j] === '(') {
        cnt++;
      } else {
        cnt--;
        if (cnt < 0) {
          result.push('NO');
          break;
        }
      }
    }
    if (cnt === 0) {
      result.push('YES');
    } else if (cnt > 0) {
      result.push('NO');
    }
  }
  return result.join('\n');
}

console.log(solution(T, input));
