function fn1 (a, b, c) {
  console.log(this)
  console.log(a, b, c)
  return 'this is fn1'
}
// 正常使用 bind 函数
const fn2 = fn1.bind({ x: 100 }, 10, 20, 30)
const res = fn2()
console.log(res)

// 手写 bind 函数
// 3点要求: this 和参数要传进去，且返回一个函数
// 模拟 bind
Function.prototype.bind1 = function () {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments)

  // 1. 获取要 bind 到的 this (数组 args 的第一项，赋值给 t 并剔除)
  // 2. 剔除第一项后的 args 即为最终调用 bind 的函数需要接收的参数
  const t = args.shift()

  // 此处 this 指使用 bind 的函数/对象，类似 fn1.bind(...) 中的 fn1
  // 即采用 self 给 this 设置别名
  const self = this

  // 3. 返回一个函数
  return function () {
    return self.apply(t, args)
  }
}

//使用自定义的 bind1 函数
const fn3 = fn1.bind1({ x: 10 }, 1, 2, 3)
const res3 = fn3()
console.log(res3)
