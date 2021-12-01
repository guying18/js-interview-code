const arr = [10, 20, 30, 40]

// // pop
// const popRes = arr.pop() // 返回 arr[arr.length -1] 的值
// console.log(popRes, arr) 

// // shift
// const shiftRes = arr.shift() // 返回 arr[0] 的值
// console.log(shiftRes, arr) 

// // push
// const pushRes = arr.push(50) // 返回新数组长度
// console.log(pushRes, arr) 

// // unshift
// const unshiftRes = arr.unshift(5) // 返回新数组长度
// console.log(unshiftRes, arr) 


// // 纯函数： 1. 不改变源数组(没有副作用)；2. 返回一个数组
// // concat
// const arr1 = arr.concat([50, 60, 70])
// // map
// const arr2 = arr.map(num => num * 10)
// // filter
// const arr3 = arr.filter(num => num > 25)
// // slice
// const arr4 = arr.slice()

// 非纯函数
// pop push shift unshift
// forEach
// every some
// reduce

// slice 纯函数
// slice() 方法返回一个新的数组对象，这一对象是一个
// 由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
// arr.slice([begin[, end]])
const arr1 = arr.slice()
const arr2 = arr.slice(1, 4)
const arr3 = arr.slice(2)
const arr4 = arr.slice(-2)

// splice 非纯函数
// splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,
// 并以数组形式返回被修改的内容。此方法会改变原数组。
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// const spliceRes = arr.splice(1, 2, 'a', 'b', 'c')
// const spliceRes1 = arr.splice(1, 2)
const spliceRes2 = arr.splice(1, 0, 'a', 'b', 'c')
// console.log(spliceRes2, arr) 

const res = [10, 20, 30].map(parseInt)
console.log(res)

// 拆解!!!
[10, 20, 30].map((num, index) => {
    return parseInt(num, index)
})