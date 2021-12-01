function flat (arr) {
  const isDeep = arr.some(item => item instanceof Array)
  if (!isDeep) {
    return arr
  }
  const res = Array.prototype.concat.apply([], arr);
  return flat(res)
}

const arr = [1, 2, [3], [4, [5]]]
console.log(flat(arr))