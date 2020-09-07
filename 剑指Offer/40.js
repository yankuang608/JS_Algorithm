/**
 * 给定一个数组，找到数组中第K小的元素，输入有误则返回报错
 * @param {Array} arr 
*/
function findKSmallest(arr, k) {
    if (!arr.length) { throw new Error('输入数组为空'); }
    if (k >= arr.length) { throw new Error('K大于数组长度'); }
    let start = 0, end = arr.length - 1;
    let pivotIndex = Partition(arr, start, end);
    while (pivotIndex !== k) {
        if (k < pivotIndex) {
            end = pivotIndex - 1;
            pivotIndex = Partition(arr, start, end);
        } else {
            start = pivotIndex + 1;
            pivotIndex = Partition(arr, start, end);
        }
    }
    return arr[k];
}

/**
 * 快排中的Partition函数
 * @param {Array} arr 
 * @param {Number} left 
 * @param {Number} right 
 */
const Partition = function (arr, left, right) {
    if (left === right) { return left; }
    if (left < right) {
        const pivot = arr[left];
        let i = left, j = right;
        while (i < j) {
            while (i < j && arr[j] >= pivot) { j--; }
            if (i < j) { arr[i] = arr[j]; }
            while (i < j && arr[i] <= pivot) { i++; }
            if (i < j) { arr[j] = arr[i]; }
        }
        arr[i] = pivot;
        return i;
    }
}

/**
 * 方法二，利用最小堆来查找第K小的数
*/
function findKSmallest2(arr,k) {
    if (!arr.length) { throw new Error('输入数组为空'); }
    if (k >= arr.length) { throw new Error('K大于数组长度'); }
    buildHeap(arr); //时间复杂度 O(n)
    let root = arr[0]; 
    for (let i = 0; i < k; i++){ //时间复杂度 O(klogn)
        swap(arr,0,arr.length - 1 - i);
        minHeapify(arr,0,arr.length - 1 - i);
    }
    return arr[0];
}

/**
 * 将一个数组构造为堆, inline操作
 * @param {Array} arr 
 */
const buildHeap = function(arr) {
    for (let i = Math.floor((arr.length - 2)/2); i >= 0; i--){
        minHeapify(arr,i,arr.length);
    }
}

const minHeapify = function (arr, i, boundary) {
    if (i < boundary) {
        const left = 2 * i + 1, right = 2 * i + 2;
        const leftChild = arr[left] === undefined ? Number.MAX_VALUE : arr[left];
        const rightChild = arr[right] === undefined ? Number.MAX_VALUE : arr[right];
        const minValue = Math.min(...[arr[i], leftChild, rightChild]);
        if (minValue === leftChild) {
            swap(arr, i, left);
            minHeapify(arr, left, boundary);
        } else if (minValue === rightChild) {
            swap(arr, i, right);
            minHeapify(arr, right, boundary);
        }
    }

}

const swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
}

console.log(findKSmallest2([],0));