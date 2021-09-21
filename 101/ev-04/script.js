const colors = [
    'red', 
    'orange', 
    'yellow', 
    'green', 
    'blue', 
    'indigo', 
    'violet'
]

const h1 = document.querySelector('h1')
const changeColor = function(evt){ //e , event, evt
    console.log(evt)
}

const container = document.querySelector('#boxes')

for(let color of colors){
    const box = document.createElement('div')
    box.style.backgroundColor = color
    box.classList.add('box')
    container.appendChild(box)
    box.addEventListener('click', changeColor)
}

document.body.addEventListener('keypress', function(e){
    console.log(e)
})