/**
 * * 题目名称：用队列实现栈
 * * 题目地址：https://leetcode-cn.com/problems/implement-stack-using-queues
 */

// * 思路1：push 入队列2后 根据入之前的队列2长度进行遍历把队列2头部重新入队列2
// * 思路1：pop 从队列2头部拿
// * 思路1：top 从队列2头部拿
// * 思路1：empty 判断队列2长度
// * 队列1 好像没怎么用到 第一次全部进队列1？

// * 思路2(和官方一样)：push 入队列1即可
// * 思路2：pop 队列1长度大于1就从头部拿走到队列2 只留最后一个然后出队列后再把队列2的送回来队列1
// * 思路2：top：MyStack.prototype.top = function() {
//     return this.queue.slice(-1)[0];  ←slice(-1)拿到的是一个数组
// };
// * 思路2：empty 判断队列1长度
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue1 = []
    this.queue2 = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {

};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {

};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {

};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {

};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


// 测试用例
let test = function(){
    const queue = [1,2]
    console.log(queue.slice(-1))
}

console.time('执行用时');
test()
console.timeEnd('执行用时');