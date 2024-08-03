#include <stdio.h>


int main(){
	int arr[] = {10, 20, 30};
	int *ptr;
	ptr = arr;
	*++ptr = 100;
	printf("%d %d", *arr, *ptr);
	
	return 0;
}