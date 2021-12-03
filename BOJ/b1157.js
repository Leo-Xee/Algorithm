/**
 * boj.kr/1157
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();
const str = input.toLowerCase();
