/**
 * 자연수 뒤집어 배열로 만들기
 */

function solution(n) {
  const ans = Array.from(String(n), (s) => +s).reverse();
  return ans;
}

const input = 12345;

console.log(solution(input));
