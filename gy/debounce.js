// const input1 = document.getElementById('input1')

// let timer = null
// input1.addEventListener('keyup', function (){
//     if(timer){
//         clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//         // 模拟触发 change 事件
//         console.log(input1.value)
//         // 清空定时器
//         timer = null
//     }, 500);
// })

// 手写 debounce 函数
function debounce(fn, delay = 500){
    // timer 是闭包中的
    let timer = null

    return function (){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay);
    }
}

// 调用 debounce 函数
const input1 = document.getElementById('input1')
input1.addEventListener('keyup', debounce(function (e){
    console.log(this.value)
    console.log(e.target)
}, 600))