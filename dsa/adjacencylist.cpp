//Generating adjacensy list
#include <bits/stdc++.h>
using namespace std;
int main(){
	int v, e;
	cin >> v >> e;
	vector<int> adjList[v+1];	
	//getting edges of the graph
	for (int i = 1; i<=e; i++){
		int v1, v2;
		cin >> v1 >> v2;  //1, 3
		adjList[v1].push_back(v2);
		adjList[v2].push_back(v1);
	}	
	//printing the adjacency list
	for (int i = 1; i<=v; i++){
		cout << "Adjacent vertices of " << i << " : ";
		for (auto j : adjList[i]){
			cout  << j << " ";
		}
		cout << endl;
	}
	
	return 0;
}