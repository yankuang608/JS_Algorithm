function Solution(a,b){
    const aPrecision = a.indexOf('.') !== -1 ? 
            (a.length - a.indexOf('.') - 1) : 0;
    const bPrecision = b.indexOf('.') !== -1 ? 
            (b.length - b.indexOf('.') - 1) : 0;
    const [num,digit] = (+a * +b).toString().split('.');
    let res = '';
    for(let i = 0; i < aPrecision + bPrecision; i++){
        res += digit && digit[i] ? digit[i] : '0';
    }
    res = res.length ? '.' + res : '';
    return num + res;
}



console.log(Solution('0.005','0.001'));

