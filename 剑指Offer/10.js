/**
 * 求斐波那契数列，分递归和循环两种方法
*/

function fibonacci(n){
    if (n <= 0) { return 0; }
    if (n === 1) { return 1; }
    return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacci2(n){
    if (n === 0 || n === 1) { return n; }
    let p = 0, q = 1, temp;
    for (let i = 0; i < n - 1; i++){
        temp = q;
        q = p + q;
        p = temp;
    }
    return q; 
}

console.time("loop");
console.log(fibonacci2(100));
console.timeEnd("loop");