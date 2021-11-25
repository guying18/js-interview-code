function muti (num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000);
  })
}

const nums = [1, 2, 3]

// forEach 是同步遍历，因此这个遍历立刻执行完，所有输出均在 1s 后打印
nums.forEach(async (i) => {
  const res = await muti(i)
  console.log(res)
})


// for-of 可实现异步遍历，结果每隔 1s 打印一个
!(async function () {
  for (let i of nums) {
    const res = await muti(i)
    console.log(res)
  }
})()
