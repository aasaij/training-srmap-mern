#include <stdio.h>

//Bit fields
struct flag{
	int age;
	int x : 5;//   0 0 0 0     0 0 0   0 0
	int y : 3;//   1 0 1 0     1 0 0   1 1
	int z : 2; //  0 1 1 0
};

int main(){
	struct flag f = {10, 12, 7};
	printf("%d", sizeof(f));
//	printf("%d %d %d", f.x, f.y, f.z);
	return 0;
}