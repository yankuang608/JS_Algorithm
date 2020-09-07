function circularRefference(obj){
    let initArr = [obj];
    return circularRefferenceHelper(obj,initArr);
}

function circularRefferenceHelper(obj,parents){
    for(let key in obj){
        if (typeof obj[key] === 'object'){
            if(parents.includes(obj[key])){
                return true;
            }else{
                parents.push(obj[key]);
                let res = circularRefferenceHelper(obj[key],parents);
                parents.pop();
                if (res){ return res;}
            }
        }
    }
    return false;
}


let b = {};
let c = {};
let a = {b: b, c: c};
c.b = b;

console.log(circularRefference(a));