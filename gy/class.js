// // 定义 Student 类
// class Student {
//   constructor(name, number) {
//     this.name = name
//     this.number = number
//   }
//   // 定义 sayHi 方法
//   sayHi () {
//     console.log(
//       // 模板字符串
//       `姓名 ${this.name}, 学号 ${this.number}`
//     )
//   }
// }

// // 通过类 new 对象/实例
// const xialuo = new Student('夏洛', 100)
// console.log(xialuo.name)
// console.log(xialuo.number)
// xialuo.sayHi()

// 定义父类 People
class People {
  constructor(name) {
    this.name = name
  }
  eat () {
    console.log(`${this.name} eat something`)
  }
}

// 子类 Student 继承 People
class Student extends People {
  constructor(name, number) {
    // 执行父类构造函数
    super(name)
    this.number = number
  }
  // 定义 sayHi 方法
  sayHi () {
    console.log(
      // 模板字符串
      `姓名 ${this.name}, 学号 ${this.number}`
    )
  }
}

// 通过类 new Student 对象/实例
const xialuo = new Student('夏洛', 100)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()
xialuo.eat()

// 子类 Teacher 继承 People
class Teacher extends People {
  constructor(name, major) {
    // 执行父类构造函数
    super(name)
    this.major = major
  }
  // 定义 teach 方法
  teach () {
    console.log(`${this.name} 教授 ${this.major}`)
  }
}

// 通过类 new Teacher 对象/实例
const wanglaoshi = new Teacher('王老师', '语文')
console.log(wanglaoshi.name)
console.log(wanglaoshi.major)
wanglaoshi.teach()
wanglaoshi.eat()