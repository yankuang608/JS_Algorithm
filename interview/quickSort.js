/**
 * 手写快速排序
 * @param {Array} arr
*/
function quickSort(arr){
    quickSortHelper(arr,0,arr.length - 1);
}

function quickSortHelper(arr,left,right){
    if (left < right){
        const pivotIndex = Partition(arr,left,right);
        quickSortHelper(arr,left,pivotIndex-1);
        quickSortHelper(arr,pivotIndex+1,right);
    }
}

function Partition(arr,start,end){
    if (start < end){
        const pivot = arr[start];
        let i = start, j = end;
        while(i < j){
            while (i < j && arr[j] >= pivot) { j--; }
            if (i < j) { arr[i++] = arr[j]; }
            while (i < j && arr[i] <= pivot) { i++; }
            if (i < j) { arr[j--] = arr[i]; }
        }
        arr[i] = pivot;
        return i;
    }
}

let test = [2];
quickSort(test);
console.log(test);