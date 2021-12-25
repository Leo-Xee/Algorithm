/**
 * boj.kr/2675
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const T = +input.shift();

for (let i = 0; i < T; ++i) {
  let ans = '';
  const [cnt, str] = input[i].split(' ');

  for (let j = 0; j < str.length; ++j) {
    for (let c = 0; c < cnt; ++c) {
      ans += str[j];
    }
  }
  console.log(ans);
}
