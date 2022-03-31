/**
 * 이상한 문자 만들기
 * 
 * 영어 대문자 아스키코드: 65 ~ 90
 * 영어 소문자 아스키코드: 97 ~ 122
 */

#include <bits/stdc++.h>
using namespace std;

string solution(string s) {
  int idx = 0;

  for (int i = 0; i < s.length(); i++) {

    if (s[i] == ' ') {
      idx = 0;    
    }

    if (isalpha(s[i])) {
      if (idx%2) {  // 홀수번째이면 대문자 -> 소문자
        if (s[i] >= 97) { 
          s[i] -= 32;
        }
      } else {    // 짝수번째이면 소문자 -> 대문자
        if (s[i] <= 90) {
          s[i] += 32;
        }
      }
    }
    idx++;
  }

  return s;
}

int main() {
  string s;

  getline(cin, s);
  cout << solution(s) << "\n";

  return 0;
}