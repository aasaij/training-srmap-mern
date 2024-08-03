#include <stdio.h>
#include <stdlib.h>
#include <string.h>
//Bit fields
typedef struct Employee{
	int id;
	char name[30];
	double salary;
}employee;

int compare (const void* x, const void *y){
	return (*(employee*)x).salary - (*(employee*)y).salary;
}

//int compare (const void* x, const void *y){
//	return strcmp((*(employee*)x).name, (*(employee*)y).name);
//}


void printEmployee(employee e){
	printf("ID : %d\n", e.id);
	printf("Name : %s\n", e.name);
	printf("Salary : %.2lf\n", e.salary);
}

int main(){
	employee emps[3] = {{1,"Chakradhar", 500000}, 
						{2,"Ramesh", 700000
						},
						{
							3,"Rohit", 900000
						}
						};
	qsort(emps, 3, sizeof(employee), compare);
	for (int i = 0; i<3; i++)
		printEmployee(emps[i]);
	return 0;
}