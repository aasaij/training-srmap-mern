#include <bits/stdc++.h>

using namespace std;

//https://bit.ly/EE-220624

int main(){
    int price[] = { 1, 5, 8, 9};
    int len;
    cin >> len;
    int dp[len+1];
    dp[0] = 0;
    dp[1] = price[0];
    for (int i = 2; i<=len; i++){
        dp[i] = 0;
        for (int j = 1; j<=i; j++){
            dp[i] = max(dp[i], price[j-1]+dp[i-j]);
        }
    }
    cout << dp[len];
    return 0;
}