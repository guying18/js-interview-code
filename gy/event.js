// 一般的事件绑定函数
// function bindEvent (elem, type, fn) {
//   elem.addEventListener(type, fn)
// }

// 考虑代理绑定的 通用事件绑定函数
function bindEvent (elem, type, selector, fn) {
  // 如果只传入 3 个参数，则将第三个参数赋值给 fn
  if (fn == null) {
    fn = selector
    selector = null
  }
  elem.addEventListener(type, event => {
    const target = event.target
    // 根据是否传入 selector 确定处理方式
    if (selector) {
      // 代理绑定(Element.matches(): target 元素符合 selector 返回 true)
      if (target.matches(selector)) {
        fn.call(target, event)
      }
    } else {
      // 普通绑定
      fn.call(target, event)
    }
  })
}

// 普通绑定
const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', function (event) {
  // console.log(event.target) // 获取触发的元素
  event.preventDefault() // 阻止默认行为
  // 注意此处使用 this, 不能使用箭头函数，否则 this 指向将为上级作用域，即 window
  alert(this.innerHTML)
})

// const p1 = document.getElementById('p1')
// bindEvent(p1, 'click', event => {
//   event.stopPropagation() // 阻止冒泡
//   console.log('激活')
//   // console.log(event.target)
// })

// const body = document.body
// bindEvent(body, 'click', event => {
//   console.log('取消')
//   // console.log(event.target)
// })

// const div2 = document.getElementById('div2')
// bindEvent(div2, 'click', event => {
//   console.log('div2')
//   console.log(event.target)
// })

// 代理绑定
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', 'a', function (event) {
  event.preventDefault()
  alert(this.innerHTML)
})