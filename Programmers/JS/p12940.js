/**
 * 최대공약수와 최소공배수
 * (Greatest Common Divisor,  Least Common Multiple)
 * 유클리드 호제법(두 수가 서로 상대방 수를 나눠서 원하는 수를 얻는 알고리즘)
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((val) => val.split(" ").map((val) => +val));

function gcd(a, b) {
  let temp;
  while (b !== 0) {
    temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}

input.map((arr) => console.log(solution(arr[0], arr[1])));
