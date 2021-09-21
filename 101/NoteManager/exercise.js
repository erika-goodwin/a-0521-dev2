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
  //   console.log(newItemText);

  newItem.innerText = newItemText;
  itemUL.appendChild(newItem);
  addItemInput.value = "";
});
