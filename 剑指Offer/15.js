/**
 * 求一个整数转化为二进制后 1 的个数，尽量用位运算，效率高于普通算数运算
 * @description 方法一，用最右边数为1的 flag 与原数做与运算，判断结果是否为1，再左移flag中1的位置 
 * @param {Number} number
*/
function onesInBinary(number){
    let flag = 1, count = 0;
    while (flag){
        count += flag & number ? 1 : 0;
        flag = flag << 1;
    }
    return count;
}

/**
 * 方法二，用原数 number 和 number 减 1 后得到的 minusOne 做与运算可以将 number 中最右边的 1 变为 0
 * @param {Number} number
*/
function onesInBinary2(number){
    // write code here
    let count = 0;
    while (number){
        number = number & (number - 1);
        count++;
    }
    return count;
}

/**
 * 拓展 一条语句判断某个数是否为 2 正整数次方
 * @param {Number} number
*/
function twoPower(number){
    if (!number) {return false} //特殊边界如果为0，返回false;
    return (number & (number - 1)) === 0;
}
console.log(twoPower(-1));