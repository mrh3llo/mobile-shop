#include <iostream>
#include <unistd.h>

using namespace std;

void success(bool status)
{
    status == 1 ? cout << "success!\n" : cout << "fail!\n";
}

int main() 
{

    if(system("git status") != 0)
    {
        success(0);
        system("pause");
    }
    else
    {
        success(1);
        system("git status");
        sleep(1);

        if(system("git status && git add .") != 0)
        {
            success(0);
            system("pause");
        }
        else
        {
            success(1);
            system("git status && git commit -m 'update'");
            sleep(1);

            success(1);
            system("git status && git push -u origin main");
        }
    }

    cout << "PUSH SUCCESS!!!";

    return 0;
}