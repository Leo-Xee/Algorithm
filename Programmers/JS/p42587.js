/**
 * 프린터
 */

function soultion(priorities, location) {
  const arr = priorities.map((v, i) => ({ idx: i, value: v }));
  let cnt = 0;

  // 순회
  while (true) {
    let first = arr[0];
    let others = arr.slice(1);

    // 첫 번째 요소의 값이 다른 요소들의 값보다 모두 크거나 같으면 dequeue하고 cnt++
    if (others.every((v) => first.value >= v.value)) {
      first = arr.shift();
      cnt++;

      // dequeue한 요소가 location이면 순회 종료
      if (first.idx === location) break;

      // 그렇지 않으면 dequeue한 거를 그대로 enqueue
    } else {
      arr.push(arr.shift());
    }
  }

  return cnt;
}

const inputPriorities = [1, 1, 9, 1, 1, 1];
const inputLocation = 0;

console.log(soultion(inputPriorities, inputLocation));
