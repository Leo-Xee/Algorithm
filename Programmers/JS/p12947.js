/**
 * 하샤드수
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const x = +input[0];

function solution(x) {
  let sum = 0;
  const arr = String(x).split("");

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return x % sum == 0;
}

console.log(solution(x));
