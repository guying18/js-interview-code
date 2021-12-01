// 传统方式
function query (name) {
  // search: '?a=20&b=30&c=50'
  const search = location.search.substring(1) // 去掉'?'
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const res = search.match(reg)
  if (res === null) {
    return null
  }
  return res[2]
}
console.log(query('a'))

// URLSearchParams
function query1 (name) {
  const search = location.search
  const p = new URLSearchParams(search)
  const res = p.get(name)
  return res
}
console.log(query1('a'))
