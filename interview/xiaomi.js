function Solution(S) {
    let dp = new Array(S.length).fill(0);
    for(let i = 1; i < S.length; i++){
        let candidates = [];
        for(let j = 0; j < i; j++){
            if (S[j] + j >= i){
                candidates.push(dp[j] + 1);
            }
        }
        dp[i] = candidates.length ? Math.min(...candidates) : Number.POSITIVE_INFINITY;
    }
    return dp[S.length-1];
}

const test = [2];
console.log(Solution(test));