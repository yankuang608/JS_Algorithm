/**
 * 给定链表的头节点和某个节点，删除该节点
 * @param {Node} head
 * @param {Node} target
*/
function Node(val){
    this.val = val;
    this.next = null;
}

function deleteNode(head,target){
    if (!head || !target) { throw new Error('输入节点为空'); }
    if (head === target) { return null; } //如果删除的节点为头节点，直接返回null
    if (target.next === null){
        deleteLast(head,target);
    } else{
        target.val = target.next.val;
        target.next = target.next.next;
    }
    return head;
}

function printList(head){
    let node = head;
    while (node){
        console.log(node.val);
        node = node.next;
    }
}

function deleteLast(head,target){
    let node = head;
    while (node.next !== target){
        node = node.next;
    }
    node.next = target.next;
    target.next = null;
}

let n1 = new Node(1), n2 = new Node(2), n3 = new Node(3);
n1.next = n2; n2.next = n3;
let head = deleteNode(n1,n3);
printList(head);