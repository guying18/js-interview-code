function unique1 (arr) {
  const res = [];
  arr.forEach(item => {
    if (res.indexOf(item) < 0) {
      res.push(item)
    }
  });
  return res;
}

const arr = [1, 2, 3, 4, 2, 3, 5]
console.log(unique1(arr))

function unique2 (arr) {
  const res = new Set(arr)
  return [...res]
}

console.log(unique2(arr))