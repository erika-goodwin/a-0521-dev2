/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long 
  in the paragraph text (with a yellow background 
  for example)
*/

window.onload = function () {
  const check = (word) => {
    if (word.length >= 8) {
      return '<span class="hightlight">' + word + "</span>";
    } else {
      return word;
    }
  };

  const highlight = document.querySelector("#textP");
  highlight.innerHTML = highlight.innerText
    .trim()
    .split(" ")
    .map(check)
    .join(" ");
};

/*
    Exercise 02
    -----------
    Add a link back to the source of the text after 
    the paragraph tag.
    (http://officeipsum.com/)
  */

const link = document.createElement("a");
link.href = "http://officeipsum.com/";
link.target = "_blank";
link.innerHTML = "Click here";

const par = document.createElement("p");
par.innerHTML = "LINK";
par.appendChild(link);

document.getElementById("#textP").appendChild(par);

/*
    Exercise 03
    -----------
    Split each new sentence on to a separate line 
    in the paragraph text.
    A sentence can be assumed to be a string of 
    text terminated with a period (.)
  */

const textP = document.querySelector("#text");

/* 
    Exercise 04
    -----------
    Count the number of words in the paragraph tag 
    and display the count afer the heading.
    You can assume that all words are separated by 
    one singular whitespace.
  */

/*
    Exercise 05
    -----------
    Replace all question marks (?) with thinking 
    faces (🤔) and exclamation marks (!) with 
    astonished faces (😲) 
  */
