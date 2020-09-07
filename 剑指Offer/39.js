/**
 * 给定一个数组，找出数组中出现次数超过一半的数,不存在则返回undefined
 * @param {[Object Array]} arr
*/
function moreThanHalf(arr) {
    if (!arr.length) { console.log('empty array'); return undefined; }
    let start = 0; end = arr.length - 1;
    let pivotIndex = Partition(arr,start,end);
    const target = Math.floor(arr.length / 2);
    while (pivotIndex !== target){
        if (pivotIndex < target){
            start = pivotIndex + 1;
            pivotIndex = Partition(arr,start,end);
        }else{
            end = pivotIndex - 1;
            pivotIndex = Partition(arr,start,end);
        }
    }
    const candidate = arr[target];
    if (exitsMoreThanHalf(arr,candidate)){
        return candidate;
    }else{
        return undefined;
    }
}


/**
 * 快排中的Partition函数，以left为pivot，将小于它的数放在左边，大于它的数放在右边
 * @param {[Object Array]} arr
 * @param {Number} left
 * @param {Number} right
 */
const Partition = function (arr, left, right) {
    if (left === right) { return left; }
    if (left < right) {
        let i = left, j = right;
        let pivot = arr[left];
        while (i < j) {
            while (i < j && arr[j] >= pivot) { j--; }
            if (i < j) { arr[i++] = arr[j]; }
            while (i < j && arr[i] <= pivot) { i++; }
            if (i < j) { arr[j--] = arr[i]; }
        }
        arr[i] = pivot;
        return i;
    }
}

/**
 * 检验数组中莫个数是否出现超过一半
 * @param {Array} arr
 * @param {Number} num
 */
const exitsMoreThanHalf = function(arr,num){
    const count = arr.reduce((acc,item) => {
        return acc + (item === num ? 1 : 0);
    },0);
    const bottom = Math.floor(arr.length / 2);
    return count > bottom;
}

const test = [
    [],
    [1,3],
    [3,3,3,4],
    [1,2,3,2,2]
]

console.log(test.map( i => moreThanHalf(i)));