/* JavaScript DOM Exercises 01 */

const paragraph = document.querySelector("p");

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long 
  in the paragraph text (with a yellow background 
  for example)
*/

//[[OPTION 1]]
// let editedParagraph = paragraph.innerHTML
//   .split(" ")
//   .map((word) => {
//     if (word.length > 8) {
//       // console.log(word);
//       let wrapper = document.createElement("span"); //<span></span>
//       wrapper.style.backgroundColor = "yellow";
//       wrapper.textContent = word; //<span> ...... </span>
//       console.log(wrapper); //outerHTML: "<span style=\"background-color: yellow;\">imagineer,</span>"
//       return wrapper.outerHTML;
//     }
//     return word;
//   })
//   .join(" ");

// paragraph.innerHTML = editedParagraph;

//[[OPTION 2]]
paragraph.innerHTML = paragraph.innerHTML
  .split(" ")
  .map((word) => {
    if (word.length > 8) {
      return "<span style='background-color: yellow'>" + word + "</span>";
    }
    return word;
  })
  .join(" ");

/*
    Exercise 02
    -----------
    Add a link back to the source of the text after 
    the paragraph tag.
    (http://officeipsum.com/)
*/

const link = document.createElement("a");
link.href = "http://officeipsum.com/"; //<a href='..'></a>
link.innerText = "http://officeipsum.com/";
document.body.appendChild(link);

/*
    Exercise 03
    -----------
    Split each new sentence on to a separate line 
    in the paragraph text.
    A sentence can be assumed to be a string of 
    text terminated with a period (.)
*/

paragraph.innerHTML = paragraph.innerHTML.split(".").join(".<br/><br/>");

/* 
    Exercise 04
    -----------
    Count the number of words in the paragraph tag 
    and display the count afer the heading.
    You can assume that all words are separated by 
    one singular whitespace.
*/

const wordCount = paragraph.innerHTML.split(" ").length;
const wordCountDiv = document.createElement("div");
wordCountDiv.innerText = wordCount + " words";
document.body.insertBefore(wordCountDiv, paragraph);

/*
    Exercise 05
    -----------
    Replace all question marks (?) with thinking 
    faces (🤔) and exclamation marks (!) with 
    astonished faces (😲) 
*/

paragraph.innerHTML = paragraph.innerHTML
  .replaceAll("?", " 🤔 ")
  .replaceAll("!", "😲");
