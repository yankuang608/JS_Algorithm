function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}

/**
 * 方法二，详见剑指offer
*/
function Clone(head){
    addClone(head);
    copyRandom(head);
    return seperateCloned(head);
}

function addClone(head){
    let node = head;
    while(node){
        const cloned = new RandomListNode(node.label);
        cloned.next = node.next;
        node.next = cloned;
        node = cloned.next;
    }
}

function copyRandom(head){
    let node = head;
    while(node){
        const cloned = node.next;
        if(node.random){
            cloned.random = node.random.next; 
        }
        node = cloned.next;
    }
}

function seperateCloned(head){
    let clonedHead, clonedNode, node = head;
    if (node){
        clonedNode = node.next;
        clonedHead = node.next;
        node.next = clonedNode.next;
        node = node.next
    } 

    while(node){
        clonedNode.next = node.next;
        clonedNode = clonedNode.next;
        node.next = clonedNode.next;
        node = node.next;
    }
    return clonedHead;
}

const Print = function(node){
    while(node){
        console.log(node.label);
        node = node.next;
    }
}

module.exports = {
    Clone : Clone
};