/**
 * 在长度为n的数组中，所有数组都在0~n-1 的范围内，找出数组中任一重复的数,不存在返回null
 * @description 方法一用哈希表时间复杂度为O(n),空间复杂度为O(n)
 * @param {Array} arr
*/
function findRepeat(arr){
    if (!arr.length) { return undefined; }
    let set = new Set();
    for (let i = 0; i < arr.length; i++){
        let item = arr[i];
        if (set.has(item)){ 
            return item; 
        } else{
            set.add(item);
        }
    }
    return null;
}

/**
 * 方法二依据数组为 0 ~ n-1 的特性，从 i=0 开始遍历数组, 判断 arr[i] 是否和 i 相等, 如果不相等
 * 交换下标为 arr[i] 和 i 的两个元素，直到 arr[i] 和 i 相等。 如果在遍历过程中 arr[i] 和下标为 arr[i] 的两个数如果相等，则找到了数组中重复的数
 * @param {[Object Array]} arr
*/
function findRepeatMethod2(arr){
    if (!arr.length) { return undefined; }
    let item, temp;
    for (let i = 0; i < arr.length; i++){
        item = arr[i];
        if (i === item){ continue; }
        if (item === arr[item]) { return item; }
        while ( i !== item){
            temp = arr[item];
            arr[item] = arr[i];
            arr[i] = temp;
            item = arr[i]; 
        }
    }
    return undefined;
}

const test = [1,2,3,4,0,3,2];
console.log(findRepeatMethod2(test));