// 手写 Promise 加载一张图片
function loadImg (src) {
  return new Promise(
    (resolve, reject) => {
      const img = document.createElement('img')
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        const err = new Error(`图片加载失败 ${src}`)
        reject(err)
      }
      img.src = src
    }
  )
}

const url = 'https://img2.sycdn.imooc.com/61612dbe0001931716161080-140-140.jpg'
loadImg(url).then(img => {
  document.body.appendChild(img)
  console.log(img.width)
  return img // 普通对象
}).then(img => {
  console.log(img.height)
}).catch(e => {
  console.log(e)
})

const url1 = 'https://cn.bing.com/th?id=OHR.LeftForkNorth_ZH-CN8798894034_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'
const url2 = 'https://cn.bing.com/th?id=OHR.HyacinthMacaws_ZH-CN1191345036_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'
loadImg(url1).then(img => {
  document.body.appendChild(img)
  return loadImg(url2) // promise 实例
}).then(img => {
  document.body.appendChild(img)

}).catch(e => {
  console.log(e)
})