function DFS(needle,node,stack=[]){
    Object.keys(node).map(key => {
        if(key === needle){
            stack.push();
            return stack;
        }
        if(typeof node[key] === 'object' && node[key]){
            DFS(needle,node[key],stack);
        }
    })
    return null;
}

function BFS(needle,node){
    let queue = [];
    queue.push(node);
    while(queue.length){
        const n = queue.shift();
        if( typeof n === 'object' && n){
            Object.keys(n).forEach(key => {
                if(key === needle){
                    return n[key];
                }
                queue.push(node[key]);
            });
        }
    }
    return null;
}