Array.prototype.myreduce = function(reducer,acc) {
    let arr = this;
    if (!Array.isArray(arr) || !arr.length || typeof reducer !== 'function') {
        return [];
    }
    let initialValue = acc === undefined;
    let res = initialValue ? arr[0] : acc;
    let start = initialValue ? 1 : 0;
    for(let i = start; i < arr.length; i++){
        res = reducer(res,arr[i],i,arr);
    }
    return res;
}

let arr = [1,2,3];
const reducer = (acc,item) => acc + item;
console.log(arr.myreduce(reducer));

module.exports = {
    arr : arr
}

// Array.prototype.my_reduce = function (callback, initialValue) {
//     if (!Array.isArray(this) || !this.length || typeof callback !== 'function') {
//         return []
//     } else {
//         // 判断是否有初始值
//         let hasInitialValue = initialValue !== undefined;
//         let value = hasInitialValue ? initialValue : tihs[0];
//         for (let index = hasInitialValue ? 0 : 1; index < this.length; index++) {
//             const element = this[index];
//             value = callback(value, element, index, this)
//         }
//         return value
//     }
// }

// let arr = [1, 2, 3, 4, 5]
// let res = arr.my_reduce((pre, cur, i, arr) => {
//     console.log(pre, cur, i, arr)
//     return pre + cur
// }, 10)
// console.log(res)//25

console.log('reduce');