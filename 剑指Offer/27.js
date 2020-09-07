/**
 * 输入一个二叉树，要求输出它的镜像
*/
function Mirror(root){
    if (!root) {return;}
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);
    return root;
}