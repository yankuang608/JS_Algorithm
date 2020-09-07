/**
 * 从尾到头打印一个链表
 * @param {Node} node
*/
function reversePrintLinkedList(node){
    if (node === null) { return; }
    reversePrintLinkedList(node.next);
    console.log(node.val);
}

function reversePrintLinkedList2(node){
    let stack = [];
    while (node !== null){
        stack.push(node.val);
        node = node.next;
    }
    while (stack.length){
        console.log(stack.pop());
    }
}

function Node(val){
    this.val = val;
    this.next = null;
}

/**
 * 将输入的参数转化成链表
*/
function listGenerator(){
    let args = [...arguments];
    if (!args.length) { return null; }
    const head = new Node(args.shift());
    head.next = listGeneratorHelper(args);
    return head;
}

function listGeneratorHelper(args){
    if (!args.length) { return null; }
    const item = new Node(args.shift());
    item.next = listGeneratorHelper(args);
    return item;
}

/**
 * 打印链表
 * @param {Node} head 
 */
function printList(head){
    while (head !== null){
        console.log(head.val);
        head = head.next;
    }
}

module.exports = {listGenerator,printList};