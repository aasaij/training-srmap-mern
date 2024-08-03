//Generating adjacency matrix
#include <bits/stdc++.h>
using namespace std;
int main(){
	int v, e;
	cin >> v >> e;
	int arr[v+1][v+1] = {0};
	//getting edges of the graph
	for (int i = 1; i<=e; i++){
		int v1, v2;
		cin >> v1 >> v2;  //1, 3
		arr[v1][v2] = arr[v2][v1] = 1;
	}
	//printing Adjacency matrix
	for (int i = 1; i<=v; i++){
		for (int j = 1; j<=v; j++)
			cout << arr[i][j] << " ";
		cout<<endl;
	}	
	return 0;
}