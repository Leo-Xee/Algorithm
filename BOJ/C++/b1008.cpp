#include <bits/stdc++.h>
using namespace std;

double a, b;
int main () {
  cin >> a >> b;
  cout.precision(12);  // 출력할 실수 전체 자릿수를 고정
  cout << fixed; // 소수점 아래로 자릿수를 고정
  cout << a / b;
  return 0;
}