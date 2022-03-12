/**
  * 자연수 뒤집어  배열로 만들기
  */

#include <bits/stdc++.h>
using namespace std;


vector<int> solution(long long n) {
  vector<int> v;
  int temp;

  while(n != 0) {
    temp = n % 10;
    v.push_back(temp);
    n /= 10;
  }

  return v;
}

int main() {
  long long n;
  vector<int> v;

  cin >> n;
  v = solution(n);

  for (int i = 0; i < v.size(); i++) {
    cout << v[i];
  }

  return 0;
}