async function async1 () {
  console.log('async1 start') // 2
  await async2()

  // await 后面的都作为回调内容 —— 微任务1
  console.log('async1 end') // 6
}

async function async2 () {
  console.log('async2') // 3
}

console.log('script start') // 1

setTimeout(() => { // 宏任务 setTimeout
  console.log('setTimeout') // 8
}, 0);

async1()

// 初始化 Promise 时，传入的函数会立刻被执行
new Promise(function (resolve) {
  console.log('Promise1') // 4 -> 执行 resolve()
  resolve()
}).then(function () { // 微任务2
  console.log('Promise2') // 7
})

console.log('script end') // 5

// 同步代码执行完毕(event loop - call stack 被清空)
// 执行微任务
// (尝试触发 DOM 渲染)
// 触发 Event Loop, 执行宏任务