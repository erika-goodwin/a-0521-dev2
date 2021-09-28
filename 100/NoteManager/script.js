/**
 *
 * Select and Manipulate on individual elements
 * ---- getElementById
 *
 */

// const list = document.getElementById("list");
// // list.textContent = "HELLO";

// console.log(list.textContent); //Only text
// console.log(list.innerHTML); //All include <tag>

// list.textContent = "<h1>Hello!!</h1>"; // ==> <h1>Hello!!</h1>
// // list.innerHTML = "<h1>Hello!!</h1>"; // ==> Hello!!!

/**
 *
 * * Select and Manipulate on individual elements
 * ---- querySelector
 *
 */

// const el = document.querySelector("ul li:nth-child(2)");
// console.log(el);

// console.log(el.querySelector("p .fa-times"));

/**
 *
 * * Select and Manipulate on multiple elements
 * ----- looping over getElementsByClassName
 *
 */

// const icons = document.getElementsByClassName("fa");
// console.log(icons);
// console.log(icons[1]);

// for (let i = 0; i < icons.length; i++) {
//   console.log(icons[i]);
// }

// // icons.push('Hello') //this will not work
// const iconsArr = Array.from(icons);
// console.log(iconsArr);
// console.log(Array.isArray(iconsArr));

// iconsArr.push("Hello");
// console.log(iconsArr);

/**
 *
 * Select and Manipulate on multiple elements
 * ---- querySelectorAll
 *
 */

// const lis = document.querySelectorAll("li, h2, #hide-list");
// console.log(lis);

// // lis.push('Hello') //this will not work since there is no array
// Array.from(lis).forEach((li) => {
//   li.textContent = "Hello world!";
//   //   li.innerHTML =
//   //     '<img width="100" src="https://static.boredpanda.com/blog/wp-content/uploads/2021/05/60af991566fbb_sv61aem6ozy61__700.jpg" />';
// });

/**
 *
 * DOM Styles and Classes v1
 *
 *
 *
 */

// const h2 = document.querySelector("header h2");
// console.log(h2);

// h2.style.color = "blue";
// h2.style.backgroundColor = "green";

// const lis = document.querySelectorAll("ul li");

// for (var i = 0; i < lis.length; i++) {
//   lis[i].style.backgroundColor = "blue";
// }

// lis[0].style.cssText = "background-color: yellow; font-size: 25px";

/**
 *
 * DOM Styles and Classes v2
 *
 *
 *
 */

const h2 = document.querySelector("header h2");

// h2.className = "changeBg"; // => Change bg to Yellow
// // h2.className = "changeFt"; //will concat without space
// h2.className += " changeFt"; //Need 'space' before the changeFt to make two different classes
// console.log(h2); // >h2#heading.changeBg.changeFt
// console.log(typeof h2.className); //String

// h2.classList.add("changeFt");
// h2.classList.add("changeBg");
// h2.classList.remove("changeFt");

/**
 *
 * Get and Set attributes
 *
 *
 *
 */

// const div = document.querySelector("div.wrapper");

// console.log(div.getAttribute("class")); //wrapper
// console.log(div.getAttribute("id")); //null

// div.setAttribute("style", "background-color: coral");
// div.removeAttribute("style");

// console.log(div.hasAttribute("style")); //false

// const btn = document.getElementById("add-btn");
// const input = document.getElementById("add-input");

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("btn:addevent", event);

//   input.setAttribute("value", input.value);
// });

/**
 *
 * DOM Navigation
 *
 *
 *
 */

const listItem = document.getElementById("list");
// const listItem = document.querySelector('#list-item') //It is same

console.dir(listItem.parentNode); //>div.note-list
console.dir(listItem.parentNode.parentNode); //>div.wrapper
console.log(listItem.parentNode.parentNode.parentNode.parentNode.parentNode); //>#document

console.dir(listItem.parentElement); //>div.note-list
// console.log((listItem.parentElement.style.background = "orange"));

console.log(listItem.childNodes); //>NodeList(7) [text, li, text, li, text, li, text]
console.log(listItem.children); //>HTMLCollection(3) [li, li, li]
console.log(listItem.firstChild); //>#text
console.dir(listItem.firstElementChild); //>li
console.log(listItem.lastChild); //>#text

console.log(listItem.lastElementChild); //>li
console.log(listItem.previousSibling); //>#text
console.log(listItem.previousElementSibling); //null
console.log(listItem.nextElementSibling); //null
