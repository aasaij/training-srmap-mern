//Graph traversal using DFS - iterative method
#include <bits/stdc++.h>
using namespace std;
void depthFirstSearch(vector<int> adjList[], int v, int source){
	vector<bool> visited(v+1,false);
	stack<int> st;
	visited[source] = true;
	st.push(source);
	cout << source << " ";
	while (!st.empty()){
		int top = st.top();
		for (auto vertex: adjList[top])	{
			if (!visited[vertex]){
				st.push(vertex);
				visited[vertex] = true;
				cout << vertex << " ";
				break;
			}
		}
		if (st.top() == top)
			st.pop();
	}
}
int main(){
	int v, e, source;
	cin >> v >> e;
	vector<int> adjList[v+1];
	for (int i = 1; i<=e; i++){
		int v1, v2;
		cin >> v1 >> v2;
		adjList[v1].push_back(v2);
		adjList[v2].push_back(v1);
	}
	cin >> source;
	depthFirstSearch(adjList, v, source);
	return 0;
}