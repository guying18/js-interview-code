// 3s 内将 div1 的 width 从 100 变到 640，即变化 540 帧
// 60帧/s，3s 180帧；需每帧变化 540/180 = 3px
const $div1 = $('#div1')
let curWidth = 100;
const maxWidth = 640;

// setTimeout
function animate () {
  curWidth = curWidth + 3;
  $div1.css('width', curWidth);
  if (curWidth < maxWidth) {
    setTimeout(() => {
      animate()
    }, 16.7); // 需自己控制时间
  }
}
// animate()

// RAF
function animate1 () {
  curWidth = curWidth + 3;
  $div1.css('width', curWidth);
  if (curWidth < maxWidth) {
    window.requestAnimationFrame(animate1); // 时间不用自己控制
  }
}
window.requestAnimationFrame(animate1);