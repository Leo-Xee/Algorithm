/**
 * boj.kr/2309 (일곱 난쟁이)
 * sort, next_permutation, prev-permutation
 * 다시풀기
 */

#include <bits/stdc++.h>
using namespace std;

int a[9];
int main(void) {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  for (int i = 0; i < 9; i++) {
    cin >> a[i];
  }

  sort(a, a + 9);

  do {
    int sum = 0;

    for (int i = 0; i < 7; i++) {
      sum += a[i];
    }

    if (sum == 100) break;

  } while (next_permutation(a, a + 9));


  for (int i = 0; i < 7; i++) {
    cout << a[i] << " ";
  }

  return 0;
}