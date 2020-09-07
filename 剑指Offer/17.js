/**
 * 输入一个正整数 n ，打印从 1 到 n 位的最大正整数
 * @param {Number} n 
*/
function printNdigits(n){
    if (n <= 0) {throw new Error('输入小于等于零');}
    let res = '0';
    for (let i = 1; i < Math.pow(10,n); i++){
        res = strAdd(res,'1');
        console.log(res);
    }
}

const strAdd = function(m,n){
    m = [...m]; n = [...n];
    let carry = false;
    let res = [];
    while (m.length || n.length || carry){
        const temp = ~~m.pop() + ~~n.pop() + carry;
        res.unshift(temp % 10);
        carry = temp >= 10;
    }
    return res.join('').replace(/^0+/,'');
}

printNdigits(50);