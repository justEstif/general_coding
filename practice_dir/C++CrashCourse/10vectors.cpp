#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main()
{
    vector<string> friends;
    friends.push_back("Oscar"); // adding to
    friends.push_back("Kevin");
    friends.insert(friends.begin() + 1, "Jin"); // instert to [0 + 1]
    cout << friends.size() << endl;
    return 0;
}