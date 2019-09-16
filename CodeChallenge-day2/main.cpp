#include <iostream>
#include <vector>
#include <string>
#include "solution.h"

using namespace std;

int main()
{

    vector<string> msg {"Hello", "C++", "World", "from", "VS Code!"};

    Solution* solution = new Solution();
    for (string& word : msg)
    {
      solution->print(word);
    }
    cout << endl;
}
