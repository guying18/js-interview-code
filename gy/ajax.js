// // GET 请求
// const xhr = new XMLHttpRequest()
// xhr.open('GET', './data/test.json')

// xhr.onreadystatechange = function () {
//   // 这里的函数异步执行
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       alert(xhr.responseText)
//       console.log(JSON.parse(xhr.responseText))
//     }
//   }
// }

// xhr.send(null)

// // POST 请求
// const xhr = new XMLHttpRequest()
// xhr.open('POST', './login')

// xhr.onreadystatechange = function () {
//   // 这里的函数异步执行
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       alert(xhr.responseText)
//       console.log(JSON.parse(xhr.responseText))
//     }
//   }
// }
// const postData = {
//   userName: 'zhangsan',
//   password: 'xxx'
// }
// xhr.send(JSON.stringify(postData))

// 手写简易的 ajax（promise 形式）
function ajax (url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(
            JSON.parse(xhr.responseText)
          )
        } else if (xhr.status === 404) {
          reject(new Error('404 not found'))
        }
      }
    }
    xhr.send(null)
  })
  return p
}

// 调用封装的 ajax
const url = './data/test.json'
ajax(url)
  .then(res => console.log(res))
  .catch(err => console.error(err))