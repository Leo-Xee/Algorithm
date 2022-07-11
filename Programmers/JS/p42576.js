/**
 * 완주하지 못한 선수
 */

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let idx in participant) {
    if (participant[idx] !== completion[idx]) {
      return participant[idx];
    }
  }
}

const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];
console.log(solution(participant, completion));
