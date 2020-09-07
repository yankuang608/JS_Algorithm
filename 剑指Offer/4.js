/**
 * 二位数组查找，给定一个二维数组满足每一行从左到右递增，每一列从上到下递增,
 * 要求输入一个整数，判断该整数是否在二维数组内，如果存在返回 true，不存在则返回 false
 * @param {Array} arr
 * @param {Number} k
*/
function matrixSearch(arr, k){
    if ( !arr.length || !arr[0].length ){ return undefined; }
    const m = arr.length, n = arr[0].length;
    let startNode = [m-1, 0];
    while ( startNode[0] >= 0 && startNode[1] <= n-1){
        if ( arr[startNode[0]][startNode[1]] === k){ return true; }
        if ( arr[startNode[0]][startNode[1]] < k){ 
            startNode[1]++;
        } else{
            startNode[0]--;
        }
        
    }
    return false;
}

const test = [
                [
                    [1,2,3,4],
                    [2,3,5,6],
                    [5,7,8,9]
                ],
                [
                    [1]
                ]
             ];
console.log(matrixSearch(test[1],0));