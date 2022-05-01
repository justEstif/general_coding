#include <iostream>  // print out and get info from user
#include <string>    // can use string
using namespace std; // standard name space

int main()
{
    string name;
    cout << "Enter your name: ";
    cin >> name;
    cout << "Hello " << name << endl;

    int num1, num2;
    cout << "Enter first num: ";
    cin >> num1;
    cout << "Enter second num: ";
    cin >> num2;
    cout << "Answer: " << num1 + num2 << endl;

    return 0;
}