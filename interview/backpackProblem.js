/**
 * 0 1背包问题的动态规划
 * 问题描述：假设山洞中有 a b c d e 共 5 件宝物，它们的价值分别为 V[6,3,5,4,6]
 * 它们的重量分别为W[2,2,6,5,4]. 现在背包的大小为 10， 问最多能带走价值为多少的宝物
 * 状态方程为 dp[i][] = max( dp[i-1][j], dp[i-1][j-w[i]] + v[i])
 * dp[i][j] 表示在只有前 i 个宝物选择的情况，且背包大小为 j 的情况下最多带走价值为多少的礼物
 * @param {Array} w
 * @param {Array} v
 * @param {Number} volumn
*/
function binaryBackpack(w,v,volumn){
    if (!Array.isArray(w) || !Array.isArray(v) || w.length !== v.length){
        throw new Error('Wrong Input')
    }
    let dp = new Array(w.length + 1).fill(0).map(_ => new Array(volumn + 1).fill(0));
    let choice = new Array(w.length + 1).fill(0).map(_ => new Array(volumn + 1).fill(0));
    for(let i = 1; i <= w.length; i++){
        for(let j = 1; j <= volumn; j++){
            dp[i][j] = dp[i-1][j];
            if(j >= w[i-1]){ // 背包空间大于宝物重量
                const takenValue = dp[i-1][j - w[i-1]] + v[i-1];
                if (takenValue > dp[i][j]){
                    dp[i][j] = takenValue;
                    choice[i][j] = 1;
                }
            }
        }
    }
    // 逆向找出选择了那几个宝物
    let i = w.length, j = volumn, res = [];
    while( i > 0 && j> 0){
        if(choice[i][j]){
            res.push(v[i-1]);
            j = j - w[i-1];
        }
        i = i - 1;
    }
    return [dp[w.length][volumn],res];
}
const w = [2,2,6,5,4], v = [6,3,5,4,6];

const [totalValue,res] = binaryBackpack(w,v,10)
console.log(totalValue);
console.log(res);
/**
 * 完全背包问题，将题设中的每种宝物只有一种变为无数种
*/

