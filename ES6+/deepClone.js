function deepClone(obj){
    if(typeof obj === 'object' && obj){
        let cloned = {};
        Object.keys(obj).forEach(key => {
            cloned[key] = deepClone(obj[key]);
        });
        return cloned;
    }else{
        return obj;
    }
}

console.log(deepClone(obj));

const cities = {
    'china':{
        'hunan':{
            'city': 'changsha'
        }
    },
    'USA':{
        'Texas':{
            'city':'dallas'
        }
    }
}

function DFS(target,path){
    const _path = path.split('.');
    const _DFS = (obj,_path,depth) => {
        // console.log(depth,obj);
        if(depth === _path.length){ return obj;}
        if(typeof obj === 'object' && obj){
            const keys = Object.keys(obj);
            for(let i = 0; i < keys.length; i++){
                if(keys[i] === _path[depth]){
                    return _DFS(obj[keys[i]],_path,depth+1);
                }
            }
        }
    }
    return _DFS(target,_path,0);
}

const clonedCities = deepClone(cities);
console.log(clonedCities);

console.log(DFS(clonedCities,'USA.Texas.city'))