console.log(100) // 1

// 宏任务
setTimeout(() => {
  console.log(200) // 4
});

// 微任务(执行时机比宏任务要早!!!)
Promise.resolve().then(() => {
  console.log(300) // 3
})

console.log(400) // 2