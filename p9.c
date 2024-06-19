#include <stdio.h>

int main(){
	int arr[] = {110,20,30405,6,7}, *ptr;
	ptr = arr+3;
	printf("%d", ptr[-2]);
	return 0;
}