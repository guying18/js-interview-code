const arr = [10, 20, 30, 40];
function sum (arr) {
  let res = 0;
  arr.forEach(item => {
    res += item;
  });
  return res;
}
console.log(sum(arr));

// reduce 接收两个参数：回调函数 reducer 和 初始值 initialValue
// reducer 函数接收4个参数: 分别是 累计器 sum，当前值 curVal，当前索引 index，源数组 arr
// initialValue 作为第一次调用 reducer 函数时的第一个参数 sum 的初始值。
const result = arr.reduce((sum, curVal, index, arr) => {
  console.log('reduce function ...');
  console.log('sum', sum);
  console.log('curVal', curVal);
  console.log('index', index);
  console.log('arr', arr);

  return sum + curVal; // 返回值，会作为下一次执行时的第一个参数 sum 的值
}, 0)
console.log('result', result);

// 计数
const arr0 = [10, 20, 30, 40, 30, 20, 10]
const n = 30
const count = arr0.reduce((count, val) => {
  return val === n ? count + 1 : count;
}, 0)
console.log(count)

// 输出字符串
const arr1 = [
  { name: '张三', age: 20 },
  { name: '李四', age: 21 },
  { name: '小明', age: 22 }
];
const str = arr1.map(item => {
  return `${item.name} - ${item.age}`
}).join('\n')
console.log(str)

const str0 = arr1.reduce((str, item) => {
  return `${str}${item.name} - ${item.age}\n`
}, '')
console.log(str0)