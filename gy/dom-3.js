const list = document.getElementById('list')

const docFrag = document.createDocumentFragment()

for (let i = 0; i < 20; i++) {
  const li = document.createElement('li')
  li.innerHTML = 'list item ' + i
  docFrag.appendChild(li)
}

list.appendChild(docFrag)