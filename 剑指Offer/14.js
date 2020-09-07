/**
 * 剪绳子,给一段长度为 m 的绳子问，剪短后各段绳子乘积的最大值可能为多少
 * @param {Number} number
*/
function cutRope(number){
    if ( number === 0 ){return 0;}
    if ( number === 1 ){return 0;}
    if ( number === 2 ){return 1;}
    if ( number === 3 ){return 2;}

    let dp = new Array(number + 1);
    dp[0] = 0; dp[1] = 1; 
    dp[2] = 2; dp[3] = 3;
    let max;
    for (let i = 4; i <=number; i++){
        max = 0;
        for (let j = 1; j <= i >> 1; j++){
            max = Math.max(max, dp[i-j]*dp[j]);
        }
        dp[i] = max;
    }
    return dp[number];
}

/**
 * 剪绳子，贪婪算法，尽可能地多剪3出来，
 * 当除 3 的余数为 1 时，将最后的 1 和一个 3 合并为 4，组成 2 * 2
 * @param {Number} number 
*/
function cutRopeGreedy(number){
    if (number <= 1) {return 0;}
    if (number === 2) {return 1;}
    if (number === 3) {return 2;}

    const numberOfThree = Math.floor(number / 3);
    const remaining = number % 3;
    if ( remaining === 0) {
        return Math.pow(3,numberOfThree);
    }
    if ( remaining === 1){
        return Math.pow(3,numberOfThree - 1) * 4; 
    } 
    if ( remaining === 2) {
        return Math.pow(3,numberOfThree) * 2;
    }
}
console.log(cutRope(15));