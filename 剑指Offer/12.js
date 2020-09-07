/**
 * 设计一个函数用来判断某个矩阵中是否存在一条路径等于给定的字符串，不能重复进入矩阵中的一个方块
 * @param {Array} arr 
 * @param {String} target
*/
function exitsStringPath(arr, target) {
    if (!arr.length || !arr[0].length) { throw new Error('输入数组为空'); }
    const m = arr.length, n = arr[0].length;
    let visited;
    for (let row = 0; row < m; row++) { //暴力法，尝试每个方块作为起点
        for (let col = 0; col < n; col++) {
             visited = new Array(m).fill(0).map(_ => new Array(n).fill(false)); //初始化遍历矩阵
            if (exitsPath(arr, target, m, n, row, col, visited, 0)) {
                return true;
            }
        }
    }
    return false;
}

const exitsPath = function (arr, target, m, n, row, col, visited, depth) {
    if (depth === target.length) { console.log(visited); return true; } //路径完成返回 true
    let findPath = false;
    if (0 <= row && row < m && 0 <= col && col < n //边界检查
        && !visited[row][col] //未被访问 
        && arr[row][col] === target[depth] //相等
    ) {
        visited[row][col] = true; //标记已访问
        depth++;
        findPath = exitsPath(arr, target, m, n, row + 1, col, visited, depth)
            || exitsPath(arr, target, m, n, row, col + 1, visited, depth)
            || exitsPath(arr, target, m, n, row - 1, col, visited, depth)
            || exitsPath(arr, target, m, n, row, col - 1, visited, depth);
        if (!findPath) {
            visited[row][col] = false; //没有出路，重新设置为未访问过
        }
    }
    return findPath;
}

const mtr = [
    ['a', 'b', 't', 'g'],
    ['c', 'f', 't', 's'],
    ['c', 'f', 'c', 's'],
    ['j', 'd', 'e', 'h']
]

console.log(exitsStringPath(mtr, 'acftcs'));