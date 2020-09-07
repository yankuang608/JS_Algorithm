/**
 * 二叉树中和为某一数值的路径
*/
function FindPath(root, expectNumber){
    if(!root) {return null;}
    let res = [], path = [];
    const findPathHelper = function(node,offset){
        if (!node) { return; }
        path.push(node.val);
        if (!node.left && !node.right && offset === node.val){ res.push(path.slice()); }
        findPathHelper(node.left,offset - node.val);
        findPathHelper(node.right,offset - node.val);
        path.pop();
    }
    findPathHelper(root,expectNumber);
    return res;
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
console.log(FindPath(n1,15));

module.exports = {
    FindPath : FindPath
};