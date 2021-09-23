/**
 * 
 * Select and Manipulate on individual elements
 * ---- getElementById
 * 
 */

// const list = document.getElementById('list')
// list.textContent = "HELLO"

// console.log(list.textContent)
// console.log(list.innerHTML)

// list.textContent = '<h1>Hello!!</h1>'
// list.innerHTML = '<h1>Hello!!</h1>'

/**
 * 
 * * Select and Manipulate on individual elements
 * ---- querySelector
 * 
 */



// const el = document.querySelector('ul li:nth-child(2)')
// console.log(el)


// console.log(el.querySelector('p .fa-times'))

/**
 * 
 * * Select and Manipulate on multiple elements
 * ----- looping over getElementsByClassName
 * 
 */

// const icons = document.getElementsByClassName('fa')
// console.log(icons[1])

// for (let i = 0; i < icons.length; i++) {
//     console.log(icons[i])
// }

// // icons.push('Hello') //this will not work
// const iconsArr = Array.from(icons)
// console.log(iconsArr)
// console.log(Array.isArray(iconsArr))

// iconsArr.push('Hello')
// console.log(iconsArr)

/**
 * 
 * Select and Manipulate on multiple elements
 * ---- querySelectorAll
 * 
 */

// const lis = document.querySelectorAll('li, h2, #hide-list')
// console.log(lis)

// // lis.push('Hello')
// Array.from(lis).forEach((li) => {
//     // li.textContent = 'Hello world!'
//     li.innerHTML = '<img width="100" src="https://static.boredpanda.com/blog/wp-content/uploads/2021/05/60af991566fbb_sv61aem6ozy61__700.jpg" />'
// })

/**
 * 
 * DOM Styles and Classes v1
 * 
 * 
 * 
 */

// const h2 = document.querySelector('header h2');
// console.log(h2)

// h2.style.color = 'blue'
// h2.style.backgroundColor = 'green'

// const lis = document.querySelectorAll('ul li')

// for(var i = 0; i < lis.length; i++){
//     lis[i].style.backgroundColor = 'blue'
// }

// lis[0].style.cssText = 'background-color: yellow; font-size: 25px'


/**
 * 
 * DOM Styles and Classes v2
 * 
 * 
 * 
 */

// const h2 = document.querySelector('header h2');

// // h2.className = 'changeBg'
// // h2.className = 'changeFt' //will concat without space
// // h2.className += ' changeFt'
// // console.log(typeof h2.className)


// h2.classList.add('changeFt')
// h2.classList.add('changeBg')
// h2.classList.remove('changeFt')


/**
 * 
 * Get and Set attributes
 * 
 * 
 * 
 */

// const div = document.querySelector('div.wrapper')

// console.log(div.getAttribute('class'))
// console.log(div.getAttribute('id'))
// div.setAttribute('style','background-color: coral')
// div.removeAttribute('style')
// console.log(div.hasAttribute('style'))

// const btn = document.getElementById('add-btn')
// const input = document.getElementById('add-input')

// btn.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log('btn:addevent', event)

//     input.setAttribute('value', input.value)
// })


/**
 * 
 * DOM Navigation
 * 
 * 
 * 
 */


const listItem = document.getElementById('list')
// const listItem = document.querySelector('#list-item')
/*
console.log(listItem.parentNode)
// console.log(listItem.parentNode.parentNode)
// console.log(listItem.parentNode.parentNode.parentNode.parentNode.parentNode)
console.log(listItem.parentElement)
// console.log(listItem.parentElement.style.background = 'orange');
console.log(listItem.childNodes)
console.log(listItem.children)
console.log(listItem.firstChild)
console.log(listItem.firstElementChild)
console.log(listItem.lastChild)
console.log(listItem.lastElementChild)
console.log(listItem.previousSibling);
console.log(listItem.previousElementSibling);
console.log(listItem.nextElementSibling);
*/


/**
 * 
 * Creating Elements
 * 
 * 
 * 
 */

var newEl = document.createElement('button');

// console.log(newEl);

var text = document.createTextNode('Click')

// console.log(text);

newEl.appendChild(text)

// console.log(newEl);

newEl.setAttribute('style', 
    'display: block; background-color: coral'
    )

var form = document.getElementById('add')

// form.appendChild(newEl)

// console.dir(form)

form.insertBefore(newEl, form.children[0])

