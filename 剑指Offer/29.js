function Print(pRoot){
    if (!pRoot) {return [];}
    let len, res = [], row = [], oddLayer = true;
    let curStack = [], storeStack = [];
    curStack.push(pRoot);
    while(curStack.length){
        len = curStack.length;
        for( let i = 0; i < len; i++){
            const node = curStack.pop();
            if (oddLayer){
                if(node.left) { storeStack.push(node.left); }
                if(node.right) { storeStack.push(node.right); }
            } else{
                if(node.right) { storeStack.push(node.right); }
                if(node.left) { storeStack.push(node.left); }
            }
            row.push(node.val);
        }
        oddLayer = !oddLayer;
        res.push(row);
        row = [];
        const temp = storeStack;
        storeStack = curStack;
        curStack = temp;
    }
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

console.log(Print(n1));
