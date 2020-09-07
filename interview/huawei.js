function exceptionStep(m,n,pD,pR,pS){
    let paths = [];
    function exceptionStepHelper(m,n,pD,pR,pS,steps,row,col){
        if(row + 1 === m && col + 1 === n){
            paths.push(steps);
            return;
        }
        if(row < m && col < n){
            if (pD[row][col] !== 0){
                const exceptStep = 1/pD[row][col];
                exceptionStepHelper(m,n,pD,pR,pS,steps + exceptStep,row+1,col);
            }
            if (pR[row][col] !== 0){
                const exceptStep = 1/pR[row][col];
                exceptionStepHelper(m,n,pD,pR,pS,steps + exceptStep,row,col+1);
            }
            
        }
    }
    exceptionStepHelper(m,n,pD,pR,pS,0,0,0);
    return calculateExceptions(paths); 
}

function calculateExceptions(arr){
    if (!arr.length){ return -1; }
    let countMap = new Map();
    arr.forEach(element => {
        if(countMap.has(element)){
            countMap.set(element,countMap.get(element) + 1);
        }else{
            countMap.set(element,1);
        }
    });

    console.log(countMap);
    let res = 0;
    for( let [key,value] of countMap){
        res += key * value;
    }
    return res/arr.length;

}

const pD = [[0.0,0.5],[0,0.5]], pR = [[0.0,0],[0.5,0.5]], pS = [[1.0,0.5],[0.5,0]];


console.log(exceptionStep(2,2,pD,pR,pS));

let a = b = {name:'james'};
b.name = 'le';
console.log(a);