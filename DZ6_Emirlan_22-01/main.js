const button = document.querySelector('#button')
const input = document.querySelector('#input')
const todoBlock = document.querySelector('#todo_list')

let todoArr = []

const revers = () => {
    if (input.value.trim() === ''){
        return false
    }else {
        todoBlock.innerHTML = ''
        todoArr.push(`${input.value}-${input.value.split('').reverse().join()}`)
        todoArr.forEach(word => {
            const p = document.createElement('p')
            p.innerText = word
            todoBlock.prepend(p)
        })
        input.value = ''
    }
}

button.onclick = ()=> revers()

document.addEventListener('keydown', e =>{
    if (e.keyCode=== 13) revers()
})