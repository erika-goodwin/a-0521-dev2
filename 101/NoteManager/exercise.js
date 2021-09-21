//solution goes here....

const formBtn = document.querySelector("#add-btn");
const addItemInput = document.querySelector("#add-input");
const itemUL = document.querySelector("#list");

formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!addItemInput.value) return;
  //   alert("Clicked!");

  const newItemText = addItemInput.value;
  const newItem = document.createElement("li");
  newItem.innerText = newItemText;
  itemUL.appendChild(newItem);

  //   const fa = document.querySelector("i .fa ");
  var newP = document.createElement("p");
  //   console.log(newP);
  var newi1 = document.createElement("i");
  var newi2 = document.createElement("i");

  newi1.className = "fa fa-pencil-square-o";
  newi2.className = "fa fa-times";

  newi1.appendChild(newi2);
  newP.appendChild(newi1);
  newItem.appendChild(newP);

  newP.style.textAlign = "right";
  addItemInput.value = "";
});
