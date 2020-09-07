function Node(val){
    this.val = val;
    this.next = null;
}
/**
 * 链表中入口环的节点
 * @param {Node} head
*/
function EntryNodeOfLoop(head)
{
    const loopCount = exitsLoop(head);
    if (!loopCount){ return null; }
    let first = head, second = head;
    for(let i = 0; i < loopCount; i++){
        first = first.next;
    }
    while(first !== second){
        first = first.next;
        second = second.next;
    }
    return first;
}

/**
 * 判断链表中是否有环，没有返回null,有则返回环中节点的个数
*/
const exitsLoop = function(head){
    let slow = head, quick = head;
    do{
        if(!quick || !quick.next){ return null; }
        if(!slow || !slow.next){ return null;}
        slow = slow.next;
        quick = quick.next.next;
    }while (slow !== quick)
    let count = 1;
    let iterator = slow.next;
    while(iterator !== slow){
        iterator = iterator.next;
        count++;
    }   
    return count;
}

module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n3;
console.log(EntryNodeOfLoop(n1));
