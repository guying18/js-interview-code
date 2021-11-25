// 第一题
Promise.resolve().then(() => { // 返回 resolved, 触发后续 then 回调
  console.log(1) // 1
}).catch(() => {
  console.log(2)
}).then(() => {
  console.log(3) // 3
}) // 最终返回 resolved

// 第二题
Promise.resolve().then(() => { // 返回 rejected, 触发后续 catch 回调
  console.log(1) // 1
  throw new Error('error1')
}).catch(() => { // 返回 resolved, 触发后续 then 回调
  console.log(2) // 2
}).then(() => {
  console.log(3) // 3
}) // 最终返回 resolved

// 第三题
Promise.resolve().then(() => { // 返回 rejected, 触发后续 catch 回调
  console.log(1) // 1
  throw new Error('error2')
}).catch(() => { // 返回 resolved, 触发后续 then 回调
  console.log(2) // 2
}).catch(() => {
  console.log(3)
}) // 最终返回 resolved