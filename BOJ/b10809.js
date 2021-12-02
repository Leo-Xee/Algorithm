/**
 * boj.kr/10809
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

// a ~ z(97 ~ 122)
const arr = [];
for (let i = 97; i <= 122; ++i) {
  arr.push(input.indexOf(String.fromCharCode(i)));
}
console.log(arr.join(' '));
