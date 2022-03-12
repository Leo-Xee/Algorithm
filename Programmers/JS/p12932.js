/**
 * 자연수 뒤집어 배열로 만들기
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
input = +input;

function solution(n) {
  const ans = Array.from(String(n), (s) => +s).reverse();
  return ans;
}

console.log(solution(input));
