#include <string>
#include <iostream>
using namespace std;

int main()
{
    bool isStudent = false;
    bool isSmart = false;

    if (isStudent && isSmart)
    {
        cout << "You are a student." << endl;
    }
    else if (isStudent && !isSmart)
    {
        cout << "You are not a student." << endl;
    }
    else
    {
        cout << "You are not a student and not smart." << endl;
    }
    string myString = "cat";
    if (myString.compare("cat") == 0)
    {
        cout << "string comparison was true" << endl;
    }
    return 0;
}