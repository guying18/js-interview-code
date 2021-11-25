// 1. 验证: 执行 async 函数，返回的是一个 Promise 对象
async function fn1 () {
  // 相当于 return Promise.resolve(100)
  return 100
}

const res1 = fn1() // 执行 async 函数，返回的是一个 Promise 对象
console.log('res1', res1) // Promise 对象
res1.then(data => {
  console.log('data', data) // 100
})

// 2. 验证: await 相当于 Promise 的 then
// 立即执行函数，如果习惯语句后不加 ';'，最好在立即执行函数前面加'!'
!(async function () {
  const p1 = Promise.resolve(300)
  const data1 = await p1  // await 相当于 Promise 的 then
  console.log('data1', data1)
})()

!(async function () {
  const data2 = await 400  // 相当于 await Promise.resolve(400)
  console.log('data2', data2)
})()

!(async function () {
  const data3 = await fn1()  // 相当于 await Promise.resolve(400)
  console.log('data3', data3)
})()

// 3. 验证: try..catch 捕捉错误
!(async function () {
  const p2 = Promise.reject('err') // rejected 状态
  const res = await p2  // await => then, then 需要 resolved 状态触发，因此不会运行到此
  console.log('res', res)
})()

!(async function () {
  const p2 = Promise.reject('err1') // rejected 状态
  try {
    const res = await p2
    console.log('res', res)
  } catch (ex) {
    console.error(ex) // try..catch 相当于 Promise 的 catch
  }
})()