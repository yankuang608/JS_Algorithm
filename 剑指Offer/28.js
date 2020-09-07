/**
 * 给定一棵二叉树，判断该二叉树是否是对称的
*/
function isSymmetrical(pRoot){
    const mirror = Mirror(pRoot);
    return twoTreeEqual(mirror,pRoot);
}

const Mirror = function(origin){
    if( !origin ){ return null; }
    let node = new TreeNode(origin.val);
    node.left = Mirror(origin.right);
    node.right = Mirror(origin.left);
    return node;
}

const twoTreeEqual = function(mirror,root){
    if (!mirror && !root){ return true; }
    if (!mirror || !root){ return false; }
    if (mirror.val !== root.val){ return false; }
    return twoTreeEqual(mirror.left,root.left) && twoTreeEqual(mirror.right,root.right);
}

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let n1 = new TreeNode(8);
let n2 = new TreeNode(7);
let n3 = new TreeNode(8);
n1.left = n2; n1.right = n3;

/**
 * 方法一重构了一棵二叉树，为了优化空间复杂度，我们定义一种 root -> right -> left 
 * 的遍历方式与前序遍历刚好相反。如果两种遍历方式的结果相等，二叉树为对称树
 * @param {TreeNode} root
*/
function isSymmetrical2(pRoot){
    return isSymmetricalHelper(pRoot,pRoot);
}

const isSymmetricalHelper = function(root1,root2){
    if (!root1 && !root2){ return true; }
    if (!root1 || !root2){ return false; }
    if (root1.val !== root2.val){ return false; }
    return isSymmetricalHelper(root1.left,root2.right) && isSymmetricalHelper(root1.right,root2.left);
}