#include <bits/stdc++.h>
using namespace std;

pair<int, int> p;
int x, y, z;
int main() {
  p = make_pair(1, 2);
  int x = get<0>(p);
	tie(y, z) = p;

  cout << p.first << " : " << p.second << "\n";  // 1 : 2
  cout << x << "\n";                             // 1
  cout << y << " " << z << "\n";                 // 1 2
  return 0;
}