/**
 * 大整数相加
 * @param {String} m
 * @param {String} n
 */
function bigIntAdd(m,n){
    m = [...m]; n = [...n];
    let carry = false, res = [];
    while(carry || m.length || n.length){
        const temp = carry + ~~m.pop() + ~~n.pop();
        res.unshift(temp % 10);
        carry = temp >= 10;
    }
    return res.join('');
}

console.log(bigIntAdd('456487975646578946546546547','23'));