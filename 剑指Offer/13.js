/**
 * 地上有一个 m * n 的方格，有一个机器人从 (0,0) 出发，机器人不能到达横纵坐标各位之和大于 k 的格子，
 * 问机器人一共可以到达多少个格子
*/
function movingCount(k,m,n){
    let visited = new Array(m).fill(0).map( _ => new Array(n).fill(false));
    return robotAccessHelper(visited,k,0,0,m,n);
}

const robotAccessHelper = function(visited,k,row,col,m,n){
    if (    row >= 0 && row < m && col >= 0 && col < n  //边界判定
         && !visited[row][col] //未被访问
         && digitSum(row) + digitSum(col) <= k //横纵坐标各位之和小于等于 k
        ){
            visited[row][col] = true;
            return 1 + robotAccessSquareHelper(visited,k,row+1,col,m,n) 
                     + robotAccessSquareHelper(visited,k,row,col+1,m,n)
                     + robotAccessSquareHelper(visited,k,row-1,col,m,n)
                     + robotAccessSquareHelper(visited,k,row,col-1,m,n);
    }
    return 0;
}

const digitSum = function(n){
    const str = n.toString(10);
    return [...str].reduce((acc,item) => {return (acc + parseInt(item))},0);
}

console.log(robotAccessSquare(1,1,2));
