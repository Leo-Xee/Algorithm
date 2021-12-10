/**
 * boj.kr/4673
 */

// 0: 셀프 넘버, 1: 생성자가 있는 수

function d(num) {
  const str = String(num);
  let sum = 0;
  for (let i = 0; i < str.length; ++i) {
    sum += +str[i];
  }
  return num + sum;
}

function solution(max) {
  const arr = Array(max).fill(0);

  for (let i = 1; i <= max; ++i) {
    const num = d(i);
    if (num <= 10000) {
      arr[num]++;
    }
  }

  for (let i = 1; i <= max; ++i) {
    if (arr[i] === 0) {
      console.log(i);
    }
  }
}
solution(10000);
