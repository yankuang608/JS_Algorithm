function count(str) {
    // write code here
    let map = new Map();
    let minDistance = Number.MAX_VALUE
    str.split('').forEach((item,i) => {
        if(map.has(item)){
            const index = map.get(item);
            minDistance = Math.min(minDistance,i-index-1);
        }
        map.set(item,i);
        console.log(map);
    });
    return minDistance === Number.MAX_VALUE ? -1 : minDistance;
}

function rotate( str ) {
    // write code here
    const time = str.split(':');
    const h = time[0] % 12, m = time[1];
    let hPointDegree = 30 * h + m / 2;    //以12为准，时钟旋转的角度
    let mPointDegree = 6 * m;    //以12为准，分钟旋转的角度
    let offset = Math.floor(Math.abs(hPointDegree - mPointDegree));
    return offset < 180 ? offset : 360 - offset;
}
let line = "15:10";
console.log(rotate(line));