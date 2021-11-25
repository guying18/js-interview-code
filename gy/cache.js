// 闭包隐藏数据，只提供 API
function createCache () {
  const data = {} // 闭包中的数据，被隐藏，不被外界访问
  return {
    set: function (key, value) {
      data[key] = value;
    },
    get: function (key) {
      return data[key]
    }
  }
}

// data.b = 200 // 会报错，data 在此作用域未定义

const c = createCache()
c.set('a', 100)
console.log(c.get('a'))



// 创建10个<a>标签，点击弹出对应序号
let a
// let i = 0 定义在 for 语句内，形成‘块作用域’
for (let i = 0; i < 10; i++) {
  // console.log(i)
  a = document.createElement('a')
  a.innerHTML = i + '<br>'
  // alert(i) 是在创建完标签后，发生'click'事件才会执行，
  // 如果把变量 i 定义在全局，则执行'click'时，弹出的都是 i = 10 
  a.addEventListener('click', function (e) {
    e.preventDefault()
    alert(i)
  })
  document.body.appendChild(a)
}
