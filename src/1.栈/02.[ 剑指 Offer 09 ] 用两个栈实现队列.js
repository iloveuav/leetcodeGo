/**
 * * 题目名称：用两个栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
 */

// * 思路：



class CQueue{
    constructor(){
        this.addStack = []
        this.deleteStack = []
    }

    appendTail(v){
        this.addStack.push(v)
    }
    deleteHead(){
        if(this.deleteStack.length!==0){
            return this.deleteStack.pop();
        }
        while(this.addStack.length){
            this.deleteStack.push(this.addStack.pop())
        }
        if(this.deleteStack.length!==0){
            return this.deleteStack.pop();
        }else{
            return -1
        }
    }
}

 var test = function(){
    var obj = new CQueue()
    obj.appendTail(1)
 
    var param_1 = obj.deleteHead()
    console.log(param_1)
    obj.appendTail(4)
    var param_2 = obj.deleteHead()
    console.log(param_2)
    var param_3 = obj.deleteHead()
    console.log(param_3)
 }

// 测试用例
// let test = ''

// CTRL + ALT + N 运行
console.time('执行用时');
test();
console.timeEnd('执行用时');