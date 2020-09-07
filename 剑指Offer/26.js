function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function HasSubtree(pRoot1, pRoot2)
{
    let res = false;
    if (pRoot1 && pRoot2){
        if (pRoot1.val === pRoot2.val){
            res = Tree1EqualTree2(pRoot1,pRoot2);
        }
        if (!res){ 
            res = HasSubtree(pRoot1.left,pRoot2);
        }
        if (!res){ 
            res = HasSubtree(pRoot1.right,pRoot2); 
        }
    }
    return res;
}

const Tree1EqualTree2 = function(root1,root2){
    if (!root2) { return true; }
    if (!root1) { return false; }
    if (root1.val !== root2.val) { return false; }
    return Tree1EqualTree2(root1.left,root2.left) && Tree1EqualTree2(root1.right,root2.right);
}

let n1 = new TreeNode(8);
let n2 = new TreeNode(8);
let n3 = new TreeNode(7);
let n4 = new TreeNode(9);
let n5 = new TreeNode(2);
let n6 = new TreeNode(4);
let n7 = new TreeNode(7);

n1.left = n2; n1.right = n3;
n2.left = n4; n2.right = n5;
n5.left = n6; n5.right = n7;

let n8 = new TreeNode(8);
let n9 = new TreeNode(9);
let n10 = new TreeNode(2);
n8.left = n9; n8.right = n10;

// console.log(HasSubtree(n1,n8));
console.log(Tree1EqualTree2(null,null));
