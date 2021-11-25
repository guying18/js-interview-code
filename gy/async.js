// 异步 不会阻塞代码执行(callback 回调函数)
console.log(100)
setTimeout(() => {
  console.log(200)
}, 1000);
console.log(300)
setTimeout(() => {
  console.log(400)
}, 0);
console.log(500)

// 同步 会阻塞代码执行
console.log(100)
alert(200)
console.log(300)