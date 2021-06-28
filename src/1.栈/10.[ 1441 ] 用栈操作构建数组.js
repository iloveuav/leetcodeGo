/**
 * * 题目名称：用栈操作构建数组
 * * 题目地址：https://leetcode-cn.com/problems/build-an-array-with-stack-operations
 */

// * 思路：


/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */


//解法1
//  var buildArray = function(target, n) {
//     const result = []
//     const arr = []
//     let k=0;
//      for(let i=1;i<=n;i++){
//         arr.push(i)
//         result.push('Push');
//          if(arr[k]!==target[k]){
//            arr.pop()
//             result.push('Pop');
//         }else{
//             k++
//         }
//         if(arr.length===target.length){
//             break;
//         }
//      }
//      return result;
// };

// 测试用例
let test = ''

console.time('执行用时');
console.log(buildArray([2,3,4],4));
console.timeEnd('执行用时');