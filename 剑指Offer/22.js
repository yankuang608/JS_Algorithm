function Node(val){
    this.val = val;
    this.next = null;
}
/**
 * 输出链表中倒数第 K 个节点
 * @param {Node} head
*/
function FindKthToTail(head, k)
{
    if (!head){ return null; }
    if (k < 0){ throw new Error('输入 k 小于零')}
    let first = head;
    for (let i = 0; i < k; i++){
        if (!first) { throw new Error('输入链表少于 k 个节点')}
        first = first.next;
    }
    let second = head;
    while(first){
        first = first.next;
        second = second.next;
    }
    return second;
}
module.exports = {
    FindKthToTail : FindKthToTail
};