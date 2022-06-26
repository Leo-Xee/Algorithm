/**
 * 콜라츠 추측
 */

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

const input = 6;

console.log(solution(input));
