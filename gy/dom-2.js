const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

// 新建节点
const newP = document.createElement('p')
newP.innerHTML = 'this is newP'
// 插入节点
div1.appendChild(newP)

// 移动节点：针对现有节点直接 appendChild 会移动节点
const p1 = document.getElementById('p1')
div2.appendChild(p1)

// 获取父元素
console.log(p1.parentNode)

// 获取子元素列表
const div1ChildNodes = div1.childNodes
console.log(div1ChildNodes)
// children 属性只包括元素子节点，不包括其他类型的子节点（比如文本子节点）。
console.log(div1.children)

const div1ChildNodesP = Array.prototype.slice.call(div1ChildNodes).filter(item => item.nodeType === 1)
console.log(div1ChildNodesP)

// 删除节点
div1.removeChild(div1ChildNodesP[0])