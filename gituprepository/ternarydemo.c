//Program to check whether the given value is odd or even using ternary operator
#include <stdio.h>

int main(){
    int x;
    scanf("%d", &x);
    x % 2 == 0 ? printf("Even"):printf("Odd");
    return 0;
}
