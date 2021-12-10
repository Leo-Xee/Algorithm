/**
 * boj.kr/4344
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// 테스트 케이스의 개수
const C = +input[0];
const testCaseArray = [];

for (let i = 1; i <= C; ++i) {
  const temp = input[i].split(' ').map((x) => +x);
  testCaseArray.push(temp);
}

solution(C, testCaseArray);

/**
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
 */
function solution(C, arr) {
  for (let i = 0; i < C; ++i) {
    let studentNum = 0;
    let sum = 0;
    let cnt = 0;
    let average = 0;
    let ratio = 0;

    // 학생 수와 점수의 합을 세팅
    for (let j = 1; j <= arr[i][0]; ++j) {
      studentNum = arr[i][0];
      sum += arr[i][j];
    }
    // 평균 값 계산
    average = sum / studentNum;

    //  평균 값보다 큰 점수를 받은 학생 계산
    for (let j = 1; j <= arr[i][0]; ++j) {
      if (arr[i][j] > average) {
        cnt++;
      }
    }

    // 평균을 넘은 학생의 비율 계산
    ratio = (cnt / studentNum) * 100;

    console.log(ratio.toFixed(3) + '%');
  }
}
