const { type } = require("os");

function isCircular(root){
    let path = [root];
    const _isCircular = (node) => {
        if(node && typeof node === 'object'){
            const keys = Object.keys(node);
            for(let i=0; i<keys.length; i++){
                if(path.includes(node[keys[i]])){
                    return true;
                }else{
                    path.push(node[keys[i]]);
                    _isCircular(node[keys[i]]);
                    path.pop();
                }
            }
        } 
    }
    _isCircular(root);
    
}

let a = {};
a.b = {};
a.b.c = a;

console.log(a);
console.log(isCircular(a));