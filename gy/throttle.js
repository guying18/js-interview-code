const div1 = document.getElementById('div1')

// let timer = null
// div1.addEventListener('drag', function (e){
//     if(timer){
//         return
//     }
//     timer = setTimeout(() => {
//         console.log(e.offsetX, e.offsetY)
//         timer = null
//     }, 100);
// })

// 手写节流 throttle
function throttle(fn, delay = 100){
    let timer = null

    return function(){
        if(timer){
            return
        }
        timer = setTimeout(() => {
            // 正常使用 addEventListener 时，event 事件是传给回调函数的，
            // 但是使用封装的 throttle 函数时，则传给了 throttle 返回的这个函数，
            // 为了使真正的回调函数 fn 能正常接收到 event 参数，此处需要 fn.apply(this, arguments)
            // 其中 this 指向调用时的 DOM 节点，arguments 指回调函数接收的参数，即 event 对象
            fn.apply(this, arguments)
            // console.log(this, arguments)
            timer = null
        }, delay);
    }
}

// 调用 throttle 函数
div1.addEventListener('drag', throttle(function (e){
    console.log(e.offsetX, e.offsetY)
}, 200))