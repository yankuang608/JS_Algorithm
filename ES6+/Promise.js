Promise.all = function(...promises){
    let resArr = new Array(promises.length); count = 0;
    return new Promise((resolve,reject) => {
        promises.forEach((p,index) => p.then(res => {
            count++; resArr[index] = res;
            if(count === promises.length){
                resolve(resArr);
            }
        }, err => {
            reject(err);
        }));
    })
}