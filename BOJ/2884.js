/**
  boj.kr/2884

  10 10
 */

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(' ');
let hour = Number(input[0]);
let minute = Number(input[1]);

minute -= 45;

if (minute < 0) {
  minute += 60;
  hour--;
  if (hour < 0) {
    hour = 23;
  }
}

console.log(hour + ' ' + minute);
