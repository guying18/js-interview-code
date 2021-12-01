// WeakMap 弱引用，防止内存泄露
const a = {}
const WMap = new WeakMap()
function fn () {
  const obj = { name: 'guying' }
  // a.name = obj // 强引用
  WMap.set(obj, 'obj key') // 只能用对象作为 key
}
fn()
// 没有 forEach 和 size, 只能使用 has, add, delete
// gc 垃圾清理不一定是及时的,可以通过调试工具 performance 选项卡中的 垃圾桶 清理 JS 垃圾

// WeakMap 场景
const userInfo = { name: 'guying' }
const cityInfo = { city: 'shanghai' }
WMap.set(userInfo, cityInfo) // 建立一种关联关系，而且两者保持独立，而且不影响彼此的销毁逻辑
WMap.get(userInfo)

// WeakSet 弱引用，防止内存泄露，只能用对象作为 value
// 没有 forEach 和 size, 只能使用 has, add, delete
const set = new Set()
const WSet = new WeakSet()
function fn0 () {
  const obj = { name: 'guying' }
  // set.add(obj) // 强引用
  WSet.add(obj) // 只能用对象作为 value
}
fn0()