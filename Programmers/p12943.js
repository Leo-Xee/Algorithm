/**
 * 콜라츠 추측
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => +x);

function solution(num) {
  let cnt = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    if (cnt === 500) return -1;
    cnt++;
  }
  return cnt;
}

input.forEach((num) => {
  console.log(solution(num));
});
