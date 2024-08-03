//Program to find second largest from a list of integers
#include <stdio.h>
#include <limits.h>
int main(){
	int max, smax=INT_MIN, size, flag = 0;
	scanf("%d", &size);
	if (size >= 2){
		scanf("%d", &max);
		for (int i= 2; i<=size; i++){
			int x;
			scanf("%d", &x);
			if (max < x){
				smax =max;
				max = x;
				flag = 1;
			}
			else if (smax < x && max!=x){	
				smax = x;
				flag = 1;
			}		
		}
		printf("%d", flag?smax:max);
	}
	else
		printf("Invalid size");
	return 0;
}