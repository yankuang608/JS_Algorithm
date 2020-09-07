/**
 * 二叉搜索树后序遍历，判断给定序列是否为二叉树搜索树的后序遍历
 * @param {TreeNode} pHead
*/
function VerifySquenceOfBST(sequence){
    if(!sequence.length){ return false; }
    let left = 0, right = sequence.length - 1;
    return verifyHelper(sequence,left,right);
}

const verifyHelper = function(sequence,left,right){
    if (left < right){
        const root = sequence[right];
        let i = left;
        while(i < right && sequence[i] < root){
            i++;
        }
        for (let j = i; j < right; j++){
            if (sequence[j] < root){ return false; }
        }
        return verifyHelper(sequence,left,i-1) && verifyHelper(sequence,i,right-1);
    } else{
        return true;
    }
}

module.exports = {
    VerifySquenceOfBST : VerifySquenceOfBST
};