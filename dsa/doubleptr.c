#include <stdio.h>
#include<stdlib.h>
int main(){
	int r = 5, c = 5
	int **arr;
	//row dimention
	arr[r][c];
	arr =(int **) malloc(sizeof(int*)*r);
	for (int i = 0; i<r; i++)
		arr[i] = (int*)malloc(sizeof(int)*c)
	
	free(arr);
		
	return 0;
}