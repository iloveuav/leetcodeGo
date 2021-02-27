/**
 * * 题目名称：删除最外层的括号
 * * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 *
 *  2020/2/24
// * 思路：从头到尾寻找有效括号组合，push 到结果集中  CTRL + ALT + N 运行
/**
 * @param {string} S
 * @return {string}
 */
// var removeOuterParentheses = function (S) { 
//   const bracket = { '(': ')' }
//   const stack = []
//   let res = []
//   const result = []
//   for (let i = 0; i < S.length; i++) {
//     const val = S[i]
//     if (bracket[val]) { // 左括号
//       stack.push(val)
//     } else { // 右括号
//       stack.pop()
//     }
//     if (stack.length === 0) {
//       // 存在一组有效括号
//       res.push(val)
//       const cur = [...res]
//       cur.shift()
//       cur.pop()
//       result.push(cur)
//       res = []
//       continue
//     }
//     res.push(val)
//   }
//   return result.flat().join('')
// };

// thinking  计算左右括号差 判断操作
// num = 0
// if （ &num>0 num ++ +=s[i]
// if  ）&—num>0 num   - - +=s[i]

var removeOuterParentheses = function(s){
  
  let num = 0;
  let result = ''
  for(let i =0;i<=s.length;i++){
    if(s[i]==="("&&num++>0)
    result += s[i]
    else if(s[i]===')'&&--num>0)
    result+= s[i]
  }
  return result
  console.log(result)
}



// 测试用例
let test = "(()())(())"

console.time('执行用时');
console.log(removeOuterParentheses(test));
console.timeEnd('执行用时');