#include <bits/stdc++.h>
using namespace std;

int solution(int n) {
  int sum = 0;

  for (int i = 1; i <= n; i++){
    if (n % i == 0) {
      sum += i; 
    }
  }
  return sum;
}

int main() {
  int n, result;
  cin >> n;

  cout <<  solution(n) << "\n";

  return 0;
}