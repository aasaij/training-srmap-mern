#include <stdio.h>

int main(){
	char str[100];
// 	fgets(str,9,stdin);
    // scanf("%99[^[0-9]]s", str);
    scanf("%99[a-zA-Z]s", str);
    puts(str);
	return 0;
}