#include <stdio.h>

int main(){
	for (int i = 1, j =10; j>=5, i<=10;i++, j--)
		printf("%d %d\n", i, j);
	return 0;
}