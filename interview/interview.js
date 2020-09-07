/*
实现一个版本比较函数：
  function compareVersion(a,b){...}
  compare('1.1.2','1.1.1') //输出gt
  compare('1.1.2','1.1.3') // 输出lt
  compare('1.1.1','1.1.1') // 输出equal
股票买卖:给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
利用Promise和Generate实现一个类似async/await的函数
有 8 个一模一样的瓶子，其中有 7 瓶是普通的水，有一瓶是毒药。任何喝下毒药的生物都会在一星期之后死亡。现在，你只有 3 只小白鼠和一星期的时间，如何检验出哪个瓶子里有毒药？
*/
function compareVersion(a,b){
    if (typeof a !== 'string' || typeof b !== 'string'){
        throw new Error('Wrong Input');
    }
    let aArr = a.split('.');
    let bArr = b.split('.');
    while(aArr.length && bArr.length){
        const aDigit = parseInt(aArr.shift());
        const bDigit = parseInt(bArr.shift());
        if(aDigit > bDigit){
            return 'gt';
        }
        if(aDigit < bDigit){
            return 'lt';
        }
    }
    if(!aArr.length && !bArr.length){return 'equal';}
    if(aArr.length){ return 'gt';}
    if(bArr.length){ return 'lt';}
}

console.log(compareVersion('1.1','1.1.1'));

function maxProfit(prices) {
    if(!Array.isArray(prices) || prices.length <= 1){ 
        throw new Error('Wrong Input');
    }
    let profits = 0;
    for(let i = 1; i < prices.length; i++){
        if (prices[i] - prices[i-1] > 0){
            profits += prices[i] - prices[i-1];
        }
    }
    return profits;
};

function myAsync(func){
    
    return new Promise()
}

function poisionBottle(first,second,third){
    return parseInt(first + second + third);
}