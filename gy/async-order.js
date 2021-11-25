// 面试题目1
async function async1 () {
  console.log('async1 start') // 2 重要
  // 先执行 async2()， 然后才执行 await 操作
  await async2() // 同理，虽然 async2 是个异步函数，但还是要立马去执行它的内容
  // await 的后面，都可以看作是 callback 里的内容，即异步
  // 类似于 event loop, setTimeout(cb1)
  // 可看作 setTimeout(() => console.log('async1 end'))
  // 或 Promise.resolve().then(() => console.log('async1 end'))
  console.log('async1 end') // 5
}

// async2 没有 return，默认返回 undefined
async function async2 () {
  console.log('async2') // 3 重要
}

console.log('script start') // 1
async1() // 虽然 async1 是个异步函数，但还是要立马去执行它的内容
console.log('script end') // 4
// 同步代码已经执行完，后续异步参考 event loop 执行流程


// 面试题目 1 变种
async function async1 () {
  console.log('async1 start') // 2 重要
  await async2()
  // 下面三行都是异步回调 callback 的内容
  console.log('async1 end') // 5
  await async3()
  // 下面一行是嵌套的异步回调内容
  console.log('async1 end 2') // 7
}

async function async2 () {
  console.log('async2') // 3 重要
}

async function async3 () {
  console.log('async3') // 6
}

console.log('script start') // 1
async1()
console.log('script end') // 4
// 同步代码已经执行完，后续异步参考 event loop 执行流程