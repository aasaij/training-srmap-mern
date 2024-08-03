#include <stdio.h>
#include <stdlib.h>
//#define min(x,y) x<y?x:y
int min(int x, int y){
	return x < y ? x : y;
}

int minPathSum(int **cost, int m, int n) {
	int i, j,sum=0;
	int t[m][n];
	if(m==0) return 0;
	for(i = 0; i < n; i++) {
		t[0][i] = sum + cost[0][i]; 
		sum = t[0][i];
	}
	sum = 0;
	for(i = 0; i < m; i++) {
		t[i][0] = sum + cost[i][0];
		sum = t[i][0];
	}
	for( i = 1; i < m; i++)
		for(j = 1; j < n; j++)
			t[i][j] = cost[i][j] + min(t[i-1][j], t[i][j-1]);
return t[m-1][n-1];
}
int printMatrix(int **arr, int m, int n){
	for (int r = 0; r<m; r++){
		for (int c = 0; c<n; c++)
			printf("%3d", arr[r][c]);
		printf("\n");
	}
}
int main(){
	int m, n, **arr;
	scanf("%d %d", &m, &n);
	arr = (int**)malloc(sizeof(*arr) * m);
	for (int r = 0, cnt=1; r<m; r++){
		arr[r] = (int*)malloc(sizeof(int)*n);
		for (int c = 0; c< n; c++, cnt++)
			arr[r][c]= cnt; 
	}
	printf("%d", minPathSum(arr, m,n));
	return 0;
}
