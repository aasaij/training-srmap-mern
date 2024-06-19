#include <stdio.h>

int main(){
	int x = 0, y;
	y = ++x || ++x;
	printf("%d %d", x, y);
	return 0;
}