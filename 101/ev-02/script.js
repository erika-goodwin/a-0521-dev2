const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    alert('Clicked!')
})

btn.addEventListener('mouseover', function(){
    // alert('Mouse over!')
})

btn.addEventListener('mouseout', function(){
    // alert('Mouse out!')
})

btn.addEventListener('mousedown', function(){
    alert('Mouse down!')
})

window.addEventListener('scroll', function(){
    console.log('scrolling........')
})