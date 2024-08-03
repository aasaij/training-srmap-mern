#include <stdio.h>
#include <stdlib.h>
int compare (const void* x, const void* y){
	return *(int*)x - *(int*)y;
}

int main(){
	int arr[5] = {10,20,30,40,50};
	int key = 300;
	if (bsearch(&key, arr, 5,sizeof(int), compare))
		printf("Found");
	else
		printf("Not  Found!");
	return 0;
}