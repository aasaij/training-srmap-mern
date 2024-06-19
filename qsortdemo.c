#include <stdio.h>
#include <stdlib.h>
void printArray(int arr[],int size){
	int temp[size];
	int *arr2 = (int*)calloc(sizeof(int)*size);
	for (int i =0; i<size; i++)
		printf("%d ", *(arr+i));
}
int comparator(const void* x, const void* y){
	return *(int*)x - *(int*)y;
}

int main(){
	int arr[] = {56,23,4,6,7,4,67,8};
	int size = sizeof(arr) / sizeof(arr[0]);
	qsort(arr,size, sizeof(int),comparator);
	printArray(arr, size);
	return 0;
}