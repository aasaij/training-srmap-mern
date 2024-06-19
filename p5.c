#include <stdio.h>

int main(){
	static int y = 10;
	int x = y++;
//	static int y = x++;
	printf("%d %d", x, y);
	
	return 0;
}