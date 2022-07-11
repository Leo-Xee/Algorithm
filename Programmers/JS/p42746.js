/**
 * 가장 큰수
 */

function soultion(numbers) {
  const ans = numbers
    .map((num) => String(num))
    .sort((a, b) => b + a - (a + b))
    .join("");

  return ans;
}

const input = [6, 10, 2];
console.log(soultion(input));
