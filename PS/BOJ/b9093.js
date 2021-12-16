/**
 * boj.kr/9093
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const T = +input.shift();

function solution(T, arr) {
  let cnt = 1;
  const result = [];

  for (let i = 0; i < T; ++i) {
    const stack = [];
    const sentence = arr[i].split(' ');

    for (let j = 0; j < sentence.length; ++j) {
      const word = sentence[j];

      for (let k = 0; k < word.length; ++k) {
        const char = word[k];
        stack.push(char);
      }

      for (let k = 0; k < word.length; ++k) {
        result.push(stack.pop());
      }
      result.push(' ');
    }

    // 마지막 문장이 아닐 때만 줄바꿈 추가
    if (T > cnt) {
      result.push('\n');
      cnt++;
    }
  }
  return result.join('');
}

console.log(solution(T, input));
