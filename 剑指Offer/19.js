function Node(val){
    this.val = val;
    this.next = null;
}

/**
 * 删除链表中重复的节点，例如输入为 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5，输出为 1 -> 2 -> 5
 * @param {Node} head
*/
function deleteDuplication(head){
    if (!head || !(head.next)) { return head; } //head 为 null 或只有一个节点
    let preNode = null, curNode = head;
    while (curNode){
        let nextNode = curNode.next;
        let needDelete = false;
        if (curNode.next && curNode.val === nextNode.val){
            needDelete = true;
        }
        if (!needDelete){
            preNode = curNode;
            curNode = nextNode;
        }else{
            const value = curNode.val;
            while(curNode && curNode.val === value){
                const temp = curNode.next; //指针设为 null ,等待内存回收
                curNode.next = null;
                curNode = temp;
            }
            if (!preNode){
                head = curNode;
            }else{
                preNode.next = curNode;
            }
        }
    }
    return head;
}

const printList = function(head){
    let node = head;
    while(node){
        console.log(node.val);
        node = node.next;
    }
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(3);
let n5 = new Node(4);
let n6 = new Node(4);
let n7 = new Node(5);
let n8 = new Node(5);

n1.next = n2; 
n2.next = n3; n3.next = n4; n4.next = n5; 
n5.next = n6; n6.next = n7;
n7.next = n8;
const head = deleteDuplication(n1);
printList(head);


