// 手写 jQuery
class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector)
    const length = result.length
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
    this.selector = selector
  }
  get (index) {
    return this[index]
  }
  each (fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i]
      fn(elem)
    }
  }
  on (type, fn) {
    return this.each(elem => {
      elem.addEventListener(type, fn, false)
    })
  }
  // 还可以扩展很多 DOM API
};

  // 插件 通过原型实现
  jQuery.prototype.dialog = function (info) {
  alert(info)
}

// 可复写/或者叫“造轮子”
class myJQurey extends jQuery {
  constructor(selector) {
    super(selector)
  }
  // 扩展自己的方法
  addClass (index, className) {
    this[index].classList.add(className)
  }
}

// 创建 jQuery 实例
const $p = new jQuery('p')
$p.get(1)
$p.each(elem => console.log(elem.innerHTML))
$p.on('click', elem => alert('clicked'))
$p.dialog('我来啦！')

// 创建 myJQurey 实例
const $myp = new myJQurey('p')
$myp.addClass(0, 'title')