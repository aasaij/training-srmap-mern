#include <stdio.h>
typedef struct Node {
	int item; // 4
	short int gender; // 2
	struct Node *nxt; // 8
}node;

int main(){
	printf("%lu", sizeof(node));
	return 0;
}

https://bit.ly/YY-200624
