/**
 * 하샤드수
 */

function solution(x) {
  let sum = 0;
  const arr = String(x).split("");

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return x % sum == 0;
}

const input = 10;

console.log(solution(input));
