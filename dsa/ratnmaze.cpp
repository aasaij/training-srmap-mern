#include <bits/stdc++.h>
using namespace std;
int n;
bool isPathFound(int n, vector<vector<int>>& m, vector<vector<int>>& res, int r, int c){
	if ( r==n-1 && c == n-1){
		res[r][c] = 1;
		return true;
	}
	if (r<0|| c < 0|| r >= n || c >= n || m[r][c]==0)
		return false;
	res[r][c]=1;
	//moving down
	if (isPathFound(n, m, res, r+1, c))
		return true;	
	//moving forward
	if (isPathFound(n, m, res, r, c+1))
		return true;
	res[r][c]= 0;
	return false;
}
void printResult(vector<vector<int>> res){
	for (auto& r : res){
		for (auto& c : r)
			cout << c << " ";
		cout << endl;
	}
}

int main(){
	int n;
	cin >> n;
	vector<vector<int>> maze, result(n,vector<int>(n,0));
	//getting the input --> maze matrix
	for (int r = 0; r<n; r++){
		vector<int> row;
		for (int c = 0; c<n; c++){
			int x;
			cin >> x;
			row.push_back(x);
		}
		maze.push_back(row);
	}
	if (maze[0][0]==0 || maze[n-1][n-1]==0)
		cout << "No path found!";
	else{
		if (isPathFound(n, maze, result,0,0))
			printResult(result);
		else
			cout << "No path found!";
	}
	return 0;
}