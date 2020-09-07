/**
 * 二分查找，给定一个排序好的数组和一个数，返回该数在数组中的索引，不存在则返回undefined
 * @param {Array} arr
 * @param {Number} k
*/
function binarySearch(arr,k){
    if (!arr.length) { return undefined; }
    let start = 0, end = arr.length - 1, mid;
    while( start <= end){
        mid = Math.floor((start + end) / 2);
        if ( k === arr[mid]){
            return mid;
        } else if ( k < arr[mid] ){ 
            end = mid - 1; 
        }else{
            start = mid + 1;
        }
    }
    return undefined;
}

/**
 * 查找翻转有序数组中的最小值
 * @param {Array} arr
 */
function findSmallestReverse(arr){
    if (!arr.length) {return undefined;}
    if (arr.length === 1) {return arr[0];}
    let left = 0, right = arr.length - 1, mid;
    if (arr[left] < arr[right]) { return arr[left]; } //数组没有翻转
    while (left + 1 < right){ //当left + 1 === right 时，left 为左数组中最大的元素，right为右数组中最小的元素
        mid = Math.floor((left + right)/2);
        if (arr[mid] > arr[left]) { left = mid; }
        if (arr[mid] < arr[right]) { right = mid; }
        if (arr[left] === arr[mid] && arr[mid] === arr[right]){ return linearSearch(arr,left,right);} //形如 [1,0,1,1,1,1,1] 的数组需要作线性搜索
    }
    return arr[right];
}

const linearSearch = function(arr,left,right){
    let minimum = arr[left];
    for (let i = left; i < right; i++){
        minimum = Math.min(minimum, arr[i]);
    }
    return minimum;
}

const test = [1,1,1,0,1,1];
console.log(findSmallestReverse(test));