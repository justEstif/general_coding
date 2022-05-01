#include <iostream>
#include <string>
using namespace std;

int main(){
    // pointer = memory address
    int num = 10;
    cout << &num << endl;  // pointer of num 

    // *: to make pointer 
    int *pNum = &num;  
    cout << pNum << endl; // print memory address
    cout << *pNum << endl; // dereference = geetting value at pointer  
    return 0;
}