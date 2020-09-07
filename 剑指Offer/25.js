/**
 * 合并两个有序列表
*/
function Merge(pHead1, pHead2)
{
    if (!pHead1 && !pHead2){ return null; }
    if (!pHead1){ return pHead2; }
    if (!pHead2){ return pHead1; }
    let outputHead,curNode;
    while(pHead1 && pHead2){
        if (pHead1.val <= pHead2.val){
            if (!outputHead){ 
                outputHead = pHead1;
                curNode = pHead1;
            } else{
                curNode.next = pHead1;
                curNode = curNode.next;
            }
            pHead1 = pHead1.next;
        }else{
            if (!outputHead){ 
                outputHead = pHead2;
                curNode = pHead2;
            } else{
                curNode.next = pHead2;
                curNode = curNode.next;
            }
            pHead2 = pHead2.next;
        }
    }
    if (pHead1){ curNode.next = pHead1;}
    if (pHead2){ curNode.next = pHead2;}
    return outputHead;
}

function Node(val){
    this.val = val;
    this.next = null;
}

function printList(head){
    let node = head;
    while(node){
        console.log(node.val);
        node = node.next;
    }
}

let n1 = null;
let n2 = new Node(3);
let n3 = new Node(5);
let n4 = new Node(7);
let n5 = new Node(9);
// n1.next = n2; n2.next = n3; n3.next = n4; n4.next = n5;

let n6 = new Node(2);
let n7 = new Node(4);
let n8 = new Node(8);
// n6.next = n7; n7.next = n8;

printList(Merge(n1,n6));