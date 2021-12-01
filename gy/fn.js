// // 函数声明
// const res = sum(10, 20)
// console.log(res)
// function sum (a, b) {
//   return a + b
// }

// // 函数表达式
// const res = sum(10, 20)
// console.log(res)
// var sum = function (a, b) {
//   return a + b
// }

let i;
for (i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 0)
}