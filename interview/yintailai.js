function test(n){
    const cols = 2 * (n - 1) + 1;
    let res = [];
	for(let i = 1; i <= n; i++){
		let row = "";
		for(let m = 0; m < (cols + 1)/2 - i; m++){
            row = row + " ";
		}
		for(let n = 0; n < (2 * i - 1); n++){
            row = row + i;
		}
		res.push(row);
    }
    for (let i = res.length - 2; i >= 0; i--){
        res.push(res[i]);
    }
    res.forEach(i => console.log(i));
}

test(9);