#include <stdio.h>

int main(){
    int x=5, y,z;
    
    y = ++x;  // x = x + 1 ; y=x;
    z = --x + y--; //x=x-1; z=x+y; y=y-1
    
    return 0;
}
/*
x=5

*/
