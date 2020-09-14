/**
 * Generator 是一类可以在返回之后暂停的函数，也就是可以在执行过程中跳出当前函数执行上下文，
 * 返回上一级执行上下文的这么一类函数
*/
function* createGenerator(){
    for(let i = 0; i < 2; i++){
        yield i;
    }
    return 1;
}

// 直接调用 createGenerator() 不会运行任何代码，而是生成一个 Generator 对象
let generator = createGenerator();

// 调用 Generator() 的 next() 方法会运行函数，直到遇到 yield 暂停，并将 yied 后的值返回
console.log(generator.next());  // 输出{ value: 0, done: false}

// 再次调用 next() 会从上次暂停处开始执行
console.log(generator.next());  // 输出{ value: 1, done: false}

// 如果使用 for...of 循环来遍历 Generator 会自动调用 .next 并将值赋给 value
generator = createGenerator();
for(const value of generator){
    console.log(value);
}

function *createAsyncGenerator(){
    while(true){
        yield setTimeout(() => console.log('yield'),5000);
    }
}

const g = createAsyncGenerator();
console.log(g.next());


// async function asyncFunction() {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("i am resolved!"), 1000)
//     })
//         .then((value) => console.log('then'))
        
//     const result = await promise; 
//     // wait till the promise resolves (*)
//     console.log(result); // "i am resolved!"
//   }
// asyncFunction();