/**
 * 给出一颗二叉树的根节点以及其中两个节点，求两个节点最近的公共节点
 * 公共节点有两种情况，第一是其中一个节点为另一个节点的子节点
 * 第二是公共节点的左右子树分别有一个节点，所以当遍历到一个节点时，分别去左右子树找其中一个点，
 * @param {TreeNode} root
 * @param {TreeNode} node1
 * @param {TreeNode} node2
*/
function findCloestPublicRoot(root,node1,node2){
    if (root === null || root === node1 || root === node2){
        return root;
    }
    const left = findCloestPublicRoot(root.left,node1,node2);
    const right = findCloestPublicRoot(root.right,node1,node2);
    if (!left){
        return right;
    } else if(!right){
        return left;
    }
    return root;
}