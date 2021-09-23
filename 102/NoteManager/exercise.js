/**
 * 
 * 
 * ADDING A NOTE
 * 
 */

let ul = document.querySelector('#list')

document.getElementById('add-btn').addEventListener('click', function(e){

    e.preventDefault()

    let addInput = document.getElementById('add-input')

    if(addInput.value !== ''){
        console.log('test')
        //create elements
        var li = document.createElement('li'),
            firstP = document.createElement('p'),
            secondP = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input')

        //create attributes
        firstIcon.className = "fa fa-pencil-square-o"
        secondIcon.className = "fa fa-times"
        input.className = "edit-note"
        input.setAttribute('type','text')

        //add text to first paragraph
        firstP.textContent = addInput.value

        //appending stage
        secondP.appendChild(firstIcon)
        secondP.appendChild(secondIcon)
        li.appendChild(firstP)
        li.appendChild(secondP)
        li.appendChild(input)
        ul.appendChild(li)
        addInput.value = '';
    }
})

/**
 * 
 * 
 * EDIT AND DELETE NOTE
 * 
 */

ul.addEventListener('click', function(e){

    // console.log(this);
    // console.log(e.target.classList[0]);
    // console.log(e.target.classList[1]);

    if(e.target.classList[1] === 'fa-pencil-square-o'){
        // console.log('EDIT');

        let parentP = e.target.parentNode
        parentP.style.display = 'none'

        let note = parentP.previousElementSibling
        let input = parentP.nextElementSibling
        // console.log(note);

        input.style.display = 'block'
        input.value = note.textContent

        input.addEventListener('keypress', function(e){

            if(e.keyCode === 13){
                // console.log('ENTER');
                
                if(input.value !== ''){
                    note.textContent = input.value
                    parentP.style.display = 'block'
                    input.style.display = 'none'
                }else{
                    let li = input.parentNode
                    li.parentNode.removeChild(li)
                }

            }
        })

    }else if(e.target.classList[1] === 'fa-times'){
        let list = e.target.parentNode.parentNode
        list.parentNode.removeChild(list)
    }
})

/**
 * 
 * 
 * HIDE ITEMS
 * 
 */


let hideItem = document.getElementById('hide')

hideItem.addEventListener('click', function(){

    // console.log('checked');
    let label = document.querySelector('label')

    if(hideItem.checked){
        label.textContent = 'Unhide Notes'
        ul.style.display = 'none'
    }else{
        label.textContent = 'Hide Notes'
        ul.style.display = 'block'
    }
})


/**
 * 
 * 
 * SEARCH FILTER
 * 
 */

let searchInput = document.querySelector('#search-note input')

searchInput.addEventListener('keyup', function(e){

    let searchChar = e.target.value.toLowerCase()
    // console.log(searchChar);

    var notes = ul.getElementsByTagName('li')
    console.log(notes);

    // console.log(Array.from(notes))
    Array.from(notes).forEach(function(note){

        let parText = note.firstElementChild.textContent

        if(parText.toLowerCase().indexOf(searchChar) !== -1 ){ 
            note.style.display = 'block'
        }else{
            note.style.display = 'none'
        }
    })

})

