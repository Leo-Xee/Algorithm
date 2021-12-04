/**
 * boj.kr/1157
 *
 * 대문자: 65 ~ 90
 * 소문자: 97 ~ 122
 *
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().toLowerCase();

// const cnts = new Array(26).fill(0);

// for (let i = 0; i < input.length; i++) {
//   cnts[input.charCodeAt(i) - 97]++;
// }

const cnts = [];

for (let i = 97; i <= 122; ++i) {
  let cnt = 0;

  for (let j = 0; j < input.length; ++j) {
    if (i === input.charCodeAt(j)) {
      cnt++;
    }
  }
  cnts.push(cnt);
}

const max = Math.max(...cnts);
const index = cnts.indexOf(max);

let isSameCnt = false;

cnts.forEach((val, idx) => {
  if (val === max && idx !== index) {
    isSameCnt = true;
  }
});

console.log(isSameCnt ? '?' : String.fromCharCode(index + 65));
