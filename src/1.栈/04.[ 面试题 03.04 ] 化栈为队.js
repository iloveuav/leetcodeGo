/**
 * * 题目名称：化栈为队
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci
 */

// * 思路：

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
this.stack1.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const value = this.stack2.pop()
    if(value){
        return value
    }else{
        const length = this.stack1.length
        for(let i=0;i<length;i++){
            this.stack2.push(this.stack1.pop())
            console.log(this.stack2)
        }
        return this.stack2.pop()
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.stack2.length>0){
        return this.stack2[this.stack2.length-1]
    }else{
        const length = this.stack1.length
        for(let i=0;i<length;i++){
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2[this.stack2.length-1]
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !Boolean(this.stack2.length||this.stack1.length)
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


// 测试用例
let test = function(){
     var obj = new MyQueue()
     obj.push(1)
     obj.push(2)
     obj.push(3)
    //  var param_2 = obj.pop()
     var param_3 = obj.peek()
    //  var param_4 = obj.pop()
    //  var param_5 = obj.empty()
    //  console.log(param_2)
    //  console.log(param_3)
    //  console.log(param_4)
    //  console.log(param_5)
}

console.time('执行用时');
test()
console.timeEnd('执行用时');