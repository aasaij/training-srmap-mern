#include <stdio.h>
//Finding in all m bits binary numbers for which sum of 1's should be greater than n
int count(int m, int n, int cnt){
	//base case
	if (m==0 && cnt >= n) 
		return 1;
	//checking the sum (sum of cnt and remaining digits) < sum of 1's
	//if so.. solution does not exist
	if (cnt+m<n) return 0;
	//calling recursively for 0 and 1
	return count(m-1, n, cnt) + count(m-1, n, cnt+1);
}
int main(){
	int m, n;
	scanf("%d %d", &m, &n);
	printf("%d", count(m, n, 0));
	return 0;
}

Attendance : https://bit.ly/TT-240624
