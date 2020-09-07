/**
 * 如果参数数组中含有不为 promise 的
 * @param {array} promiseArr 
 */
Promise.myAll = function(promiseArr){
    let res = [], count = promiseArr.length;
    return new Promise((resolve,reject) => {
        promiseArr.forEach(promise => {
            if(!(promise instanceof Promise)){
                res.push(promise);
                count--;
            }else{
                promise.then(resolvedValue => {
                    res.push(resolvedValue);
                    count--;
                  	console.log(count);
                    if(count === 0){ resolve(res); }
                },rejectedValue => {
                    reject(rejectedValue);
                });
            }
        })
    });
}

