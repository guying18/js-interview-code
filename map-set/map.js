const obj = {
  key1: 'hello',
  key2: 100,
  key3: { x: 100 }
}

const map = new Map([
  ['key1', 'hello'],
  ['key2', 100],
  ['key3', { x: 100 }]
])
map.set('name', 'guying');
map.set('key1', 'hello world');
map.delete('key2');
map.has('key3');
map.forEach((value, key) => console.log(key, value));
console.log(map.size);

// Map 可以以任意类型为 key
const o = { name: 'xxx' };
map.set(o, 'object key');
function fn () { };
map.set(fn, 'fn key');

// obj1, obj2 要关联
// obj1.xxx = obj2
// map.set(obj1, obj2) // 关联，但是没有引用关系，保持独立
// map.get(obj1) // obj2

// object 无序
const obj0 = { 2: 200, 3: 300, 1: 100 };
console.log(Object.keys(obj0)) // 输出 ['1', '2', '3']

// Map 是有序的，但是还很快

// object 有多快
const obj1 = {}
for (let i = 0; i < 1000 * 10000; i++) {
  obj1[i + ''] = i;
}
console.time('obj find');
obj1['5000000'];
console.timeEnd('obj find');
console.time('obj delete');
delete obj1['5000000'];
console.timeEnd('obj delete');

// Map 有多快
const m = new Map();
for (let i = 0; i < 1000 * 10000; i++) {
  m.set(i + '', i);
}
console.time('map find');
m.has(5000000);
console.timeEnd('map find');
console.time('map delete');
m.delete(5000000);
console.timeEnd('map delete');