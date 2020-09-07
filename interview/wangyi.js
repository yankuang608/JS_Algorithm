
function once(func){
    if (typeof func !== 'function'){
        throw new Error('Wrong Input')
    }
    let funcSets = [];
    
    return function(){
        let args = [...arguments];
        if (!funcSets.length){
            let res = func.apply(this,args);
            funcSets.push(res);
            return res;
        } else{
            return funcSets[0];
        }
    }
}