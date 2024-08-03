#include <stdio.h>


int main(){
	int x = 10, *ptr;
	ptr = &x;
	x++;
	*ptr++ = 100;
	printf("%d %d", x, *ptr);
	
	return 0;
}