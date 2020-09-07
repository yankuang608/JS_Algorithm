/**
 * 调整数组顺序使得奇数位于偶数前面
 * @param {Array} arr 
*/
function reOrderArray(arr)
{
    if (!arr || arr.length === 1){ return arr; }
    let left = 0, right = arr.length - 1;
    while(left < right){
        if (!isOdd(arr[left]) && isOdd(arr[right])){
            const temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
            left++; right--;
            continue;
        }
        if(isOdd(arr[left])){ left++; }
        if(!isOdd(arr[right])){ right--; }
    }
    return arr;
}

const isOdd = function(n){
    return n % 2 === 1;
}

const test = [1,2,3,4,5,6];
console.log(reOrderArray(test));

module.exports = {
    reOrderArray : reOrderArray
};