/**
 * 复杂链表的复制
 * @param {head} node
*/
function Clone(pHead){
    if (!head) {return null;}
    let [copyHead,map] = copyLinkedList(pHead);
    addRandomPointer(pHead,copyHead,map);
    return copyHead;
}

function copyLinkedList(head){
    let map = new Map();
    const copyHead = new RandomListNode(head.val);
    map.set(head,copyHead);

    let node = head;
    let copyNode = copyHead;
    
    while(node.next){
        let newNode = new RandomListNode(node.next.val);
        copyNode.next = newNode;
        node = node.next;
        copyNode = copyNode.next;
        map.set(node,copyNode);
    }
    return [copyHead,map];
}

function addRandomPointer(origin,copy,map){
    while(origin){
        const copyNextNode = map.get(origin.random);
        copy.random = copyNextNode;
        origin = origin.next;
        copy = copy.next;
    }
}

module.exports = {
    Clone : Clone
};