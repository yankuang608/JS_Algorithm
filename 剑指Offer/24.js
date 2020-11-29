/**
 * 翻转链表，循环法
*/
function ReverseList(pHead)
{
    // write code here
    if (!pHead || !pHead.next) { return pHead; }
    let prevNode = null, curNode = pHead, nextNode;
    while(curNode){
        nextNode = curNode.next;
        curNode.next = prevNode;
        prevNode = curNode;
        curNode = nextNode;
    }
    return prevNode;
}

/**
 * 翻转链表，递归法
*/
function ReverseList2(pHead){
    if (!pHead || !pHead.next){ return pHead; }
    const temp = ReverseList2(pHead.next);
    pHead.next.next = pHead;
    pHead.next = null;
    return temp;
}

function reverseList(pHead){
    if(!pHead || !pHead.next){ return pHead; }
    const head = reverseList(pHead.next);
    pHead.next.next = pHead;
    pHead.next = null;
    return head;
}

function reverseList(pHead,depth){
    if(depth === 1){ return pHead; }
    const head = reverseList(pHead.next,depth-1);
    pHead.next = 
}

const reverseSegment = (pHead,start,end) => {
    let prev = pHead;
    for(let i=1; i<start; i++){
        if(prev && prev.next){
            prev = prev.next;
        }
    }
    
}