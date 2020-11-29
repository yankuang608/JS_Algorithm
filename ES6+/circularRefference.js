const { type } = require("os");

function isCircular(root){
    let stack = [];
    stack.push(root);
    while(stack.length){
        const cur = stack.pop();
        if(typeof cur === 'object'){
            const keys = Object.keys(cur);
            for(let i=0; i<keys.length; i++){
                if(stack.includes(cur[keys[i]])){
                    return true;
                }
                stack.push(cur[keys[i]]);
            }
        }
    }
    return false;
}

let a = {};
a.b = {};
a.b.c = a;

console.log(a);
console.log(isCircular(a));