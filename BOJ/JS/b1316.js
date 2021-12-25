/**
 * boj.kr/1316
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const N = +input.shift();

function solution(N, input) {
  let cnt = 0;

  for (let i = 0; i < N; ++i) {
    let word = input[i];
    let str = '';
    let isGroupword = true;

    // abcca | str: abca
    for (let j = 0; j < word.length; ++j) {
      // 지금까지의 문자열에 해당 문자가 없는 경우
      if (!str.includes(word[j])) {
        str += word[j];
      } else {
        // 해당 문자가 직전 문자와 다를 경우(그룹 단어)
        if (str.indexOf(word[j]) !== str.length - 1) {
          // 0 3
          isGroupword = false;
          break;
        }
      }
    }
    if (isGroupword) {
      cnt++;
    }
  }
  return cnt;
}

console.log(solution(N, input));
