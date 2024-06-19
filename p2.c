#include <stdio.h>

int main(){
	float f = 0.26; // 4 ==> 32 bits ==> 6 bits for decimal --> Single precision
	double d = 0.26 // 8 ==> 64 bits ==> 12 bits for decimal ==> double 
	if (f==0.25)
		printf("Ramesh is handsome!");
	else
		printf("Phalgun is handsome!");
	
	return 0;
}