const arr = require('./reduce.js');

function minimumReverse(arr){
    if (!arr || !arr.length){return null;}
    let left = 0, right = arr.length - 1, mid = left;
    while(arr[left] >= arr[right]){
        mid = (left + right) >> 1;
        if(left + 1 === right){
            return arr[right];
        }
        if( arr[mid] === arr[left] && arr[mid] === arr[right]){
            return findminimum(arr,left,right);
        }
        if( arr[mid] >= arr[left]){
            left = mid;
        } 
        if( arr[mid] <= arr[right]){
            right = mid;
        }
    }
    return arr[mid];
}

function findminimum(arr,left,right){
    let  min = Number.MAX_VALUE;
    for(let i = left; i <= right; i++){
        min = Math.min(arr[i],min);
    }
    return min;
}

const test = [[],[1,2,4],[3,4,5,1,2]];
const answer = [null,1,1]
console.log(test.map( i => minimumReverse(i)).every((item,i) => item === answer[i]));