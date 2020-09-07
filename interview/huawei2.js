String.prototype.equalsIgnoreCase = function(str){
    if(typeof str !== 'string'){
        throw new Error('Input must be string');
    }
    return this.length === str.length && this.toLowerCase() === str.toLowerCase();
}

/**
 * 将字符串转化为 word 数组，并将',' '!' '.' 全部替换成 '.'
 * @param {string} str 
 * @return {string[]} 
*/
function strSplit(str){
    let res = [], word = []; 
    const normalSignals = ['!',',','.'];
    const charRegex = /^[a-zA-Z0-9]+$/;
    const addWordIntoRes = () => {
        if(word.length){
            res.push(word.join(''));
            word = [];
        }
    };
    for (let char of str){
        if (charRegex.test(char)){
            word.push(char);
        } else{
            switch (char){
                case '?':               // 问号
                    addWordIntoRes();
                    res.push('?');
                    break;
                case ' ':               // 空格
                    addWordIntoRes();
                    break;
                default:                // 其他三种符号统一加入'.'
                    addWordIntoRes();
                    res.push('.');
            }

        }
    }
    addWordIntoRes();   //以单词结尾并后面没有符号的时候，将最后一个 word 加入
    return res;
}



/**
 * 计算目标字符数组与输出目标数组之间的最小距离
 * @param {string[]} output —输出字符数组
 * @param {target[]} target -目标字符数组
 * @return {number}
*/
function wordDistance(output,target){
    const outputLen = output.length + 1, targetLen = target.length + 1;
    let dp = new Array(outputLen).fill(0).map(_ => new Array(targetLen).fill(0));
    for(let i = 1; i < outputLen; i++){
        for(let j = 1; j < targetLen; j++){
            if (output[i-1].equalsIgnoreCase(target[j-1])){
                dp[i][j] = dp[i-1][j-1];    // output[i-1] 和 target[j-1]相同，不用做任何操作
            } else{
                dp[i][j] = Math.min(...[dp[i][j-1]+1,dp[i-1][j]+1,dp[i-1][j-1]+2]);
            }
        }
    }
    console.log(dp);
    return dp[outputLen-1][targetLen-1];
}

function verify(outputStr,targetStr){
    const outputArr = strSplit(outputStr);
    const targetArr = strSplit(targetStr);
    const distance = wordDistance(outputArr,targetArr);
    return [distance,targetArr.length];
}

console.log(verify('This is a   bOok!!','This is a book.'))