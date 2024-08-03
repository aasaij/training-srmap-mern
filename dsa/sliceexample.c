#include <stdio.h>
#include <stdlib.h>
char* slice(const char str[], int startIndex, int endIndex){
	char *result = (char*)malloc((endIndex - startIndex + 1)*sizeof(char) );
	int i=0;
	for (int j=startIndex; j<endIndex && str[j];j++, i++)
		result[i] = str[j];
	result[i] = '\0';
	return result;
}
//https://bit.ly/CC-210624

int main(){
	char str[100];
	int start, end;
	scanf("%[^\n]s", &str[0]);
	scanf("%d-%d", &start, &end); // 10-15
	printf("%s", slice(str,start,end)); //Aasai
	return 0;
}