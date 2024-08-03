//N queen problem
#include <stdio.h>
#include <stdbool.h>
int result[100][100];
bool isSafe(int n, int r, int c){
	//checking the previous rows same cell is having queen or not
	for (int i = r-1; i>=0; i--)
		if (result[i][c]) 
			return false;
	//chekcing the left side up diagonal cells are having queen or not
	for (int i = r-1, j=c-1; i>=0 && j>=0;i--, j--)
		if (result[i][j])
			return false;
	//chekcing the right side up diagonal cells are having queen or not			
	for(int i = r-1, j = c+1; i>=0 && j< n; i--, j++)
		if ( result[i][j])
			return false;
	return true;
}
bool nQueen(int n, int r){
	if ( r == n) return true;
	for (int c = 0; c<n; c++){
		if (isSafe(n, r,c)){
			result[r][c] = 1;
			if (nQueen(n, r+1)) return true;
			result[r][c] = 0;
		}
	}
	return false;
}
int main(){
	int n;
	scanf("%d", &n);
	if (nQueen(n,0)){
		for (int r=0; r<n; r++){
			for (int c = 0; c<n; c++)
				printf("%3d", result[r][c]);
			printf("\n");
		}
	}
	else
		printf("Invalid");
	return 0;
}