const button = document.querySelector('#changecolor')
const container = document.querySelector('#container')

// button.onclick = function(){
//     container.style.backgroundColor = 'red'
// }

// container.onclick = function(){
//     // container.classList.toggle('hide')
//     container.style.display = 'none'
// }

button.addEventListener('click', function(e){
    container.style.backgroundColor = 'red'
    e.stopPropagation()
})

container.addEventListener('click', function(){
    container.style.display = 'none'
    // container.classList.toggle('hide')
})