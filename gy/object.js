const obj1 = {
  a: 10,
  b: 20,
  sum () {
    return this.a + this.b
  }
}

const obj2 = new Object({
  a: 10,
  b: 20,
  sum () {
    return this.a + this.b
  }
})

const obj3 = new Object(obj1)
console.log(obj3 === obj1) // true

const obj4 = Object.create(null)
const obj5 = new Object() // 等价于{}

// 相当于：将 obj1 设为 obj6 的隐式原型
const obj6 = Object.create(obj1)
console.log(obj6.__proto__ === obj1) // true