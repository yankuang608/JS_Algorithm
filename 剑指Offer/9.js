/**
 * 用两个栈组成一个队列，如果队列为空返回 undefined
*/
function Queue(){
    this.stack1 = []; 
    this.stack2 = [];
}

Queue.prototype.enqueue = function(item){
    this.stack1.push(item);
}

Queue.prototype.dequeue = function(){
    if (this.stack2.length) {
        return this.stack2.pop();
    } else{
        while (this.stack1.length){
            const temp = this.stack1.pop();
            if (!this.stack1.length){
                return temp;
            }
            this.stack2.push(temp);
        }
        return undefined;
    } 
}

/**
 * 用两个队列组成一个栈，如果为空返回 undefined
*/
function Stack(){
    this.curQueue = [];
    this.empQueue = [];
}

Stack.prototype.push = function(item){
    this.curQueue.push(item);
}

Stack.prototype.pop = function(){
    if (!this.curQueue.length){ return undefined; }
    while (this.curQueue.length){
        const item = this.curQueue.shift();
        if (!this.curQueue.length){ //返回队列中最后一个元素，实现FILO
            let temp = this.curQueue;
            this.curQueue = this.empQueue;
            this.empQueue = temp;
            return item;
        }
        this.empQueue.push(item);
    }

}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());