#include <iostream>>
#include <string>
#include <vector>
using namespace std;

class Book
{
private:
    string title;
    string author;

public:
    Book(string title, string author) // constructor bc same name as class
    {
        this->title = title;
        this->author = author;
    }
    string getTitle()
    {
        return this->title;
    }
    void setTitle(string title)
    {
        this->title = title;
    }
    string getAuthor()
    {
        return this->author;
    }
    void setAuthor(string author)
    {
        this->author = author;
    }
    void readBook()
    {
        cout << "Reading " + this->title + " by " + this->author;
    }
};

int main()
{
    Book book1("Harry Potter", "JK Rowling");

    book1.readBook();
    cout << "" << endl;
    cout << book1.getTitle() << endl;
    return 0;
}