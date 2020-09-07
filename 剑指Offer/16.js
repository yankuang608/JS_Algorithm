/**
 * 求一个数的整数次方
 * @param {Number} base
 * @param {Number} exponent
*/
function Power(base, exponent)
{
    if ( base === 0 && exponent <= 0){
        throw new Error('底数为0时，指数只能为正整数');
    }
    if ( exponent === 0) { return 1; } //指数为0时，返回1
    let sign = exponent > 0, res = base;
    exponent = Math.abs(exponent);
    const code = exponent.toString(2).split('');
    code.shift();
    code.forEach(element => {
        res *= res;
        if (element === '1'){ res *= base; }
    });
    return sign ? res : 1/res;
}
module.exports = {
    Power : Power
};