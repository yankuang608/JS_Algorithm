const mergeSort = function(arr){
    if (Array.isArray(arr)){
        mergeSortHelper(arr,0,arr.length - 1);
    }
}

const mergeSortHelper = function(arr,left,right){
    if(left < right){
        console.log(1);
        const middle = (left + right) >> 1;
        mergeSortHelper(arr,left,middle);
        mergeSortHelper(arr,middle + 1,right);
        merge(arr,left,middle,right);
    }
}

const merge = function(arr,left,middle,right){
    let leftArr = arr.slice(left,middle+1);
    let rightArr = arr.slice(middle+1,right + 1);
    let startIndex = left;
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            arr[startIndex] = leftArr.shift();
        } else{
            arr[startIndex] = rightArr.shift();
        }
        startIndex++;
    }
    while(leftArr.length){
        arr[startIndex] = leftArr.shift();
        startIndex++;
    }
    while(rightArr.length){
        arr[startIndex] = rightArr.shift();
        startIndex++;
    }
}

let test = [];
mergeSort(test);
console.log(test);
