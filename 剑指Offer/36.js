/**
 * 二叉搜索树转化为链表
*/
function Convert(pRootOfTree){

    let lastNode = null;
    const ConvertHelper = function(root){
        let curNode = root;
        if(curNode === null) { return; }
        if(curNode.left){ ConvertHelper(curNode.left); }
        curNode.left = lastNode;
        if(lastNode){ lastNode.right = curNode; }
        lastNode = curNode;
        if(curNode.right){ ConvertHelper(curNode.right); }
    }
    
    ConvertHelper(pRootOfTree);
    
    let head = pRootOfTree;
    while(head && head.left){
        head = head.left;
    }       
    return head;
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
// n2.left = n4; n2.right = n5;
// n3.left = n6; n3.right = n7;

console.log(Convert(n1));