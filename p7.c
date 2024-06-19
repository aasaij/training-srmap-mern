#include <stdio.h>
#include <math.h>
int main(){
	int x = 10, y = 20;	
	printf("%d %d", ((x+y)+abs(x-y))/2, 
		((x+y)-abs(x-y))/2);	
	return 0;
}