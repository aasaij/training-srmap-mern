//Graph traversal using BFS - iterative method
#include <bits/stdc++.h>
using namespace std;
void breadthFirstSearch(vector<int> adjList[], vector<bool>& visited, int source){
	queue<int> q;
	visited[source] = true;
	q.push(source);
	while (!q.empty()){
		int front = q.front();
		q.pop();
		cout << front << " ";
		for (auto vertex : adjList[front]){
			if (visited[vertex]==false){
				q.push(vertex);
				visited[vertex] = true;
			}
		}
	}	
}
https://bit.ly/JJ-260624

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
	breadthFirstSearch(adjList, visited, source);
	return 0;
}