//input
//education@15155
//output
//enutaciod@15155
#include <stdio.h>
#include <ctype.h>
#include <stdbool.h>
bool isVowel(char ch){
	ch = tolower(ch);
	return (ch =='a' || ch =='e' ||ch =='i' ||ch =='o' ||ch =='u');
}
bool isConsonant(char ch){
	return isalpha(ch) && !isVowel(ch);
}
void swap(char *x,  char *y){
	*x = (*x+*y) - (*y = *x);
}
int main(){
	char str[100];
	int len;
	scanf("%s%n", str, &len);
	for (int i=0, j =len-1; i<j;i++, j--){
		while(!isConsonant(str[i])&&i<j)
			i++;
		while(!isConsonant(str[j])&&j>i)
			j--;
		swap(str+i, str+j);			
	}
	puts(str);
	return 0;
}




