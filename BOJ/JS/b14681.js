/*
 boj.kr/14681

 12
 5
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(Number(line));
}).on('close', function () {
  const num1 = input[0];
  const num2 = input[1];
  if (num1 > 0) {
    if (num2 > 0) {
      console.log('1');
    } else {
      console.log('4');
    }
  } else {
    if (num2 > 0) {
      console.log('2');
    } else {
      console.log('3');
    }
  }
  process.exit();
});
