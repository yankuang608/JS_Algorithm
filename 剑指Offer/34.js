/**
 * 二叉树中和为某一数值的路径
*/
const findPath = (root,sum) => {
    if(!root){ return; }
    const _findPath = (node,remain,path) => {
        if(!node){ return; }
        if(!node.left && !node.right && remain === node.val){
            path.push(node.val);
            return path;
        }
        path.push(node.val);
        let left = _findPath(node.left,remain-node.val,path);
        if(left){ return left; }
        let right = _findPath(node.right,remain-node.val,path);
        if(right){ return right; }
        path.pop();
        return;
    }
    return _findPath(root,sum,[]);
}

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let n1 = new TreeNode(8);
let n2 = new TreeNode(7);
let n3 = new TreeNode(9);
let n4 = new TreeNode(11);
let n5 = new TreeNode(12);
let n6 = new TreeNode(14);
let n7 = new TreeNode(17);
n1.left = n2; n1.right = n3;
n2.left = n4; n2.right = n5;
n3.left = n6; n3.right = n7;
console.log(findPath(n1,26));

module.exports = {
    FindPath : FindPath
};