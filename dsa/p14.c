#include <stdio.h>

int main(){
	double x, y, z;
	scanf("%lf %lf", &x,   &y);
	z = x + y;
	if (z == (long)z)
		printf("%ld", (long)z);
	else
		printf("%.2lf", z);
	return 0;
}