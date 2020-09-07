function BinaryTreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * 给出前序和中序顺序，重构二叉树
 * @param {Array} preOrder
 * @param {Array} inOrder
*/
function constructBinaryTree(preOrder,inOrder){
    const preLength = preOrder.length, inLength = inOrder.length;
    if (!preLength || !inLength ) { throw new Error('前序或中序为空');}
    if (preLength !== inLength ) { throw new Error('前序与中序长度不匹配');}
    return constructBinaryTreeHelper(preOrder, inOrder, 0, preLength - 1);
}

function constructBinaryTreeHelper(preOrder, inOrder, start, end) {
    if (start > end){ 
        return null;
    }
    if (start === end){
        return new BinaryTreeNode(inOrder[start]);
    }
    if (start < end){
        const rootValue = findSamllestWithin(preOrder, inOrder, start, end);
        const root = new BinaryTreeNode(rootValue);
        const rootIndex = inOrder.indexOf(rootValue);
        root.left = constructBinaryTreeHelper(preOrder, inOrder, start, rootIndex - 1);
        root.right = constructBinaryTreeHelper(preOrder, inOrder, rootIndex + 1, end);
        return root;
    } 
    
}

const findSamllestWithin = function(preOrder, inOrder, start, end){
    const slice = inOrder.slice(start,end+1);
    for (let i = 0; i < preOrder.length; i++){
        if (slice.includes(preOrder[i])){
            return preOrder[i];
        }
    }
}

function printBinaryTree(root){
    let queue = [], depth = 0, layer = [];
    queue.push(root);
    while (queue.length && !queue.every( i => i === null)){
        for (let i = 0; i < Math.pow(2,depth); i++){
            const node = queue.shift();
            layer.push(node ? node.val : "null");
            if (node){
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        console.log(layer.toString());
        layer = [];
        depth++;
    }
}

module.exports = {constructBinaryTree};