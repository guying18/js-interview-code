/**
 * @description MyPromise
 * @author guying
 */
class MyPromise {
  state = 'pending' // 状态：'pending' 'fulfilled' 'rejected'
  value = undefined // 成功后的值
  reason = undefined // 失败后的原因

  resolveCallbacks = [] // pending 状态下，存储成功的回调
  rejectCallbacks = [] // pending 状态下，存储失败的回调

  constructor(fn) {
    const resolveHandler = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.resolveCallbacks.forEach(fn => fn(this.value))
      }
    }
    const rejectHandler = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.rejectCallbacks.forEach(fn => fn(this.reason))
      }
    }

    try {
      fn(resolveHandler, rejectHandler)
    } catch (err) {
      rejectHandler(err)
    }
  }

  // 当 pending 状态下，fn1 和 fn2 会被存储到 callbacks 中
  then (fn1, fn2) {
    fn1 = typeof fn1 === 'function' ? fn1 : (v) => v
    fn2 = typeof fn2 === 'function' ? fn2 : (e) => e

    if (this.state === 'pending') {
      const p1 = new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const newValue = fn1(this.value)
            resolve(newValue)
          } catch (e) {
            reject(e)
          }
        })
        this.rejectCallbacks.push(() => {
          try {
            const newReason = fn2(this.reason)
            reject(newReason)
          } catch (e) {
            reject(e)
          }
        })
      })
      return p1
    }

    if (this.state === 'fulfilled') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newValue = fn1(this.value)
          resolve(newValue)
        } catch (e) {
          reject(e)
        }
      })
      return p1
    }

    if (this.state === 'rejected') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason)
          reject(newReason)
        } catch (e) {
          reject(e)
        }
      })
      return p1
    }
  }

  // catch 就是 then 的一个语法糖，简单模式
  catch (fn) {
    return this.then(null, fn)
  }
}

MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => resolve(value))
}
MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => reject(reason))
}

// all: 传入 Promise 数组，等待所有的都 fulfilled 之后，返回新 Promise，包含前面所有的结果
MyPromise.all = function (promiseList = []) {
  const p1 = new MyPromise((resolve, reject) => {
    const result = []
    const length = promiseList.length
    let resolvedCount = 0

    promiseList.forEach(p => {
      p.then(data => {
        result.push(data)
        // resolvedCount 必须在 then 里面做 ++
        // 不能用 index，因为 forEach 为同步遍历
        resolvedCount++
        if (resolvedCount === length) {
          resolve(result)
        }
      }).catch(e => {
        reject(e)
      })
    })
  })
  return p1
}
// race: 传入 Promise 数组，指要有一个fulfilled 即可返回
MyPromise.race = function (promiseList = []) {
  let resolved = false //标记
  const p1 = new MyPromise((resolve, reject) => {
    promiseList.forEach(p => {
      p.then(data => {
        if (!resolved) {
          resolve(data)
          resolved = true
        }
      }).catch(e => {
        reject(e)
      })
    })
  })
  return p1
}


// 使用 MyPromise
const p1 = new MyPromise((resolve, reject) => {
  // resolve(100)
  // reject('错误')
  setTimeout(() => {
    resolve(100)
  }, 500);
})

const p11 = p1.then(data1 => {
  console.log('data1', data1)
  return data1 + 1
})
const p12 = p11.then(data2 => {
  console.log('data2', data2)
  return data2 + 2
})
const p13 = p12.catch(err => console.error(err))

const p2 = MyPromise.resolve(200)
const p3 = MyPromise.resolve(300)
const p4 = MyPromise.reject('错误信息...')
const p5 = MyPromise.all([p1, p2, p3])
p5.then(result => console.log('all result', result))
const p6 = MyPromise.race([p1, p2, p3])
p6.then(result => console.log('race result', result))