const arr = [1, 10, 20, 30, 40, 50, 1, 20]
const set = new Set([10, 20, 30, 40])

set.add(90)
set.delete(10)
set.has(20)
console.log(set.size)
set.forEach(val => console.log(val))

// Set 元素不能重复（应用：数组去重）
const set1 = new Set(arr)
arr1 = [...set1]
console.log(arr1)

// Set 是无序的（快）， Array 是有序的（慢）
// Array 有多慢
const arr0 = []
for (let i = 0; i < 100 * 10000; i++) {
  arr0.push(i)
}
console.time('Array unshift')
arr0.unshift('a')
console.timeEnd('Array unshift')
console.time('Array push')
arr0.push('b')
console.timeEnd('Array push')
console.time('Array find')
arr0.includes(500000)
console.timeEnd('Array find')

// Set 有多快
const set0 = new Set()
for (let i = 0; i < 100 * 10000; i++) {
  set0.add(i)
}
console.time('Set add')
set0.add('a')
console.timeEnd('Set add')
console.time('Set has')
set0.has(500000)
console.timeEnd('Set has')