/**
 * 大整数相乘
 * @param {Number} m
 * @param {Number} n
*/
function bigIntMult(m,n){
    const mLen = m.length, nLen = n.length;
    let res = new Array(mLen + nLen).fill(0);
    for (let i = mLen - 1; i >= 0; i--){
        for (let j = nLen - 1; j >= 0; j--){
            const temp = res[i + j + 1] + ~~m[i] * ~~n[j];
            res[i + j + 1] = temp % 10;
            res[i + j] += Math.floor(temp / 10);  
        }
    }
    const candidate = res.join('').replace(/^0+/,'');
    return candidate ? candidate : '0'; //空字符串表示结果为 0     
}

console.log(bigIntMult('11','11'));