/**
 * boj.kr/b1152
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const ans = input.filter((item) => item !== '' && item !== '\n');
console.log(ans.length);
