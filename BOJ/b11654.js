/**
 * boj.kr/11654
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

console.log(input.charCodeAt(0));
