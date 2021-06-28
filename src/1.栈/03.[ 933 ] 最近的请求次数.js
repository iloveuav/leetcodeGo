/**
 * * 题目名称：最近的请求次数
 * * 题目地址：https://leetcode-cn.com/problems/number-of-recent-calls
 */

// * 思路：写个栈每次放入后 根据条件拿出并计数   CTRL + ALT + N

class RecentCounter {
    constructor(){
        this.count = 0
        this.stackTemp = []
    }
    ping(t){
        // this.stack.push(t)
        this.stackTemp.push(t)
        let i = this.stackTemp.length -1
        this.count = 0
        while(i >= 0){
            const top = this.stackTemp[i]
            // console.log("inner-top"+t,top);
            if(top&&top>=t-3000&&top<=t){
                this.count++;
            }
            i--;
        }
      
        return this.count
    }
}

// RecentCounter recentCounter = new RecentCounter();
var test = function(){
    var obj = new RecentCounter()
    console.log(obj.ping(624))
    console.log(obj.ping(1849))
    console.log(obj.ping(4921))
    console.log(obj.ping(5936))
    console.log(obj.ping(5957))
    // var param_3 = obj.deleteHead()
    // console.log(param_3)
 }


// 测试用例
// let test = ''

console.time('执行用时');
test();
console.timeEnd('执行用时');