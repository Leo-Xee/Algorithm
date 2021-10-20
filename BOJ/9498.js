/**
  boj.kr/9497

  100
 */

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
const num = Number(input);

if (num >= 90) {
  console.log('A');
} else if (num >= 80) {
  console.log('B');
} else if (num >= 70) {
  console.log('C');
} else if (num >= 60) {
  console.log('D');
} else {
  console.log('F');
}
