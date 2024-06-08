//Program to demonstrate increment and decrement operators
int main(){
    int x = 7, y, z;
    y = --x;  // x = x - 1 ; y = x
    z = y-- + ++x; // x = x + 1; z = y + x; y = y - 1
    printf("%d %d %d", x, y,z);
    return 0;
}
/*
x   7       
y   7      7
z   15     

Unary  : one operator one operand
*/
