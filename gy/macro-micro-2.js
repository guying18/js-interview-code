const $p1 = $('<p>A</p>')
const $p2 = $('<p>B</p>')
const $p3 = $('<p>C</p>')
$('#container')
  .append($p1)
  .append($p2)
  .append($p3)
console.log('length:', $('#container').children().length)
// alert('本次 call stack 结束，DOM 结构已经更新，但尚未触发渲染')
// (alert 会阻断 js 执行，也会阻断 DOM 渲染，便于查看效果)

// 微任务：DOM 渲染前触发
Promise.resolve().then(() => {
  console.log('length1:', $('#container').children().length)
  alert('Promise then') // DOM 渲染了吗？ —— No
})

// 宏任务：DOM 渲染后触发
setTimeout(() => {
  console.log('length2:', $('#container').children().length)
  alert('setTimeout') // DOM 渲染了吗？ —— Yes
});