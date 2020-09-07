const {constructBinaryTree} = require('./7.js');

/**
 * 给定一个二叉树和它其中的一个节点，找出该节点在中序遍历中的下一个节点，不存在则返回 null
 * @param {TreeNode} root
 * @param {TreeNode} node
*/
function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function nextNodeInInOrder(root,target){
    if (!root || !target) { throw new Error('根节点或目标节点为空');}
    addParent(root);
    if (target.right){ //右子树不为空，下一个节点为右子树中最左边的节点
        return mostLeftNode(target.right);
    } else if(!target.parent){ //不存在父节点，则不存在下一个节点
        return null;
    } else if(target.parent.left === target){ //为父节点的左节点，下一个节点为父节点
        return target.parent;
    } else { //为父节点的右节点，向上直到找到一个节点为左节点，否则返回 null
        return searchLeftChild(target.parent);
    }
}

/**
 * 给二叉树的节点增加一个parent属性指向其父节点
 * @param {TreeNode} node
*/
const addParent = function(node){
    if (node === null) { return; }
    if (node.left !== null) {
        node.left.parent = node;
        addParent(node.left);
    }
    if (node.right !== null) { 
        node.right.parent = node;
        addParent(node.right); 
    }
}

const mostLeftNode = function(node){
    if (node.left){
        return mostLeftNode(node.left)
    } else{
        return node;
    }
}

const searchLeftChild = function(node){
    if (!node.parent){
        return null
    }
    if (node.parent.left === node){
        return node.parent;
    }
    return searchLeftChild(node.parent);
}

const preOrder = [1,2,4,7,3,5,6,8];
const inOrder = [4,7,2,1,5,3,8,6];
const root = constructBinaryTree(preOrder,inOrder);
const next = nextNodeInInOrder(root,root.right.right);
console.log(next);
