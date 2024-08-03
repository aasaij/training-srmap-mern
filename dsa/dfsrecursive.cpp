//Graph traversal using DFS - recursive method
#include <bits/stdc++.h>
using namespace std;
void depthFirstSearch(vector<int> adjList[], vector<bool>& visited, int source){
	visited[source] = true;
	cout << source << " ";
	for (auto vertex : adjList[source]){
		if (!visited[vertex])
			depthFirstSearch(adjList, visited, vertex);
	}
}
int main(){
	int v, e, source;
	cin >> v >> e;
	vector<int> adjList[v+1];
	vector<bool> visited(v+1,false);
	for (int i = 1; i<=e; i++){
		int v1, v2;
		cin >> v1 >> v2;
		adjList[v1].push_back(v2);
		adjList[v2].push_back(v1);
	}
	cin >> source;
	depthFirstSearch(adjList,visited, source);
	return 0;
}